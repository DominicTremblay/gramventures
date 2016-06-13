import React from 'react';
import Nav from '../components/layout/Nav.js';
import Footer from '../components/layout/Footer.js';

export default class Layout extends React.Component {

  render() {

    return (
      <div className='container'>
        <Nav />
        <h3 className='test-class'>Main Component</h3>
        {this.props.children}
        
      </div>
    )
  }
  
}
