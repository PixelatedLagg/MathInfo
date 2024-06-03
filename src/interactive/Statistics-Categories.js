import '../index.css';
import React, { useState, useEffect } from 'react';

function generatePrompt(setPrompt, _promptTypes)
{
    var length = 0;
    for (var i = 0; i < 14; i++)
    {
        if (_promptTypes[i])
        {
            length++;
        }
    }
    var rand = Math.floor(Math.random() * (length - 1));
    length = 0;
    for (var i = 0; i < 14; i++)
    {
        if (_promptTypes[i])
        {
            if (length === rand)
            {
                /*var json;
                import(`.././data/interactive/Statistics-Categories.json`)
                .then((json) => json[length][Math.floor(Math.random() * 19)])
                .catch(_ => null);*/

                setPrompt({text: "aids", ans: "testing"});
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

export default function StatisticsCategories(props) {
    const [_prompt, setPrompt] = useState({text: "Select the inference categories then click 'Generate New Problem'.", ans: "Generate a problem!"});
    const [_promptTypes, setPromptTypes] = useState([]);
    document.title = "Statistics Categories";
    props.onSetNames("Interactive Statistics*Categories");
    props.onSetLinks("/interactive /interactive/statistics-categories");
    function handleChange(num) {
        _promptTypes[num] = !_promptTypes[num];
        setPromptTypes(_promptTypes);
    }
    return (
        <div className='content'>
            <div className='section'>
                <div className="text">
                    <h1>Statistics Categories</h1>
                    <div className="checkboxes">
                        <div className="input-label"><input type="checkbox" id="0" checked={_promptTypes[0]} onChange={() => handleChange(0)}/><label for="0">Population Proportion Test</label></div>
                        <div className="input-label"><input type="checkbox" id="1" checked={_promptTypes[1]} onChange={() => handleChange(1)}/><label for="1">Difference in Population Proportions Test</label></div>
                        <div className="input-label"><input type="checkbox" id="2" checked={_promptTypes[2]} onChange={() => handleChange(2)}/><label for="2">Population Mean Test</label></div>
                        <div className="input-label"><input type="checkbox" id="3" checked={_promptTypes[3]} onChange={() => handleChange(3)}/><label for="3">Difference in Population Means Test</label></div>
                        <div className="input-label"><input type="checkbox" id="4" checked={_promptTypes[4]} onChange={() => handleChange(4)}/><label for="4">Difference in Population Means (Paired) Test</label></div>
                        <div className="input-label"><input type="checkbox" id="5" checked={_promptTypes[5]} onChange={() => handleChange(5)}/><label for="5">Chi Square Goodness of Fit Test</label></div>
                        <div className="input-label"><input type="checkbox" id="6" checked={_promptTypes[6]} onChange={() => handleChange(6)}/><label for="6">Chi Square Independence Test</label></div>
                        <div className="input-label"><input type="checkbox" id="7" checked={_promptTypes[7]} onChange={() => handleChange(7)}/><label for="7">Chi Square Homogeneity Test</label></div>
                        <div className="input-label"><input type="checkbox" id="8" checked={_promptTypes[8]} onChange={() => handleChange(8)}/><label for="8">Linear Regression Slope Test</label></div>
                        <div className="input-label"><input type="checkbox" id="9" checked={_promptTypes[9]} onChange={() => handleChange(9)}/><label for="9">Confidence Interval for Population Proportion</label></div>
                        <div className="input-label"><input type="checkbox" id="10" checked={_promptTypes[10]} onChange={() => handleChange(10)}/><label for="10">Confidence Interval for the Difference in Population Proportions</label></div>
                        <div className="input-label"><input type="checkbox" id="11" checked={_promptTypes[11]} onChange={() => handleChange(11)}/><label for="11">Confidence Interval for Population Mean</label></div>
                        <div className="input-label"><input type="checkbox" id="12" checked={_promptTypes[12]} onChange={() => handleChange(12)}/><label for="12">Confidence Interval for the Difference in Population Means</label></div>
                        <div className="input-label"><input type="checkbox" id="13" checked={_promptTypes[13]} onChange={() => handleChange(13)}/><label for="13">Confidence Interval for the Difference in Population Means (Paired)</label></div>
                        <div className="input-label"><input type="checkbox" id="14" checked={_promptTypes[14]} onChange={() => handleChange(14)}/><label for="14">Confidence Interval for Linear Regression Slope</label></div>
                    </div>
                    <button type="button" className='interactive-button' tabIndex="0" onClick={() => generatePrompt(setPrompt, _promptTypes)}>Generate New Problem</button>
                    <div className="prompt">
                        <p>Prompt: {_prompt.text}</p>
                    </div>
                    <p style={{marginTop: "8px", marginLeft: "8px"}}>Solution:</p>
                </div>
                <div className='media'>
                </div>
            </div>
        </div>
        );
}