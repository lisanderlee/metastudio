import './file-canvas-panel.css';
import FileThreeLoaderPanel from '../file-three-canvas-panel/file-three-canvas-panel';
import FileCanvasButtonsPanel from '../file-canvas-buttons-panel/file-canvas-buttons-panel';
import FileCommentInputPanel from '../file-comment-input-panel/file-comment-input-panel';

export default function FileDashboardCanvas() {
    return (
      <>
   
      <div className='container-file-canvas-content '>
      <div className='canvas-right'>
        <FileThreeLoaderPanel/>
        <FileCommentInputPanel />
        </div>
        <div className='canvas-left'>
          <FileCanvasButtonsPanel />
        </div>
      </div>
      </>
    )
  }

  