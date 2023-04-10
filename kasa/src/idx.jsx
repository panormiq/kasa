import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom"
import './style/css/index.css';
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/About';
import reportWebVitals from './reportWebVitals';
import NotFound from './pages/NotFound';
import Layout from './components/layout';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      
    <Routes>
          <Route path="/" element={<Layout />}>   
            <Route index element={<Home />} />
            <Route path="about" element={<About />} /> 
            <Route path="Logement" element={<Logement />} /> 

            <Route path="*" element={<NotFound />} />
          </Route>
       
    </Routes>
   
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
