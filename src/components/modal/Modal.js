import React, {Component, PropTypes} from 'react';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');



class Modal extends Component{

  render() {

    let modalDialog = 
    {   
      position: 'fixed',
      zIndex: 1,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      border: '1px solid gray',
      background: 'transparent'
    }

    console.log("Modal:", this.props.isOpen);
    if(this.props.isOpen){
      return (
        <ReactCSSTransitionGroup transitionName={this.props.transitionName}>
          <div style={modalDialog}>
            {this.props.children}
          </div>
        </ReactCSSTransitionGroup>
            )
        } else {
          return (
            <ReactCSSTransitionGroup transitionName={this.props.transitionName} />
            )
        }
    }
}

export default Modal;
