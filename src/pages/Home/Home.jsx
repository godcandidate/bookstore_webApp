import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material';
import { motion } from 'framer-motion';

const featuredBooks = [
  {
    id: 1,
    title: 'The Midnight Library',
    author: 'Matt Haig',
    image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602190253i/52578297.jpg',
    price: '$24.99',
  },
  {
    id: 2,
    title: 'Atomic Habits',
    author: 'James Clear',
    image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg',
    price: '$21.99',
  },
  {
    id: 3,
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1597695864i/54493401.jpg',
    price: '$26.99',
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                component="h1"
                variant="h1"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                }}
              >
                Discover Your Next Favorite Book
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                Explore our vast collection of books across all genres
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{ mr: 2 }}
                onClick={() => navigate('/books')}
              >
                Browse Books
              </Button>
              <Button 
                variant="outlined" 
                color="inherit" 
                size="large"
                onClick={() => navigate('/about')}
              >
                Learn More
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3"
                alt="Books"
                sx={{
                  width: '100%',
                  maxWidth: 600,
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Featured Books Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography
          variant="h2"
          sx={{ mb: 4, textAlign: 'center' }}
          color="primary"
        >
          Featured Books
        </Typography>
        <Grid container spacing={4}>
          {featuredBooks.map((book) => (
            <Grid item key={book.id} xs={12} sm={6} md={4}>
              <Card
                component={motion.div}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.2 },
                }}
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="img"
                  image={book.image}
                  alt={book.title}
                  sx={{ height: 400, objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {book.title}
                  </Typography>
                  <Typography color="text.secondary">{book.author}</Typography>
                  <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                    {book.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    size="small" 
                    color="primary"
                    onClick={() => navigate(`/book/${book.id}`)}
                  >
                    View Details
                  </Button>
                  <Button size="small" color="secondary">
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
