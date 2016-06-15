import React, {Component} from 'react';
import Breadcrumb from './Gramventures/Breadcrumb.js'
//import {axios} from 'axios';
var axios = require('axios');

class Profile extends Component {



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
              <div className="cp-thumb"><img src="images/team-large.jpg" alt="" /></div>
               </div>
          </div>         
          <div className="col-md-6">
            <div className="cp-team-info">
             <div className="contact-title">
                <h2>Nemo Clownfish</h2>
                <strong>Photographer</strong> </div>
               <address>
              <ul>
                <li><i className="fa fa-home"></i>The big blue sea,
                  123 Lorem Ipsum 
                  Earth.</li>
                <li><i className="fa fa-phone"></i>0123 456 7890</li>
                <li><i className="fa fa-fax"></i>0123 456 7890</li>
                <li><i className="fa fa-envelope-o"></i>nemo@thesea.com</li>
                <li><i className="fa fa-skype"></i>0123 456 7890</li>
                <li><i className="fa fa-globe"></i>www.nemoatsea.com</li>
              </ul>
              </address>
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
    <ul>
      <li>
        <div className="cp-box"> <a href="single-photo.html"><img src="images/photography-category/closed/s-landscape/photo-1.jpg" alt="img" /></a>
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
        <div className="cp-box"> <a href="single-photo.html"><img src="images/photography-category/closed/s-landscape/photo-2.jpg" alt="img" /></a>
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
        <div className="cp-box"> <a href="single-photo.html"><img src="images/photography-category/closed/s-landscape/photo-3.jpg" alt="img" /></a>
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
        <div className="cp-box"> <a href="single-photo.html"><img src="images/photography-category/closed/s-landscape/photo-4.jpg" alt="img" /></a>
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
        <div className="cp-box"> <a href="single-photo.html"><img src="images/photography-category/closed/s-landscape/photo-5.jpg" alt="img" /></a>
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
        <div className="cp-box"> <a href="single-photo.html"><img src="images/photography-category/closed/s-landscape/photo-6.jpg" alt="img" /></a>
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
        <div className="cp-box"> <a href="single-photo.html"><img src="images/photography-category/closed/s-landscape/photo-7.jpg" alt="img" /></a>
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
        <div className="cp-box"> <a href="single-photo.html"><img src="images/photography-category/closed/s-landscape/photo-8.jpg" alt="img" /></a>
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
  </div>
    )
  }
  
}

export default Profile;