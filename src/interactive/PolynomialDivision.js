import '../index.css';
import React, { useState, useEffect } from 'react';
import Fraction from '../utils/Fraction'

//[4, 0, 6, 9] means 4x^3 + 0x^2 + 6x + 9

function randomNum(min, max) { //INCLUSIVE
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomSign() //WORKS
{
    if (randomNum(0, 1) === 0)
    {
        return -1;
    }
    return 1;
}

function randomCoeff(small) //WORKS
{
    if (small)
    {
        return randomNum(0, 3) * randomSign();
    }
    if (randomNum(0, 2) === 0)
    {
        return randomNum(5, 9) * randomSign();
    }
    return randomNum(0, 4) * randomSign();
}

function nonzero_randomCoeff(small)
{
    if (small)
    {
        return randomNum(1, 3) * randomSign();
    }
    if (randomNum(1, 2) === 0)
    {
        return randomNum(5, 9) * randomSign();
    }
    return randomNum(1, 4) * randomSign();
}

function polynomialMultiply(a, b) //WORKS
{
    if (a.length === 1 && a[0] === 1)
    {
        return b;
    }
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

function polynomialAddition(a, b)
{
    let size = Math.max(a.length, b.length);
    var result = [];
    for (var i = 0; i < size; i++)
    {
        result[i] = 0;
    }
    for (let i = 0; i < a.length; i++) //add terms from a
    {
        result[i] = a[i];
    }
    for (let i = 0; i < b.length; i++) //add terms from b
    {
        result[i] += b[i];
    }
    return result;
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

function polynomialToString(a) //WORKS
{
    var result = formatTerm(a[0], a.length - 1);
    for (var i = 1; i < a.length; i++)
    {
        if (a[i] === 0)
        {
            continue;
        }
        if (!(a[i] instanceof Fraction))
        {
            if (a[i] < 0)
            {
                result += ` - ${formatTerm(a[i] * -1, a.length - i - 1)}`;
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

function generatePolynomial(deg, small) //WORKS
{
    var remaining = deg;
    var current = [1];
    while (remaining > 0)
    {
        if (remaining > 1 && randomNum(0, 4) === 0) //20% chance for unfactorable quadratic
        {
            current = polynomialMultiply(current, generateUnfactorableQuadratic(small));
            remaining -= 2;
            continue;
        }
        current = polynomialMultiply(current, [nonzero_randomCoeff(small), randomCoeff(small)]); //highest degree term cant have a coeff of zero
        remaining--;
    }
    return current;
}

function generateUnfactorableQuadratic(small) //WORKS
{
    let a = nonzero_randomCoeff(small);
    let c = nonzero_randomCoeff(small);
    if (a * c < 0) //ensure a * c isnt negative
    {
        a *= -1;
    }
    return [a, randomNum(0, Math.floor(2 * Math.sqrt(a * c)) - 1), c];
}

function generateDivisionProblem(_settings, setDivision)
{
    var c_deg = randomNum(_settings[0] - _settings[2], _settings[0] + _settings[2]); //(Tn - r, Tn + r)
    var b_deg = randomNum(_settings[1] - _settings[2], _settings[1] + _settings[2]); //(Td - r, Td + r)
    if (b_deg >= c_deg)
    {
        b_deg = c_deg - 2;
    }
    if (c_deg < 3)
    {
        c_deg = 3;
        b_deg = 2;
    }
    var poly_b = generatePolynomial(b_deg, _settings[3]);
    if (_settings[4] && randomNum(0, 2) === 0) //33% chance of remainder
    {
        var poly_a_q = generatePolynomial(c_deg - b_deg, _settings[3]);
        var poly_a_r = generatePolynomial(randomNum(0, c_deg), _settings[3]);
        var poly_c = polynomialAddition(polynomialMultiply(poly_b, poly_a_q), poly_a_r);
        console.log("b=" + polynomialToString(poly_b));
        console.log("q=" + polynomialToString(poly_a_q));
        console.log("r=" + polynomialToString(poly_a_r));
        setDivision(`\\[\\frac{${polynomialToString(poly_c)}}{${polynomialToString(poly_b)}} = ${polynomialToString(poly_a_q)} + \\frac{${polynomialToString(poly_a_r)}}{${polynomialToString(poly_b)}}\\]`);
        return;
    }
    var a_deg = c_deg - b_deg;
    var poly_a = generatePolynomial(a_deg, _settings[3]);
    var poly_c = polynomialMultiply(poly_a, poly_b);
    setDivision(`\\[\\frac{${polynomialToString(poly_c)}}{${polynomialToString(poly_b)}} = ${polynomialToString(poly_a)}\\]`);
}
//+ \\frac{${polynomialToString(result.remainder)}}{${polynomialToString(divisor)}}

export default function PolynomialDivision(props)
{
    const [_settings, setSettings] = useState([5, 3, 2, false, false]);
    const [_division, setDivision] = useState("\\( \\frac{dividend}{divisor} = quotient + \\frac{remainder}{divisor} \\)");
    document.title = "Polynomial Division";
    useEffect(() => {
        props.onSetNames("Interactive Polynomial*Division");
        props.onSetLinks("/interactive /interactive/polynomial-division");
    });

    function handleChange(index) {
        if (index > 2)
        {
            _settings[index] = document.getElementById(index).checked;
        }
        else
        {
            _settings[index] = parseInt(document.getElementById(index).value);
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
                        <div className="input-label"><input type="number" id="2" defaultValue={2} min={0} onChange={() => handleChange(2)} aria-label="Random Degree Variation" name="Random Degree Variation"/><label htmlFor="2">Random Degree Variation</label></div>
                        <div className="input-label"><input type="checkbox" id="3" onChange={() => handleChange(3)}/><label htmlFor="3">Smaller Coefficients</label></div>
                        <div className="input-label"><input type="checkbox" id="4" onChange={() => handleChange(4)}/><label htmlFor="4">Possible Remainder</label></div>
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


//generateDivisionProblem(_settings, setDivision)