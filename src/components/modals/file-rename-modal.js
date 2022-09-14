// reactstrap components
import {
  Button,
  Modal,
  Input
 
} from "reactstrap";

export default function FileRenameModal({isModalOpen}) {
    return (
      <>
          <Modal
            className="modal-dialog-centered"
            isOpen={isModalOpen}
            toggle={() => this.toggleModal("isModalOpen")}
          >
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
               Rename File
              </h5>
              <button
                aria-label="Close"
                className="close"
                data-dismiss="modal"
                type="button"
                onClick={() => isModalOpen(false)}
              >
                <span aria-hidden={true}>×</span>
              </button>
            </div>
            <div className="modal-body">
            <img alt="Sample" src="/assets/cone.png"/>
            <Input id="projectName" placeholder="Enter New Name" type="email" className="mb-4"/> 
            </div>
            
            <div className="modal-footer">
              <Button
                color="secondary"
                data-dismiss="modal"
                type="button"
                onClick={() => isModalOpen(false)}
              >
                Cancel
              </Button>
              <Button color="primary" type="button">
                Rename
              </Button>
            </div>
          </Modal>
      </>
    );
  }


