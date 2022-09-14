import React from "react";
import ToggleItem from "../forms/toggle-item";
import DividerTag from "../tags/divider-tag";

// reactstrap components
import {
  Button,
  Modal,
  Input
 
} from "reactstrap";

class ProjectNewModal extends React.Component {
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
        <i class="fa fa-plus-square" aria-hidden="true"></i>

        </Button>
        {/* Modal */}
        <Modal
          className="modal-dialog-centered"
          isOpen={this.state.exampleModal}
          toggle={() => this.toggleModal("exampleModal")}
        >
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
            New Project
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
          <Input id="projectName" placeholder="Project Name" type="email" className="mb-4"/> 
          <ToggleItem text="Anyone on your team can view project" />
          <DividerTag text="Permissions" />
          <ToggleItem text="Anyone can download" />
          <DividerTag text="E-mail me notifications" />
          <ToggleItem text="New comments" />
          <ToggleItem text="New model upload" />
          <ToggleItem text="New team member" />
          <ToggleItem text="Status Updates" />
          </div>
          <div className="modal-footer">
                     <Button
              color="secondary"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("exampleModal")}
            >
              Cancel
            </Button>
            <Button color="primary" type="button">
              Create Project
            </Button>
          </div>
        </Modal>
      </>
    );
  }
}

export default ProjectNewModal;