import React, {Component} from 'react';
import {Link} from 'react-router';

class Breadcrumb extends Component {

  render() {
    return (
      <ol className="breadcrumb">
        <li><Link to="/" activeClassName="active">Home /</Link></li>
        <li><Link to="/gramventures?status=open" activeClassName="active">Open /</Link></li>
        <li><Link to="/gramventures?status=vote" activeClassName="active">Vote /</Link></li>
        <li><Link to="/gramventures?status=close" activeClassName="active">Closed</Link></li>
      </ol>      
    )
  }
  
}

export default Breadcrumb;