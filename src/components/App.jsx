import React from 'react';

let counter = 0;
setInterval(function () {
    const six = Math.floor(counter / 1000000);
    const five = Math.floor(counter / 100000);
    const four = Math.floor(counter / 10000);
    const three = Math.floor(counter / 1000);
    const two = Math.floor(counter / 100);
    const one = Math.floor(counter / 10);
    counter++;
}, 1000);

function SecondsCounter(props) {
    return (
        <div className="container backside">
            <div className="row text-white d-flex justify-content-center py-2 m-5 ">
                <i className="fas fa-clock"></i>
                <div className="six" >{props.digitSix}</div>
                <div className="five" >{props.digitFive}</div>
                <div className="four" >{props.digitFour}</div>
                <div className="three" >{props.digitThree}</div>
                <div className="two" >{props.digitTwo}</div>
                <div className="one" >{props.digitOne}</div>
            </div>
        </div>
    );
}
export default SecondsCounter;
