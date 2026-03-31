import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import '../App.css';

function Gallery({ title, description, gallery }) {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        const response = await fetch('/photos.json');
        const data = await response.json();
        setPhotos(data[gallery] || []);
      } catch (err) {
        console.error('Error fetching photos:', err);
        setError('Failed to load photos.');
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [gallery]);

  return (
    <>
      <section className="hero-section" style={{ paddingTop: '80px' }}>
        <h1>{title}</h1>
        <p>{description}</p>
      </section>

      <Container className="gallery-container">
        <div className="gallery-title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        {error && <div className="alert alert-warning">{error}</div>}

        {loading ? (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row">
            {photos.length > 0 ? (
              photos.map((photo) => (
                <div key={photo.id} className="col-12 photo-item">
                  <h4>{photo.title}</h4>
                  <img 
                    src={photo.src} 
                    alt={photo.alt}
                    loading="lazy"
                  />
                  <div className="photo-watermark">@Caitlin Sisilli</div>
                  <p className="photo-description">{photo.description}</p>
                </div>
              ))
            ) : (
              <div className="col-12 text-center">
                <p className="fs-5 text-muted">No photos available at the moment.</p>
              </div>
            )}
          </div>
        )}
      </Container>
    </>
  );
}

export default Gallery;
