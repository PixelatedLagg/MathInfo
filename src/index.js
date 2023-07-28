import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './fonts/Inter-VariableFont_slnt,wght.ttf'

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