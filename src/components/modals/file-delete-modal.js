import { useDispatch } from "react-redux";
import { deleteFile } from "../../features/Files";
// reactstrap components
import {
  Button,
  Modal
 
} from "reactstrap";

export default function FileDeleteModal({isModalOpen, fileId}) {

  const dispatch = useDispatch();

    return (
      <>
          <Modal
            className="modal-dialog-centered"
            isOpen={isModalOpen}
            toggle={() => this.toggleModal("isModalOpen")}
          >
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
               Delete File {fileId}
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
            <p>Are you sure you want to delete FILE NAME? </p>
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
              <Button color="warning" type="button" onClick={()=>{
                dispatch(deleteFile(fileId));
              }}>
                Delete
              </Button>
            </div>
          </Modal>
      </>
    );
  }


