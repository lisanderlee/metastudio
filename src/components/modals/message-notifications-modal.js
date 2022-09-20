import React from "react";
// reactstrap components
import {
  Button,
  Modal
} from "reactstrap";

class MessageNotificationsModal extends React.Component {
  state = {
    exampleModal: false
  };
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };
  render() {
    return (
      <>
        {/* Button trigger modal */}
        <Button
          color="dark"
          type="button"
          size="sm"
          onClick={() => this.toggleModal("exampleModal")}
        >
       <i class="fa fa-envelope" aria-hidden="true"></i>

        </Button>
        {/* Modal */}
        <Modal
          className="modal-dialog-centered"
          isOpen={this.state.exampleModal}
          toggle={() => this.toggleModal("exampleModal")}
        >
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
            New Messages            </h5>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("exampleModal")}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">...</div>
          <div className="modal-footer">
          </div>
        </Modal>
      </>
    );
  }
}

export default MessageNotificationsModal;