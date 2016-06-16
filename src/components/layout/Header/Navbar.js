import React, {Component} from 'react';
import {Link} from 'react-router';

class Navbar extends Component {

  render() {
    return (
      <section className="cp-navigation-row">
      <div className="container">
        <div className="navbar yamm navbar-default">
          <div className="navbar-header">
            <button type="button" data-toggle="collapse" data-target="#navbar-collapse-1" className="navbar-toggle"><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
          </div>
          <div id="navbar-collapse-1" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/gramventures?status=open" activeClassName="gramventures">Explore</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    )
  }
  
}

export default Navbar;