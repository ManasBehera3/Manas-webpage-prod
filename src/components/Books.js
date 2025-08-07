import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const Books = () => {
  const placeholderBooks = [
    { id: 1, title: 'Book 1', description: 'Placeholder book description', image: 'https://source.unsplash.com/random?book=1' },
    { id: 2, title: 'Book 2', description: 'Placeholder book description', image: 'https://source.unsplash.com/random?book=2' },
    { id: 3, title: 'Book 3', description: 'Placeholder book description', image: 'https://source.unsplash.com/random?book=3' },
    { id: 4, title: 'Book 4', description: 'Placeholder book description', image: 'https://source.unsplash.com/random?book=4' },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom>
          BOOKS
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
          Manas has written 17 inspirational books, winning 46 International Book Awards, 
          the FIRST Indian Author to have done so. Translated into 11 foreign languages. #1 bestsellers.
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {placeholderBooks.map((book) => (
            <Grid item xs={12} sm={6} md={3} key={book.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={book.image}
                  alt={book.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h2">
                    {book.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {book.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button variant="contained" size="large">
            READ NOW
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Books; 