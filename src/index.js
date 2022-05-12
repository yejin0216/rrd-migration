import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Router from './routes/routes';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Router />
    </Suspense>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
