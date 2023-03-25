import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LiquorLandingPage from './components/liquorLandingPage/liquorLandingPage';
import CategoryPage from './components/categoryPage/categoryPage';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="background-color">
        <>
      <Router>
        <Routes>
          <Route path="/" element={<LiquorLandingPage/>} />
          <Route path="/categoryPage" element={<CategoryPage/>} />
          <Route path="/furniturePage" element={<HeroSection/>} />
        </Routes>
      </Router>

      </>
    </div>
  );
}

export default App;
