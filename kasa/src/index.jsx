import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom"
import './style/css/index.css';
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';
import reportWebVitals from './reportWebVitals';
import NotFound from './pages/NotFound';
import Layout from './components/layout';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
 
    <Router>
      <Header />
        <Routes>
          
        const [page, updatePage] = useState([]);
                <Route index element={<Home page={page} updatePage={updatePage} />} />
                <Route path="about" element={<About />} /> 
                <Route path="Logement/:id" element={<Logement />} /> 
                <Route path="*" element={<NotFound />} />
            
          
        </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
