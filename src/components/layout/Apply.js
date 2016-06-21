import React, {Component} from 'react';
import Breadcrumb from './Gramventures/Breadcrumb.js';

//import {axios} from 'axios';
import Request from '../api/Request.js';
import Auth from '../api/Auth.js';

var axios = require('axios');

class Apply extends Component {



  constructor(props) {
    super(props);
    this.state = {images: [],
      modalChecked: false,
      modalNopicture: false
    };
  }

  componentDidMount() {
   let _this = this;
   let user = Auth.retrieveUser();
   let token = Auth.retrieveToken();
   console.log("Voilà le user", user);
   let hashtag = this.props.params.hashtag;
   let url = `http://localhost:3000/profile/images?cu=${user[0].id}&hashtag=${hashtag}&token=${token}&gramventure=${_this.props.params.id}`
   console.log(url);
   Request.getToken(url)
      .then(function(images){
        console.log("it worked!");
        console.log(images);
        if (images.length === 0){
          _this.setState({modalNopicture: true});
        } else { 
        _this.setState({images: images});
        }
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

    let url = "http://localhost:3000/submissions";
    console.log(submissions);
    Request.postRequest(url, submissions)
      .then(function(submission){
      console.log("post request is working");
      if (submissions.length !== 0){
      console.log("The submissions array is not empty");
      _this.setState({modalChecked: true}); 
      }
      //window.location = "http://localhost:8080/#/gramventures?status=open";
    }, 
    function(errorMessage){
      alert("errorMessage");
    });
    return false;
  }

  handleClose() {
    window.location = "http://localhost:8080/#/gramventures?status=open";
  }



    render() {
      let _this = this;
      var innerBannerStyle = {
      backgroundImage: 'url(images/header-11.jpg)'
    };
    var styleHashtag ={textDecoration: "underline",
    color: "blue"};

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
    <div className= "modal-container" >

  <input id="modal-toggle" type="checkbox" checked={_this.state.modalNopicture}> </input>



    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>No more photos with the hashtag <a href="http://localhost:8080/#/gramventures?status=open" style={styleHashtag}>#{this.props.params.hashtag}</a> !</h2>
        <label className="modal-close button" for="modal-toggle" onClick={this.handleClose}>OK</label>
      </div>
    </div>
  </div>





    
  <div className= "modal-container" >

  <input id="modal-toggle" type="checkbox" checked={_this.state.modalChecked}> </input>



    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Successfully added to #{this.props.params.hashtag}!</h2>
        <label className="modal-close button" for="modal-toggle" onClick={this.handleClose}>OK</label>
      </div>
    </div>
  </div>
  

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