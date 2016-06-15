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
        <Link to="/profile" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>Profile</Link>

        <Link to="/voting" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>Voting</Link>
        <Link to="/votebrief" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>Votebrief</Link>

        <Link to="/closed" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>Closed</Link>
        <Link to="/closedbrief" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>Closedbrief</Link>

        <Link to="/applybrief" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>Applybrief</Link>
        <Link to="/apply" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>Apply</Link>

        <Link activeClassName='active' to={ {pathname: '/connect', query: { token: 'abc123' } 
         }}>Access Token</Link>
        
      </div>
    );
  }
}

export default Nav;
