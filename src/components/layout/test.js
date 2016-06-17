import React, {Component} from 'react';

class YourClassName extends Component {

  render() {
    return (
      <Child prop1='A' prop2='B'/>

    )
  }  
}

class Child extends Component {

  render() {
    return(
      <div>
      {this.props.prop1}
      {this.props.prop2}
      </div>
      )
    }
  }


export default YourClassName;