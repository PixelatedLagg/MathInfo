import './index.css';
import React, { useState, useEffect, useRef } from 'react';
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
            <svg class="header-menu" width="40px" height="40px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#00DDFF" d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"/></svg>
            <Link className="header-button header-link" to="/">
              <h3>Home</h3>
            </Link>
            <div id="resources" tabindex="0">
              <button className="header-button" id="resources-button" tabIndex="-1">
                <h3>Resources</h3>
              </button>
              <div id="resources-content">
                {resources.map((element, index) => <Link key={index} to={`/${element}`}>{element.charAt(0).toUpperCase() + element.slice(1)}</Link>)}
              </div>
            </div>
            <Link className="header-button header-link" to="/external">
              <h3>External Stuff</h3>
            </Link>
            <Link className="header-button header-link" to="/interactive">
              <h3>Interactive</h3>
            </Link>
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
//{document.getElementsByClassName("content")[0].getAttribute("data-names").split(' ').map((element, index) => generateLocation(element, index))}