// reactstrap components
import {
  Button,
  Modal,
  Input
 
} from "reactstrap";

export default function FileArModal({isModalOpen}) {
    return (
      <>
          <Modal
            className="modal-dialog-centered"
            isOpen={isModalOpen}
            toggle={() => this.toggleModal("isModalOpen")}
          >
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                AR File View
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
            <img alt="Sample" src="/assets/qrcode.png"/>
            <p>Scan QR Code with you cellphone to view AR </p>

            </div>
            <div className="modal-footer">
            </div>
          </Modal>
      </>
    );
  }


