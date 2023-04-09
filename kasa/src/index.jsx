import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom"
import './index.css';
import Home from './pages/Home';
import Header from './components/Header';
import About from './pages/About';
import Logement from './pages/About';
import reportWebVitals from './reportWebVitals';
import NotFound from './pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
    <Routes>
   
          <Route index element={<Home />} />
          <Route path="About" element={<About />} /> 
          <Route path="Logement" element={<Logement />} /> 

          <Route path="*" element={<NotFound />} />
       
       
    </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
