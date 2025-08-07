import React from "react";
import Slider from "react-slick";
import heroContent from '../content/hero.json';

const images = [
  process.env.PUBLIC_URL + "/images/image1.jpeg",
  process.env.PUBLIC_URL + "/images/image2.jpeg"
];

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div style={{ background: '#222', padding: '60px 0 40px 0' }}>
      <div style={{ width: '100%', maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 700 }}>
          {heroContent.title}
        </h1>
        <h2 style={{ color: '#fff', fontWeight: 400, marginBottom: '2rem', fontSize: '1.3rem' }}>
          {heroContent.subtitle}
        </h2>
        <a
          href={heroContent.image}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: '#1976d2',
            color: '#fff',
            padding: '0.75rem 2rem',
            borderRadius: '4px',
            textDecoration: 'none',
            marginBottom: '2.5rem',
            fontWeight: 500,
            fontSize: '1.1rem'
          }}
        >
          {heroContent.cta}
        </a>
      </div>
      <div style={{ width: '100%', maxWidth: 450, margin: '2rem auto 0 auto' }}>
        <Slider {...settings}>
          {images.map((src, idx) => (
            <div key={idx} style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={src}
                alt={`slide-${idx}`}
                style={{ width: '100%', height: '40vh', objectFit: 'cover', borderRadius: '8px' }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;