import React, {Component} from 'react';
import Breadcrumb from './Gramventures/Breadcrumb.js'
import {Link} from 'react-router'
//import {axios} from 'axios';
var axios = require('axios');

class Gramventures extends Component {



  constructor(props) {
    super(props);
    this.state = {gramventures: []};
    this.status = window.location.hash.match(/status=(.*)/)[1].split('&')[0];

  }


   componentDidMount() {
   let _this = this;
   let url = "http://localhost:3000/gramventures?status=" + this.status;
   console.log(url);
   axios.get(url)
      .then(function(response){
        let gramventures = response.data 
        console.log(gramventures);
        _this.setState({gramventures: gramventures});
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
        console.log(gramventures);
        _this.setState({gramventures: gramventures});
      }, function(errorMessage){
        alert("*insert generic error message here*");
      });
  }

  navigate () {
    this.props.history.replaceState(null, "/");
  }
    render() {
      var innerBannerStyle = {
      backgroundImage: 'url(images/header-4.jpg)'
      };
      var gramventuresComponents = this.state.gramventures.map(function(item) {
        return (
        <div className="col-md-4">
          <div className="cp-box"> <a href="brief-apply1.html"><img src={item.cover_image_url} alt="img" /></a>
            <div className="cp-text-box">
              <h2><a href="single-photo.html">{item.name}</a></h2>
              <strong className="title">#{item.hashtag}</strong>
              <div className="detail-row">
                <ul>
                  <li><a href="#"><i className="fa fa-picture-o" aria-hidden="true"></i>{item.number_entries}</a></li>
                  <li><a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i>{item.voting_end},{item.submission_end}</a></li>
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
        <div className="cp-load-more"><a href="#" className="load"><span className="icon-icons-10"></span>Load More</a></div>
      </div>
    </section>
  </div>
    )
  }
  
}


export default Gramventures;