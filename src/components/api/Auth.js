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
  },

  saveUser(user) {
    console.log('saving the user');
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      console.log('user saved');
    }
    else {
      console.log("The user could not be saved");
    }
  },

  retrieveUser() {
    console.log("retrieving the user");
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

}