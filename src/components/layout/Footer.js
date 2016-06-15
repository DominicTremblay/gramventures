import React from 'react';

class Footer extends React.Component {

  render() {
    return (
          
      <footer id="footer">
        <div className="footer-social">
          <div className="cp-sidebar-social"> <strong className="title">Connect us on</strong>
            <ul>
              <li><a href="#"><span className="icon-socialicons-01"></span></a></li>
              <li><a href="#"><span className="icon-socialicons-02"></span></a></li>
              <li><a href="#"><span className="icon-socialicons-03"></span></a></li>
              <li><a href="#"><span className="icon-socialicons-04"></span></a></li>
              <li><a href="#"><span className="icon-socialicons-05"></span></a></li>
            </ul>
          </div>
        </div>
        <div className="copyrights"><strong className="copy">Gramventures &copy; 2016 All Rights Reserved </strong></div>
      </footer>

    )
  }
  
}

export default Footer;