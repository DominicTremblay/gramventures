import React, {Component} from 'react';

class ListElement extends Component {

  render() {

    var listElement = this.props.submissions.map(function(item){
    let imgSrc = encodeURI(item.image.url);
    return (
       <li>
        <div className="cp-box"> <a href="single-photo.html"><img src={imgSrc} alt="img" /></a>
          <div className="cp-text-box">

            <div className="detail-row">
              <ul> 
                <li><a href="#"><i className="fa fa-heart"></i>{item.total_votes}</a></li>
                <li><a href="#"><i className="fa fa-share-alt"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      )
    });


    return (
      <div>
      {listElement}
      </div>
    )
  }
  
}

export default ListElement;