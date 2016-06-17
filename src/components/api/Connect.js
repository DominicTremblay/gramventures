import React, {Component} from 'react';
import {Navigation} from 'react-router';
import Auth from './Auth.js';
import Request from './Request';

class Connect extends Component {

  constructor() {
    super();
    console.log(JSON.parse(localStorage.getItem('token') || '{}'));
    this.state = {objects: []};
  }

  getUser() {
   console.log("Getting the user");
   let _this = this;
   let token = Auth.retrieveToken();
   let url = "http://localhost:3000/login?token="+token;
   console.log(url);
   Request.getUser(url)
      .then(function(user){
        console.log(user);
        _this.setState(user);
        Auth.saveUser(user);
      }, function(errorMessage){
        alert("errorMessage");
      });
  }

    componentDidMount() {
      let token = this.props.location.query.token;
      Auth.saveToken(token);
      this.getUser();
      console.log(Auth.retrieveUser());
      window.location='/grammasters?open';
    }

  render() {    

    return (
      <div>
      <h1>Connecting...</h1>  
      </div>
    )
  }
}

export default Connect;