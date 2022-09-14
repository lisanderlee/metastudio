import React from "react";
// reactstrap components
import {
  Button,
  Modal,
  Input
} from "reactstrap";

class MemberAddModal extends React.Component {
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
          className="btn-sm ml-3" 
          onClick={() => this.toggleModal("exampleModal")}
        >
        <i class="fa fa-user-plus" aria-hidden="true"></i>
        </Button>
        {/* Modal */}
        <Modal
          className="modal-dialog-centered"
          isOpen={this.state.exampleModal}
          toggle={() => this.toggleModal("exampleModal")}
        >
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Invite Members
            </h5>
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
          <div className="modal-body">
          <Input id="projectName" placeholder="Invita via e-mail or find name" type="email" className="mb-4"/> 
          <Button
          color="primary"
          type="button"
          className="btn-sm ml-3" 
          onClick={e => e.preventDefault()}
        >Send</Button>
          </div>
          <div className="modal-footer">
          </div>
        </Modal>
      </>
    );
  }
}

export default MemberAddModal;