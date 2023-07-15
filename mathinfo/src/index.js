import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';

const response = await fetch("https://mathinfo.org/sections/Resources.json");
const json = JSON.parse(await response.json());

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename={`/${process.env.PUBLIC_URL}`}>
      {heroes.map(hero => (<Link to={'/' + hero.id} />)}

      /* Component */
      <Route path="heroes/:id" component={Hero} />
      <App />
      
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);