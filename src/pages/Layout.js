import React, {Component} from 'react';
import Nav from '../components/layout/Nav.js';
import Footer from '../components/layout/Footer.js';
import Header from '../components/layout/Header.js';
import Login from '../components/layout/Login.js';
import Gramventures from '../components/layout/Gramventures.js';
import Signup from '../components/layout/Signup.js';

export default class Layout extends Component {

  render() {

    return (

      <div>
        <Nav />

        <Header />

        {this.props.children}

        <Footer />
      </div>
    )
  }
  
}
