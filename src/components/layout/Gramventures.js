import React, {Component} from 'react';
import Breadcrumb from './Gramventures/Breadcrumb.js'
import {Link} from 'react-router'
//import {axios} from 'axios';
var axios = require('axios');

class Gramventures extends Component {



  constructor(props) {
    super(props);
    this.state = {gramventures: [], status: window.location.hash.match(/status=(.*)/)[1].split('&')[0]};
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
      var _second = 1000;
      var _minute = _second * 60;
      var _hour = _minute * 60;
      var _day = _hour * 24;
    var now = new Date();
    var distance = end - now;
    var days = Math.floor(distance / _day);
    if (days === 1)
      return days + " day remaining!"
    else 
      return days + " days remaining!"
  }

  navigate () {
    this.props.history.replaceState(null, "/");
  }
    render() {
      let _this = this
      var innerBannerStyle = {
      backgroundImage: 'url(images/header-4.jpg)'
      };
 
      var gramventuresComponents = this.state.gramventures.map(function(item) {
        let link = `applybrief/${item.id}`;
        return (
        <div className="col-md-4">
          <div className="cp-box"><Link to={link}><img src={item.cover_image_url} alt="img" /></Link>
            <div className="cp-text-box">
              <h2><Link to={link}>{item.name}</Link></h2>
              <strong className="title">#{item.hashtag}</strong>
              <div className="detail-row">
                <ul>
                  <li><a href="#"><i className="fa fa-picture-o" aria-hidden="true"></i>{item.number_entries}</a></li>
                  <li><a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i> {_this.countDownTimer(item.submission_end, item.voting_end)}</a></li>
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
        <Breadcrumb />
    </section>

    
    <section className="cp-category cp-space">

      <div className="container-fluid">
      
      <div className="row">
              <div className="col-md-12">
                <ul className="cp-features-list">
                  <li className="active">              
                    <Link to ="/gramventures?status=open" onClick={()=>this.handleFilterClick("open")}> <h3>Open</h3></Link>                 
                  </li>
                  <li>                  
                   <Link to = "/gramventures?status=voting" onClick={()=>this.handleFilterClick("voting")}> <h3>Voting</h3></Link>               
                  </li>
                  <li>
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