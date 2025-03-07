import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

//store.dispatch(getProjects());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="main">
   <React.StrictMode>
   	<BrowserRouter>
    	<App />
    </BrowserRouter>
   </React.StrictMode>
  </div>,
);