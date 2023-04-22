import React from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Employment from "./pages/Employment";

const App = () => {
  return (
    <BrowserRouter>
    <Sidebar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/employment" element={<Employment/>}/>
      </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
