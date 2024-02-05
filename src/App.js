import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Patient from './Pages/Patient/Patient';
import PatientDashboard from './Pages/PatientDashboard/PatientDashboard';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/patient' element={<Patient />} />
          <Route path='/patient-dashboard' element={<PatientDashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;