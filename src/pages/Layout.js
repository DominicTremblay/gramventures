import React, {Component} from 'react';
import Nav from '../components/layout/Nav.js';
import Footer from '../components/layout/Footer.js';
import Header from '../components/layout/Header.js';
import BriefOpen from '../components/layout/BriefOpen.js';
import Voting from '../components/layout/Voting.js';
import Closed from '../components/layout/Closed.js';
import Applybrief from '../components/layout/Applybrief.js';
import Votebrief from '../components/layout/Votebrief.js';
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
