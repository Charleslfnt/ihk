import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './responsive.css';
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from '../HomeComponent/Home'
import About from '../AboutComponent/About'
import Product from '../ProductComponent/Product'
import Login from '../LoginComponent/Login'
import Navbar from '../NavComponent/Nav';
import Footer from '../FooterComponent/footer'
import Contact from '../ContactComponent/Contact'
import Button from '../ButtonComponent/Button';




class App extends React.Component {
  render() {
    return (
      <div className="App">
         <Navbar/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>
      </div >
    );
  }
}

export default App;
