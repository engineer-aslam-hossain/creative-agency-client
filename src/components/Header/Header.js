import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logos/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <header className='container'>
      <Navbar expand='lg'>
        <Navbar.Brand>
          <Link to='/'>
            <img src={logo} className='logoImg' alt='' />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav '>
          <Nav className='ml-auto justify-content-center align-items-center'>
            <Link className='active' to='/'>
              Home
            </Link>
            <Link to='/portfolio'>Our Portfolio</Link>
            <Link to='/team'>Our Team</Link>
            <Link to='/contact'>Contact Us</Link>
            <Link to='/login' className='loginBtn'>
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
