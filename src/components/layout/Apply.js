import React, {Component} from 'react';
import Breadcrumb from './Gramventures/Breadcrumb.js';

//import {axios} from 'axios';
import Request from '../api/Request.js';
import Auth from '../api/Auth.js';

var axios = require('axios');

class Apply extends Component {



  constructor(props) {
    super(props);
    this.state = {images: []};
  }

  componentDidMount() {
   let _this = this;
   let user = Auth.retrieveUser();
   let token = Auth.retrieveToken();
   console.log("Voilà le user", user);
   let hashtag = this.props.params.hashtag;
   let url = `http://localhost:3000/profile/images?cu=1&hashtag=${hashtag}&token=`+token;
   console.log(url);
   Request.getToken(url)
      .then(function(images){
        console.log("it worked!");
        console.log(images);
        _this.setState({images: images});
      }, function(errorMessage){
        alert("errorMessage");
      });
  }

  handleApply() {
    console.log("the button is working");

    let submissions = {
    gramventure_id: 1,
    image_id: 1
  }


    let url = "http://localhost:3000/submissions/1/1";
    Request.postRequest(url, submissions)
      .then(function(submissions){
      console.log("post request is working");
     
    }, 
    function(errorMessage){
      alert("errorMessage");
    });
    return false;
  }





    render() {
      var innerBannerStyle = {
      backgroundImage: 'url(images/header-11.jpg)'
    };

    var imagesComponents = this.state.images.map(function(item) {
        return (

          <li className="col-md-4">
          <div className="blog-post">
            <div className="cp-thumb">
              <a href="#"> <img src={item.url} alt="" /></a>
            </div>
              
              <ul className="post-meta">
                <li>
                  <input id="id1" name="name1" type="checkbox" />
                  <label for="id1"> Select</label>
                </li>
              </ul>
            </div>
            </li>
            )
      })

    return (
    <div>
      <section className="cp-inner-banner" style={innerBannerStyle}>
        <h1>Explore</h1>
          <Breadcrumb />
      </section>

      <div className="cp-main-content tb-50">
      <div className="cp-blog-posts">
      <div className="container">
      <div className="row"> 

                        
          <ul className="cp-blog-list cp-blog-grid ">
          {imagesComponents} 
          </ul>
          <div className="col-md-4">
          </div>
          <div className="col-md-4">
            <div className="cp-team-info">
              <button className="btn-view" onClick={this.handleApply}>Apply</button>
             </div>
            </div>
           <div className="col-md-4">
          </div>

        </div>
      </div>
    </div>
  </div>



  </div>
    )
  }
  
}

export default Apply;