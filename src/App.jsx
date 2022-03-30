import React, { useState } from "react";
import Login from "./components/Login/Login";
import {BrowserRouter as Router} from 'react-router-dom';
import Layout from "./components/Layout/Layout";

export const setToken = (token)=>{
  localStorage.setItem('temitope', token)
}

export const fetchToken = (token)=>{
  return localStorage.getItem('temitope')
}
function App({children}) {
  let auth = fetchToken()
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
    <Router>
      <main>
        {!auth && <Login/>}
        {auth && <Layout/>}
      </main>
    </Router>
    </>
  );
}

export default App;