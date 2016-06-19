import React, {Component} from 'react';
import Breadcrumb from './Gramventures/Breadcrumb.js'
import Request from '../api/Request.js'

var axios = require('axios');

class Vote extends Component {

constructor(props) {
    super(props);
    this.state = {gramventure: 
                    {name: 'Gramventure',
                     brief: 'Brief',
                     hashtag: '#gramventures',
                     number_entries: 0,
                     prize: '$0',
                     submission_end: "",
                     submissions: []
                    },
                  submissions: [],
                  imgIndex: 0,
                  imgDetails:
                    {url: "images/photography-category/voting/s-people/single-photo-1.jpg",
                     title: "Vote",
                     handle: "Coming up",
                     by: "Coming up",
                     totalVotes: 0
                    }
                  };
  }  


componentDidMount() {
   let _this = this;
   let id = this.props.params.id
   let url = "http://localhost:3000/gramventures/" + id;
   console.log(url);
   Request.getRequest(url)

      .then(function(response){
        _this.setState({gramventure: response});
        let shuffleSubmissions = _this.shuffleSubmissions(_this.state.gramventure.submissions);  
        _this.setState({submissions: shuffleSubmissions});
        _this.getImageDetails();
        console.log('state: ',_this.state);


      }, function(errorMessage){
        alert("errorMessage");
      });

  }

shuffleSubmissions(submissions) {
  let shuffleSubmissions = [];
  let shuffleArray = this.shuffleArray(submissions.length); 

  for (let i=0; i<shuffleArray.length; i++) {
    shuffleSubmissions.push(submissions[shuffleArray[i]]);
  }

  return(shuffleSubmissions);
}

shuffleArray(length){
  let max = length;
  let shuffleArray = [];
  let number, i = 0;
  while (i<max) {
    number = Math.floor(Math.random() * max);
    if (!shuffleArray.includes(number)) {
      shuffleArray.push(number);
      i++;  
    }
  }
  return(shuffleArray);
}

getImageDetails() {

  let submissions = this.state.submissions;

  if (submissions.length !== 0) 
    this.setState({imgDetails:
                    { url: submissions[this.state.imgIndex].image.url,
                      title: this.state.gramventure.name,
                      handle: submissions[this.state.imgIndex].image.user.instagram_handle,
                      by: submissions[this.state.imgIndex].image.user.full_name,
                      totalVotes: submissions[this.state.imgIndex].total_votes
                    }});
}

handleYes() {


}

    render() {
      
    return (
  <div>
 
 <section className="cp-single-photo">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
        
          <div className="frame">
          <a href="#"><img className="vote-symbol" src="images/vote-no.png" alt="No" /></a>
          </div>
        </div>
        <div className="col-md-5">
          <div className="frame"><a href="#"><img src={this.state.imgDetails.url} alt="img" /></a></div>
        </div>
        <div className="col-md-3">
          <div className="cp-text-box">
            <div className="row">
                <div className="left-col">

                  <h2><a href="#">{this.state.imgDetails.title}</a></h2>
                  <div className="cp-image-detail">
                  <div className="head"> <span className="icon-icons-12"></span>  
                    <h2>Details</h2>
                    </div>
                  <ul>
                    <li><a href="#" style={{paddingRight:'5px'}}><i className="fa fa-instagram"></i> {this.state.imgDetails.handle} </a><a href="#" style={{paddingRight:'5px'}}><i className="fa fa-heart"> </i> 47</a><a href="#" style={{paddingRight:'5px'}}><i className="fa fa-share-alt"> </i></a></li>
                    <li></li>
                    <li></li>
                    <li> <span className="text">By</span> <strong> : {this.state.imgDetails.by}</strong> </li>
                    <li> <span className="text">Category</span> <strong>:  Sea, Wild</strong> </li>
                    <li> <span className="text">Uploaded</span> <strong>:  June 2, 2016</strong> </li>    
                    <li> <span className="text">Keywords</span> <strong>: dress, girl, relaxation, beauty, body, face </strong> </li>
                  </ul>
                </div>
                </div>          
            </div>            
          </div>  
        </div>
          <div className="col-md-2">
          <div className="frame">
          <a href="#" ><img className="vote-symbol" src="images/vote-yes.png" alt="Yes" /></a>
          </div>
        </div>  
      </div>

    </div>
  </section>

 
  </div>
    )
  }
  
}

export default Vote;