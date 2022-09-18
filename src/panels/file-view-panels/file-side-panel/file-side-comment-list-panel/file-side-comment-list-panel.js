import './file-side-comment-list-panel.css';
import FileCommentItem from  "../../../../components/list-items/file-comment-item/file-comment-item";


export default function FileSideCommentListPanel() {
    return (
      <>
      <div className='container-file-comments-list-panel'>
        <FileCommentItem />
        
        <FileCommentItem />
      </div>
      </>
    )
  }