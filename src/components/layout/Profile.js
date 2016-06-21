import React, {Component} from 'react';

import Breadcrumb from './Gramventures/Breadcrumb.js';
import Request from '../api/Request.js';
import Auth from '../api/Auth.js';
import ListElement from './Profile/ListElement.js';

var axios = require('axios');

class Profile extends Component {

constructor(props){
  super(props);

  this.state = {
    user: {
      full_name: "Loading...",
      email: "Loading...",
      instagram_handle: "Loading...",
      bio: "Loading..."
    },
    submissions: []
  }
}

  componentDidMount() {
   let _this = this;
   let currentUser = Auth.retrieveUser();
   let url = `http://localhost:3000/profile?cu=${currentUser[0].id}`;

   console.log(url);
   Request.getRequest(url)
      .then(function(user){
        console.log("it worked!");
        console.log(user);
        _this.setState({user: user});
        console.log(_this.state.user);
      }, function(errorMessage){
        alert("errorMessage");
      });

   url = `http://localhost:3000/profile/submissions?cu=${currentUser[0].id}`
   Request.getRequest(url)
      .then(function(submissions){
        console.log("it worked!");
        console.log("Submissions: ", submissions);
        _this.setState({submissions: submissions});
        console.log(_this.state.submissions);
      }, function(errorMessage){
        alert("errorMessage");
      });

  }

    render() {
      var innerBannerStyle = {
      backgroundImage: 'url(images/header-11.jpg)'
    };

    return (
      
  <div>
 
  <div className="cp-main-content tb-50"> 
    <div className="cp-team-details">
      <div className="container">
        <div className="row"> 
        <div className="col-md-2"> 
        </div>
          <div className="col-md-4">
            <div className="cp-team-info">
              <div className="cp-thumb"><img src={this.state.user.profile_picture} alt="" /></div>
               </div>
          </div>         
          <div className="col-md-6">
            <div className="cp-team-info">
             <div className="contact-title">
                <h2>{this.state.user.full_name}</h2>
                <strong><a href={`http://instagram.com/${this.state.user.instagram_handle}`} target="_blank">instagram.com/{this.state.user.instagram_handle}</a></strong> </div>
              <h3>Bio</h3>
              {this.state.user.bio}
              <br/>
              <br/>
              <ul className="social">
                <li><a href="#" className="fb"><span className="icon-socialicons-01"></span></a></li>
                <li><a href="#" className="ins"><span className="icon-socialicons-03"></span></a></li>
                <li><a href="#" className="tw"><span className="icon-socialicons-04"></span></a></li>
                <li><a href="#" className="pin"><span className="icon-socialicons-05"></span></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-2"> 
        </div>
        </div> 
        <div className="row">
        <hr /> 
        </div>     
        <div className="row">  
       <section className="cp-category cp-photo-box">
    <h3>Your Submissions</h3>   
    <ul>
      <ListElement submissions={this.state.submissions} />      
    </ul>
  </section>
        </div>
      </div>
    </div>
  </div>
  </div>
    )
  }
  
}


export default Profile;