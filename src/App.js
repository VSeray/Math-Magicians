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
      <Route path="/quote">
        <Quotes />
      </Route>
      <Route path="/calculator">
        <Mathematics />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Routes>
    <Footer />
  </main>
);

export default App;
