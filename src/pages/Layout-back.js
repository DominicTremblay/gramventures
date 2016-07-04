import React from 'react';
import Nav from '../components/layout/Nav.js';
import Footer from '../components/layout/Footer.js';
import Header from '../components/layout/Header.js';

export default class Layout extends React.Component {

  render() {

    return (
      <div>
        <Header />
        //<h3 className='test-class'>Main Component</h3>
        //{this.props.children}
        <Footer />
      </div>
    )
  }
  
}
