import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Navpage from './pages/navpage'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Addtocard from './pages/Addtocard';
import ForgotPassword from './pages/ForgotPassword';

const AppContent = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addtocard" element={<Addtocard />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

const App = () => {
  return (
    <AppContent />
  )
}

export default App