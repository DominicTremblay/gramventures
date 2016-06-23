import React from 'react';

class Signup extends React.Component {

  render() {
    return (
          
      <section class="cp-login cp-register tb-50">
      <div class="container">
        <div class="holder">
          <form action="#">
            <div class="row">
              <div class="col-md-6">
                <input type="text" placeholder="First Name *" required />
              </div>
              <div class="col-md-6">
                <input type="text" placeholder="Last Name *" required />
              </div>
              <div class="col-md-6">
                <input type="text" placeholder="Your Email *" required />
              </div>
              <div class="col-md-6">
                <input type="text" placeholder="Username *" required />
              </div>
              <div class="col-md-6">
                <input type="password" placeholder="Password *" required />
              </div>
              <div class="col-md-6">
                <input type="password" placeholder="Confirm Password *" required />
              </div>
              <div class="col-md-6">
                <input type="text" placeholder="Company Name " required />
              </div>
              <div class="col-md-6">
                <input type="text" placeholder="Phone " required />
              </div>
              <div class="col-md-6">
                <input type="submit" value="Signup Now" />
              </div>
            </div>
          </form>
        </div>
      </div>  
    </section>

    )
  }
  
}

export default Signup;