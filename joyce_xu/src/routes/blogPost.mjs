import express from 'express';
import { db } from '../server.mjs'; 

const router = express.Router();

router.post('/add-post', async (req, res) => {
    const { title, content } = req.body;
    console.log(req.body)
    try {
      // Use db for the query
      const result = await db.query(
        'INSERT INTO blog_posts (title, post_date, content) VALUES ($1, NOW(), $2) RETURNING *',
        [title, content]
      );
      res.status(201).json(result.rows[0]);

      console.log (result)
      
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

          console.log(posts)

          res.json(posts); // Send the post data to the frontend
      } else {
          res.status(404).json({ error: "No blog posts found" });
      }
  } catch (error) {
      console.error("Failed to fetch or process data for blog posts", error);
      res.status(500).json({ error: "Internal server error" });
  }
});


export default router;
