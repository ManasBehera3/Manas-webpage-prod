import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';

const Testimonials = () => {
  const placeholderTestimonials = [
    {
      id: 1,
      name: 'Mr. Rajesh Jejurikar',
      position: 'President & Chief Executive – Farm Equipment & Two Wheelers, Mahindra & Mahindra Ltd',
      content: 'Manas has the rare ability to connect with people, inspire them to do and strive for more.',
      rating: 5,
      avatar: 'RJ'
    },
    {
      id: 2,
      name: 'Mr. Amitabh Verma',
      position: 'Chief Operating Officer, Tata AIA Life Insurance Company Limited',
      content: 'Manas\'s session surpassed our expectations and there was a superlative feedback from the team.',
      rating: 5,
      avatar: 'AV'
    },
    {
      id: 3,
      name: 'Mr. Spyros Gousetis',
      position: 'Director, Marketing, Middle East & Africa, Sony Mobile Communications',
      content: 'Manas, managed to captivate a very diverse & demanding pool of delegates from 12 countries.',
      rating: 5,
      avatar: 'SG'
    },
    {
      id: 4,
      name: 'Mr. Alfredo A. Antonio',
      position: 'Purchasing Director, Global Business Services, Procter & Gamble Asia',
      content: 'Manas\'s unique style, storytelling and activities, inspired our people once again.',
      rating: 5,
      avatar: 'AA'
    }
  ];

  return (
    <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom>
          CLIENT TESTIMONIALS
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {placeholderTestimonials.map((testimonial) => (
            <Grid item xs={12} md={6} key={testimonial.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar sx={{ width: 56, height: 56, mr: 2 }}>
                      {testimonial.avatar}
                    </Avatar>
                    <Box>
                      <Typography variant="h6">{testimonial.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.position}
                      </Typography>
                    </Box>
                  </Box>
                  <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                  <Typography variant="body1" paragraph>
                    "{testimonial.content}"
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h6" color="text.secondary">
            Manas has worked with over 2000 Multi-National Corporates across 51 countries 
            and has touched the lives of over 3 million people through his workshops and books.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials; 