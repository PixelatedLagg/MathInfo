import './index.css';
import React from 'react';
import { Route, Routes, Link } from "react-router-dom";

export default function Interactive() {
    document.title = "Interactives";
    return (<div className="content">
        <div className="text">
          <div>
            <h1>Interactive</h1>
            <p>Interactive activities allow you to test your math skills with randomly generated problems.</p>
          </div>
          <h2>Interactive Activities:</h2>
          <ul>
            <li><Link key='0' to='/interactive/basic-trigonometry'>Basic Trigonometry</Link></li>
          </ul>
        </div>
        <div className="media"></div>
      </div>);
}