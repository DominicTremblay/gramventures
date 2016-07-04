import React from 'react';
import {Link} from 'react-router';


class Home extends React.Component {

  render() {
    return (
   <div id="cp-banner" className="normaltopmargin normalbottommargin  light   movingbg" data-id="customizer" data-title="Theme Customizer" data-direction="horizontal">
    <div className="caption">
      <div className="holder"> <strong className="title">Become a Grammaster</strong>
        <h1><Link to="/gramventures?status=open" className="no-hover" activeClassName="gramventures">Start your <span>#gramventures</span></Link></h1>       
      </div>
    </div>
  </div>
    )
  }
  
}

export default Home;