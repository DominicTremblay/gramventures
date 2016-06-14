import React, {Component} from 'react';

class Connect extends Component {

    componentDidMount() {
      const {token} = this.props.location.query;
      if (token) {
        console.log('saving token: ', {token} );
        localStorage.setItem('token', JSON.stringify(token));
      }

    }



  render() {    

    return (
      <div>
      <h1>Connection</h1>      
        
      </div>
    )
  }

}

export default Connect;