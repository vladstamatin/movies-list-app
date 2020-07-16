import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import './style/index.scss';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

