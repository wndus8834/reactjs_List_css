import React from 'react';
import './Modal.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal : this.props.show };  
  }

  show(event) {
    this.setState({ showModal: true });
  }

  close(event) {
    this.setState({ showModal: false });
  }

  renderButton() {
    return (
      <button type="button" onClick={ this.show.bind(this) }>
        { this.props.buttonText }
      </button>
    );
  }

  renderModal() {
    let style1 = { width: this.props.width, padding: this.props.padding };
    return (
      <div className="modal-backdrop">
        <div className="modal-content" style={ style1 }>
          { this.props.children }
        </div>
      </div>
    );
  }

  render() {
    return (
      <span>
        { this.props.buttonText ? this.renderButton() : null }
        { this.state.showModal ? this.renderModal() : null }
      </span>
    );
  }
}

Modal.defaultProps = {
  show: false,
  width: 500,
  padding: 30
};
export default Modal;
