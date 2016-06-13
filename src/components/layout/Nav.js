import React from 'react';
import {Link, IndexLink} from 'react-router';

class Nav extends React.Component {
  render() {
    return (
      <div>
        <h2>Nav Component</h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Homepage</IndexLink>
        <Link to="/gramventures" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>Gramventures</Link>
        <Link to="/signin" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>Signin</Link>
        
      </div>
    );
  }
}

export default Nav;
