import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Login/Login';
import Layout from './components/Layout/Layout';

export const setToken = (token) => {
  localStorage.setItem('temitope', token);
};

export const fetchToken = () => localStorage.getItem('temitope');
function App() {
  const auth = fetchToken();

  return (
    <Router>
      <main>
        {!auth && <Login />}
        {auth && <Layout />}
      </main>
    </Router>
  );
}

export default App;
