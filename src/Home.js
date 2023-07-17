import './App.css';
import React from 'react';

export default function Home() {
    return (
        <div className="content">
            <div className="text">
                <h1>Welcome to MathInfo.org</h1>
                <p>Here you will find (mainly article-based) resources for Algebra 1, Geometry, Algebra 2, Trigonometry, and Computer Science.</p>
            </div>
            <div className="media">
                <div className="image">
                    <img src="../../mathinfologo.png" width="300px" height="300px" alt="The MathInfo logo."/>
                    <p>The MathInfo logo.</p>
                </div>
            </div>
        </div>
            );
}