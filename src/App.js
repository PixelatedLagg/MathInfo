import './index.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes, Link } from "react-router-dom";
import { Section } from "./Section"
import Home from "./Home"
import External from "./External"
import Article from "./Article"
import BasicTrigonometry from "./interactive/Basic-Trigonometry"
import Interactive from "./Interactive"

export default function App() {
  const [resources, setResources] = useState([]);
    useEffect(() => {
        import(`./data/Resources.json`)
        .then((res) => setResources(res.default.Resources))
        .catch(_ => null);
    }, [resources]);
    return (
      <div className="container">
        <nav>
          <div className="header">
            <Link className="header-button header-link vert-space" to="/">
              <h3>Home</h3>
            </Link>
            <div className="vert-space" id="resources">
              <button className="header-button" id="resources-button">
                <h3>Resources</h3>
              </button>
              <div id="resources-content">
                {resources.map((element, index) => <Link key={index} to={`/${element}`}>{element.charAt(0).toUpperCase() + element.slice(1)}</Link>)}
              </div>
            </div>
            <Link className="header-button header-link vert-space" to="/external">
              <h3>External Stuff</h3>
            </Link>
            <Link className="header-button header-link vert-space" to="/interactive">
              <h3>Interactive</h3>
            </Link>
          </div>
        </nav>
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/external"} element={<External />} />
          <Route path={"/:res"} element={<Section />} />
          <Route path={"/:res/:article"} element={<Article />} />
          <Route path={"/interactive"} element={<Interactive />} />
          <Route path={"/interactive/basic-trigonometry"} element={<BasicTrigonometry />} />
        </Routes>
      </div>
        );
}