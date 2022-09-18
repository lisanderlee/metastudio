import './file-canvas-buttons-panel.css';
import {useState} from "react";
import FileSnapshotModal from '../../../../components/modals/file-snapshot-modal';
import FileArModal from '../../../../components/modals/file-ar-modal';
import FileVrModal from '../../../../components/modals/file-vr-modal';

import {
    FormGroup,
    Form,
    Input,
    Button
  } from "reactstrap";
import React from 'react';

export default function FileCanvasButtonsPanel() {
    
    const [openFileSnapshotModal, setOpenFileSnapshotModal] = useState(false)
    const [openFileArModal, setOpenFileArModal] = useState(false)
    const [openFileVrModal, setOpenFileVrModal] = useState(false)


    return (
      <>
      <div className='container-file-canvas-buttons-panel'>
        <Button color="default" size="sm" type="button"className="mt-3" onClick={() => setOpenFileSnapshotModal(true)} >
        <i class="fa fa-picture-o" aria-hidden="true"></i>
        </Button>
        <Button color="default" size="sm" type="button"className="mt-3">
        <i class="fa fa-download" aria-hidden="true"></i>
        </Button>
        <Button color="default" size="sm" type="button"className="mt-3" onClick={() => setOpenFileArModal(true)}>
            AR
        </Button>
        <Button color="default" size="sm" type="button"className="mt-3" onClick={() => setOpenFileVrModal(true)}>
            VR
        </Button>
      </div>

      {openFileSnapshotModal && <FileSnapshotModal isModalOpen={setOpenFileSnapshotModal} />}
      {openFileArModal && <FileArModal isModalOpen={setOpenFileArModal} />}
      {openFileVrModal && <FileVrModal isModalOpen={setOpenFileVrModal} />}
      </>
    )
  }