import React, {Component} from 'react';
import {Router, RouterContext} from 'react-router';
import Auth from './Auth.js';
import Request from './Request';

class Connect extends Component {

  constructor(props, context) {
    super(props);
    context.router;
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
        _this.context.router.push('/gramventures?status=open');
      }, function(errorMessage){
        alert("errorMessage");
      });
  }

    componentDidMount() {
      let token = this.props.location.query.token;
      Auth.saveToken(token);
      this.getUser();
      console.log(Auth.retrieveUser());
      console.log("Context: ", this.props);
      
    }



  render() {    

    return (
      <div>
      <h1>Connecting...</h1>  
      </div>
    )
  }
}

Connect.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default Connect;