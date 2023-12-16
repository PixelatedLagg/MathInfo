import './index.css';
import React from 'react';

export default function Home() {
    document.title = "Home";
    return (
        <div className="content">
            <div className="text">
                <h1>Welcome to MathInfo.org</h1>
                <p>Here you will find (mainly article-based) resources for Mathematics and Computer Science. Each subject is divided into sections, with each section having several articles.</p>
                <p>This website was created by Will and Alex, two highschoolers deeply interested in the relating fields. It is their goal to spread knowledge pertaining to the many intriguing facets of both Mathematics and Computer Science.</p>
            </div>
            <div className="media">
                <div className="image">
                    <img src="mathinfologo.png" alt="The MathInfo logo."/>
                    <p>The MathInfo logo.</p>
                </div>
            </div>
        </div>
            );
}