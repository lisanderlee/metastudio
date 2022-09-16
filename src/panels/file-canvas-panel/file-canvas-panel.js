import './file-canvas-panel.css';
import CommentInputPanel from '../file-comment-input-panel/file-comment-input-panel';


export default function FileDashboardCanvas() {
    return (
      <>
      <div className='container-main-dashboard-content d-flex align-items-end justify-content-center'>
      <CommentInputPanel />  
      </div>
      </>
    )
  }