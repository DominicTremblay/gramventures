import React from 'react';
import {Link} from 'react-router';

class LoginSection extends React.Component {

  render() {
    return (
      <div className="login-section">
        <ul>
          <li><a href="login.html"><i className="fa fa-instagram"></i>Log in with Instagram</a></li>
        </ul>
      </div>
    )
  }
  
}

export default LoginSection;