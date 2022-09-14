import {useState} from "react";
import FolderNewModal from "../modals/folder-new-modal";
// reactstrap components
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";

export default function NewDropdown() {

  const [openFolderNewModal, setOpenFolderNewModal] = useState(false);
    
  return(
    <>
    <UncontrolledDropdown group>
      <DropdownToggle caret className="btn-sm ml-3" color="dark">
          New
      </DropdownToggle>
      <DropdownMenu color="primary">
      <DropdownItem href="#pablo" onClick={e => e.preventDefault() }>
        <i class="fa fa-upload" aria-hidden="true"></i>File Upload
      </DropdownItem>
      <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
        <i class="fa fa-folder-open" aria-hidden="true"></i>Folder Upload
      </DropdownItem>
      <DropdownItem href="#pablo" onClick={() => setOpenFolderNewModal(true)}>
        <i class="fa fa-folder" aria-hidden="true"></i>New Folder
      </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
    
    {openFolderNewModal && <FolderNewModal isModalOpen={setOpenFolderNewModal} />}
    </>
    )
  }

  
