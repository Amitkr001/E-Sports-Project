import { BrowserRouter, Route, Routes } from "react-router-dom"; // Corrected import statement for BrowserRouter, Route, and Routes
import React from "react";
import Home from "./pages/Home";
import About from "./pages/about";
import Events from "./pages/events"; 
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Blogs from "./pages/Blogs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/events" element={<Events />} /> 
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes> 
    </BrowserRouter>
  );
}
