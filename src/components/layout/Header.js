import React, {Component} from 'react';
import LoginSection from './Header/LoginSection.js'
import {Link} from 'react-router';
import SideBarSocial from './Header/SideBarSocial.js'
import Navbar from './Header/Navbar.js'
import SideBarMenu from './Header/SideBarMenu.js'

class Header extends Component {

  render() {
    return (
    <header id="header">
    <section className="logo-row"> 

      <SideBarMenu />

      <LoginSection />

      <div className="container"> <strong className="logo"><a href="index.html"><img src="images/logo.png" alt="logo" /></a></strong> </div>
    </section>

    <Navbar />

  </header>

    )
  }
  
}

export default Header;