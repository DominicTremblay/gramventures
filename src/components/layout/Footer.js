import React, {Component} from 'react';

class Footer extends Component {



  render() {
    return (
          
      <footer id="footer">
        <div className="footer-social">
          <div className="cp-sidebar-social"> <strong className="title">Connect us on</strong>
            <ul>
              <li><a href="http://www.facebook.com" target = "_blank"><span className="icon-socialicons-01"></span></a></li>
              <li><a href="http://www.instagram.com" target = "_blank"><span className="icon-socialicons-03"></span></a></li>
              <li><a href="http://www.twitter.com" target = "_blank"><span className="icon-socialicons-04"></span></a></li>
              <li><a href="http://www.pintrest.com" target = "_blank"><span className="icon-socialicons-05"></span></a></li>
            </ul>
          </div>
        </div>
        <div className="copyrights"><strong className="copy">Gramventures &copy; 2016 All Rights Reserved </strong></div>
      </footer>

    )
  }
  
}

export default Footer;