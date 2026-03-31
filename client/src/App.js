import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import IrelandGallery from './pages/IrelandGallery';
import NaturalGallery from './pages/NaturalGallery';
import AnimalGallery from './pages/AnimalGallery';
import FlowerGallery from './pages/FlowerGallery';
import LifeMomentsGallery from './pages/LifeMomentsGallery';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galleries/ireland" element={<IrelandGallery />} />
        <Route path="/galleries/natural" element={<NaturalGallery />} />
        <Route path="/galleries/animals" element={<AnimalGallery />} />
        <Route path="/galleries/flowers" element={<FlowerGallery />} />
        <Route path="/galleries/lifemoments" element={<LifeMomentsGallery />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
