import React from 'react';
import Nav from './Nav.jsx';


class Main extends React.Component {

  render() {
    return (
      <div className='container'>
        <Nav />
        <h3 className='test-class'>Main Component</h3>
        {this.props.childrens}
      </div>
    )
  }
  
}

export default Main;