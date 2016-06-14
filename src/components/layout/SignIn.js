import React, {Component} from 'react';
var axios = require('axios');

class SignIn extends Component {

  constructor() {
    super();
    console.log(JSON.parse(localStorage.getItem('token') || '{}'));
    this.state = {objects: []};
  }

  retrieveToken(){
    return token = JSON.parse(localStorage.getItem('token') || '{}')
  }

  buildURL(){
    return "http://localhost:3000/login?" + retrieveToken();
  }

  componentDidMount() {
   var _this = this;
   let token = JSON.parse(localStorage.getItem('token') || '{}');
   console.log('token:', token);
   let url = "http://localhost:3000/login?" + "token="+ token;
   console.log('url:',url);
   console.log('Contacting server with access token');
    this.serverRequest = url
      axios
        .get(url)
        .then(function(result) {    
          _this.setState({
            objects: result.data

          });
        })
        .catch (function (response) {
          console.log(response);
        }) 
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