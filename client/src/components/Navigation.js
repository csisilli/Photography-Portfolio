import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../App.css';

function Navigation() {
  return (
    <Navbar expand="lg" className="navbar-custom sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          📸 Caitlin's Photography
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/galleries/ireland">Ireland Gallery</Nav.Link>
            <Nav.Link as={Link} to="/galleries/natural">Natural Gallery</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
