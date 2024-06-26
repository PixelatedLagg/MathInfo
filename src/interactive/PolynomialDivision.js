import '../index.css';
import React, { useState, useEffect } from 'react';

let numerator = [];
let denomerator = [];

function randomNum(lower, upper)
{
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

function divisionPolynomial() //return polynomial result of division
{

}

function divisionNumerator() //return coefficients of numerator of remainder
{

}

function divisionDenominator() //return coefficients of denominator of remainder
{

}

export default function PolynomialDivision(props) {
    const [_settings, setSettings] = useState([5, 2, 5, 2]);
    const [_factor, setFactor] = useState(false);
    document.title = "Polynomial Division";
    props.onSetNames("Interactive Polynomial*Division");
    props.onSetLinks("/interactive /interactive/polynomial-division");
    function handleChange(num, index) {
        if (num > 0)
        {
            _settings[index] = num;
            setSettings(_settings);
        }
    }
    function handleBoolChange(num) {
        _factor = !_factor;
        setFactor(_factor);
    }
    return (
        <div className='content'>
            <div className='section'>
                <div className="text">
                    <h1>Polynomial Division</h1>
                    <div className="checkboxes">
                        
                    </div>
                    <button type="button" className='interactive-button' tabIndex="0" onClick={() => generateProblem()}>Generate New Problem</button>
                </div>
                <div className='media'>
                </div>
            </div>
        </div>
        );
}

/*
<div className="input-label"><input type="number" id="0" defaultValue={5} onChange={() => handleChange(val, 0)}/><label htmlFor="0">Maximum Numerator Degrees</label></div>
                        <div className="input-label"><input type="number" id="1" defaultValue={2} onChange={() => handleChange(val, 1)}/><label htmlFor="1">Minimum Numerator Degrees</label></div>
                        <div className="input-label"><input type="number" id="2" defaultValue={5} onChange={() => handleChange(val, 2)}/><label htmlFor="2">Maximum Denominator Degrees</label></div>
                        <div className="input-label"><input type="number" id="3" defaultValue={2} onChange={() => handleChange(val, 3)}/><label htmlFor="3">Minimum Denominator Degrees</label></div>
                        <div className="input-label"><input type="checkbox" id="4" defaultValue={true} onChange={() => handleBoolChange()}/><label htmlFor="4">Automatically Factor</label></div>
*/