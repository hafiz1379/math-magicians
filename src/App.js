import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navigation from './home/navigation';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
