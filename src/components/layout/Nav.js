import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router';

class Nav extends Component {
  render() {
    return (
      <div>
        <h2>Nav Component</h2>
        <a href="http://localhost:3000/oauth/connect">[Log in]</a>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Homepage</IndexLink>
        <Link to="/gramventures" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>Gramventures</Link>
        <Link to="/signin" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>Signin</Link>
        <Link to="/connect" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>Connect</Link>
        <Link activeClassName='active' to={ {pathname: '/connect', query: { token: 'abc123' } 
         }}>Access Token</Link>
        
      </div>
    );
  }
}

export default Nav;
