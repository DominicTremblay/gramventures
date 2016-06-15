import React, {Component} from 'react';
import Breadcrumb from './Gramventures/Breadcrumb.js'
//import {axios} from 'axios';
var axios = require('axios');
import Request from '../api/Request.js'

class Voting extends Component {


  registerVote(){

    let vote = {
      user_id: 1,
      submission_id: 1
    }

    let url = `http://localhost:3000/submission/${vote.submission_id}/vote`;
    console.log('URL to post: ', url)
    Request.postRequest(url, vote).then(function (response) {
      console.log(response);
    }, function (errorMessage) {
      alert("errorMessage");
    });

  }

  componentDidMount(){
    this.registerVote();
  }

  render() {
    var innerBannerStyle = {
    backgroundImage: 'url(images/header-11.jpg)'
  };

    return (
  <div>
  <section className="cp-inner-banner" style={innerBannerStyle}>
    <h1>Explore</h1>
      <Breadcrumb />
  </section>

  
  <section className="cp-category cp-space">

    <div className="container-fluid">
    
     <div className="row">
            <div classNameName="col-md-12">
              <ul className="cp-features-list">
                <li>              
                  <a href="brief-open.html"><h3>Open</h3></a>                 
                </li>
                <li className="active">                  
                 <a href=""><h3 style={{color: '#c23c48'}}>Voting</h3> </a>               
                </li>
                <li>
                 <a href="brief-closed.html"> <h3>Closed</h3></a>
                </li>
              </ul>
            </div>
          </div> 

      <div className="row">
        <div className="col-md-4">
          <div className="cp-box"> <a href="brief-vote1.html"><img src="images/photography-category/voting/category-img-1.jpg" alt="img" /></a>
            <div className="cp-text-box">
              <h2><a href="single-photo.html">JUNGLE IN THE CITY</a></h2>
              <strong className="title">#gramventure_jungle</strong>
              <div className="detail-row">
                <ul>
                  <li><a href="#"><i className="fa fa-picture-o" aria-hidden="true"></i>400</a></li>
                  <li><a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i>Voting closes: 2 days</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="cp-box"> <a href="brief-vote2.html"><img src="images/photography-category/voting/category-img-2.jpg" alt="img" /></a>
             <div className="cp-text-box">
              <h2><a href="single-photo.html">SUMMER IS HERE!</a></h2>
              <strong className="title">#gramventure_summer</strong>
              <div className="detail-row">
                 <ul>
                  <li><a href="#"><i className="fa fa-picture-o" aria-hidden="true"></i>400</a></li>
                  <li><a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i>Voting closes: 2 days</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="cp-box"> <a href="brief-vote3.html"><img src="images/photography-category/voting/category-img-3.jpg" alt="img" /></a>
             <div className="cp-text-box">
              <h2><a href="single-photo.html">FAVORITE FOOD</a></h2>
              <strong className="title">#gramventure_food</strong>
              <div className="detail-row">
                 <ul>
                  <li><a href="#"><i className="fa fa-picture-o" aria-hidden="true"></i>400</a></li>
                  <li><a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i>Voting closes: 2 days</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="cp-box"> <a href="brief-vote.html"><img src="images/photography-category/voting/category-img-4.jpg" alt="img" /></a>
            <div className="cp-text-box">
              <h2><a href="single-photo.html">NIGHT LIFE</a></h2>
              <strong className="title">#gramventure_night</strong>
              <div className="detail-row">
                <ul>
                  <li><a href="#"><i className="fa fa-picture-o" aria-hidden="true"></i>400</a></li>
                  <li><a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i>Voting closes: 2 days</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="cp-box"> <a href="brief-vote.html"><img src="images/photography-category/voting/category-img-5.jpg" alt="img" /></a>
            <div className="cp-text-box">
              <h2><a href="single-photo.html">TITLE</a></h2>
              <strong className="title">#gramventure_title</strong>
              <div className="detail-row">
                 <ul>
                  <li><a href="#"><i className="fa fa-picture-o" aria-hidden="true"></i>400</a></li>
                  <li><a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i>Voting closes: 2 days</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="cp-box"> <a href="brief-vote.html"><img src="images/photography-category/voting/category-img-6.jpg" alt="img" /></a>
            <div className="cp-text-box">
              <h2><a href="single-photo.html">TITLE</a></h2>
              <strong className="title">#gramventure_title</strong>
              <div className="detail-row">
                 <ul>
                  <li><a href="#"><i className="fa fa-picture-o" aria-hidden="true"></i>400</a></li>
                  <li><a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i>Voting closes: 2 days</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="cp-box"> <a href="brief-vote.html"><img src="images/photography-category/voting/category-img-7.jpg" alt="img" /></a>
             <div className="cp-text-box">
              <h2><a href="single-photo.html">TITLE</a></h2>
              <strong className="title">#gramventure_title</strong>
              <div className="detail-row">
                <ul>
                  <li><a href="#"><i className="fa fa-picture-o" aria-hidden="true"></i>400</a></li>
                  <li><a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i>Voting closes: 2 days</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="cp-box"> <a href="brief-vote.html"><img src="images/photography-category/voting/category-img-8.jpg" alt="img" /></a>
            <div className="cp-text-box">
              <h2><a href="single-photo.html">TITLE</a></h2>
              <strong className="title">#gramventure_title</strong>
              <div className="detail-row">
                <ul>
                  <li><a href="#"><i className="fa fa-picture-o" aria-hidden="true"></i>400</a></li>
                  <li><a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i>Voting closes: 2 days</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="cp-box"> <a href="brief-vote.html"><img src="images/photography-category/voting/category-img-9.jpg" alt="img" /></a>
             <div className="cp-text-box">
              <h2><a href="single-photo.html">TITLE</a></h2>
              <strong className="title">#gramventure_title</strong>
              <div className="detail-row">
                 <ul>
                  <li><a href="#"><i className="fa fa-picture-o" aria-hidden="true"></i>400</a></li>
                  <li><a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i>Voting closes: 2 days</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cp-load-more"><a href="#" className="load"><span className="icon-icons-10"></span>Load More</a></div>
    </div>
  </section>
  </div>
    )
  }
  
}

export default Voting;