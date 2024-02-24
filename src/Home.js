import './index.css';
import React from 'react';

export default function Home(props) {
    document.title = "Home";
    props.onSetNames("Home");
    props.onSetLinks("/");
    return (
        <div className="content" role="main">
            <div className="text">
                <h1>Welcome to MathInfo.org</h1>
                <p>Here you will find (mainly article-based) resources for Mathematics and Computer Science, along with some interactive activities to test your understanding.</p>
                <p>This website was created by Will and Alex, two highschoolers interested in the relating fields. It's their goal to spread the useful knowledge surrounding these topics.</p>
                <p>Mild disclaimer: we employ AI to enhance the editing process for the majority of our articles. Through its use, we strive to maintain the original structure, core concepts, and intent of the content while focusing on improving clarity and coherence.</p>
            </div>
            <div className="media">
                <div className="image">
                    <img src="mathinfologo.png" alt=""/>
                    <p>The MathInfo logo.</p>
                </div>
            </div>
        </div>
            );
}