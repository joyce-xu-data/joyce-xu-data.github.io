import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardContent, CircularProgress, Box } from '@mui/material';
import DOMPurify from 'dompurify';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/blogposts/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        const sanitizedContent = DOMPurify.sanitize(data.content);
        console.log('Sanitized content:', sanitizedContent);
        setPost({
          ...data,
          content: sanitizedContent
        });
        console.log('Post state after setting:', post); 
        setIsLoading(false);
      })
      
      .catch(error => {
        console.error('Error fetching post:', error);
        setError(error.toString());
        setIsLoading(false);
      });
  }, [id]);

  // Proper place to log the updated state
useEffect(() => {
    console.log('Updated post state:', post);
  }, [post]);

  if (isLoading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography color="error">Error: {error}</Typography>
      </Container>
    );
  }

  if (!post) {
    return (
      <Container>
        <Typography color="error">No post found.</Typography>
      </Container>
    );
  }

  return (
    <Box mt={4}>
    <Container component="article" maxWidth="md">
      <Card>
        <CardContent>
          <Typography variant="h4" component="h4" gutterBottom>
            {post.title}
          </Typography>
          <Typography
            variant="body1"
            component="div"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </CardContent>
      </Card>
    </Container>
    </Box>
  );
};

export default BlogPost;
