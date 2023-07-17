import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import Section from './Section'
import { HashRouter, Route, Routes, Link } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const response = JSON.stringify({
  "Resources" : ["algebra1"]
});
//const response = await fetch("https://mathinfo.org/data/Resources.json");

const json = JSON.parse(await response);

/*ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename={`/${process.env.PUBLIC_URL}`}>
      <App />
      <Routes>
        {json.Resources.map( resource => <Link to={`/${resource}`} /> )}
        <Route path="/:res" component={<Section />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);*/
//add <App /> back
const rootElement = 
document.getElementById('root');
const root = 
createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HashRouter basename={`/${process.env.PUBLIC_URL}`}>
      <App />
    </HashRouter>
  </React.StrictMode>,
);