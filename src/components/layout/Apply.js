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

  handleSelect(data, i){

    let current_image = this.state.images[i];

    if (current_image.selected){ 
      current_image.selected = false;
      console.log(current_image);
      console.log('image deselected');
      console.log(data, i);
      this.setState({});
    } else { 
      console.log('image selected');
      console.log(current_image);
      console.log(data, i);
      current_image.selected = true;
      this.setState({});
    }
    
  }

  handleApply() {
    
    function isImageSelected(current_image){
      return current_image.selected;
    }
    let filter_image = this.state.images.filter(isImageSelected);
    let submissions = [];
    let _this = this;
    
    function pushImages(image, i){
      submissions.push({
        image_id: image.id,
        gramventure_id: _this.props.params.id
      });
    }
    filter_image.forEach(pushImages);

  //   let submissions = [{
  //   gramventure_id: 1,
  //   image_id: 1
  // }];

 
    

    let url = "http://localhost:3000/submissions";
    console.log(submissions);
    Request.postRequest(url, submissions)
      .then(function(submissions){
      console.log("post request is working");
      window.location = "http://localhost:8080/#/gramventures?status=open";
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

    var imagesComponents = this.state.images.map((item, i)=>{
        return (

          <li className="col-md-4">
          <div className="blog-post">
            <div className="cp-thumb">
              <img src={item.url} alt="" onClick={this.handleSelect.bind(this, item.id, i)}/>
            </div>
              
              <ul className="post-meta">
                <li>
                  <input id="id1" name="name1" checked={item.selected} type="checkbox" onClick={this.handleSelect.bind(this, item.id, i)}/>
                  <label for="id1" onClick={this.handleSelect.bind(this, item.id, i)}> Select</label>
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
              <button className="btn-view" onClick={this.handleApply.bind(this)}>Apply</button>
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