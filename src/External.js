import './index.css';
import { React, useEffect } from 'react';
import { Helmet } from 'react-helmet';

export default function External(props)
{
    document.title = "External";
    useEffect(() => {
        props.onSetNames("External");
        props.onSetLinks("/external");
    }, [props]);
    return (
        <div className="external-section">
            <Helmet>
                <meta property="og:title" content="External" />
                <meta property="og:description" content="Browse some external resources on MathInfo.org!" />
            </Helmet>
            <div className="home-alltext" style={{marginBottom: "32px"}}>
                <h1>External Resources</h1>
                <p>These are our favourite math resources: some online, some physical.</p>
            </div>
            <div className="divider"></div>
            <div className="article-grid">
                <a href='https://www.youtube.com/@ProfessorLeonard' aria-label="Visit Professor Leonard on Youtube">Professor Leonard on Youtube</a>
                <a href='https://www.khanacademy.org/' aria-label="Visit Khan Academy">Khan Academy</a>
                <a href='https://mathisfun.com/' aria-label="Visit MathIsFun">MathIsFun</a>
                <a href='https://chilimath.com/' aria-label="Visit ChiliMath">ChiliMath</a>
                <a href='https://encyclopediaofmath.org/wiki/Main_Page' aria-label="Visit Encyclopedia of Math">Encyclopedia of Math</a>
                <a href='https://sophisticatedprimate.com/' aria-label="Visit SophisticatedPrimate">SophisticatedPrimate</a>
                <a href='https://archive.org/details/ElementsOfAlgebraLeonhardEuler2015/mode/2up' aria-label="Visit Archive Page for Elements of Algebra by Leonhard Euler">Elements of Algebra by Leonhard Euler</a>
                <a href='https://www.amazon.com/Introduction-Number-Theory-Problem-Solving/dp/1934124125' aria-label="Visit Amazon Page for Introduction to Number Theory by Mathew Crawford">Introduction to Number Theory by Mathew Crawford</a>
                <a href='https://archive.org/details/precalculuswithl0000lars_e0m3' aria-label="Visit Amazon Page for Precalculus with Limits: a Graphing Approach 4th edition by Ron Larson">Precalculus with Limits: a Graphing Approach 4th edition by Ron Larson</a>
            </div>
        </div>
    );
}