import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from '../Components/Header';
import Second_Header from '../Components/Second_Header';
import Carousel from '../Components/Carousel';
import Services from '../Components/Services';
import Footer from '../Components/Footer';
import Gallary from '../Components/Gallary';
import About from '../Components/About'
import Contact from '../Components/Contact';
import Blog from '../Components/Blog';

import { slides } from '../data/slidesImage.json';

import './App.css';

function App() {
  return (
    <>
      {/* Common Components */}
      <Header />
      <Second_Header />

      {/* Routes for Pages */}

      <Routes>
      <Route
          path="/"
          element={
            <>
              {/* Home Page Layout */}
              <Carousel data={slides} />
              <Services />
              <Gallary />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/gallary" element={<Gallary />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={<h2 style={{ textAlign: 'center' }}>404 - Page Not Found</h2>}
        />
      </Routes>

      {/* Footer - Always Visible */}
      <Footer />
    </>
  );
}

export default App;
