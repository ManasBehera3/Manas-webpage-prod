import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Podcast = () => {
  const placeholderEpisodes = [
    {
      id: 1,
      title: 'Episode 1: The Power of Mindset',
      description: 'Exploring how mindset shapes our success and daily life',
      duration: '45 min',
      image: 'https://source.unsplash.com/random?podcast=1'
    },
    {
      id: 2,
      title: 'Episode 2: Leadership in Crisis',
      description: 'How to lead effectively during challenging times',
      duration: '52 min',
      image: 'https://source.unsplash.com/random?podcast=2'
    },
    {
      id: 3,
      title: 'Episode 3: Building Resilience',
      description: 'Strategies for developing mental and emotional resilience',
      duration: '38 min',
      image: 'https://source.unsplash.com/random?podcast=3'
    }
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom>
          PODCASTS
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
          Hosted on Audible & Spotify, Manas keeps you good and positive company with his stories, 
          anecdotes and life changing experiences. Tune into your genius.
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {placeholderEpisodes.map((episode) => (
            <Grid item xs={12} md={4} key={episode.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={episode.image}
                  alt={episode.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h2">
                    {episode.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {episode.description}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                      {episode.duration}
                    </Typography>
                    <Button
                      variant="contained"
                      startIcon={<PlayArrowIcon />}
                      size="small"
                    >
                      LISTEN
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button variant="contained" size="large" sx={{ mr: 2 }}>
            SPOTIFY
          </Button>
          <Button variant="outlined" size="large">
            AUDIBLE
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Podcast; 