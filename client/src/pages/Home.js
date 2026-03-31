import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <>
      <section className="hero-section">
        <h1>Caitlin's Photography Portfolio</h1>
        <p>Explore stunning collections of Ireland and natural landscape photography</p>
      </section>

      <Container className="gallery-container">
        <div className="navigation-links">
          <Link to="/galleries/ireland">Explore Ireland Gallery</Link>
          <Link to="/galleries/natural">Explore Natural Gallery</Link>
        </div>

        <div className="row mt-5">
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title">🌊 Ireland Photography</h3>
                <p className="card-text">
                  Discover the breathtaking coastal landscapes and serene water features 
                  captured during my photography journey in Ireland. Each image tells a story 
                  of natural beauty and atmospheric wonder.
                </p>
                <Link to="/galleries/ireland" className="btn btn-primary">View Gallery</Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title">🌄 Natural Photography</h3>
                <p className="card-text">
                  Immerse yourself in the vibrant colors and peaceful moments of nature 
                  captured in New York. From waterfalls to flowers, these images showcase 
                  the diverse beauty of the natural world.
                </p>
                <Link to="/galleries/natural" className="btn btn-primary">View Gallery</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 p-4 bg-white rounded shadow-sm">
          <h4>Welcome to My Portfolio</h4>
          <p>
            This is my personal photography portfolio featuring a curated selection of my finest work. 
            I specialize in landscape, nature, and coastal photography, capturing the beauty and 
            serenity of the world around us. Each photograph is a moment in time, preserved to share 
            the wonder and inspiration I find in nature.
          </p>
          <p>
            Feel free to explore the galleries and enjoy the journey through my photographic 
            perspective!
          </p>
        </div>
      </Container>
    </>
  );
}

export default Home;
