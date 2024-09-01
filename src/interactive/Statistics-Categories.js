import '../index.css';
import { React, useState, useEffect } from 'react';
import json from '.././data/interactive/Statistics-Categories.json'

function randomNum(lower, upper)
{
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

function generatePrompt(setPrompt, _promptTypes)
{
    var length = 0;
    for (var i = 0; i < 15; i++)
    {
        if (_promptTypes[i])
        {
            length++;
        }
    }
    var rand = randomNum(0, length - 1);
    length = 0;
    for (var i = 0; i < 15; i++)
    {
        if (_promptTypes[i])
        {
            if (length === rand)
            {
                setPrompt({text: json[`${i}`][randomNum(0, 19)], ans: numToType(i)});
            }
            length++;
        }
    }
    return null;
}

function numToType(num)
{
    switch (num)
    {
        case 0: return "Population Proportion Test";
        case 1: return "Difference in Population Proportions Test";
        case 2: return "Population Mean Test";
        case 3: return "Difference in Population Means Test";
        case 4: return "Difference in Population Means (Paired) Test";
        case 5: return "Chi Square Goodness of Fit Test";
        case 6: return "Chi Square Independence Test";
        case 7: return "Chi Square Homogeneity Test";
        case 8: return "Linear Regression Slope Test";
        case 9: return "Confidence Interval for Population Proportion";
        case 10: return "Confidence Interval for the Difference in Population Proportions";
        case 11: return "Confidence Interval for Population Mean";
        case 12: return "Confidence Interval for the Difference in Population Means";
        case 13: return "Confidence Interval for the Difference in Population Means (Paired)";
        default: return "Confidence Interval for Linear Regression Slope";
    }
}

export default function StatisticsCategories(props)
{
    const [_prompt, setPrompt] = useState({text: "Select the inference categories then click 'Generate New Problem'.", ans: "Generate a problem!"});
    const [_promptTypes, setPromptTypes] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
    document.title = "Statistics Categories";

    useEffect(() => {
        props.onSetNames("Interactive Statistics*Categories");
        props.onSetLinks("/interactive /interactive/statistics-categories");
    }, [props]);

    function handleChange(num) {
        _promptTypes[num] = !_promptTypes[num];
        setPromptTypes(_promptTypes);
    }

    const selectAllCheckboxes = () => {
        for (var i = 0; i < 15; i++)
        {
            document.getElementById(`${i}`).checked = true;
            _promptTypes[i] = true;
        }
        setPromptTypes(_promptTypes);
    };

    const deselectAllCheckboxes = () => {
        for (var i = 0; i < 15; i++)
        {
            document.getElementById(`${i}`).checked = false;
            _promptTypes[i] = false;
        }
        setPromptTypes(_promptTypes);
    };
    return (
        <div className='content'>
            <div className='section'>
                <h1>Statistics Categories</h1>
                <div className="checkboxes">
                    <div className="input-label"><input type="checkbox" id="0" onChange={() => handleChange(0)}/><label htmlFor="0">Population Proportion Test</label></div>
                    <div className="input-label"><input type="checkbox" id="1" onChange={() => handleChange(1)}/><label htmlFor="1">Difference in Population Proportions Test</label></div>
                    <div className="input-label"><input type="checkbox" id="2" onChange={() => handleChange(2)}/><label htmlFor="2">Population Mean Test</label></div>
                    <div className="input-label"><input type="checkbox" id="3" onChange={() => handleChange(3)}/><label htmlFor="3">Difference in Population Means Test</label></div>
                    <div className="input-label"><input type="checkbox" id="4" onChange={() => handleChange(4)}/><label htmlFor="4">Difference in Population Means (Paired) Test</label></div>
                    <div className="input-label"><input type="checkbox" id="5" onChange={() => handleChange(5)}/><label htmlFor="5">Chi Square Goodness of Fit Test</label></div>
                    <div className="input-label"><input type="checkbox" id="6" onChange={() => handleChange(6)}/><label htmlFor="6">Chi Square Independence Test</label></div>
                    <div className="input-label"><input type="checkbox" id="7" onChange={() => handleChange(7)}/><label htmlFor="7">Chi Square Homogeneity Test</label></div>
                    <div className="input-label"><input type="checkbox" id="8" onChange={() => handleChange(8)}/><label htmlFor="8">Linear Regression Slope Test</label></div>
                    <div className="input-label"><input type="checkbox" id="9" onChange={() => handleChange(9)}/><label htmlFor="9">Confidence Interval for Population Proportion</label></div>
                    <div className="input-label"><input type="checkbox" id="10" onChange={() => handleChange(10)}/><label htmlFor="10">Confidence Interval for the Difference in Population Proportions</label></div>
                    <div className="input-label"><input type="checkbox" id="11" onChange={() => handleChange(11)}/><label htmlFor="11">Confidence Interval for Population Mean</label></div>
                    <div className="input-label"><input type="checkbox" id="12" onChange={() => handleChange(12)}/><label htmlFor="12">Confidence Interval for the Difference in Population Means</label></div>
                    <div className="input-label"><input type="checkbox" id="13" onChange={() => handleChange(13)}/><label htmlFor="13">Confidence Interval for the Difference in Population Means (Paired)</label></div>
                    <div className="input-label"><input type="checkbox" id="14" onChange={() => handleChange(14)}/><label htmlFor="14">Confidence Interval for Linear Regression Slope</label></div>
                </div>
                <p style={{marginTop: "12px", marginBottom: "0"}}>
                    <button type="button" className='interactive-button' tabIndex="0" onClick={selectAllCheckboxes} aria-label="Select All">Select All</button>
                    &nbsp;•&nbsp;
                    <button type="button" className='interactive-button' tabIndex="0" onClick={deselectAllCheckboxes} aria-label="Deselect All">Deselect All</button>
                </p>
                <button type="button" className='interactive-button' tabIndex="0" onClick={() => generatePrompt(setPrompt, _promptTypes)} aria-label="Generate New Problem">Generate New Problem</button>
                <div className="prompt" role="contentinfo" aria-live="assertive">
                    <p>Prompt: {_prompt.text}</p>
                </div>
                <p style={{marginTop: "12px", marginLeft: "12px"}} role="contentinfo" aria-live="assertive">Solution:<br/><strong id="solution" tabIndex="0">{_prompt.ans}</strong></p>
                <div className='media' role="complementary"></div>
            </div>
        </div>
    );
}