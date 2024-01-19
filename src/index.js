import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter   as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header'

import reportWebVitals from './reportWebVitals';
import Welcome from './component/Welcome';
import About from './component/About';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>

 <Routes>
<Route  path='/' element={<Welcome/>}/>
<Route  path='/Home' element={<App/>}/>
<Route  path='/About' element={<About/>}/>

 </Routes>
    </Router>
  </React.StrictMode>
);


reportWebVitals();
