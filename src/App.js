import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './pages/Home';
import Mathematics from './pages/Mathematics';
import Quotes from './pages/Quotes';
import Footer from './Component/Footer';
import './styles/Calculator.css';

const App = () => (
  <main className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quote" element={<Quotes />} />
      <Route path="/calculator" element={<Mathematics />} />
    </Routes>
    <Footer />
  </main>
);

export default App;
