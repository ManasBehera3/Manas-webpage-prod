import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Hero from './components/Hero';
import About from './components/About';
// import Books from './components/Books';
// import Courses from './components/Courses';
// import Podcast from './components/Podcast';
// import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import heroContent from './content/hero.json';
import aboutContent from './content/about.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const navItems = [
  { label: 'HOME', id: 'home' },
  { label: 'ABOUT', id: 'about' },
  // { label: 'WORKSHOP', id: 'workshop' },
  // { label: 'BOOKS', id: 'books' },
  // { label: 'COURSES', id: 'courses' },
  { label: 'BLOG', id: 'blog' },
  // { label: 'PODCAST', id: 'podcast' },
  { label: 'CONTACT', id: 'footer' },
];

function App() {
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Manas Behera
            </Typography>
            {navItems.map((item) => (
              <Button
                key={item.id}
                color="inherit"
                sx={{ ml: 1 }}
                component="a"
                href={`#${item.id}`}
              >
                {item.label}
              </Button>
            ))}
          </Toolbar>
        </Container>
      </AppBar>
      {/* Main Content with section ids */}
      <Box component="main">
        <Box id="home"><Hero content={heroContent} /></Box>
        <Box id="about"><About content={aboutContent} /></Box>
        {/* <Box id="books"><Books /></Box> */}
        {/* <Box id="courses"><Courses /></Box> */}
        <Box id="blog" sx={{ bgcolor: 'grey.100', py: 4 }}>
          <Container maxWidth="md">
            <Typography variant="h3" align="center" gutterBottom>Blogs and Podcast</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3, mb: 2 }}>
              <Button
                variant="contained"
                color="primary"
                href="https://medium.com/@manasranjan_8164"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blogs
              </Button>
              <Button
                variant="contained"
                color="secondary"
                href="https://open.spotify.com/show/0rQDU5PP2BHYPGJIv7Tunu?si=hL6wmYXiRPSPAgMfEakFaw"
                target="_blank"
                rel="noopener noreferrer"
              >
                Podcast
              </Button>
            </Box>
          </Container>
        </Box>
        {/* <Box id="podcast"><Podcast /></Box> */}
        {/* <Testimonials /> */}
      </Box>
      <div id="footer">
        <Footer />
      </div>
    </Box>
  );
}

export default App;
