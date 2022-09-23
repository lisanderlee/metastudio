import {useState} from "react";
import './dropdowns.css'
import ProjectEditModal from "../modals/project-edit-settings-modal";
import ProjectDownloadModal from "../modals/project-download-modal";
import ProjectRecentlyDeletedModal from "../modals/project-recently-deleted-modal";
import ProjectLeaveModal from "../modals/project-leave-modal";
import ProjectArchiveModal from "../modals/project-archive-modal";
import ProjectDeleteModal from "../modals/project-delete-modal";
// reactstrap components
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";

export default function ProjectOptionsDropdown({ProjectId}) {
  
  const [openProjecEditSettingsModal, setOpenProjectEditSettingsModal] = useState(false)
  const [openProjectDownloadModal, setOpenProjectDownloadModal] = useState(false) 
  const [openProjectRecentlyDeletedModal, setOpenProjectRecentlyDeletedModal] = useState(false)   
  const [openProjectLeaveToModal, setOpenProjectLeaveModal] = useState(false)
  const [openProjectArchiveModal, setOpenProjectArchiveModal] = useState(false)
  const [openProjectDeleteModal, setOpenProjectDeleteModal] = useState(false)
 
  return (
      <>
      <UncontrolledDropdown direction="end"    className="me-2 project-dropdown" group>
        <DropdownToggle  className="btn-sm" color="dark">
          <i class="fa fa-ellipsis-v fa-2x" aria-hidden="true"></i>
        </DropdownToggle>
        <DropdownMenu  className="dropdown-menu-dark" >
        <DropdownItem href="#pablo" onClick={() => setOpenProjectEditSettingsModal(true)}>
          <i class="fa fa-cog" aria-hidden="true"></i>Projects Settings
        </DropdownItem>
        <DropdownItem href="#pablo" onClick={() => setOpenProjectDownloadModal(true)}>
          <i class="fa fa-download" aria-hidden="true"></i>Download All
        </DropdownItem>
        <DropdownItem href="#pablo" onClick={() => setOpenProjectRecentlyDeletedModal(true)}>
          <i class="fa fa-repeat" aria-hidden="true"></i>Recently Deleted
        </DropdownItem>
        <DropdownItem href="#pablo" onClick={() => setOpenProjectLeaveModal(true)}>
          <i class="fa fa-sign-out" aria-hidden="true"></i> Leave Project
        </DropdownItem>
        <DropdownItem className="mb-0" href="#pablo" onClick={() => setOpenProjectArchiveModal(true)}>
          <i class="fa fa-archive" aria-hidden="true"></i>Archive Project
        </DropdownItem>
        <DropdownItem href="#pablo" onClick={() => setOpenProjectDeleteModal(true)}>
          <i class="fa fa-trash" aria-hidden="true"></i>Delete Project
        </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
        
      {openProjecEditSettingsModal && <ProjectEditModal isModalOpen={setOpenProjectEditSettingsModal} ProjectId={ProjectId}/>}
      {openProjectDownloadModal && <ProjectDownloadModal isModalOpen={setOpenProjectDownloadModal} ProjectId={ProjectId} />}
      {openProjectRecentlyDeletedModal && <ProjectRecentlyDeletedModal isModalOpen={setOpenProjectRecentlyDeletedModal} />}
      {openProjectLeaveToModal && <ProjectLeaveModal isModalOpen={setOpenProjectLeaveModal} ProjectId={ProjectId}/>}
      {openProjectArchiveModal && <ProjectArchiveModal isModalOpen={setOpenProjectArchiveModal} ProjectId={ProjectId} />}
      {openProjectDeleteModal && <ProjectDeleteModal isModalOpen={setOpenProjectDeleteModal} ProjectId={ProjectId}/>}    
      </>
    )
  }
