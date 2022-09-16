import './file-canvas-panel.css';
import FileCommentInputPanel from '../file-comment-input-panel/file-comment-input-panel';
import FileCanvasButtonsPanel from '../file-canvas-buttons-panel/file-canvas-buttons-panel';

export default function FileDashboardCanvas() {
    return (
      <>
      <div className='container-file-dashboard-content '>
        <div className='file-canvas-buttons-panel'>
          <FileCanvasButtonsPanel />
        </div>
        <div className='file-comment-input-panel'>
          <FileCommentInputPanel />  
        </div>
      </div>
      </>
    )
  }