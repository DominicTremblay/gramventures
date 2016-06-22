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
                                 cover_image_url: 'images/header-apply.jpeg',
                                 submission_end: "",
                                 submissions: []
                                }};
  }  

 
  componentDidMount() {
   let _this = this;
   let id = this.props.params.id
   let url = "http://localhost:3000/gramventures/" + id;
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
    let status = this.props.location.query.status;
    let submission_end = this.state.gramventure.submission_end;
    let voting_end = this.state.gramventure.voting_end;
    let timeToEnter;
    if (submission_end !== "" && voting_end !== "") {
      let currentTime = new Date();
      let submissionendTime = new Date(this.state.gramventure.submission_end);
      let votingendTime = new Date(this.state.gramventure.voting_end);
    if (currentTime < submissionendTime) {
      timeToEnter = submissionendTime.getDate() - currentTime.getDate();
      var options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'};
      return submissionendTime.toLocaleString('en-US', options);
    }
    else if (currentTime > submissionendTime && currentTime < votingendTime) {
      timeToEnter = votingendTime.getDate() - currentTime.getDate();
      var options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'};
      return votingendTime.toLocaleString('en-US', options);
    }
    else {
      return ("Closed");
    }
    
  }
}

  handleApply(){

    let hashtag = this.state.gramventure.hashtag;
    let id = this.props.params.id
    let url=`http://localhost:8080/#/gramventures/${id}/apply/${hashtag}`;
    
    if (this.props.location.query.status === 'voting') {
      url = `http://localhost:8080/#/gramventures/${id}/vote`;
    } 

    window.location = url;
  };

    buttonTitle() {
      let status = this.props.location.query.status;
      switch (status) {
        case "open": 
          return ("Apply");
        case "voting": 
          return ("Vote");
        default: return ("Closed");
      }
    };

    displayStyle() {
      let styleVisible = {display: 'visible'};
        if (this.props.location.query.status === 'closed')
          styleVisible = {display: 'none'};
        return(styleVisible);
      };

    render() {  
      var innerBannerStyle = {
      backgroundImage: `url(${this.state.gramventure.cover_image_url})`
      };

      var sortedSubmissions = this.state.gramventure.submissions.sort((a, b) => (b).total_votes - (a).total_votes);
      console.log(sortedSubmissions)
      
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
                  <li>Created: {this.state.gramventure.date_created}</li>
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
                  <li><i className="fa fa-instagram" aria-hidden="true"></i><a href={`http://www.instagram.com/explore/tags/${this.state.gramventure.hashtag}`} target = "_blank">#{this.state.gramventure.hashtag}</a></li>
                  <li><i className="fa fa-usd" aria-hidden="true"></i> Prize: {this.state.gramventure.prize}</li>
                  <li><i className="fa fa-picture-o" aria-hidden="true"></i> {this.state.gramventure.number_entries} Entries</li>
                  <li><i className="fa fa-clock-o" aria-hidden="true"></i> {this.timeToEnter()}</li>
                </ul>   
              </div>
              <div className="cp-team-info">
              
              <button className="btn-view" style={this.displayStyle()} onClick={this.handleApply.bind(this)}>{this.buttonTitle()}</button>
              </div>
              </div>
              </div>
            </div>
          </div>
        <section className="cp-category cp-photo-box">
    <ul>

      <ListElement submissions={sortedSubmissions} />

    </ul>
    </section>
      </div>
      </div>
    </div>

  </div>
    )
  }
  
}

export default Applybrief;