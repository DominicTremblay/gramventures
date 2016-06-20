import React, {Component} from 'react';
import {Link} from 'react-router';

class LoginType extends Component {

  getLink() {
    let currentUser = this.props.currentUser;
    if (Object.keys(currentUser).length === 0 && currentUser.constructor === Object)
      return(<a href='http://localhost:3000/oauth/connect'><i className='fa fa-instagram'></i>Log in with Instagram</a>);
    else
      return(<Link to="/profile">{currentUser[0].full_name}</Link>);
  }

  render() {

    return (
      <div>{this.getLink()}</div>
       
    )
  }
}

export default LoginType;