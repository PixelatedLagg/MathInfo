import './index.css';
import { React, useEffect } from 'react';

export default function External(props)
{
    document.title = "External";
    useEffect(() => {
        props.onSetNames("External");
        props.onSetLinks("/external");
    }, [props]);
    return (
        <div className="content" role="main">
            <div className="text">
                <h1>External Stuff</h1>
                <p>Web Resources:</p>
                <ul>
                    <li>
                        <a href='https://www.youtube.com/@ProfessorLeonard' aria-label="Visit Professor Leonard on Youtube">Professor Leonard on Youtube</a>
                    </li>
                    <li>
                        <a href='https://www.khanacademy.org/' aria-label="Visit Khan Academy">Khan Academy</a>
                    </li>
                    <li>
                        <a href='https://mathisfun.com/' aria-label="Visit MathIsFun">MathIsFun</a>
                    </li>
                    <li>
                        <a href='https://chilimath.com/' aria-label="Visit ChiliMath">ChiliMath</a>
                    </li>
                    <li>
                        <a href='https://encyclopediaofmath.org/wiki/Main_Page' aria-label="Visit Encyclopedia of Math">Encyclopedia of Math</a>
                    </li>
                    <li>
                        <a href='https://sophisticatedprimate.com/' aria-label="Visit SophisticatedPrimate">SophisticatedPrimate</a>
                    </li>
                </ul>
                <p>Books:</p>
                <ul>
                    <li>
                        <a href='https://archive.org/details/ElementsOfAlgebraLeonhardEuler2015/mode/2up' aria-label="Visit Archive Page for Elements of Algebra by Leonhard Euler">Elements of Algebra by Leonhard Euler</a>
                    </li>
                    <li>
                        <a href='https://www.amazon.com/Introduction-Number-Theory-Problem-Solving/dp/1934124125' aria-label="Visit Amazon Page for Introduction to Number Theory (Art of Problem Solving Introduction) by Mathew Crawford">Introduction to Number Theory (Art of Problem Solving Introduction) by Mathew Crawford</a>
                    </li>
                    <li>
                        <a href='https://archive.org/details/precalculuswithl0000lars_e0m3' aria-label="Visit Amazon Page for Precalculus with Limits: a Graphing Approach 4th edition by Ron Larson">Precalculus with Limits: a Graphing Approach 4th edition by Ron Larson</a>
                    </li>
                </ul>
            </div>
            <div className="media" role="complementary">
                <div className="image">
                    <img src="https://m.media-amazon.com/images/I/81XUnIqK4cL._SY466_.jpg" alt=""/>
                    <p>The cover of Introduction to Number Theory (Art of Problem Solving Introduction) by Mathew Crawford.</p>
                </div>
                <div className="image">
                    <img src="https://pictures.abebooks.com/isbn/9780618394807-us.jpg" alt=""/>
                    <p>The cover of Precalculus with Limits: a Graphing Approach 4th edition by Ron Larson.</p>
                </div>
            </div>
        </div>
            );
}