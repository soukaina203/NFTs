import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter   as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header'

import reportWebVitals from './reportWebVitals';
import Welcome from './component/Welcome';
import About from './component/About';
import Pricing from './component/Pricing';
import Contact from './component/Contact';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>

 <Routes>
<Route  path='/' element={<Welcome/>}/>
<Route  path='/Home' element={<App/>}/>
<Route  path='/About' element={<About/>}/>
<Route  path='/Pricing' element={<Pricing/>}/>
<Route  path='/Contact' element={<Contact/>}/>

 </Routes>
    </Router>
  </React.StrictMode>
);


reportWebVitals();
