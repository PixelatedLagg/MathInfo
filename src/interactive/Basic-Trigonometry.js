import { render } from 'react-dom';
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
                    return (<strong id="solution" tabindex="0" dangerouslySetInnerHTML={{ __html: `sin(${calc}°) = ${side} / x<br>x * sin(${calc}°) = ${side}<br>x = ${side} / sin(${calc}°)<br>x ≈ ${answer}`}}></strong>);
                }
                else
                {
                    sideb = "x";
                    sidec = side;
                    answer = (side * Math.sin(rad(calc))).toFixed(1);
                    return (<strong id="solution" tabindex="0" dangerouslySetInnerHTML={{ __html: `sin(${calc}°) = x / ${side}<br>${side} * sin(${calc}°) = x<br>x ≈ ${answer}`}}></strong>);
                }
            case 1: //cos = a / c
                if (!Math.round(Math.random()))
                {
                    sidea = side;
                    sidec = "x";
                    answer = (side / Math.cos(rad(calc))).toFixed(1);
                    return (<strong id="solution" tabindex="0" dangerouslySetInnerHTML={{ __html: `cos(${calc}°) = ${side} / x<br>x * cos(${calc}°) = ${side}<br>x = ${side} / cos(${calc}°)<br>x ≈ ${answer}`}}></strong>);
                }
                else
                {
                    sidea = "x";
                    sidec = side;
                    answer = (side * Math.cos(rad(calc))).toFixed(1);
                    return (<strong id="solution" tabindex="0" dangerouslySetInnerHTML={{ __html: `cos(${calc}°) = x / ${side}<br>${side} * cos(${calc}°) = x<br>x ≈ ${answer}`}}></strong>);
                }
            case 2: //tan = b / a
                if (!Math.round(Math.random()))
                {
                    sideb = side;
                    sidea = "x";
                    answer = (side / Math.tan(rad(calc))).toFixed(1);
                    return (<strong id="solution" tabindex="0" dangerouslySetInnerHTML={{ __html: `tan(${calc}°) = ${side} / x<br>x * tan(${calc}°) = ${side}<br>x = ${side} / tan(${calc}°)<br>x ≈ ${answer}`}}></strong>);
                }
                else
                {
                    sideb = "x";
                    sidea = side;
                    answer = (side * Math.tan(rad(calc))).toFixed(1);
                    return (<strong id="solution" tabindex="0" dangerouslySetInnerHTML={{ __html: `tan(${calc}°) = x / ${side}<br>${side} * tan(${calc}°) = x<br>x ≈ ${answer}`}}></strong>);
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
                    return (<strong id="solution" tabindex="0" dangerouslySetInnerHTML={{ __html: `sin(${calc}°) = ${side} / x<br>x * sin(${calc}°) = ${side}<br>x = ${side} / sin(${calc}°)<br>x ≈ ${answer}`}}></strong>);
                }
                else
                {
                    sidea = "x";
                    sidec = side;
                    answer = (side * Math.sin(rad(calc))).toFixed(1);
                    return (<strong id="solution" tabindex="0" dangerouslySetInnerHTML={{ __html: `sin(${calc}°) = x / ${side}<br>${side} * sin(${calc}°) = x<br>x ≈ ${answer}`}}></strong>);
                }
            case 1: //cos = b / c
                if (!Math.round(Math.random()))
                {
                    sideb = side;
                    sidec = "x";
                    answer = (side / Math.cos(rad(calc))).toFixed(1);
                    return (<strong id="solution" tabindex="0" dangerouslySetInnerHTML={{ __html: `cos(${calc}°) = ${side} / x<br>x * cos(${calc}°) = ${side}<br>x = ${side} / cos(${calc}°)<br>x ≈ ${answer}`}}></strong>);
                }
                else
                {
                    sideb = "x";
                    sidec = side;
                    answer = (side * Math.cos(rad(calc))).toFixed(1);
                    return (<strong id="solution" tabindex="0" dangerouslySetInnerHTML={{ __html: `cos(${calc}°) = x / ${side}<br>${side} * cos(${calc}°) = x<br>x ≈ ${answer}`}}></strong>);
                }
            case 2: //tan = a / b
                if (!Math.round(Math.random()))
                {
                    sidea = side;
                    sideb = "x";
                    answer = (side / Math.tan(rad(calc))).toFixed(1);
                    return (<strong id="solution" tabindex="0" dangerouslySetInnerHTML={{ __html: `tan(${calc}°) = ${side} / x<br>x * tan(${calc}°) = ${side}<br>x = ${side} / tan(${calc}°)<br>x ≈ ${answer}`}}></strong>);
                }
                else
                {
                    sidea = "x";
                    sideb = side;
                    answer = (side * Math.tan(rad(calc))).toFixed(1);
                    return (<strong id="solution" tabindex="0" dangerouslySetInnerHTML={{ __html: `tan(${calc}°) = x / ${side}<br>${side} * tan(${calc}°) = x<br>x ≈ ${answer}`}}></strong>);
                }
        }
    }
}

function SideTrigonometry()
{
    var solution = generate();
    return (
        <div className="text">
            <h1>Solve for Side</h1>
            <button type="button" className='interactive-button' tabindex="0">Generate New Problem</button>
            <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet">
                <text id="sidea" xmlSpace="preserve" textAnchor="middle" fontSize="24" fontFamily="serif" strokeWidth="0" stroke="#000" fill="#000" y="255" x="40">{sidea}</text>
                <text id="sideb" xmlSpace="preserve" textAnchor="middle" fontSize="24" fontFamily="serif" strokeWidth="0" stroke="#000" fill="#000" y="465" x="228">{sideb}</text>
                <text id="sidec" xmlSpace="preserve" textAnchor="middle" fontSize="24" fontFamily="serif" strokeWidth="0" stroke="#000" fill="#000" y="233" x="259">{sidec}</text>
                <text stroke="#000" id="angle1" xmlSpace="preserve" textAnchor="middle" fontSize="24" fontFamily="serif" strokeWidth="0" fill="#000" y="136" x="90">{angle1}</text>
                <text id="angle2" xmlSpace="preserve" textAnchor="middle" fontSize="24" fontFamily="serif" strokeWidth="0" stroke="#000" fill="#000" y="426" x="380">{angle2}</text>
                <path d="m62,438l0,-376l376,376l-376,0z" strokeWidth="5" stroke="#000" fillOpacity="0" fill="#000"/>
                <path d="m62.425,401.205l35,0l0,35l-35,0l0,-35z" strokeWidth="2" stroke="#000" fillOpacity="0" fill="#000"/>
            </svg>
            <p style={{marginTop: "8px", marginLeft: "8px"}}>Solution:{solution}</p>
        </div>
        );
}

export default function Trigonometry(props) {
    document.title = "Basic Trigonometry";
    props.onSetNames("Interactive Basic*Trigonometry");
    props.onSetLinks("/interactive /interactive/basic-trigonometry");
    return (
        <div className='content'>
            <div className='section'>
                <SideTrigonometry />
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