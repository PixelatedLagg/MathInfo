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
    sign()
    {
        if (this.numerator < 0 ^ this.denominator < 0)
        {
            return false; //negative
        }
        return true; //positive
    }
    abs()
    {
        return new Fraction(Math.abs(this.numerator), Math.abs(this.denominator));
    }
    add(other) {
        // Implement addition logic
        return new Fraction(
            this.numerator * other.denominator + other.numerator * this.denominator,
            this.denominator * other.denominator
        );
    }

    subtract(other) {
        // Implement subtraction logic
        return new Fraction(
            this.numerator * other.denominator - other.numerator * this.denominator,
            this.denominator * other.denominator
        );
    }

    multiply(other) {
        // Implement multiplication logic
        return new Fraction(
            this.numerator * other.numerator,
            this.denominator * other.denominator
        );
    }

    divide(other) {
        // Implement division logic
        return new Fraction(
            this.numerator * other.denominator,
            this.denominator * other.numerator
        );
    }

    toString()
    {
        this.simplify();
        if (this.numerator === this.denominator)
        {
            return '1';
        }
        if (this.numerator === 0)
        {
            return '0';
        }
        if (this.denominator === 1)
        {
            return `${this.numerator}`;
        }
        if (this.denominator === 0)
        {
            console.log("ERROROROR DENOM CANT BE ZERO");
            return;
        }
        if (this.denominator < 0) //ensure denom is always positive
        {
            return `\\frac{${this.numerator * -1}}{${this.denominator * -1}}`;
        }
        return `\\frac{${this.numerator}}{${this.denominator}}`;
    }
}

function polynomialMultiply(a, b)
{
    let result = new Array(a.length + b.length - 1).fill(0);
    for (var i = 0; i < a.length; i++) //iterate over a
    {
        for (var j = 0; j < b.length; j++) //iterate over b
        {
            result[-1 + result.length - (-2 + b.length - j + a.length - i)] += a[i] * b[j]; //find degree of result and put at index
        }
    }
    return result;
}

function polynomialDivision(dividend, divisor) {
 
    const quotient = [];
    let remainder = [...dividend].map(x => new Fraction(x, 1)); // Convert each element to Fraction

    while (remainder.length >= divisor.length) {
        const ratio = remainder[0].divide(divisor[0]); // Calculate ratio as Fraction

        quotient.push(ratio); // Push fraction to quotient

        for (let i = 0; i < divisor.length; i++) {
            const product = ratio.multiply(divisor[i]); // Multiply ratio by divisor element
            remainder[i] = remainder[i].subtract(product); // Subtract product from remainder
        }

        remainder.shift(); // Remove leading zero term
    }

    return { quotient, remainder };
}

function formatTerm(term, degree)
{
    var d;
    switch (degree)
    {
        case 0:
            d = "";
            break;
        case 1:
            d = "x";
            break;
        default:
            d = `x^{${degree}}`;
            break;
    }
    if (term === '0')
    {
        return "";
    }
    if (term === '1')
    {
        return d;
    }
    return `${term}${d}`;
}

function polynomialToString(a)
{
    var result = formatTerm(a[0], a.length - 1);
    for (var i = 0; i < a.length; i++)
    {
        if (a[i] === 0)
        {
            continue;
        }
        if (!(a[i] instanceof Fraction))
        {
            if (a[i] < 0)
            {
                result += ` - ${formatTerm(a[i], a.length - i - 1)}`;
            }
            else
            {
                result += ` + ${formatTerm(a[i], a.length - i - 1)}`;
            }
            continue;
        }
        if (!(a[i]).sign()) //fraction is negative
        {
            result += ` - ${formatTerm(a[i].abs(), a.length - i - 1)}`;
        }
        else
        {
            result += ` + ${formatTerm(a[i], a.length - i - 1)}`;
        }
    }
    return result;
}

function generateDivisionProblem(_settings, setDivision)
{
    var degrees;
    if (_settings[2] !== 0)
    {
        var degrees = randomNum(_settings[0] - _settings[2], _settings[0] + _settings[2]);
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

function generateDecompProblem(_settings)
{

}

function generateUnfactorableQuadratic() //probability of generating should be 30%
{
    let a = randomNum(1, 10);
    let c = randomNum(1, 10);
    return [a, randomNum(0, Math.floor(2 * Math.sqrt(a * c)) - 1), c];
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
                    <button type="button" className='interactive-button' tabIndex="0" onClick={() => generateDivisionProblem(_settings, setDivision)} aria-label="Generate New Problem">Generate New Problem</button>
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