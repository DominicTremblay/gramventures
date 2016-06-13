import React from 'react';
import Nav from '../components/layout/Nav.js';


export default class Layout extends React.Component {

  render() {

    return (
      <div className='container'>
        <Nav />
        <h3 className='test-class'>Main Component</h3>
        {console.log(this.props.children)}
        {this.props.children}
      </div>
    )
  }
  
}
