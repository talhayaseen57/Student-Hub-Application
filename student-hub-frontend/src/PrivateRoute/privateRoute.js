import React from 'react'
import { useLocalStorageFunc } from '../util/useLocalStorageFunc';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const [jwtToken, setJwtToken] = useLocalStorageFunc("", 'jwtToken');

  return jwtToken ? children : <Navigate to='/login' />
};

export default PrivateRoute;