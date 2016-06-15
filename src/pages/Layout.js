import React from 'react';
import Nav from '../components/layout/Nav.js';
import Footer from '../components/layout/Footer.js';
import Header from '../components/layout/Header.js';
import BriefOpen from '../components/layout/BriefOpen.js';
import Login from '../components/layout/Login.js';
import Gramventures from '../components/layout/Gramventures.js';

export default class Layout extends React.Component {

  render() {

    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
  
}
