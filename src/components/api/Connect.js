import React, {Component} from 'react';
import {Navigation} from 'react-router';
import Auth from './Auth.js'

class Connect extends Component {

    componentDidMount() {

      Auth.saveToken(this.props.location.query.token);

    }



  render() {    

    return (
      <div>
      <h1>Connecting...</h1>      
        
      </div>
    )
  }

}

export default Connect;