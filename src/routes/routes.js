import React from 'react';
import { useRoutes } from 'react-router-dom';

const Login = React.lazy(() => import('../pages/Login'));
const PrivateRoute = React.lazy(() => import('../layouts/PrivateRoute'));
const Main = React.lazy(() => import('../pages/Main'));
const About = React.lazy(() => import('../pages/About'));
const PageNotFound = React.lazy(() => import('../pages/PageNotFound'));

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
