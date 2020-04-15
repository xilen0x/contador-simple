import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'; // 5.x
import './index.css';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import PropTypes from 'prop-types';
//import SecondsCounter from './components/App.jsx'

function SecondsCounter(props) {
     return (
          <div className="container">
               <div className="row text-white">
                    <i className="fas fa-clock"></i>
                    <div className="six">{props.digitSix % 10}</div>
                    <div className="five">{props.digitFive % 10}</div>
                    <div className="four">{props.digitFour % 10}</div>
                    <div className="three">{props.digitThree % 10}</div>
                    <div className="two">{props.digitTwo % 10}</div>
                    <div className="one">{props.digitOne % 10}</div>
               </div>
          </div>
     );
}

SecondsCounter.propTypes = {
     digitSix: PropTypes.number,
     digitFive: PropTypes.number,
     digitFour: PropTypes.number,
     digitThree: PropTypes.number,
     digitTwo: PropTypes.number,
     digitOne: PropTypes.number
};

let counter = 0;
setInterval(function () {
     const six = Math.floor(counter / 100000);
     const five = Math.floor(counter / 10000);
     const four = Math.floor(counter / 1000);
     const three = Math.floor(counter / 100);
     const two = Math.floor(counter / 10);
     const one = Math.floor(counter / 1);
     counter++;
     ReactDOM.render(<SecondsCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} />,
          document.querySelector('#root'));
}, 1000);