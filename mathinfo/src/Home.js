import './App.css';
import React from 'react';

class Home extends React.Component {
  render() {
      return (
        <div class="content">
            <div class="text">
                <h1>Welcome to MathInfo.org</h1>
                <p>Here you will find (mainly article-based) resources for Algebra 1, Geometry, Algebra 2, Trigonometry, and Computer Science.</p>
            </div>
            <div class="media">
                <div class="image">
                    <img src="../../mathinfologo.png" width="300px" height="300px"/>
                    <p>The MathInfo logo.</p>
                </div>
            </div>
        </div>
            );
  }
}

export default Home;