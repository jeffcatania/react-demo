import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
require("./index.css");
require("./index.html");

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
