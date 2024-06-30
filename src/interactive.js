import './index.css';
import React from 'react';
import { Route, Routes, Link } from "react-router-dom";

export default function Interactive(props) {
    document.title = "Interactive";
    props.onSetNames("Interactive");
    props.onSetLinks("/interactive");
    return (<div className="content" role="main">
        <div className="text">
          <div>
            <h1>Interactive</h1>
            <p>Interactive activities allow you to test your math skills with randomly generated problems.</p>
          </div>
          <h2>Interactive Activities:</h2>
          <ul>
            <li><Link to='/interactive/basic-trigonometry' onSetNames={props.onSetNames} onSetLinks={props.onSetLinks}>Basic Trigonometry</Link></li>
            <li><Link to='/interactive/statistics-categories' onSetNames={props.onSetNames} onSetLinks={props.onSetLinks}>Statistics Categories</Link></li>
          </ul>
        </div>
        <div className="media"></div>
      </div>);
}
//<li><Link to='/interactive/fraction-decomposition' onSetNames={props.onSetNames} onSetLinks={props.onSetLinks}>Fraction Decomposition</Link></li>