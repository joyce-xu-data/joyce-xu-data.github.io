import React, { useState, useEffect } from 'react';
import {
  AppBar, Typography, Card, CardContent, Container, Grid,
  CssBaseline, Link, Box, Paper
} from '@mui/material';
import thejoy from '../images/thejoy.jpg';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [fetchStatus, setFetchStatus] = useState('');

// Utility function to strip HTML
const stripHtml = (html) => {
  // Use a regular expression to remove HTML tags
  return html.replace(/<[^>]*>?/gm, '');
};


  useEffect(() => {
    fetch('/api/blogposts')
      .then((res) => {
        if (!res.ok) {
          console.error('Fetch error:', res);
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const sanitizedPosts = data.map(post => ({
          ...post,
          summary: post.summary ? stripHtml(post.summary) : stripHtml(post.content).substring(0, 500) // Cleaning the content if no summary
        }));
        setPosts(sanitizedPosts);
        setFetchStatus('Success! Data has been fetched.');
      })
      .catch((error) => {
        console.error('Failed to fetch posts:', error);
        setFetchStatus('Error fetching data.');
      });
  }, []);

  const sidebar = {
    about: 'I’m Joyce, a software developer in Singapore. Follow me on my career transition journey.',
  
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0}>
        {/* AppBar content */}
      </AppBar>
      
      <Container maxWidth="lg">
        <Grid container spacing={5} sx={{ mt: 3 }}>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>
              What’s new?
            </Typography>
            {posts.length > 0 ? (
              posts.map((post) => (
                <Card key={post.id} sx={{ mb: 4 }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {post.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {new Date(post.date).toLocaleDateString('en-SG', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
              {post.summary + '...'} // Now 'summary' contains the content stripped of HTML
            </Typography>
                
                    <Link href={`/blog/${post.id}`} variant="subtitle1">
                      Read more...
                    </Link>
                  </CardContent>
                </Card>
       
              ))
            ) : (
              <Typography variant="subtitle1">{fetchStatus}</Typography>
            )}
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{ p: 2, bgcolor: 'white' }}>
              <Box display="flex" justifyContent="center" my={3}>
                <img
                  src={thejoy}
                  alt="Joyce"
                  style={{ width: '100%', maxWidth: '400px', borderRadius: '0' }}
                />
              </Box>
              <Typography variant="subtitle1" paragraph align="center" sx={{ mb: 2 }}>
                {sidebar.about}
              </Typography>
            
              {/* ... other sidebar content */}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Blog;
