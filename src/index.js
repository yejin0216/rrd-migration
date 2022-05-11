import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes/routes';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
