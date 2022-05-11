import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import Nav from './Nav';

const PrivateRoute = () => {
  const navigate = useNavigate();
  const [getAuthToken, ,] = useAuth();

  useEffect(() => {
    if (!getAuthToken()) {
      navigate('/login');
    }
  }, []);

  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default PrivateRoute;
