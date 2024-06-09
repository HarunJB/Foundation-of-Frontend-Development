import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Grid, Alert } from '@mui/material';
import validator from 'validator'; // Import validator library for email validation

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = name ? "" : "This field is required.";
    tempErrors.email = email ? (validator.isEmail(email) ? "" : "Email is not valid.") : "This field is required.";
    tempErrors.message = message ? "" : "This field is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  useEffect(() => {
    if (success) {

      setTimeout(() => {
        setName('');
        setEmail('');
        setMessage('');
        setErrors({});
        setSuccess(false); 
      }, 3000);
    }
  }, [success]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log({ name, email, message });
      setSuccess(true);
    }
  };

  return (
    <Container>
      <br />
      <Typography variant="h4" align="center">Contact Me</Typography><br />
      {success && <Alert severity="success" onClose={() => setSuccess(false)}>Message sent successfully!</Alert>}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={8}>
            <TextField
              label="Name"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={!!errors.name}
              helperText={errors.name}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              label="Message"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={!!errors.message}
              helperText={errors.message}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Button type="submit" color="primary" variant="contained" fullWidth>Submit</Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Contact;
