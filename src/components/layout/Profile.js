import React, {Component} from 'react';
import Request from '../api/Request.js';


class Profile extends Component {
  componentDidMount() {
   let _this = this;
   // let id = 1;
   let url = "http://localhost:3000/profile";
   console.log(url);
   Request.getToken(url)
      .then(function(profile){
        console.log("it worked!");
        console.log(profile);
        _this.setState(profile);
      }, function(errorMessage){
        alert("errorMessage");
      });
  }

}




export default Profile;