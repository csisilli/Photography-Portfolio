import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import IrelandGallery from './pages/IrelandGallery';
import NaturalGallery from './pages/NaturalGallery';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galleries/ireland" element={<IrelandGallery />} />
        <Route path="/galleries/natural" element={<NaturalGallery />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
