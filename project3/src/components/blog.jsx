import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, IconButton, TextField } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';


const theme = createTheme();

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  marginBottom: theme.spacing(2),
}));

const StyledMedia = styled(CardMedia)(({ theme }) => ({
  width: 160,
}));

const StyledContent = styled('div')(({ theme }) => ({
  flex: '1 0 auto',
}));

const Blog = () => {
  const [posts, setPosts] = useState([]); 

  const [newPostData, setNewPostData] = useState({
    title: '',
    description: '',
    image: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPostData({
      ...newPostData,
      [name]: value,
    });
  };

  const addPost = () => {
    const newPost = {
      id: posts.length + 1,
      title: newPostData.title,
      description: newPostData.description,
      image: newPostData.image || 'https://via.placeholder.com/150',
    };
    setPosts([...posts, newPost]);
    setNewPostData({
      title: '',
      description: '',
      image: '',
    });
  };

  const deletePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Blog
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={newPostData.title}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={newPostData.description}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Image URL"
              name="image"
              value={newPostData.image}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" color="primary" onClick={addPost}>Add Post</Button>
          </Grid>
          {posts.map((post) => (
            <Grid item xs={12} key={post.id}>
              <StyledCard>
                <StyledMedia image={post.image} title={post.title} />
                <StyledContent>
                  <CardContent>
                    <Typography component="h5" variant="h5">
                      {post.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {post.description}
                    </Typography>
                    <IconButton aria-label="delete" onClick={() => deletePost(post.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </CardContent>
                </StyledContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Blog;
