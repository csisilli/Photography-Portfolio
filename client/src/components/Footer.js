import React from 'react';
import { Container } from 'react-bootstrap';
import '../App.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-custom">
      <Container>
        <p>&copy; {currentYear} Caitlin Sisilli. All rights reserved.</p>
        <p>Photography Portfolio | Built with React, Node.js, and Bootstrap</p>
      </Container>
    </footer>
  );
}

export default Footer;
