import React from "react";
import "./css/style.css";
import Home from "./components/Home";
import Navigation from "./components/Navbar";
import News from "./components/News";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="components/News" element={<News />} />
        <Route path="components/Contact" element={<Contact />} />
      </ Routes>
      <Footer />
    </>
  );
}

export default App;
