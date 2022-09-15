import './file-dashboard-canvas.css';
import CommentInputPanel from '../comment-input-panel/comment-input-panel';


export default function FileDashboardCanvas() {
    return (
      <>
      <div className='container-main-dashboard-content d-flex align-items-end justify-content-center'>
      <CommentInputPanel />  
      </div>
      </>
    )
  }