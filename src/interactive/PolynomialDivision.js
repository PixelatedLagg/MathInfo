import '../index.css';
import React, { useState, useEffect } from 'react';

function randomNum(min, max) { //INCLUSIVE
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomCoeff(min, max)
{
    var result = randomNum(0, 10);
    return result;
}

class Fraction
{
    constructor(numerator, denominator = 1)
    {
        this.numerator = numerator;
        this.denominator = denominator;
    }
    simplify()
    {
        const gcd = (a, b) => b ? gcd(b, a % b) : a;
        const divisor = gcd(this.numerator, this.denominator);
        this.numerator /= divisor;
        this.denominator /= divisor;
    }
    toString()
    {
        this.simplify();
        if (this.denominator === 1)
        {
            return `${this.numerator}`;
        }
        if (this.denominator < 0) //ensure denom is always positive
        {
            return `\\frac{${this.numerator * -1}}{${this.denominator * -1}}`;
        }
        return `\\frac{${this.numerator}}{${this.denominator}}`;
    }
}

function polynomialDivision(dividend, divisor)
{
    let quotient = [];
    let remainder = dividend.map(coeff => new Fraction(coeff));
    while (remainder.length >= divisor.length)
    {
        let leadCoeffDividend = remainder[0];
        let leadCoeffDivisor = new Fraction(divisor[0]);
        let exponentDiff = remainder.length - divisor.length;
        let coeffQuotient = new Fraction(leadCoeffDividend.numerator, leadCoeffDividend.denominator * leadCoeffDivisor.numerator);
        quotient.push(coeffQuotient);
        let scaledDivisor = divisor.map(coeff => new Fraction(coeffQuotient.numerator * coeff, coeffQuotient.denominator));
        scaledDivisor = [...Array(exponentDiff).fill(new Fraction(0)), ...scaledDivisor];
        remainder = remainder.map((coeff, index) => {
            let scaledCoeff = scaledDivisor[index] || new Fraction(0);
            return new Fraction(
                coeff.numerator * scaledCoeff.denominator - scaledCoeff.numerator * coeff.denominator,
                coeff.denominator * scaledCoeff.denominator
            );
        }).slice(1);
    }
    return {
        quotient: quotient,
        remainder: remainder
    };
}

function polynomialToString(coefficients)
{
    let terms = [];
    coefficients.forEach((coeff, index) =>
    {
        if (coeff.numerator === 0)
        {
            return; // Skip terms with a coefficient of 0
        }
        let term = '';
        let exponent = coefficients.length - index - 1;
        if (coeff.numerator !== 1 || exponent === 0)
        {
            if (coeff.numerator === -1 && exponent !== 0)
            {
                term += '-';
            }
            else
            {
                term += coeff.toString();
            }
        }
        if (exponent > 0)
        {
            term += 'x';
            if (exponent > 1)
            {
                term += `^${exponent}`;
            }
        }
        terms.push(term);
    });
    return terms.join(' + ').replace(/\+ -/g, '- ');
}

function generateProblem(_settings, setDivision)
{
    var degrees;
    if (_settings[2] !== 0)
    {
        var degrees = randomNum(_settings[0] - _settings[2], _settings[0] + _settings[2]);
        console.log("rand dividend", degrees);
        if (degrees < 2)
        {
            degrees = 2; //ensure numerator is at least 2 degrees
        }
    }
    else
    {
        degrees = _settings[0]; //no variation
    }
    let dividend = Array.from({ length: degrees + 1 }, () => randomCoeff(0, 99));
    if (_settings[2] !== 0)
    {
        degrees = randomNum(_settings[1] - _settings[2], _settings[1] + _settings[2]);
        if (degrees < 1)
        {
            degrees = 1; //ensure denominator is at least 1 degree
        }
        if (degrees >= dividend.length - 1)
        {
            degrees = dividend.length - 2; //ensure denominator is below numerator
        }
    }
    else
    {
        degrees = _settings[1]; //no variation
    }
    let divisor = Array.from({ length: degrees + 1 }, () => randomCoeff(0, 99));
    let result = polynomialDivision(dividend, divisor);
    setDivision(`\\( \\frac{${polynomialToString(dividend)}}{${polynomialToString(divisor)}} = ${polynomialToString(result.quotient)} + \\frac{${polynomialToString(result.remainder)}}{${polynomialToString(divisor)}} \\)`);
}

export default function PolynomialDivision(props)
{
    const [_settings, setSettings] = useState([5, 3, 2]);
    const [_division, setDivision] = useState("\\( \\frac{dividend}{divisor} = quotient + \\frac{remainder}{divisor} \\)");
    document.title = "Polynomial Division";
    useEffect(() => {
        props.onSetNames("Interactive Polynomial*Division");
        props.onSetLinks("/interactive /interactive/polynomial-division");
    });

    function handleChange(index) {
        var e = document.getElementById(index);
        if (e.value >= e.min)
        {
            if (index === 0 && e.value <= _settings[1]) //ensure numerator target is above denominator target
            {
                return;
            }
            else if (index === 1 && e.value >= _settings[0]) //ensure denominator target is below numerator target
            {
                return;
            }
            _settings[index] = e.value;
            setSettings(_settings);
        }
    }
    
    useEffect(() => {
        if (window.MathJax)
        {
            window.MathJax.typesetPromise();
        }
    }, [_division]);

    return (
        <div className='content'>
            <div className='section'>
                <div className="text">
                    <h1>Polynomial Division</h1>
                    <div className="checkboxes">
                        <div className="input-label"><input type="number" id="0" defaultValue={5} min={3} onChange={() => handleChange(0)} aria-label="Target Numerator Degrees" name="Target Numerator Degrees"/><label htmlFor="0">Target Numerator Degrees</label></div>
                        <div className="input-label"><input type="number" id="1" defaultValue={3} min={2} onChange={() => handleChange(1)} aria-label="Target Denominator Degrees" name="Target Denominator Degrees"/><label htmlFor="1">Target Denominator Degrees</label></div>
                        <div className="input-label"><input type="number" id="2" defaultValue={2} min={0} onChange={() => handleChange(2)} aria-label="Possible Degree Variation" name="Possible Degree Variation"/><label htmlFor="2">Possible Degree Variation</label></div>
                    </div>
                    <button type="button" className='interactive-button' tabIndex="0" onClick={() => generateProblem(_settings, setDivision)} aria-label="Generate New Problem">Generate New Problem</button>
                    <div className="prompt" role="contentinfo" aria-live="assertive">
                        <p>{_division}</p>
                    </div>
                </div>
                <div className='media' role="complementary">
                </div>
            </div>
        </div>
        );
}