import {useState} from "react";
import FileCopyToModal from "../modals/file-copyto-modal";
import FileRenameModal from "../modals/file-rename-modal";
import FileMoveToModal from "../modals/file-moveto-modal";
import FileDeleteModal from "../modals/file-delete-modal";
// reactstrap components
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";

export default function FileOptionsDropdown() {

  const [openFileRenameModal, setOpenFileRenameModal] = useState(false)
  const [openFileMoveToModal, setOpenFileMoveToModal] = useState(false)
  const [openFileCopyToModal, setOpenFileCopyToModal] = useState(false)
  const [openFileDeleteModal, setOpenFileDeleteModal] = useState(false)

  return (
    <>
    <UncontrolledDropdown direction="end" group>
        <DropdownToggle  className="btn-sm" color="transparent">
        <i class="fa fa-ellipsis-v fa-2x" aria-hidden="true"></i>
        </DropdownToggle>
        <DropdownMenu  className="dropdown-menu-dark" >
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            <i class="fa fa-share" aria-hidden="true"></i>Share
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={() => setOpenFileRenameModal(true)}>
            <i class="fa fa-pencil" aria-hidden="true"></i>Rename
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={() => setOpenFileMoveToModal(true)}>
            <i class="fa fa-files-o" aria-hidden="true"></i>Move To...
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={() => setOpenFileCopyToModal(true)}>
            <i class="fa fa-clone" aria-hidden="true"></i> Copy To...
          </DropdownItem>
          <DropdownItem className="mb-0" href="#pablo" onClick={e => e.preventDefault()}>
            <i class="fa fa-files-o" aria-hidden="true"></i>Duplicate
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            <i class="fa fa-lock" aria-hidden="true"></i>Make Private
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            <i class="fa fa-download" aria-hidden="true"></i>Download
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={() => setOpenFileDeleteModal(true)}>
            <i class="fa fa-trash" aria-hidden="true"></i>Delete
          </DropdownItem>
        </DropdownMenu>
    </UncontrolledDropdown>
      
    {openFileRenameModal && <FileRenameModal isModalOpen={setOpenFileRenameModal} />}
    {openFileMoveToModal && <FileMoveToModal isModalOpen={setOpenFileMoveToModal} />}
    {openFileCopyToModal && <FileCopyToModal isModalOpen={setOpenFileCopyToModal} />}
    {openFileDeleteModal && <FileDeleteModal isModalOpen={setOpenFileDeleteModal} />}
    </>
    )
  }
