import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Patient from './Pages/Patient/Patient';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/patient' element={<Patient />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;