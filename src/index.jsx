import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Lodging from "./pages/Lodging";
import NotFound from "./pages/NotFound";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./css/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lodging/:id" element={<Lodging />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
);
