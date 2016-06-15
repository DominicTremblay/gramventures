var axios = require('axios');

module.exports = {

  getToken(url){ 
    console.log("Contacting server: ", url)    
    return axios
      .get(url)
      .then(function(response) {    
        console.log('here');
        if (response.data.cod && res.data.message) {
          throw new Error(response.data.message);
        }
        else {
          console.log("Request returns: ", response);
          return response.data;
        }

      }, function (response) {
        throw new Error(response.data.message);
      });
      
  },

  getUser(url) {
    return this.getRequest(url)
  },

  getRequest(url) {
    return axios
      .get(url)
      .then(function(response) {    
        console.log('get request');
        if (response.data.cod && res.data.message) {
          throw new Error(response.data.message);
        }
        else {
          console.log("Request returns: ", response);
          return response.data;
        }

      }, function (response) {
        throw new Error(response.data.message);
      });
  }


}
