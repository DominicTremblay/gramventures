import React, {Component} from 'react';
import Breadcrumb from './Gramventures/Breadcrumb.js';
import Request from '../api/Request.js';
import Auth from '../api/Auth.js';

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
                    {url: "images/header-apply.jpeg",
                     title: "Vote",
                     handle: "",
                     by: "",
                     totalVotes: 0
                    },
                    modalAlreadyVoted: false
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
  let max = this.state.submissions.length-1;
  let imgIndex = this.state.imgIndex;
  if (imgIndex >= max) {
    imgIndex = max;
    this.setState({imgIndex: max});
    this.setState({modalAlreadyVoted: true})
  }
  console.log("getDetails imgIndex: ", imgIndex);



  if (max !== 0) 
    this.setState({imgDetails:
                    { url: submissions[imgIndex].image.url,
                      title: this.state.gramventure.name,
                      handle: submissions[imgIndex].image.user.instagram_handle,
                      by: submissions[imgIndex].image.user.full_name,
                      totalVotes: submissions[imgIndex].total_votes
                    }});
}

voteForImage(){
  let imgIndex = this.state.imgIndex;
  let submissionId = this.state.submissions[imgIndex].id;
  let user = Auth.retrieveUser();
  let vote = {
      user_id: user[0].id,
      submission_id: submissionId
    }

  let url = `http://localhost:3000/submission/${submissionId}/vote?cu=${user[0].id}`;
  console.log('URL to get: ', url)

  Request.getRequest(url).then(function(response) {
    console.log("Vote: ", response);

    if (response.length === 0) {
      console.log("Registering the vote");
      Request.postRequest(url, vote).then(function(response) {
        console.log(response);
      }, function (errorMessage) {
        alert("errorMessage");
      });      
    }
    else {
      console.log("User has already voted for this image");
    }



  }, function (errorMessage) {
    alert("errorMessage");
  });




}

nextImage() {

  console.log('index before: ', this.state.imgIndex);
  let imgIndex = this.state.imgIndex;
  console.log("imgIndex before: ", imgIndex);
  imgIndex += 1;
  console.log("imgIndex after: ", imgIndex);
  this.setState({imgIndex: imgIndex}, function(){
    this.getImageDetails();
  });
  console.log('index after: ', this.state);

}

handleYes(e) {
  e.preventDefault();
  this.voteForImage();
  this.nextImage();  
}

handleNo(e){
  e.preventDefault();
  this.nextImage(); 
}

handleClose() {
    window.location = "http://localhost:8080/#/gramventures?status=voting";
  }

    render() {
      let _this = this;
      var styleHashtag ={textDecoration: "underline",
    color: "blue"};
      
    return (
  

  <div>

  <div className= "modal-container" >

  <input id="modal-toggle" type="checkbox" checked={_this.state.modalAlreadyVoted}> </input>



    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>You voted for all the photos!</h2>
        <label className="modal-close button" for="modal-toggle" onClick={this.handleClose}>OK</label>
      </div>
    </div>
  </div>

 
 <section className="cp-single-photo">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
        
          <div className="frame">
          <a href="#" onClick={this.handleNo.bind(this)}><img className="vote-symbol-no" src="images/vote-no.png" alt="No" /></a>
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
                  <div className="head"> 
                    <h4>Cast your vote</h4>
                    </div>
                  <ul>
                    <li>{this.state.imgDetails.handle}<a href={`http://www.instagram.com/${this.state.imgDetails.handle}`} target = "_blank"><i className="fa fa-instagram"></i></a></li>
                    <li> <span className="text">Instagramer:</span> <strong> {this.state.imgDetails.by}</strong> </li>
                  </ul>
                </div>
                </div>          
            </div>            
          </div>  
        </div>
          <div className="col-md-2">
          <div className="frame">
          <a href="#" onClick={this.handleYes.bind(this)}><img className="vote-symbol-yes" src="images/vote-yes.png" alt="Yes" /></a>
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