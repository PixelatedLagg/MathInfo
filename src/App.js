import './index.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes, Link } from "react-router-dom";
import { Section } from "./Section"
import Home from "./Home"
import External from "./External"
import Article from "./Article"
import BasicTrigonometry from "./interactive/Basic-Trigonometry"
import Interactive from "./Interactive"


function generateLocation(names, links)
{
  if (typeof(names) === "undefined")
  {
    return;
  }
  var namesSplit = names.split(' ');
  if (namesSplit[0] === "Home")
  {
    return;
  }
  var linksSplit = links.split(' ');
  return namesSplit.map((element, index) => <li><Link key={index} to={linksSplit[index]}>{element.replaceAll('*', ' ')}</Link></li>);
}

function toggleDark(mode, setMode)
{
  if (document.documentElement.getAttribute("data-theme") === "light")
  {
    document.documentElement.setAttribute("data-theme", "dark");
  }
  else
  {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

export default function App() {
    const [resources, setResources] = useState([]);
    useEffect(() => {
        import(`./data/Resources.json`)
        .then((res) => setResources(res.default.Resources))
        .catch(_ => null);
    }, [resources]);
    const [names, setNames] = useState('');
    const handleNames = (data) => {
      setNames(data);
    }
    const [links, setLinks] = useState('');
    const handleLinks = (data) => {
      setLinks(data);
    }
    return (
      <div className="container">
        <nav role="navigation">
          <div className="header">
            <Link className="header-button header-link" to="/">
              <span>Home</span>
            </Link>
            <div id="resources" tabindex="0">
              <button className="header-button" id="resources-button" tabIndex="-1">
                <span>Resources</span>
              </button>
              <div id="resources-content">
                {resources.map((element, index) => <Link key={index} to={`/${element}`}>{element.charAt(0).toUpperCase() + element.slice(1)}</Link>)}
              </div>
            </div>
            <Link className="header-button header-link" to="/external">
              <span>External Stuff</span>
            </Link>
            <Link className="header-button header-link" to="/interactive">
              <span>Interactive</span>
            </Link>
            <div className="icons">
              <svg height="100%" width="100%" viewBox="0, 0, 400, 400">
                <path d="M213.401 41.016 C 213.004 42.949,212.233 47.294,211.686 50.670 C 210.359 58.859,202.609 66.609,194.420 67.936 C 181.323 70.057,181.250 70.097,181.250 75.000 C 181.250 79.903,181.323 79.943,194.420 82.064 C 202.609 83.391,210.359 91.141,211.686 99.330 C 213.807 112.427,213.847 112.500,218.750 112.500 C 223.653 112.500,223.693 112.427,225.814 99.330 C 227.141 91.141,234.891 83.391,243.080 82.064 C 256.177 79.943,256.250 79.903,256.250 75.000 C 256.250 70.097,256.177 70.057,243.080 67.936 C 234.891 66.609,227.141 58.859,225.814 50.670 C 223.693 37.573,223.653 37.500,218.750 37.500 C 215.206 37.500,213.953 38.323,213.401 41.016 M116.301 59.766 C 27.214 112.124,10.222 236.690,81.888 312.055 C 156.099 390.098,286.087 375.830,340.234 283.699 C 350.984 265.409,350.917 265.196,336.095 270.441 C 207.447 315.966,84.012 192.618,129.521 64.013 C 134.807 49.074,134.604 49.009,116.301 59.766 M311.695 124.609 C 307.177 152.586,302.586 157.177,274.609 161.695 C 269.009 162.600,268.750 162.910,268.750 168.697 C 268.750 175.350,268.543 175.237,284.807 177.468 C 298.457 179.341,308.159 189.043,310.032 202.693 C 312.261 218.939,312.159 218.750,318.750 218.750 C 325.341 218.750,325.239 218.939,327.468 202.693 C 329.341 189.043,339.043 179.341,352.693 177.468 C 368.939 175.239,368.750 175.341,368.750 168.750 C 368.750 162.159,368.939 162.261,352.693 160.032 C 339.043 158.159,329.341 148.457,327.468 134.807 C 325.237 118.543,325.350 118.750,318.697 118.750 C 312.910 118.750,312.600 119.009,311.695 124.609 " stroke="none" fill="#BB00FF" fill-rule="evenodd" onClick={toggleDark}></path>
              </svg>
            </div>
          </div>
          <div id="location">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {generateLocation(names, links)}
            </ul>
          </div>
        </nav>
        <Routes>
          <Route exact path={"/"} element={<Home onSetNames={handleNames} onSetLinks={handleLinks}/>} />
          <Route exact path={"/external"} element={<External onSetNames={handleNames} onSetLinks={handleLinks}/>} />
          <Route path={"/:res"} element={<Section onSetNames={handleNames} onSetLinks={handleLinks}/>} />
          <Route path={"/:res/:article"} element={<Article onSetNames={handleNames} onSetLinks={handleLinks}/>} />
          <Route path={"/interactive"} element={<Interactive onSetNames={handleNames} onSetLinks={handleLinks}/>} />
          <Route path={"/interactive/basic-trigonometry"} element={<BasicTrigonometry onSetNames={handleNames} onSetLinks={handleLinks}/>} />
        </Routes>
      </div>
        );
}
//<svg class="header-menu" width="40px" height="40px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#00DDFF" d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"/></svg>