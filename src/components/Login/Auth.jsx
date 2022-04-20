/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useLocation, Navigate } from 'react-router-dom';

export const setToken = (token) => {
  localStorage.setItem('temitope', token);
};

export const setNewuser = (msg) => {
  localStorage.setItem('Username', msg);
};

export const fetchToken = () => localStorage.getItem('temitope');

export const getName = () => localStorage.getItem('Username');

export function RequireToken({ children }) {
  const auth = fetchToken();
  const location = useLocation();
  if (!auth) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return children;
}
