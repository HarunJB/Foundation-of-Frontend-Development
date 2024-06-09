import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)({
  display: 'flex',
  marginBottom: 2,
});

const StyledMedia = styled('img')({
  width: '100%',
  height: 160,
  objectFit: 'cover',
});

const StyledContent = styled('div')({
  flex: '1 0 auto',
});

const Home = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description for Project 1.',
      image: 'images/image1.jpg',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description for Project 2.',
      image: 'images/project2.jpg',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Description for Project 3.',
      image: 'images/project3.jpg',
    },
  ];

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        <br />
        Welcome to My Portfolio
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <StyledCard>
              <StyledMedia
                src={project.image}
                alt={project.title}
              />
              <StyledContent>
                <CardContent>
                  <Typography component="h5" variant="h5">
                    {project.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {project.description}
                  </Typography>
                  <Button variant="contained" color="primary">
                    View Project
                  </Button>
                </CardContent>
              </StyledContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
