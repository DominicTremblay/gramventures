import React from 'react';
import {Link} from 'react-router';

class LoginSection extends React.Component {

  render() {
    return (
      <div className="login-section">
        <ul>
          <li><a href="login.html"><i className="fa fa-sign-out"></i>Log in <b>/</b></a></li>
          <li><Link to="/signup" activeClassName="active">Sign up</Link></li>
          
        </ul>
      </div>
    )
  }
  
}

export default LoginSection;