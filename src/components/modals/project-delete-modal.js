import { useState } from "react";
import {useDispatch} from 'react-redux'
import { deleteUser } from '../../features/Projects'

// reactstrap components
import {
  Button,
  Modal,
  Input
 
} from "reactstrap";



export default function ProjectDeleteModal({isModalOpen, ProjectId}) {

  const dispatch = useDispatch();
  const handleClick = event => {
    dispatch(deleteUser({ id: ProjectId }));
    
  }


  
    return (
      <>
          <Modal
            className="modal-dialog-centered"
            isOpen={isModalOpen}
            toggle={() => this.toggleModal("isModalOpen")}
          >
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
               Delete Project {ProjectId}
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
            <p>Are you sure you want to delete this project? All the files will be
            permanently deleted and can’t be undone. </p>
            <Input id="projectName" placeholder="Please type DELETE to continue" type="email" className="mb-4"/> 
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
              <Button onClick={handleClick} color="warning" type="button">
              Delete Project
              </Button>
            </div>
          </Modal>
      </>
    );
  }


