import './index.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes, Link } from "react-router-dom";
import { Section } from "./Section"
import Home from "./Home"
import Article from "./Article"

function GenerateResources(element, index, resources)
{
    if (resources[0] === element)
    {
      if (resources[resources.length - 1] === element)
      {
        return <Link key={index} style={{borderTopRightRadius: "5px", borderBottomRightRadius: "5px"}} to={`/${element}`}>{element.charAt(0).toUpperCase() + element.slice(1)}</Link>
      }
      else
      {
        return <Link key={index} style={{borderTopRightRadius: "5px"}} to={`/${element}`}>{element.charAt(0).toUpperCase() + element.slice(1)}</Link>
      }
    }
    if (resources[resources.length - 1] === element)
    {
      return <Link key={index} style={{borderBottomRightRadius: "5px"}} to={`/${element}`}>{element.charAt(0).toUpperCase() + element.slice(1)}</Link>
    }
    return <Link key={index} to={`/${element}`}>{element.charAt(0).toUpperCase() + element.slice(1)}</Link>
}

export default function App() {
  const [resources, setResources] = useState([]);
    useEffect(() => {
        import(`./data/Resources.json`)
        .then((res) => setResources(res.default.Resources))
        .catch(_ => null);
    }, [resources]);
    return (
      <div className="container">
        <div className="header">
          <Link className="header-button header-link vert-space" to="/">
            <h3>Home</h3>
          </Link>
          <div className="vert-space" id="resources">
            <button className="header-button" id="resources-button">
              <h3>Resources</h3>
            </button>
            <div id="resources-content">
              {resources.map((element, index) => GenerateResources(element, index, resources))}
            </div>
          </div>
        </div>
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route path={"/:res"} element={<Section />} />
          <Route path={"/:res/:article"} element={<Article />} />
        </Routes>
      </div>
        );
}