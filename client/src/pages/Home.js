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
          <Link to="/galleries/animals">Explore Animals Gallery</Link>
          <Link to="/galleries/flowers">Explore Flowers Gallery</Link>
          <Link to="/galleries/lifemoments">Explore Life Moments Gallery</Link>
        </div>

        <div className="row mt-5">
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title">🌊 Ireland Photography</h3>
                <Link to="/galleries/ireland" className="btn btn-primary">View Gallery</Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title">🌄 Natural Photography</h3>
                <Link to="/galleries/natural" className="btn btn-primary">View Gallery</Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title">🦁 Animal Photography</h3>
                <Link to="/galleries/animals" className="btn btn-primary">View Gallery</Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title">🌻 Flower Photography</h3>
                <Link to="/galleries/flowers" className="btn btn-primary">View Gallery</Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title">✨ Life Moments</h3>
                <Link to="/galleries/lifemoments" className="btn btn-primary">View Gallery</Link>
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
