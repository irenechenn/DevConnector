import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import './App.css';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route
        path='/login'
        element={
          <div className='Container'>
            <Login />
          </div>
        }
      />
      <Route
        path='/register'
        element={
          <div className='Container'>
            <Register />
          </div>
        }
      />
    </Routes>
  </Router>
);

export default App;
