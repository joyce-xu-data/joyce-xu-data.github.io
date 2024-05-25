import React from 'react';
import { Container, Grid, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import cfcompanion from '../images/cfcompanion.jpeg'; 


const projects = [
  {
    id: 1,
    title: 'Crossfit Companion',
    description: 'Explore CrossFit Companion: The ultimate web app designed to assist beginners with their Crossfit journey.',
    imageUrl: cfcompanion,
    link: 'https://github.com/joyce-xu-data/crossfit'
  },

];

const ProjectsPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {projects.map((project) => (
          <Grid item key={project.id} xs={12} sm={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 500 , margin: 'auto'}}>
              <CardActionArea href={project.link} target="_blank">
                <CardMedia
                  component="img"
                  height="350"
                  image={project.imageUrl}
                  alt={project.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href={project.link} target="_blank">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectsPage;
