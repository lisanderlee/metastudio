import React from "react";
import ToggleItem from "../forms/toggle-item";
import DividerTag from "../tags/divider-tag";
import { useDispatch } from "react-redux";
import { updateProject } from "../../features/Projects";
import { useState } from "react";
// reactstrap components
import {
  Button,
  Modal,
  Input
 
} from "reactstrap";

export default function ProjectEditModal({isModalOpen, ProjectId}) {
  const dispatch = useDispatch();

  const [newProjectName, setNewProjectName] = useState("");

    return (
      <>
          <Modal
            className="modal-dialog-centered"
            isOpen={isModalOpen}
            toggle={() => this.toggleModal("isModalOpen")}
          >
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
               {newProjectName}Edit Project
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
            <Input id="projectName" placeholder="Project Name" type="email" className="mb-4"   
            onChange={(event) => {setNewProjectName(event.target.value)}}/> 
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
                color="warning"
                data-dismiss="modal"
                type="button"
                onClick={() => isModalOpen(false)}
              >
                Delete Project
              </Button>
              <Button onClick={() => {
                  dispatch(updateProject( {id:ProjectId, newProjectName:newProjectName}));
                }} color="primary" type="button">
                Save Settings
              </Button>
            </div>
          </Modal>
      </>
    );
  }


