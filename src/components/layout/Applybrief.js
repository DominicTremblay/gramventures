import React, {Component} from 'react';
import Breadcrumb from './Gramventures/Breadcrumb.js'
import Request from '../api/Request.js';
import GramventureTitle from './ApplyBrief/GramventureTitle.js';
import ListElement from './ApplyBrief/ListElement.js';

var axios = require('axios');

class Applybrief extends Component {

  constructor(props) {
    super(props);
    this.state = {gramventure: {name: 'Gramventure',
                                 brief: 'Brief',
                                 hashtag: '#gramventures',
                                 number_entries: 0,
                                 prize: '$0',
                                 cover_image_url: 'images/header-apply.jpg',
                                 submission_end: "",
                                 submissions: []
                                }};
  }  

 
  componentDidMount() {
   let _this = this;
   // let id = 1;
   let url = "http://localhost:3000/gramventures/1";
   console.log(url);
   Request.getRequest(url)
      .then(function(response){
        _this.setState({gramventure: response});
        console.log('_this.state: ', _this.state.gramventure.name);
      }, function(errorMessage){
        alert("errorMessage");
      });
  }

  timeToEnter() {
    let currentTime = new Date();
    console.log (currentTime - this.state.gramventure.submission_end);
    return(5);
  }


    render() {  
      var innerBannerStyle = {
      backgroundImage: `url(${this.state.gramventure.cover_image_url})`
    };




    return (



<div>
    <section className="cp-inner-banner" style={innerBannerStyle}>
      <GramventureTitle name={this.state.gramventure.name} />
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
                <h3>What We are Looking For:</h3>
                <p>{this.state.gramventure.brief}</p>                    
                <p>Users will vote for their favorite photo and the winner will become the grammaster for this gramventure!</p>                
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
                  <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i>#{this.state.gramventure.hashtag}</a></li>
                  <li><a href="#"><i className="fa fa-usd" aria-hidden="true"></i> Prize: {this.state.gramventure.prize}</a></li>
                  <li><a href="#"><i className="fa fa-picture-o" aria-hidden="true"></i>{this.state.gramventure.number_entries} Entries</a></li>
                  <li><a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i> Time to Enter: {this.timeToEnter()} days</a></li>
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

      <ListElement submissions={this.state.gramventure.submissions} />

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