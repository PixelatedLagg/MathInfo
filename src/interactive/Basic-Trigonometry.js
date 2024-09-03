import '../index.css';
import React, { useState, useEffect } from 'react';

function rand(min, max)
{
    return Math.floor(Math.random() * (max - min)) + min;
}

function rad(angle)
{
    return angle * (Math.PI / 180);
}

function deg(angle)
{
    return angle * (180 / Math.PI);
}

function generateSide(setSide)
{
    var calc = rand(1, 89), side = rand(1, 25);
    if (!Math.round(Math.random()))
    {
        switch (rand(0, 3))
        {
            case 0: //sin = b / c
                if (!Math.round(Math.random()))
                {
                    setSide({
                        angle1: `${calc}°`,
                        angle2: "",
                        sidea: "",
                        sideb: side,
                        sidec: "x",
                        answer: <strong id="solution" tabIndex="0">sin({calc}°) = {side} / x<br/>x * sin({calc}°) = {side}<br/>x = {side} / sin({calc}°)<br/>x ≈ {(side / Math.sin(rad(calc))).toFixed(1)}</strong>
                    });
                }
                else
                {
                    setSide({
                        angle1: `${calc}°`,
                        angle2: "",
                        sidea: "",
                        sideb: "x",
                        sidec: side,
                        answer: <strong id="solution" tabIndex="0">sin({calc}°) = x / {side}<br/>{side} * sin({calc}°) = x<br/>x ≈ {(side * Math.sin(rad(calc))).toFixed(1)}</strong>
                    });
                }
                break;
            case 1: //cos = a / c
                if (!Math.round(Math.random()))
                {
                    setSide({
                        angle1: `${calc}°`,
                        angle2: "",
                        sideb: "",
                        sidea: side,
                        sidec: "x",
                        answer: <strong id="solution" tabIndex="0">cos({calc}°) = {side} / x<br/>x * cos({calc}°) = {side}<br/>x = {side} / cos({calc}°)<br/>x ≈ {(side / Math.cos(rad(calc))).toFixed(1)}</strong>
                    });
                }
                else
                {
                    setSide({
                        angle1: `${calc}°`,
                        angle2: "",
                        sideb: "",
                        sidea: "x",
                        sidec: side,
                        answer: <strong id="solution" tabIndex="0">cos({calc}°) = x / {side}<br/>{side} * cos({calc}°) = x<br/>x ≈ {(side * Math.cos(rad(calc))).toFixed(1)}</strong>
                    });
                }
                break;
            default: //tan = b / a
                if (!Math.round(Math.random()))
                {
                    setSide({
                        angle1: `${calc}°`,
                        angle2: "",
                        sidec: "",
                        sideb: side,
                        sidea: "x",
                        answer: <strong id="solution" tabIndex="0">tan({calc}°) = {side} / x<br/>x * tan({calc}°) = {side}<br/>x = {side} / tan({calc}°)<br/>x ≈ {(side / Math.tan(rad(calc))).toFixed(1)}</strong>
                    });
                }
                else
                {
                    setSide({
                        angle1: `${calc}°`,
                        angle2: "",
                        sidec: "",
                        sideb: "x",
                        sidea: side,
                        answer: <strong id="solution" tabIndex="0">tan({calc}°) = x / {side}<br/>{side} * tan({calc}°) = x<br/>x ≈ {(side * Math.tan(rad(calc))).toFixed(1)}</strong>
                    });
                }
                break;
        }
    }
    else
    {
        switch (rand(0, 3))
        {
            case 0: //sin = a / c
                if (!Math.round(Math.random()))
                {
                    setSide({
                        angle2: `${calc}°`,
                        angle1: "",
                        sideb: "",
                        sidea: side,
                        sidec: "x",
                        answer: <strong id="solution" tabIndex="0">sin({calc}°) = {side} / x<br/>x * sin({calc}°) = {side}<br/>x = {side} / sin({calc}°)<br/>x ≈ {(side / Math.sin(rad(calc))).toFixed(1)}</strong>
                    });
                }
                else
                {
                    setSide({
                        angle2: `${calc}°`,
                        angle1: "",
                        sideb: "",
                        sidea: "x",
                        sidec: side,
                        answer: <strong id="solution" tabIndex="0">sin({calc}°) = x / {side}<br/>{side} * sin({calc}°) = x<br/>x ≈ {(side * Math.sin(rad(calc))).toFixed(1)}</strong>
                    });
                }
                break;
            case 1: //cos = b / c
                if (!Math.round(Math.random()))
                {
                    setSide({
                        angle2: `${calc}°`,
                        angle1: "",
                        sidea: "",
                        sideb: side,
                        sidec: "x",
                        answer: <strong id="solution" tabIndex="0">cos({calc}°) = {side} / x<br/>x * cos({calc}°) = {side}<br/>x = {side} / cos({calc}°)<br/>x ≈ {(side / Math.cos(rad(calc))).toFixed(1)}</strong>
                    });
                }
                else
                {
                    setSide({
                        angle2: `${calc}°`,
                        angle1: "",
                        sidea: "",
                        sideb: "x",
                        sidec: side,
                        answer: <strong id="solution" tabIndex="0">cos({calc}°) = x / {side}<br/>{side} * cos({calc}°) = x<br/>x ≈ {(side * Math.cos(rad(calc))).toFixed(1)}</strong>
                    });
                }
                break;
            default: //tan = a / b
                if (!Math.round(Math.random()))
                {
                    setSide({
                        angle2: `${calc}°`,
                        angle1: "",
                        sidec: "",
                        sidea: side,
                        sideb: "x",
                        answer: <strong id="solution" tabIndex="0">tan({calc}°) = {side} / x<br/>x * tan({calc}°) = {side}<br/>x = {side} / tan({calc}°)<br/>x ≈ {(side / Math.tan(rad(calc))).toFixed(1)}</strong>
                    });
                }
                else
                {
                    setSide({
                        angle2: `${calc}°`,
                        angle1: "",
                        sidec: "",
                        sidea: "x",
                        sideb: side,
                        answer: <strong id="solution" tabIndex="0">tan({calc}°) = x / {side}<br/>{side} * tan({calc}°) = x<br/>x ≈ {(side * Math.tan(rad(calc))).toFixed(1)}</strong>
                    });
                }
                break;
        }
    }
}

function generateAngle(setAngle)
{
    var side = rand(1, 25), side2 = rand(1, 25);
    if (!Math.round(Math.random())) //angle 1
    {
        switch (rand(0, 3))
        {
            case 0: //sin = b / c
                setAngle({
                    angle1: "θ",
                    angle2: "",
                    sidec: side + side2,
                    sideb: side,
                    sidea: "",
                    answer: <strong id="solution" tabIndex="0">sin(θ) = {side} / {side + side2}<br/>sin<sup>-1</sup>({side} / {side + side2}) = θ<br/>θ ≈ {(deg(Math.asin(side / (side + side2)))).toFixed(1)}°</strong>
                });
                break;
            case 1: //cos = a / c
                setAngle({
                    angle1: "θ",
                    angle2: "",
                    sidec: side + side2,
                    sideb: "",
                    sidea: side,
                    answer: <strong id="solution" tabIndex="0">cos(θ) = {side} / {side + side2}<br/>cos<sup>-1</sup>({side} / {side + side2}) = θ<br/>θ ≈ {(deg(Math.acos(side / (side + side2)))).toFixed(1)}°</strong>
                });
                break;
            default: //tan = b / a
                setAngle({
                    angle1: "θ",
                    angle2: "",
                    sidec: "",
                    sideb: side,
                    sidea: side2,
                    answer: <strong id="solution" tabIndex="0">tan(θ) = {side} / {side2}<br/>tan<sup>-1</sup>({side} / {side2}) = θ<br/>θ ≈ {(deg(Math.atan(side / side2))).toFixed(1)}°</strong>
                });
                break;
        }
    }
    else //angle 2
    {
        switch (rand(0, 3))
        {
            case 0: //sin = a / c
                setAngle({
                    angle1: "",
                    angle2: "θ",
                    sidec: side + side2,
                    sideb: "",
                    sidea: side,
                    answer: <strong id="solution" tabIndex="0">sin(θ) = {side} / {side + side2}<br/>sin<sup>-1</sup>({side} / {side + side2}) = θ<br/>θ ≈ {(deg(Math.asin(side / (side + side2)))).toFixed(1)}°</strong>
                });
                break;
            case 1: //cos = b / c
                setAngle({
                    angle1: "",
                    angle2: "θ",
                    sidec: side + side2,
                    sideb: side,
                    sidea: "",
                    answer: <strong id="solution" tabIndex="0">cos(θ) = {side} / {side + side2}<br/>cos<sup>-1</sup>({side} / {side + side2}) = θ<br/>θ ≈ {(deg(Math.acos(side / (side + side2)))).toFixed(1)}°</strong>
                });
                break;
            default: //tan = a / b
                setAngle({
                    angle1: "",
                    angle2: "θ",
                    sidec: "",
                    sideb: side,
                    sidea: side2,
                    answer: <strong id="solution" tabIndex="0">tan(θ) = {side2} / {side}<br/>tan<sup>-1</sup>({side2} / {side}) = θ<br/>θ ≈ {(deg(Math.atan(side2 / side))).toFixed(1)}°</strong>
                });
                break;
        }
    }
}

export default function Trigonometry(props)
{
    const [_side, setSide] = useState(0);
    const [_angle, setAngle] = useState(0);
    document.title = "Basic Trigonometry";

    useEffect(() => {
        props.onSetNames("Interactive Basic*Trigonometry");
        props.onSetLinks("/interactive /interactive/basic-trigonometry");
    }, [props]);

    useEffect(() => {
        generateSide(setSide);
        generateAngle(setAngle);
    }, []);
    return (
        <div className='content'>
            <div className='section'>
                <h1 style={{marginBottom: "48px"}}>Solve for Side</h1>
                <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet" role="contentinfo" aria-live="assertive" style={{marginBottom: "36px"}}>
                    <text id="sidea" xmlSpace="preserve" textAnchor="middle" fontSize="24" fontFamily="serif" strokeWidth="0" stroke="#000" fill="#000" y="255" x="40">{_side.sidea}</text>
                    <text id="sideb" xmlSpace="preserve" textAnchor="middle" fontSize="24" fontFamily="serif" strokeWidth="0" stroke="#000" fill="#000" y="465" x="228">{_side.sideb}</text>
                    <text id="sidec" xmlSpace="preserve" textAnchor="middle" fontSize="24" fontFamily="serif" strokeWidth="0" stroke="#000" fill="#000" y="233" x="259">{_side.sidec}</text>
                    <text stroke="#000" id="angle1" xmlSpace="preserve" textAnchor="middle" fontSize="24" fontFamily="serif" strokeWidth="0" fill="#000" y="136" x="90">{_side.angle1}</text>
                    <text id="angle2" xmlSpace="preserve" textAnchor="middle" fontSize="24" fontFamily="serif" strokeWidth="0" stroke="#000" fill="#000" y="426" x="380">{_side.angle2}</text>
                    <path d="m62,438l0,-376l376,376l-376,0z" strokeWidth="5" stroke="#000" fillOpacity="0" fill="#000"/>
                    <path d="m62.425,401.205l35,0l0,35l-35,0l0,-35z" strokeWidth="2" stroke="#000" fillOpacity="0" fill="#000"/>
                </svg>
                <button type="button" className='interactive-button' tabIndex="0" onClick={() => generateSide(setSide)} aria-label="Generate New Problem">Generate New Problem</button>
                <p style={{marginTop: "8px", marginLeft: "8px"}} role="contentinfo" aria-live="assertive">Solution:{_side.answer}</p>
            </div>
            <div className='section'>
                <h1 style={{marginBottom: "48px"}}>Solve for Angle</h1>
                <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet" role="contentinfo" aria-live="assertive" style={{marginBottom: "36px"}}>
                    <text id="sidea" xmlSpace="preserve" textAnchor="middle" fontSize="24" fontFamily="serif" strokeWidth="0" stroke="#000" fill="#000" y="255" x="40">{_angle.sidea}</text>
                    <text id="sideb" xmlSpace="preserve" textAnchor="middle" fontSize="24" fontFamily="serif" strokeWidth="0" stroke="#000" fill="#000" y="465" x="228">{_angle.sideb}</text>
                    <text id="sidec" xmlSpace="preserve" textAnchor="middle" fontSize="24" fontFamily="serif" strokeWidth="0" stroke="#000" fill="#000" y="233" x="259">{_angle.sidec}</text>
                    <text stroke="#000" id="angle1" xmlSpace="preserve" textAnchor="middle" fontSize="24" fontFamily="serif" strokeWidth="0" fill="#000" y="136" x="90">{_angle.angle1}</text>
                    <text id="angle2" xmlSpace="preserve" textAnchor="middle" fontSize="24" fontFamily="serif" strokeWidth="0" stroke="#000" fill="#000" y="426" x="380">{_angle.angle2}</text>
                    <path d="m62,438l0,-376l376,376l-376,0z" strokeWidth="5" stroke="#000" fillOpacity="0" fill="#000"/>
                    <path d="m62.425,401.205l35,0l0,35l-35,0l0,-35z" strokeWidth="2" stroke="#000" fillOpacity="0" fill="#000"/>
                </svg>
                <button type="button" className='interactive-button' tabIndex="0" onClick={() => generateAngle(setAngle)}>Generate New Problem</button>
                <p style={{marginTop: "8px", marginLeft: "8px"}} role="contentinfo" aria-live="assertive">Solution:{_angle.answer}</p>
            </div>
        </div>
    );
}