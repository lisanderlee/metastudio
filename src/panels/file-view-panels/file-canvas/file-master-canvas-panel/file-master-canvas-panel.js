import './file-master-canvas-panel.css';
import FileThreeCanvasPanel from '../file-canvas-three-canvas-panel/file-canvas-three-canvas-panel';
import FileCanvasButtonsPanel from '../file-canvas-buttons-panel/file-canvas-buttons-panel';
import FileCanvasCommentInputPanel from  '../../file-canvas/file-canvas-comment-input-panel/file-comment-input-panel'


export default function FileMasterCanvasPanel() {
    return (
      <>
   
      <div className='container-file-canvas-content '>
      <div className='canvas-right'>
        <FileThreeCanvasPanel/>
        <FileCanvasCommentInputPanel />
        </div>
        <div className='canvas-left'>
          <FileCanvasButtonsPanel />
        </div>
      </div>
      </>
    )
  }

  