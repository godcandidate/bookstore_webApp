import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h2"
          component="h1"
          color="primary"
          gutterBottom
          sx={{ textAlign: 'center', mb: 6 }}
        >
          About Our Bookstore
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h4" gutterBottom color="primary">
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph>
                We are passionate about connecting readers with their next favorite book. Our carefully curated collection spans across all genres, ensuring there's something for every reader.
              </Typography>
              <Typography variant="body1">
                Whether you're a casual reader or a dedicated bibliophile, we're here to help you discover stories that will inspire, entertain, and enlighten.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h4" gutterBottom color="primary">
                What We Offer
              </Typography>
              <Typography variant="body1" paragraph>
                • Carefully curated selection of books across all genres
              </Typography>
              <Typography variant="body1" paragraph>
                • Expert recommendations and personalized suggestions
              </Typography>
              <Typography variant="body1" paragraph>
                • Competitive prices and regular promotions
              </Typography>
              <Typography variant="body1">
                • Fast shipping and excellent customer service
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 4, 
                mt: 4, 
                textAlign: 'center',
                backgroundColor: 'primary.main',
                color: 'white'
              }}
            >
              <Typography variant="h4" gutterBottom>
                Visit Us Today
              </Typography>
              <Typography variant="body1">
                Join our community of book lovers and start your reading journey with us.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
