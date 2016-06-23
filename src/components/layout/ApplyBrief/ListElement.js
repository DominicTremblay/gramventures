import React, {Component} from 'react';
import Modal from '../../modal/Modal.js';

class ListElement extends Component {

  constructor() {
    super();
    this.state = {isModalOpen: false,
                  image: ""};
  }

  componentDidMount() {
    document.addEventListener('keydown', this._handleEscKey.bind(this));
  }

  _handleEscKey(e) {
    console.log("escape key: ", e.keyCode);
    if (e.keyCode === 27)
      this.setState({ isModalOpen: false });
  }

  openModal(imgSrc, e) {
    e.preventDefault();
    this.setState({image: imgSrc});
    this.setState({ isModalOpen: true });

  }

  closeModal(e) {
    e.preventDefault();
    this.setState({ isModalOpen: false });
    this.setState({ ModalOpen: true });
  }

  render() {
    let _this = this;
    var listElement = this.props.submissions.map(function(item){
    let imgSrc = encodeURI(item.image.url);
    return (
       <li>
        <div className="cp-box"> <a href="#" onClick={_this.openModal.bind(_this, imgSrc)}>
        <img src={imgSrc} alt="img" /></a>

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
      <Modal isOpen={_this.state.isModalOpen} transitionName="modal-anim">
            <a href='#' onClick={_this.closeModal.bind(_this)}><img src='images/x_close-button.png' /></a>
            <a href='#' onClick={_this.closeModal.bind(_this)}><img src={this.state.image} alt="img" /></a>
      </Modal>      
      {listElement}
      </div>
    )
  }
  
}

export default ListElement;