import React, {Component} from 'react';
import SideBarSocial from './SideBarSocial.js'
import {Link} from 'react-router';
import Auth from '../../api/Auth.js';
import LoginType from './LoginType.js';

class SideBarMenu extends Component {

  render() {
    return (
      <div className="sidebar-menu-box">
        <div className="cp-burger-nav"> 

          <div id="cp_side-menu-btn" className="cp_side-menu"><span className=""><span className="icon-icons-07"></span></span></div>

          <div id="cp_side-menu"> <a id="cp-close-btn" className="crose"><i className="fa fa-close"></i></a>
            <div className="cp-top-bar">
              <div className="login-section">
                <ul>
                  <li><LoginType currentUser={Auth.retrieveUser()} /></li>  
                </ul>
              </div>
            </div>
            <strong className="logo-2"><a href="index.html"><img src="images/logo.png" alt="img" /></a></strong>
            <div className="content mCustomScrollbar">
              <div id="content-1" className="content">
                <div className="cp_side-navigation">
                  <nav>
                    <ul className="navbar-nav">
               
                      <li><a href="http://localhost:8080/#/gramventures?status=open&_k=7i0ywc">Explore</a></li>
                      <li><a href="http://localhost:8080/#/gramventures?status=open&_k=7i0ywc">Open grammventures</a></li> 
                      <li><a href="http://localhost:8080/#/gramventures?status=voting&_k=brn0wu">Voting grammventures</a></li>
                      <li><a href="http://localhost:8080/#/gramventures?status=closed&_k=80jptf">Closed grammventures</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <SideBarSocial />
            <strong className="copy">Gramventures &copy; 2016 All Rights Reserved </strong> </div>

          
        </div>
      </div>
    )
  }
  
}

export default SideBarMenu;