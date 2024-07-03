import '../index.css';
import React, { useState, useEffect } from 'react';

function randomNum(lower, upper)
{
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

function polynomialDivision(dividend, divisor)
{
    let quotient = [];
    let remainder = [...dividend];
    let divisorDegree = divisor.length - 1;
    let divisorLeadCoeff = divisor[0];
    while (remainder.length >= divisor.length)
    {
        let coeff = remainder[0] / divisorLeadCoeff;
        quotient.push(coeff);
        for (let i = 0; i < divisor.length; i++)
        {
            remainder[i] -= coeff * divisor[i];
        }
        remainder.shift();
        while (remainder.length && remainder[0] === 0)
        {
            remainder.shift();
        }
    }
    return { quotient: quotient, remainder: remainder };
}

function polynomialToString(coefficients)
{
    return coefficients.map((coeff, index) =>
    {
        let degree = coefficients.length - 1 - index;
        if (degree === 0)
        {
            return `${coeff}`;
        }
        if (degree === 1)
        {
            return `${coeff}x`;
        }
        return `${coeff}x^${degree}`;
    }).join(' + ').replace(/\+ -/g, '- ');
}

// Example usage:
let dividend = [1, -3, 0, 2]; // x^3 - 3x^2 + 0x + 2
let divisor = [1, -1]; // x - 1

let result = polynomialDivision(dividend, divisor);

//console.log("Quotient:", polynomialToString(result.quotient)); // Quotient: 1x^2 - 2x - 1
//console.log("Remainder:", polynomialToString(result.remainder)); // Remainder: 1



function generateProblem(_settings)
{
    let dividend = Array.from({ length: randomNum(_settings[0] + 1, _settings[1] + 1) }, randomNum(0, 100));

}

export default function PolynomialDivision(props)
{
    const [_settings, setSettings] = useState([5, 2, 5, 2]);
    document.title = "Polynomial Division";
    useEffect(() => {
        props.onSetNames("Interactive Polynomial*Division");
        props.onSetLinks("/interactive /interactive/polynomial-division");
    });
    function handleChange(index) {
        var e = document.getElementById(index);
        if (e.value > 0)
        {
            _settings[index] = e.value;
            setSettings(_settings);
        }
    }
    return (
        <div className='content'>
            <div className='section'>
                <div className="text">
                    <h1>Polynomial Division</h1>
                    <div className="checkboxes">
                        <div className="input-label"><input type="number" id="0" defaultValue={5} min={1} onChange={() => handleChange(0)} aria-label="Maximum Numerator Degrees" name="Maximum Numerator Degrees"/><label htmlFor="0">Maximum Numerator Degrees</label></div>
                        <div className="input-label"><input type="number" id="1" defaultValue={2} min={1} onChange={() => handleChange(1)} aria-label="Minimum Numerator Degrees" name="Minimum Numerator Degrees"/><label htmlFor="1">Minimum Numerator Degrees</label></div>
                        <div className="input-label"><input type="number" id="2" defaultValue={5} min={1} onChange={() => handleChange(2)} aria-label="Maximum Denominator Degrees" name="Maximum Denominator Degrees"/><label htmlFor="2">Maximum Denominator Degrees</label></div>
                        <div className="input-label"><input type="number" id="3" defaultValue={2} min={1} onChange={() => handleChange(3)} aria-label="Minimum Denominator Degrees" name="Minimum Denominator Degrees"/><label htmlFor="3">Minimum Denominator Degrees</label></div>
                    </div>
                    <button type="button" className='interactive-button' tabIndex="0" onClick={() => generateProblem()} aria-label="Generate New Problem">Generate New Problem</button>
                </div>
                <div className='media' role="complementary">
                </div>
            </div>
        </div>
        );
}