import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Sponsor from './pages/Sponsor';
import Contact from './pages/Contact';
import Error from './pages/Error';
import "./App.css"


function App() {
  return (

    <><BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/Sponsor" element={<Sponsor />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="*" element={ <Error/>}></Route>
    </Routes>
  </BrowserRouter></>
   
     
      
   
  );
}

export default App;
