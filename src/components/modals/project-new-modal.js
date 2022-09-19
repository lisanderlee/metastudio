
import ToggleItem from "../forms/toggle-item";
import DividerTag from "../tags/divider-tag";
import { addProject } from '../../features/Projects'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react";
// reactstrap components
import {
  Button,
  Modal,
  Input
 
} from "reactstrap";

export default function ProjectNewModal(){   
  
  const dispatch = useDispatch();
  const projectList = useSelector((state) => (state.projects.value));
  const [projectName, setProjectName] = useState(false);
  const [openModal, setOpenModal] = useState(false)
  
  const toggleModal = () => {
    setOpenModal(!openModal);
  }

  const handleClick = event => {
    dispatch(addProject({id: projectList[projectList.length - 1].id + 1 ,name: projectName , owner:"Lisandro Ancewicz"}));
    toggleModal();
    setProjectName(false)
 
  }
 
    return (
      <>
        {/* Button trigger modal */}
        <Button
          color="dark"
          type="button"
          className="btn-sm ml-3" 
          onClick={toggleModal}
        >
        <i class="fa fa-plus-square" aria-hidden="true"></i>

        </Button>
        {/* Modal */}
        <Modal
          className="modal-dialog-centered"
          isOpen= {openModal}
          toggle={toggleModal}
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
              toggle={toggleModal}
              onClick={toggleModal}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">
          <Input id="projectName" placeholder="Project Name" type="text" className="mb-4" 
           onChange={(event) => {setProjectName(event.target.value)}}/> 

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
              onClick={toggleModal}
            >
              Cancel
            </Button>
            <Button 
            color="primary" 
            type="button"
            onClick={handleClick}
            disabled={!projectName}>
              Create Project
            </Button>
          </div>
        </Modal>
      </>
    );
 
}

