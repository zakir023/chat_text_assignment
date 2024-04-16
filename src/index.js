import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './navbar';
import App1 from './emoji';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <App1 />
 

  </React.StrictMode>
);

