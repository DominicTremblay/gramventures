import React, {Component} from 'react';
var axios = require('axios');
import Auth from '../api/Auth.js'
import Request from '../api/Request.js'

class SignIn extends Component {

  constructor() {
    super();
    console.log(JSON.parse(localStorage.getItem('token') || '{}'));
    this.state = {objects: []};
  }

  componentDidMount() {
   let _this = this;
   let token = Auth.retrieveToken();
   let url = "http://localhost:3000/login?" + "token="+ token;
   console.log(url);
   Request.getToken(url)
      .then(function(user){
        console.log(user);
        _this.setState(user);
      }, function(errorMessage){
        alert("errorMessage");
      });
  }

  render() {
    return (
        <div>
          <h3>SignIn Component</h3>
          
        </div>
    )
  }
  
}

export default SignIn;