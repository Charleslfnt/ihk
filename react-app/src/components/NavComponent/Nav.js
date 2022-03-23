import './Nav.css';
import React, { useState} from "react";
import { Routes, Route, Link } from "react-router-dom";



class Navbar extends React.Component {
  constructor() {
    super();
    this.state =  {
      sticky: true,
      scrollPos: 0
    }
    }

    componentDidMount = () => {
      window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount = () => {
      window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
      this.setState({
        scrollPos: document.body.getBoundingClientRect().top,
        show: document.body.getBoundingClientRect().top > this.state.scrollPos
      });
    }

  render() {
    
return(
  <>
    <nav className="navbar navbar-light sticky-top navbar-expand-lg">
      <div className="container-fluid">
    <Link to="/" className="title main-title">IHK LTD</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item"><Link to="/about">A propos de nous</Link></li>
        <li className="nav-item"><Link to="/product">Nos produits</Link></li>
        <li className="nav-item"><Link to="/contact">Contact</Link></li>
        <li className="nav-item"><Link to="/login">Connexion</Link></li>
      </ul>
      </div>
      </div>
    </nav>
 
  </>

        );
  }

}

export default Navbar;


/**
 * <div className={this.state.sticky ? 'sticky' : 'header'} id="myHeader">
 */

