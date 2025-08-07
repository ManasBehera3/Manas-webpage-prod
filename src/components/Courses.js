import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

const Courses = () => {
  const placeholderCourses = [
    {
      id: 1,
      title: 'Leadership Mastery',
      description: 'On-demand course on leadership and management skills',
      duration: '8 weeks',
      level: 'Intermediate',
      image: 'https://source.unsplash.com/random?leadership'
    },
    {
      id: 2,
      title: 'Motivation & Success',
      description: 'Learn the principles of motivation and achieving success',
      duration: '6 weeks',
      level: 'Beginner',
      image: 'https://source.unsplash.com/random?motivation'
    },
    {
      id: 3,
      title: 'Corporate Training',
      description: 'Advanced corporate training and facilitation techniques',
      duration: '10 weeks',
      level: 'Advanced',
      image: 'https://source.unsplash.com/random?corporate'
    }
  ];

  return (
    <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom>
          COURSES
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
          On-demand courses, coaching and LIVE sessions. Manas brings you the best training 
          and company in the courses he has crafted to help you stay on purpose & unleash your genius.
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {placeholderCourses.map((course) => (
            <Grid item xs={12} md={4} key={course.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={course.image}
                  alt={course.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {course.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {course.description}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                    <Chip label={course.duration} size="small" color="primary" />
                    <Chip label={course.level} size="small" variant="outlined" />
                  </Box>
                  <Button variant="contained" fullWidth>
                    JOIN NOW
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button variant="outlined" size="large">
            VIEW ALL COURSES
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Courses; 