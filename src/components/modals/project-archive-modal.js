// reactstrap components
import {
  Button,
  Modal
 
} from "reactstrap";

export default function ProjectArchiveModal({isModalOpen}) {
    return (
      <>
          <Modal
            className="modal-dialog-centered"
            isOpen={isModalOpen}
            toggle={() => this.toggleModal("isModalOpen")}
          >
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
               Archive Project
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
              <p>The models will be sent to archival stotorage. We will keep 
              them available for you. But the will not be taken storage from 
              yout monthly storage. </p>
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
                Archive
              </Button>
            </div>
          </Modal>
      </>
    );
  }


