import React, {Component} from 'react';

class GramventureTitle extends Component {

  componentDidMount() {
    console.log('props:', this.props);
  }

  render() {
    return (
      <h1>{this.props.name}</h1>
    )
  }
  
}

export default GramventureTitle;