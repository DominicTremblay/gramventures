import React, {Component} from 'react';
import {Link} from 'react-router';

class LoginType extends Component {

  logout() {
    let currentUser = this.props.currentUser;
    if (Object.keys(currentUser).length === 0 && currentUser.constructor === Object)
      return;
    else
      return(<a href='#' onClick={this.clearLogout} style={{fontSize: '12px'}}>Log out</a>);
  }

  clearLogout() {
    console.log("logging out")
    localStorage.clear();
  }

  getLink() {
    let currentUser = this.props.currentUser;
    if (Object.keys(currentUser).length === 0 && currentUser.constructor === Object)
      return(<a href='http://localhost:3000/oauth/connect'><i className='fa fa-instagram'></i>Log in with Instagram</a>);
    else
      return(<Link to="/profile" style={{color: '#d64652'}}>{currentUser[0].full_name}</Link>);
  }

  render() {
    return (
      <div>{this.getLink()} {this.logout()}</div>  
    )
  }
}

export default LoginType;