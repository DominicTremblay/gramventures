import React, {Component} from 'react';
import Breadcrumb from './Gramventures/Breadcrumb.js'
//import {axios} from 'axios';
var axios = require('axios');

class Apply extends Component {



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

 <div className="cp-main-content tb-50">
    <div className="cp-blog-posts">
      <div className="container">
        <div className="row"> 
           <form>                     
          <ul className="cp-blog-list cp-blog-grid ">
            <li className="col-md-4">
              <div className="blog-post">
                <div className="cp-thumb">
                  <a href="#"> <img src="images/blog/bc3-1.jpg" alt="" /></a></div>
                <h3><a href="post-details.html">Title (?)</a></h3>
                <ul className="post-meta">
                  <li>
                     <input id="id1" name="name1" type="checkbox" />
                     <label for="id1"> Select</label>
                   </li>
                </ul>
                 </div>
            </li>
           <li className="col-md-4">
              <div className="blog-post">
                <div className="cp-thumb">
                  <a href="#"> <img src="images/blog/bc3-1.jpg" alt="" /></a></div>
                <h3><a href="post-details.html">Title (?)</a></h3>
                <ul className="post-meta">
                  <li>
                     <input id="id1" name="name1" type="checkbox" />
                     <label for="id1"> Select</label>
                   </li>
                </ul>
                 </div>
            </li>         
           <li className="col-md-4">
              <div className="blog-post">
                <div className="cp-thumb">
                  <a href="#"> <img src="images/blog/bc3-1.jpg" alt="" /></a></div>
                <h3><a href="post-details.html">Title (?)</a></h3>
                <ul className="post-meta">
                  <li>
                     <input id="id1" name="name1" type="checkbox" />
                     <label for="id1"> Select</label>
                   </li>
                </ul>
                 </div>
            </li>        
           <li className="col-md-4">
              <div className="blog-post">
                <div className="cp-thumb">
                  <a href="#"> <img src="images/blog/bc3-1.jpg" alt="" /></a></div>
                <h3><a href="post-details.html">Title (?)</a></h3>
                <ul className="post-meta">
                  <li>
                     <input id="id1" name="name1" type="checkbox" />
                     <label for="id1"> Select</label>
                   </li>
                </ul>
                 </div>
            </li>         
           <li className="col-md-4">
              <div className="blog-post">
                <div className="cp-thumb">
                  <a href="#"> <img src="images/blog/bc3-1.jpg" alt="" /></a></div>
                <h3><a href="post-details.html">Title (?)</a></h3>
                <ul className="post-meta">
                  <li>
                     <input id="id1" name="name1" type="checkbox" />
                     <label for="id1"> Select</label>
                   </li>
                </ul>
                 </div>
            </li>            
           <li className="col-md-4">
              <div className="blog-post">
                <div className="cp-thumb">
                  <a href="#"> <img src="images/blog/bc3-1.jpg" alt="" /></a></div>
                <h3><a href="post-details.html">Title (?)</a></h3>
                <ul className="post-meta">
                  <li>
                     <input id="id1" name="name1" type="checkbox" />
                     <label for="id1"> Select</label>
                   </li>
                </ul>
                 </div>
            </li>
          </ul>
          <div className="col-md-4">
          </div>
          <div className="col-md-4">
            <div className="cp-team-info">
              <a href="apply.html" className="btn-view">Apply</a>
             </div>
            </div>
           <div className="col-md-4">
          </div>
         </form>
        </div>
      </div>
    </div>
  </div>



  </div>
    )
  }
  
}

export default Apply;