import React, {Component} from 'react';
import Breadcrumb from './Gramventures/Breadcrumb.js'
//import {axios} from 'axios';
var axios = require('axios');

class Gramventures extends Component {

  constructor() {
    super();
    this.state = {gramventures: []};
  }

  componentDidMount() {
   // var _this = this;
   // console.log('componentDidMount');
   //  this.serverRequest = 
   //    axios
   //      .get("http://localhost:3000/gramventures")
   //      .then(function(result) {    
   //        //console.log("DATA:", result.data)
   //        _this.setState({
   //          gramventures: result.data

   //        });
   //      })
   //      .catch (function (response) {
   //        console.log(response);
   //      }) 
  }

    render() {
      var innerBannerStyle = {
      backgroundImage: 'url(images/header-4.jpg)'
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
            <div className="col-md-12">
              <ul className="cp-features-list">
                <li className="active">              
                  <a href=""><h3 style={{color: '#c23c48'}}>Open</h3></a>                 
                </li>
                <li>                  
                 <a href="brief-voting.html"> <h3>Voting</h3> </a>               
                </li>
                <li>
                 <a href="brief-closed.html"> <h3>Closed</h3></a>
                </li>
              </ul>
            </div>
          </div>
          
      <div className="row">
        <div className="col-md-4">
          <div className="cp-box"> <a href="brief-apply1.html"><img src="images/photography-category/open/category-img-1.jpg" alt="img" /></a>
            <div className="cp-text-box">
              <h2><a href="single-photo.html">JUNGLE IN THE CITY</a></h2>
              <strong className="title">#gramventure_jungle</strong>
              <div className="detail-row">
                <ul>
                  <li><a href="#"><i className="fa fa-picture-o" aria-hidden="true"></i>400</a></li>
                  <li><a href="#"><i className="fa fa-heart"  aria-hidden="true"></i>47</a></li>
                  <li><a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i>2 days left</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="cp-box"> <a href="brief-apply2.html"><img src="images/photography-category/open/category-img-2.jpg" alt="img" /></a>
             <div className="cp-text-box">
              <h2><a href="single-photo.html">SUMMER IS HERE!</a></h2>
              <strong className="title">#gramventure_summer</strong>
              <div className="detail-row">
                <ul>
                  <li><a href="#"><i className="fa fa-picture-o" aria-hidden="true"></i>400</a></li>
                  <li><a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i>2 days left</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="cp-box"> <a href="brief-apply3.html"><img src="images/photography-category/open/category-img-3.jpg" alt="img" /></a>
             <div className="cp-text-box">
              <h2><a href="single-photo.html">FAVORITE FOOD</a></h2>
              <strong className="title">#gramventure_food</strong>
              <div className="detail-row">
                <ul>
                  <li><a href="#"><i className="fa fa-picture-o" aria-hidden="true"></i>400</a></li>
                  <li><a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i>2 days left</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="cp-box"> <a href="brief-apply.html"><img src="images/photography-category/open/category-img-4.jpg" alt="img" /></a>
            <div className="cp-text-box">
              <h2><a href="single-photo.html">NIGHT LIFE</a></h2>
              <strong className="title">#gramventure_night</strong>
              <div className="detail-row">
                <ul>
                  <li><a href="#"><i className="fa fa-picture-o" aria-hidden="true"></i>400</a></li>
                  <li><a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i>2 days left</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="cp-box"> <a href="brief-apply.html"><img src="images/photography-category/open/category-img-5.jpg" alt="img" /></a>
            <div className="cp-text-box">
              <h2><a href="single-photo.html">TITLE</a></h2>
              <strong className="title">#gramventure_title</strong>
              <div className="detail-row">
                <ul>
                  <li><a href="#"><i className="fa fa-picture-o" aria-hidden="true"></i>400</a></li>
                  <li><a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i>2 days left</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="cp-box"> <a href="brief-apply.html"><img src="images/photography-category/open/category-img-6.jpg" alt="img" /></a>
            <div className="cp-text-box">
              <h2><a href="single-photo.html">TITLE</a></h2>
              <strong className="title">#gramventure_title</strong>
              <div className="detail-row">
                <ul>
                  <li><a href="#"><i className="fa fa-picture-o" aria-hidden="true"></i>400</a></li>
                  <li><a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i>2 days left</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="cp-box"> <a href="brief-apply.html"><img src="images/photography-category/open/category-img-7.jpg" alt="img" /></a>
             <div className="cp-text-box">
              <h2><a href="single-photo.html">TITLE</a></h2>
              <strong className="title">#gramventure_title</strong>
              <div className="detail-row">
                <ul>
                  <li><a href="#"><i className="fa fa-picture-o" aria-hidden="true"></i>400</a></li>
                  <li><a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i>2 days left</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="cp-box"> <a href="brief-apply.html"><img src="images/photography-category/open/category-img-8.jpg" alt="img" /></a>
            <div className="cp-text-box">
              <h2><a href="single-photo.html">TITLE</a></h2>
              <strong className="title">#gramventure_title</strong>
              <div className="detail-row">
                <ul>
                  <li><a href="#"><i className="fa fa-picture-o" aria-hidden="true"></i>400</a></li>
                  <li><a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i>2 days left</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="cp-box"> <a href="brief-apply.html"><img src="images/photography-category/open/category-img-9.jpg" alt="img" /></a>
             <div className="cp-text-box">
              <h2><a href="single-photo.html">TITLE</a></h2>
              <strong className="title">#gramventure_title</strong>
              <div className="detail-row">
                <ul>
                  <li><a href="#"><i className="fa fa-picture-o" aria-hidden="true"></i>400</a></li>
                  <li><a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i>2 days left</a></li>
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

export default Gramventures;