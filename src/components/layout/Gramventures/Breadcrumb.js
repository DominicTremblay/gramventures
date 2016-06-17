import React, {Component} from 'react';
import {Link} from 'react-router';

class Breadcrumb extends Component {

  render() {
    return (
      <ol className="breadcrumb">
        <li><Link to="/" activeClassName="active">Home</Link></li>
      </ol>      
    )
  }
  
}

export default Breadcrumb;