import express from 'express';
import { db } from '../server.mjs'; 

const router = express.Router();

router.post('/add-post', async (req, res) => {
    const { title, content } = req.body;
  
    try {
      // Use db for the query
      const result = await db.query(
        'INSERT INTO blog_posts (title, post_date, content) VALUES ($1, NOW(), $2) RETURNING *',
        [title, content]
      );
      res.status(201).json(result.rows[0]);
      
    } catch (error) {
      console.error('Error inserting data', error);
      res.status(500).send('Server error');
    }
});

router.get('/blogposts', async (req, res) => {
  try {
      const result = await db.query(`
          SELECT id, title, post_date, content
          FROM blog_posts
      `); 

      if (result.rows.length > 0) {
          // Prepare the data for card display
          const posts = result.rows.map(row => ({
              id: row.id,
              date: new Date(row.post_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }), // Convert date to a more readable format
              title: row.title,
              content: row.content, // You might want to trim this for the card display
          }));

          res.json(posts); // Send the post data to the frontend
      } else {
          res.status(404).json({ error: "No blog posts found" });
      }
  } catch (error) {
      console.error("Failed to fetch or process data for blog posts", error);
      res.status(500).json({ error: "Internal server error" });
  }
});

router.get('/blogposts/:id', async (req, res) => {
  const { id } = req.params; // Extract the blog post ID from the URL path

  try {
      // Query the database for a single post by its ID
      const result = await db.query(
          'SELECT id, title, post_date, content FROM blog_posts WHERE id = $1',
          [id]
      );
      

      if (result.rows.length > 0) {
          const post = result.rows[0]; // Assume IDs are unique, so we only get one row
          // Convert post_date to a more readable format if necessary
          post.date = new Date(post.post_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
          delete post.post_date; // Optionally remove the original post_date if it's been reformatted

          res.json(post); // Send the post data to the frontend
      } else {
          res.status(404).json({ error: "Blog post not found" }); // Send a 404 response if no post is found
      }
  } catch (error) {
      console.error("Failed to fetch data for the blog post", error);
      res.status(500).json({ error: "Internal server error" }); // Handle any other errors
  }
});

export default router;
