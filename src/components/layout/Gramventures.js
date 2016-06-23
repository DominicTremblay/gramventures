import React, {Component} from 'react';
import {Link} from 'react-router'
import Breadcrumb from './Gramventures/Breadcrumb.js'
//import {axios} from 'axios';
var axios = require('axios');

class Gramventures extends Component {



  constructor(props) {
    super(props);
    let status = window.location.hash.match(/status=(.*)/)[1].split('&')[0]
    let state = {gramventures: [], status: window.location.hash.match(/status=(.*)/)[1].split('&')[0]}   
    
    if (status === "open"){
      state.openclassName = "active"
      state.votingclassName = "" 
      state.closedclassName = ""
    }
    else if (status === "voting"){
      state.openclassName = ""
      state.votingclassName = "active" 
      state.closedclassName = ""
    }
    else if (status === "closed"){
      state.openclassName = ""
      state.votingclassName = "" 
      state.closedclassName = "active"
    }
    this.state = state 
    // this.status = window.location.hash.match(/status=(.*)/)[1].split('&')[0];
  }

   componentDidMount() {
   let _this = this;
   let url = "http://localhost:3000/gramventures?status=" + this.state.status;
   console.log(url);
   axios.get(url)
      .then(function(response){
        let gramventures = response.data 
        console.log(gramventures);
        _this.setState({gramventures: gramventures, status: _this.state.status});
      }, function(errorMessage){
        alert("*insert generic error message here*");
      });
  }

  handleFilterClick(status) {
    let _this = this;
    let url = "http://localhost:3000/gramventures?status=" + status;
    console.log(url);
    if (status === "open")
      this.setState({openclassName: "active", votingclassName: "", closedclassName: ""})
    else if (status === "voting")
      this.setState({openclassName: "", votingclassName: "active", closedclassName: ""})
    else if (status === "closed")
      this.setState({openclassName: "", votingclassName: "", closedclassName: "active"})
   axios.get(url)
      .then(function(response){
        let gramventures = response.data 
        _this.setState({gramventures: gramventures, status: status });
      }, function(errorMessage){
        alert("*insert generic error message here*");
      });
  }

  countDownTimer(submission_date, voting_date) {
    if (this.state.status === 'open'){
    var end = new Date(submission_date);
    }
    if (this.state.status === 'voting'){
    var end = new Date(voting_date);
    }
    if (this.state.status === 'closed'){
      return "Finished"
    }

    var options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'};
    return end.toLocaleString('en-US', options);
    //   var _second = 1000;
    //   var _minute = _second * 60;
    //   var _hour = _minute * 60;
    //   var _day = _hour * 24;
    // var now = new Date();
    // var distance = end - now;
    // var days = Math.floor(distance / _day);
    // if (days === 1)
    //   return days + " day remaining"
    // else 
    //   return days + " days remaining"
  }

  navigate () {
    this.props.history.replaceState(null, "/");
  }
    render() {
      let _this = this
      var innerBannerStyle = {
      backgroundImage: 'url(images/header-4.jpg)'
      };
 
      let status = this.state.status;
      var gramventuresComponents = this.state.gramventures.map(function(item) {
        let link = `applybrief/${item.id}?status=${status}`;
        return (
        <div className="col-md-4">
          <div className="cp-box"><Link to={link}><img src={item.cover_image_url} alt="img" /></Link>
            <div className="cp-text-box">
              <h2><Link to={link}>{item.name}</Link></h2>
              <strong className="title">#{item.hashtag}</strong>
              <div className="detail-row">
                <ul>
                  <li><i className="fa fa-picture-o" aria-hidden="true"></i> {item.number_entries}</li>
                  <li><i className="fa fa-clock-o" aria-hidden="true"></i> {_this.countDownTimer(item.submission_end, item.voting_end)}</li>
                </ul>
                
              </div>
            </div>
          </div>
        </div>)
      })
      

    return (
  <div>
    <section className="cp-inner-banner" style={innerBannerStyle}>
      <h1>Explore</h1>
    </section>

    
    <section className="cp-category cp-space">

      <div className="container-fluid">
      
      <div className="row">
              <div className="col-md-12">
                <ul className="cp-features-list">
                  <li className={this.state.openclassName}>              
                    <Link to ="/gramventures?status=open" onClick={()=>this.handleFilterClick("open")}> <h3>Open</h3></Link>                 
                  </li>
                  <li className={this.state.votingclassName}>                  
                   <Link to = "/gramventures?status=voting" onClick={()=>this.handleFilterClick("voting")}> <h3>Voting</h3></Link>               
                  </li>
                  <li className={this.state.closedclassName}>
                   <Link to ="/gramventures?status=closed" onClick={()=>this.handleFilterClick("closed")}> <h3>Closed</h3></Link>
                  </li>
                </ul>
              </div>
      </div>
            
            
      <div className="row">
          {gramventuresComponents}
        </div>
        </div>
    </section>
  </div>
    )
  }
  
}


export default Gramventures;