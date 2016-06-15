import React from 'react';

class Login extends React.Component {

  render() {
    return (
    <section className="cp-login tb-50">
      <div className="container">
        <div className="holder">
          <form action="#">
            <div className="row">
              <div className="col-md-12">
                <input type="text" placeholder="Your Email *" required />
              </div>
              <div className="col-md-12">
                <input type="text" placeholder="Username *" required />
              </div>
              <div className="col-md-12">
                <input type="password" placeholder="Password *" required />
              </div>
              <div className="col-md-12">
                <input type="submit" value="Login" />
              </div>
            </div>
          </form>
          <div className="col-md-12">
            <hr />
          </div>
          <div className="col-md-12">
            <div className="cp-features-list">
              <h3 style={{textAlign:'center'}}><a href="#"><i className="fa fa-instagram"></i> Sign in with Instagram</a></h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }
  
}

export default Login;