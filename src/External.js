import './index.css';
import React from 'react';

export default function External() {
    document.title = "MathInfo - External Stuff";
    return (
        <div className="content">
            <div className="text">
                <h1>External Stuff</h1>
                <p>Cool websites:</p>
                <ul>
                    <li>
                        <a href='https://www.khanacademy.org/'>Khan Academy</a>
                    </li>
                    <li>
                        <a href='https://mathisfun.com/'>MathIsFun</a>
                    </li>
                    <li>
                        <a href='https://chilimath.com/'>ChiliMath</a>
                    </li>
                    <li>
                        <a href='https://encyclopediaofmath.org/wiki/Main_Page'>Encyclopedia of Math</a>
                    </li>
                    <li>
                        <a href='https://sophisticatedprimate.com/'>SophisticatedPrimate</a>
                    </li>
                </ul>
                <p>Cool books:</p>
                <ul>
                    <li>
                        <a href='https://archive.org/details/ElementsOfAlgebraLeonhardEuler2015/mode/2up'>Elements of Algebra by Leonhard Euler</a>
                    </li>
                    <li>
                        <a href='https://www.amazon.com/Introduction-Number-Theory-Problem-Solving/dp/1934124125'>Introduction to Number Theory (Art of Problem Solving Introduction) by Mathew Crawford</a>
                    </li>
                    <li>
                        <a href='https://archive.org/details/precalculuswithl0000lars_e0m3'>Precalculus with Limits: a Graphing Approach 4th edition by Ron Larson</a>
                    </li>
                </ul>
            </div>
        </div>
            );
}