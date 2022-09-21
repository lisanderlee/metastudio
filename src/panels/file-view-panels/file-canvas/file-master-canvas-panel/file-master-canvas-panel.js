import './file-master-canvas-panel.css';
import FileThreeCanvasPanel from '../file-canvas-three-canvas-panel/file-canvas-three-canvas-panel';
import FileCanvasButtonsPanel from '../file-canvas-buttons-panel/file-canvas-buttons-panel';
export default function FileMasterCanvasPanel(FilePath) {

  return (
      <>
      <div className='container-file-canvas-content '>
        <div className='button-panel'>
          <FileCanvasButtonsPanel />
        </div>
        <div className='three-canvas'>
          <FileThreeCanvasPanel FilePath={FilePath.filePath}/>
        </div>
      </div>
      </>
    )
  }

  