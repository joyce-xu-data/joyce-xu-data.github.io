import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Alert } from '@mui/material';

export default function AddBlogPost() {
  const [post, setPost] = useState({
    title: '',
    content: ''
  });

  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost(prevPost => ({
      ...prevPost,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate current date and time for the post
   
    fetch('/api/add-post', {
      method: 'POST',
      headers: {
        // Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: post.title, content: post.content }), 
      
    })
 
    .then((res) => {
      if (!res.ok) {
        console.error('Fetch error:', res);
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      console.log('post submitted:', data);
      setSubmitStatus('Success! Your data has been submitted.');
      setPost({ title: '', content: '' }); // Clear the list to indicate successful submission
    })
    .catch((error) => {
      console.error('Failed to submit log:', error);
      setSubmitStatus('Error submitting your data.');
    });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Add New Blog Post
      </Typography>
      {submitStatus && <Alert severity={submitStatus.startsWith('Success') ? 'success' : 'error'}>{submitStatus}</Alert>}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          margin="normal"
          name="title"
          value={post.title}
          onChange={handleChange}
          required
        />
        <TextField
          label="Content"
          variant="outlined"
          fullWidth
          margin="normal"
          name="content"
          value={post.content}
          onChange={handleChange}
          required
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Submit Post
        </Button>
      </form>
    </Container>
  );
}