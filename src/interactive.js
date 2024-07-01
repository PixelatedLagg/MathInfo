import './index.css';
import { React, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Interactive(props) {
    document.title = "Interactive";
    useEffect(() => {
      props.onSetNames("Interactive");
      props.onSetLinks("/interactive");
    }, [props]);
    return (<div className="content" role="main">
        <div className="text">
          <div>
            <h1>Interactive</h1>
            <p>Interactive activities allow you to test your math skills with randomly generated problems.</p>
          </div>
          <h2>Interactive Activities:</h2>
          <ul>
            <li><Link to='/interactive/basic-trigonometry'>Basic Trigonometry</Link></li>
            <li><Link to='/interactive/statistics-categories'>Statistics Categories</Link></li>
            <li><Link to='/interactive/polynomial-division'>Polynomial Division</Link></li>
          </ul>
        </div>
        <div className="media"></div>
      </div>);
}