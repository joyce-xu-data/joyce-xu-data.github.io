import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Alert } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function AddBlogPost() {
  const [post, setPost] = useState({
    title: '',
    content: ''
  });
  const [images, setImages] = useState([]);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost(prevPost => ({
      ...prevPost,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImages(selectedFiles);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch('/api/add-post', {
      method: 'POST',
      headers: {
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
      setPost({ title: '', content: '' }); // Clear the fields
    })
    .catch((error) => {
      console.error('Failed to submit post:', error);
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
          rows={20}
        />
         <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          multiple
          style={{ margin: "20px 0" }}
        />
        {images.map((image, index) => (
          <div key={index} style={{ margin: "10px 0" }}>
            <img src={URL.createObjectURL(image)} alt={`preview ${index}`} style={{ width: "100px", height: "auto" }} />
          </div>
        ))}
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Submit Post
        </Button>
      </form>
      <Typography variant="h6" style={{ marginTop: '20px' }}>Preview</Typography>
      <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px', marginTop: '10px' }}>
        <ReactMarkdown children={post.content} remarkPlugins={[remarkGfm]} />
      </div>
    </Container>
  );
}
