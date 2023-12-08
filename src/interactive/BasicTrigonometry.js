import '../index.css';
import React, { useState, useEffect } from 'react';

function rand(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function rad(angle) {
    return angle * (Math.PI / 180);
}

var angle1, angle2, sidea, sideb, sidec, calc, side, answer;

function generate()
{
    angle1 = "";
    angle2 = "";
    sidea = "";
    sideb = "";
    sidec = "";
    calc = rand(1, 89);
    side = rand(1, 25);
    if (!Math.round(Math.random()))
    {
        angle1 = `${calc}°`;
        switch (rand(0, 2))
        {
            case 0: //sin = b / c
                if (!Math.round(Math.random()))
                {
                    sideb = side;
                    sidec = "x";
                    answer = (side / Math.sin(rad(calc))).toFixed(1);
                    return (<strong dangerouslySetInnerHTML={{ __html: `sin(${calc}°) = ${side} / x<br>x * sin(${calc}°) = ${side}<br>x = ${side} / sin(${calc}°)<br>x ≈ ${answer}`}}></strong>);
                }
                else
                {
                    sideb = "x";
                    sidec = side;
                    answer = (side * Math.sin(rad(calc))).toFixed(1);
                    return (<strong dangerouslySetInnerHTML={{ __html: `sin(${calc}°) = x / ${side}<br>${side} * sin(${calc}°) = x<br>x ≈ ${answer}`}}></strong>);
                }
            case 1: //cos = a / c
                if (!Math.round(Math.random()))
                {
                    sidea = side;
                    sidec = "x";
                    answer = (side / Math.cos(rad(calc))).toFixed(1);
                    return (<strong dangerouslySetInnerHTML={{ __html: `cos(${calc}°) = ${side} / x<br>x * cos(${calc}°) = ${side}<br>x = ${side} / cos(${calc}°)<br>x ≈ ${answer}`}}></strong>);
                }
                else
                {
                    sidea = "x";
                    sidec = side;
                    answer = (side * Math.cos(rad(calc))).toFixed(1);
                    return (<strong dangerouslySetInnerHTML={{ __html: `cos(${calc}°) = x / ${side}<br>${side} * cos(${calc}°) = x<br>x ≈ ${answer}`}}></strong>);
                }
            case 2: //tan = b / a
                if (!Math.round(Math.random()))
                {
                    sideb = side;
                    sidea = "x";
                    answer = (side / Math.tan(rad(calc))).toFixed(1);
                    return (<strong dangerouslySetInnerHTML={{ __html: `tan(${calc}°) = ${side} / x<br>x * tan(${calc}°) = ${side}<br>x = ${side} / tan(${calc}°)<br>x ≈ ${answer}`}}></strong>);
                }
                else
                {
                    sideb = "x";
                    sidea = side;
                    answer = (side * Math.tan(rad(calc))).toFixed(1);
                    return (<strong dangerouslySetInnerHTML={{ __html: `tan(${calc}°) = x / ${side}<br>${side} * tan(${calc}°) = x<br>x ≈ ${answer}`}}></strong>);
                }
        }
    }
    else
    {
        angle2 = `${calc}°`;
        switch (rand(0, 2))
        {
            case 0: //sin = a / c
                if (!Math.round(Math.random()))
                {
                    sidea = side;
                    sidec = "x";
                    answer = (side / Math.sin(rad(calc))).toFixed(1);
                    return (<strong dangerouslySetInnerHTML={{ __html: `sin(${calc}°) = ${side} / x<br>x * sin(${calc}°) = ${side}<br>x = ${side} / sin(${calc}°)<br>x ≈ ${answer}`}}></strong>);
                }
                else
                {
                    sidea = "x";
                    sidec = side;
                    answer = (side * Math.sin(rad(calc))).toFixed(1);
                    return (<strong dangerouslySetInnerHTML={{ __html: `sin(${calc}°) = x / ${side}<br>${side} * sin(${calc}°) = x<br>x ≈ ${answer}`}}></strong>);
                }
            case 1: //cos = b / c
                if (!Math.round(Math.random()))
                {
                    sideb = side;
                    sidec = "x";
                    answer = (side / Math.cos(rad(calc))).toFixed(1);
                    return (<strong dangerouslySetInnerHTML={{ __html: `cos(${calc}°) = ${side} / x<br>x * cos(${calc}°) = ${side}<br>x = ${side} / cos(${calc}°)<br>x ≈ ${answer}`}}></strong>);
                }
                else
                {
                    sideb = "x";
                    sidec = side;
                    answer = (side * Math.cos(rad(calc))).toFixed(1);
                    return (<strong dangerouslySetInnerHTML={{ __html: `cos(${calc}°) = x / ${side}<br>${side} * cos(${calc}°) = x<br>x ≈ ${answer}`}}></strong>);
                }
            case 2: //tan = a / b
                if (!Math.round(Math.random()))
                {
                    sidea = side;
                    sideb = "x";
                    answer = (side / Math.tan(rad(calc))).toFixed(1);
                    return (<strong dangerouslySetInnerHTML={{ __html: `tan(${calc}°) = ${side} / x<br>x * tan(${calc}°) = ${side}<br>x = ${side} / tan(${calc}°)<br>x ≈ ${answer}`}}></strong>);
                }
                else
                {
                    sidea = "x";
                    sideb = side;
                    answer = (side * Math.tan(rad(calc))).toFixed(1);
                    return (<strong dangerouslySetInnerHTML={{ __html: `tan(${calc}°) = x / ${side}<br>${side} * tan(${calc}°) = x<br>x ≈ ${answer}`}}></strong>);
                }
        }
    }
}

export default function App() {
    var solution = generate();
    return (
        <div className='content'>
            <div className='section'>
                <div className="text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="640" height="480">
                        <path fill="#000" fillOpacity="0" stroke="#000" strokeWidth="5" d="M140.575 423.795v-376l376 376h-376z"></path>
                        <path fill="#000" fillOpacity="0" stroke="#000" strokeWidth="2" d="M141 387H176V422H141z"></path>
                        <text x="88" y="247" fill="#000" stroke="#000" strokeWidth="0" fontFamily="serif" fontSize="24" textAnchor="middle" xmlSpace="preserve">{sidea}</text>
                        <text x="307.826" y="460" fill="#000" stroke="#000" strokeWidth="0" fontFamily="serif" fontSize="24" textAnchor="middle" xmlSpace="preserve">{sideb}</text>
                        <text x="366.826" y="204" fill="#000" stroke="#000" strokeWidth="0" fontFamily="serif" fontSize="24" textAnchor="middle" xmlSpace="preserve">{sidec}</text>
                        <text x="178.826" y="138" fill="#000" stroke="#000" strokeWidth="0" fontFamily="serif" fontSize="24" textAnchor="middle" xmlSpace="preserve">{angle1}</text>
                        <text x="441.832" y="405" fill="#000" stroke="#000" strokeWidth="0" fontFamily="serif" fontSize="24" textAnchor="middle" xmlSpace="preserve">{angle2}</text>
                    </svg>
                    <div className='interactive'>
                        <button className='interactive-button yellow vert-space'>
                            <h3>Check</h3>
                        </button>
                        <button className='interactive-button yellow vert-space' onClick={ generate() }>
                            <h3>New</h3>
                        </button>
                    </div>
                    {solution}
                </div>
                <div className='media'>
                    <div className='image'>
                        <img src='/imgs/Trigonometry/1_3.png' alt='All 6 trigonometric functions of an angle on a triangle of side lengths 5, 4, and 3.'></img>
                        <p>All 6 trigonometric functions of an angle on a triangle of side lengths 5, 4, and 3.</p>
                    </div>
                </div>
            </div>
        </div>
        );
}