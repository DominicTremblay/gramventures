import React from 'react';
import {Link} from 'react-router';
import Auth from '../../api/Auth.js';
import LoginType from './LoginType.js';

class LoginSection extends React.Component {
 

  render() {


    return (
      <div className="login-section">
        <ul>
          <li><LoginType currentUser={Auth.retrieveUser()} /></li>
        </ul>
      </div>
    )
  }
  
}

export default LoginSection;