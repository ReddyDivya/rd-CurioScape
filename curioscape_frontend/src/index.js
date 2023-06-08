import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
/*
  BrowserRouter and Router is an alias.
  -------------------------------------
  - enables routing functionality for your application.

  <Switch> component is used to render only the first <Route> that matches the current URL. 
  Each <Route> component specifies a path and the component to render when that path is matched.
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);