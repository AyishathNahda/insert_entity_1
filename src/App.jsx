// src/App.jsx
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import React from 'react';
import Home from './Home';
import './App.css'; // Import global styles
import AddBook from './components/AddBook';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/add-book" element={<AddBook/>}/>
      </Routes>
    </Router>
  );
}

export default App;
