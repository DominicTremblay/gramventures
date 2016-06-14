import React, {Component} from 'react';

var axios = require('axios');

class Request extends Component {

  constructor() {
    super();
    this.state = {objects: []};
  }

  componentDidMount() {
   var _this = this;
   console.log('componentDidMount');
    this.serverRequest = 
      axios
        .get("http://localhost:3000/gramventures")
        .then(function(result) {    
          //console.log("DATA:", result.data)
          _this.setState({
            objects: result.data

          });
        })
        .catch (function (response) {
          console.log(response);
        }) 
  }

  render() {
    return (
      this.state.objects
      )
  }
}