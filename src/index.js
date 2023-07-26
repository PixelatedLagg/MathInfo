import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import Section from './Section'
import { HashRouter, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './fonts/font.woff2'

const rootElement = 
document.getElementById('root');
const root = 
createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);