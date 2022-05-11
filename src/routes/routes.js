import React from 'react';
import { useRoutes } from 'react-router-dom';
import Login from '../pages/Login';
import Main from '../pages/Main';
import About from '../pages/About';
import PrivateRoute from '../layouts/PrivateRoute';
import PageNotFound from '../pages/PageNotFound';

const Router = () => {
  const routes = useRoutes([
    { path: '/login', element: <Login /> },
    {
      path: '/',
      element: <PrivateRoute />,
      children: [
        { index: true, element: <Main /> },
        { path: 'about', element: <About /> },
      ],
    },
    { path: '*', element: <PageNotFound /> },
  ]);
  return routes;
};
export default Router;
