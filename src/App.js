import './App.css';
import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import About from './About';
import Home from './Home';

class App extends React.Component {
  render() {
      return (
        <div className="App">
          <div class="header">
            <button class="header-button">
              <a class="header-link" href="index.html">
                <h3>Home</h3>
              </a>
            </button>
            <div id="resources">
            <button class="header-button" id="resources-button">
              <h3>Resources</h3>
            </button>
            <div id="resources-content">
            <a style="border-top-right-radius: 5px;">
              <Link to="/algebra1">Algebra 1</Link>
            </a>
            <a style="border-bottom-right-radius: 5px;">
              <Link to="/algorithms">Algorithms</Link>
            </a>
          </div>
        </div>
        </div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
            );
  }
}

export default App;