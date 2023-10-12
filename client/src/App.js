import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import Dashboard from './components/dashboard/Dashboard';
import EditProfile from './components/profile-forms/EditProfile';
import CreateProfile from './components/profile-forms/CreateProfile';
import PrivateRoute from './components/routing/PrivateRoute';
import './App.css';

//Redux
import { Provider } from 'react-redux';
import store from './store';

if (localStorage.token) {
  setAuthToken(localStorage.Token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Landing />} />

          <Route
            path='/login'
            element={
              <div className='container'>
                <Alert />
                <Login />
              </div>
            }
          />
          <Route
            path='/register'
            element={
              <div className='container'>
                <Alert />
                <Register />
              </div>
            }
          />
          <Route
            path='/dashboard'
            element={
              <div className='container'>
                <Alert />
                <Dashboard />
              </div>
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
