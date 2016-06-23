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
      border: '3px solid gray',
      background: 'white',
      padding: '40px'
    }

    let x_close = 
    {
      position: 'absolute',
      top: '0px',
      right: '0px'
    }

    console.log("Modal props:", this.props.isOpen);
    console.log("Modal State: ", this.state.modalOpen);
    
    if(this.props.isOpen){
      if (this.state.isModalOpen)
        console.log("Modal State: ", this.state.modalOpen);
              
      return (
        <ReactCSSTransitionGroup transitionName={this.props.transitionName}>
          <div style={modalDialog}>
          <div style={x_close}>{this.props.children[0]}</div>
            {this.props.children[1]}
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
