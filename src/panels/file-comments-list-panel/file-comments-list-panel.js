import './file-comments-list-panel.css';
import FileCommentItem from '../../components/list-items/file-comment-item/file-comment-item';


export default function FileCommentsListPanel() {
    return (
      <>
      <div className='container-file-comments-list-panel'>
        <FileCommentItem />
        
        <FileCommentItem />
      </div>
      </>
    )
  }