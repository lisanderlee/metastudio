// reactstrap components
import {
  Button,
  Modal
 
} from "reactstrap";

export default function ProjectDownloadModal({isModalOpen}) {
    return (
      <>
          <Modal
            className="modal-dialog-centered"
            isOpen={isModalOpen}
            toggle={() => this.toggleModal("isModalOpen")}
          >
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
               Download Project
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
            <div className="modal-body">...</div>
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
                Download All
              </Button>
            </div>
          </Modal>
      </>
    );
  }


