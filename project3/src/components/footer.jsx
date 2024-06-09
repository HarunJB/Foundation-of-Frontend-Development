import React from 'react';
import { Typography, Container, Grid, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <footer style={{ marginTop: 'auto', backgroundColor: '#f5f5f5', padding: '20px 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="body1">My Portfolio © 2024</Typography>
          </Grid>
          <Grid item>
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookIcon style={{ marginRight: '10px' }} />
            </Link>
            <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <TwitterIcon style={{ marginRight: '10px' }} />
            </Link>
            <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon style={{ marginRight: '10px' }} />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;