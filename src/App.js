import './index.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes, Link } from "react-router-dom";
import { Section } from "./Section"
import Home from "./Home"
import External from "./External"
import Article from "./Article"
import BasicTrigonometry from "./interactive/Basic-Trigonometry"
import StatisticsCategories from './interactive/Statistics-Categories';
import Interactive from "./Interactive"
import PolynomialDivision from './interactive/PolynomialDivision';

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
    return namesSplit.map((element, index) => <li key={index}><Link to={linksSplit[index]} aria-label={`Visit ${element.replaceAll('*', ' ')} Page`}>{element.replaceAll('*', ' ')}</Link></li>);
}

function toggleDark()
{
    if (document.documentElement.getAttribute("data-theme") === "light")
    {
        localStorage.setItem("data-theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
    }
    else
    {
        localStorage.setItem("data-theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
    }
}

function toggleFontSize()
{
    if (document.documentElement.getAttribute("font-size") === "normal")
    {
        localStorage.setItem("font-size", "double");
        document.documentElement.setAttribute("font-size", "double");
    }
    else
    {
        localStorage.setItem("font-size", "normal");
        document.documentElement.setAttribute("font-size", "normal");
    }
}

export default function App()
{
    const [resources, setResources] = useState([]);
    useEffect(() => {
        import(`./data/Resources.json`).then((res) => setResources(res.default.Resources)).catch(_ => null);
        if (localStorage.getItem("data-theme") == null)
        {
            localStorage.setItem("data-theme", "light");
            document.documentElement.setAttribute("data-theme", "light");
        }
        else
        {
            document.documentElement.setAttribute("data-theme", localStorage.getItem("data-theme"));
        }
        if (localStorage.getItem("font-size") == null)
        {
            localStorage.setItem("font-size", "normal");
            document.documentElement.setAttribute("font-size", "normal");
        }
        else
        {
            document.documentElement.setAttribute("font-size", localStorage.getItem("font-size"));
        }
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
            <nav role="navigation" aria-label="Main Navigation">
                <div className="header" role="menubar" aria-label="Horizontal Menu">
                    <Link className="header-button header-link" to="/" role="menuitem" aria-label="Visit Home Page">
                        <span>Home</span>
                    </Link>
                    <div className="dropdown" role="presentation">
                        <button className="header-button dropdown-button" role="menuitem" aria-haspopup="true" aria-expanded="false" aria-label="Resources Dropdown">
                            <span>Resources</span>
                        </button>
                        <div className="dropdown-content" role="menu">
                        {resources.map((element, index) => (
                            <Link key={index} to={`/${element}`} role="menuitem" aria-label={`Visit ${element.charAt(0).toUpperCase() + element.slice(1)} Section`}>
                            {element.charAt(0).toUpperCase() + element.slice(1)}
                            </Link>
                        ))}
                        </div>
                    </div>
                    <Link className="header-button header-link" to="/external" role="menuitem" aria-label="Visit External Page">
                        <span>External Stuff</span>
                    </Link>
                    <Link className="header-button header-link" to="/interactive" role="menuitem" aria-label="Visit Interactive Page">
                        <span>Interactive</span>
                    </Link>
                    <div className="dropdown" role="presentation">
                        <button className="header-button dropdown-button" role="menuitem" aria-haspopup="true" aria-expanded="false" aria-label="Settings Dropdown">
                            <span>⛯</span>
                        </button>
                        <div className="dropdown-content" role="menu">
                            <button onClick={toggleDark} role="menuitem">Light/Dark Mode</button>
                            <button onClick={toggleFontSize} role="menuitem">200% Font Size</button>
                        </div>
                    </div>
                </div>
                <div id="location">
                    <ul>
                        <li>
                            <Link to="/" aria-label="Visit Home Page">Home</Link>
                        </li>
                        {generateLocation(names, links)}
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route exact path={"/"} element={<Home onSetNames={handleNames} onSetLinks={handleLinks}/>}/>
                <Route exact path={"/external"} element={<External onSetNames={handleNames} onSetLinks={handleLinks}/>}/>
                <Route path={"/:res"} element={<Section onSetNames={handleNames} onSetLinks={handleLinks}/>}/>
                <Route path={"/:res/:article"} element={<Article onSetNames={handleNames} onSetLinks={handleLinks}/>}/>
                <Route path={"/interactive"} element={<Interactive onSetNames={handleNames} onSetLinks={handleLinks}/>}/>
                <Route path={"/interactive/basic-trigonometry"} element={<BasicTrigonometry onSetNames={handleNames} onSetLinks={handleLinks}/>}/>
                <Route path={"/interactive/statistics-categories"} element={<StatisticsCategories onSetNames={handleNames} onSetLinks={handleLinks}/>}/>
                <Route path={"/interactive/polynomial-division"} element={<PolynomialDivision onSetNames={handleNames} onSetLinks={handleLinks}/>}/>
            </Routes>
        </div>
    );
}