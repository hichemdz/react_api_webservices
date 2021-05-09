import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.css';
import './css/index.css';
import './css/app.css';
import './css/slick-them.css'
import './css/slick.css'
import 'aos/dist/aos.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router} from 'react-router-dom'

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost/webService/';
axios.defaults.headers.common['Authorization'] ='Bearer ' + localStorage.getItem("token");

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
