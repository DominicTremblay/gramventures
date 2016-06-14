module.exports = {

  saveToken(token) {
    console.log('saving token... ');
    if (token) {        
      localStorage.setItem('token', JSON.stringify(token));
      console.log("token saved");  
    }
    else
      console.log("The token could not be saved.")
  },

  retrieveToken() {
    console.log("retrieving the access token");
    return JSON.parse(localStorage.getItem('token') || '{}')
  }

}