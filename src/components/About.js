import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

const About = ({ content }) => {
  const {
    title = 'About Manas',
    paragraphs = [""],
    // role = 'CEO & Chief Facilitator',
  } = content || {};

  return (
    <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom>
          {title}
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            {paragraphs.map((text, idx) => (
              <Typography variant="body1" paragraph key={idx}>
                {text}
              </Typography>
            ))}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Button
                variant="contained"
                color="primary"
                href="https://creator.tagmango.app/selfconfidence"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Free Webinar
              </Button>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default About; 