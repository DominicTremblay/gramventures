import React, {Component} from 'react';
import {Link} from 'react-router';

class Breadcrumb extends Component {

  render() {
    return (
      <ol className="breadcrumb">
        <li><Link to="/" activeClassName="active">Home</Link></li>
        <li><Link to="/gramventures" activeClassName="active">Explore</Link></li>
        <li className="active">Open</li>
      </ol>      
    )
  }
  
}

export default Breadcrumb;