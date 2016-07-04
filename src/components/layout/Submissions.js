import React, {Component} from 'react';
import Request from '../api/Request.js';

class Submissions extends Component {
  componentDidMount() {
   let _this = this;
   // let id = 1;
   let url = "http://localhost:3000//gramventures/1/submissions";
   console.log(url);
   Request.getToken(url)
      .then(function(submissions){
        console.log("it worked!");
        console.log(submissions);
        _this.setState(submissions);
      }, function(errorMessage){
        alert("errorMessage");
      });
  }

  
  render() {
    return (
    <h1>Submissions</h1>

    );
  }

  
}

export default Submissions;