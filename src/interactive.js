import './index.css';
import { React, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Interactive(props)
{
    document.title = "Interactive";
    useEffect(() => {
        props.onSetNames("Interactive");
        props.onSetLinks("/interactive");
    }, [props]);
    return (
        <div className="interactive-section">
            <div className="home-alltext" style={{marginBottom: "32px"}}>
                <h1>Interactive</h1>
                <p>Interactive activities allow you to test your math skills with randomly generated problems.</p>
            </div>
            <div className="divider"></div>
            <div className="article-grid">
                <Link to='/interactive/basic-trigonometry' aria-label="Visit Basic Trigonometry Page">Basic Trigonometry</Link>
                <Link to='/interactive/statistics-categories' aria-label="Visit Statistics Categories Page">Statistics Categories</Link>
                <Link to='/interactive/polynomial-division' aria-label="Visit Polynomial Division Page">Polynomial Division</Link>
            </div>
        </div>
    );
}

//<li><Link to='/interactive/polynomial-division' aria-label="Visit Polynomial Division Page">Polynomial Division</Link></li>