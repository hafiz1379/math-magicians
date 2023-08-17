import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './navigation.css';
import Home from './home';
import CalculatorPage from './calculatorPage';
import Quote from './quotePage';

function Navigation() {
  return (
    <nav>
      <h1 className="head-name" style={{ fontSize: '35px' }}> Math-magicians</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <p>|</p>
        <li><Link to="/calculator">Calculator</Link></li>
        <p>|</p>
        <li><Link to="/quote">Quote</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </nav>
  );
}

export default Navigation;
