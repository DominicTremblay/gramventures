import React, {Component} from 'react';
import Breadcrumb from './Gramventures/Breadcrumb.js'
//import {axios} from 'axios';
var axios = require('axios');

class Vote extends Component {



    render() {
      var innerBannerStyle = {
      backgroundImage: 'url(images/header-11.jpg)'
    };

    return (
  <div>
 
 <section className="cp-single-photo">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
        
          <div className="frame">
          <a href="#"><img className="vote-symbol" src="images/vote-no.png" alt="No" /></a>
          </div>
        </div>
        <div className="col-md-5">
          <div className="frame"><a href="#"><img src="images/photography-category/voting/s-people/single-photo-1.jpg" alt="img" /></a></div>
        </div>
        <div className="col-md-3">
          <div className="cp-text-box">
            <div className="row">
                <div className="left-col">
                  <h2><a href="#">Title </a></h2>
                  <div className="cp-image-detail">
                  <div className="head"> <span className="icon-icons-12"></span>  
                    <h2>Details</h2>
                    </div>
                  <ul>
                    <li><a href="#" style={{paddingRight:'5px'}}><i className="fa fa-instagram"></i> @nemo </a><a href="#" style={{paddingRight:'5px'}}><i className="fa fa-heart"> </i> 47</a><a href="#" style={{paddingRight:'5px'}}><i className="fa fa-share-alt" > </i></a></li>
                    <li></li>
                    <li></li>
                    <li> <span className="text">By</span> <strong> : Nemo Clownfish</strong> </li>
                    <li> <span className="text">Category</span> <strong>:  Sea, Wild</strong> </li>
                    <li> <span className="text">Uploaded</span> <strong>:  June 2, 2016</strong> </li>    
                    <li> <span className="text">Keywords</span> <strong>: dress, girl, relaxation, beauty, body, face </strong> </li>
                  </ul>
                </div>
                </div>          
            </div>            
          </div>  
        </div>
          <div className="col-md-2">
          <div className="frame">
          <a href="#"><img className="vote-symbol" src="images/vote-yes.png" alt="No" /></a>
          </div>
        </div>  
      </div>

    </div>
  </section>

 
  </div>
    )
  }
  
}

export default Vote;