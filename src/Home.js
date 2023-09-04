import './index.css';
import React from 'react';
import { Helmet } from 'react-helmet';

export default function Home() {
    document.title = "MathInfo - Home";
    return (
        <div className="content">
            {/*<Helmet>
                <meta property="og:type" content="website" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:title" content="Home" />
                <meta property="og:description" content="MathInfo.org is a cool place to learn about Math and Computer Science." />
                <meta property="og:image" content="https://mathinfo.org/mathinfologo.png" />
    </Helmet>*/}
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