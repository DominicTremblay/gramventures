import React, {Component} from 'react';
import Breadcrumb from './Gramventures/Breadcrumb.js'
//import {axios} from 'axios';
var axios = require('axios');

class Applybrief extends Component {
  componentDidMount() {
   let _this = this;
   // let id = 1;
   let url = "http://localhost:3000//gramventures/1/submissions";
   console.log(url);
   Request.getToken(url)
      .then(function(submissions){
        console.log("it worked!");
        console.log(submissions);
        _this.setState(submissions);
      }, function(errorMessage){
        alert("errorMessage");
      });
  }



    render() {
      var innerBannerStyle = {
      backgroundImage: 'url(images/header-apply.jpg)'
    };

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
          <div className="col-md-9">
            <ul className="cp-blog-list">
              <li className="blog-post">
                <div className="cp-thumb">
                  <a href="post-details.html"></a></div>
                <h3><a href="#"> Creative Brief</a></h3>
                <ul className="post-meta">
                  <li>Created: June 13, 2016</li>
                </ul>
                <p>What We're Looking For:</p>
                <p>Ensure that new Gramventures photographers are discovered by voting on the top photos. Even if you're not a new photographer, vote so the best new members get recognized!</p>                    
                <p>The Gramventures Editorial Team will pick their favorite photo and the winner will be featured on our Instagram @gramventures</p>                
                    <p>Rules:</p>
                        <ul>
                    <li>You can only enter if you joined Gramventures within 7 days of this challenge opening.</li>
                    <li>No watermarks</li>
                    <li>No thick borders</li>
                    <li>No screenshots</li>
                    </ul>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <div className="sidebar"> 
              <div className="widget tab-widget">
              <div className="widget search-widget">
                <h3></h3>
                <ul className="categories">
                  <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i> #gramventures</a></li>
                  <li><a href="#"><i className="fa fa-usd" aria-hidden="true"></i> Prize: 100</a></li>
                  <li><a href="#"><i className="fa fa-picture-o" aria-hidden="true"></i> 2,509 Entries</a></li>
                  <li><a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i> Time to Enter: 5 days</a></li>
                </ul>   
              </div>
              <div className="cp-team-info">
              <a href="apply.html" className="btn-view">Apply</a></div>
              </div>
              </div>
            </div>
          </div>
        <section className="cp-category cp-photo-box">
    <ul>
      <li>
        <div className="cp-box"> <a href="single-photo.html"><img src="images/photography-category/open/s-landscape/photo-1.jpg" alt="img" /></a>
          <div className="cp-text-box">
            <h2><a href="single-photo.html">Title</a></h2>
            <strong className="title">Name</strong>
            <div className="detail-row">
              <ul> 
                <li><a href="#"><i className="fa fa-heart"></i>47</a></li>
                <li><a href="#"><i className="fa fa-share-alt"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className="cp-box"> <a href="single-photo.html"><img src="images/photography-category/open/s-landscape/photo-2.jpg" alt="img" /></a>
          <div className="cp-text-box">
            <h2><a href="single-photo.html">Title</a></h2>
            <strong className="title">Name</strong>
            <div className="detail-row">
              <ul>
                <li><a href="#"><i className="fa fa-heart"></i>47</a></li>
                <li><a href="#"><i className="fa fa-share-alt"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className="cp-box"> <a href="single-photo.html"><img src="images/photography-category/open/s-landscape/photo-3.jpg" alt="img" /></a>
          <div className="cp-text-box">
            <h2><a href="single-photo.html">Title</a></h2>
            <strong className="title">Name</strong>
            <div className="detail-row">
              <ul>
                <li><a href="#"><i className="fa fa-heart"></i>47</a></li>
                <li><a href="#"><i className="fa fa-share-alt"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className="cp-box"> <a href="single-photo.html"><img src="images/photography-category/open/s-landscape/photo-4.jpg" alt="img" /></a>
          <div className="cp-text-box">
           <h2><a href="single-photo.html">Title</a></h2>
            <strong className="title">Name</strong>
            <div className="detail-row">
              <ul>
                <li><a href="#"><i className="fa fa-heart"></i>47</a></li>
                <li><a href="#"><i className="fa fa-share-alt"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className="cp-box"> <a href="single-photo.html"><img src="images/photography-category/open/s-landscape/photo-5.jpg" alt="img" /></a>
          <div className="cp-text-box">
            <h2><a href="single-photo.html">Title</a></h2>
            <strong className="title">Name</strong>
            <div className="detail-row">
              <ul>
                <li><a href="#"><i className="fa fa-heart"></i>47</a></li>
                <li><a href="#"><i className="fa fa-share-alt"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className="cp-box"> <a href="single-photo.html"><img src="images/photography-category/open/s-landscape/photo-6.jpg" alt="img" /></a>
          <div className="cp-text-box">
            <h2><a href="single-photo.html">Title</a></h2>
            <strong className="title">Name</strong>
            <div className="detail-row">
              <ul>
                <li><a href="#"><i className="fa fa-heart"></i>47</a></li>
                <li><a href="#"><i className="fa fa-share-alt"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className="cp-box"> <a href="single-photo.html"><img src="images/photography-category/open/s-landscape/photo-7.jpg" alt="img" /></a>
          <div className="cp-text-box">
           <h2><a href="single-photo.html">Title</a></h2>
            <strong className="title">Name</strong>
            <div className="detail-row">
              <ul>
                <li><a href="#"><i className="fa fa-heart"></i>47</a></li>
                <li><a href="#"><i className="fa fa-share-alt"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className="cp-box"> <a href="single-photo.html"><img src="images/photography-category/open/s-landscape/photo-8.jpg" alt="img" /></a>
          <div className="cp-text-box">
            <h2><a href="single-photo.html">Title</a></h2>
            <strong className="title">Name</strong>
            <div className="detail-row">
              <ul>
                <li><a href="#"><i className="fa fa-heart"></i>47</a></li>
                <li><a href="#"><i className="fa fa-share-alt"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div className="cp-load-more"><a href="#" className="load"><span className="icon-icons-10"></span>Load More</a></div>
  </section>
        </div>
      </div>
    </div>

  </div>
    )
  }
  
}

export default Applybrief;