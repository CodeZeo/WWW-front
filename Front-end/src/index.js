import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import VerSol from './VerSol';
import Nav from "./Nav";
import TabSol from './TabSol';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
const header = ReactDOM.createRoot(document.getElementById('header'));
header.render(
  <React.StrictMode>
    <Nav />
  </React.StrictMode>
);
root.render(
  <React.StrictMode>
    <VerSol />
  </React.StrictMode>
);
root2.render(
  <React.StrictMode>
    <TabSol />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
