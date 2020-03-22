import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'; // 5.x
import './index.css';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import SecondsCounter from './components/App.jsx'


ReactDOM.render(<SecondsCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six}/>,
     document.querySelector('#root'));