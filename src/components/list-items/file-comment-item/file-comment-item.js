import './file-comment-item.css';
import UserAvatarTag from '../../tags/user-avatar-tag';
import   {Button} from "reactstrap";

export default function FileCommentItem() {
    return (
      <>
      <div className='comment-item'>
  
        <div className='comment-information'>
            <div className='comment-image'>
                <UserAvatarTag />
            </div>
            <div className='comment-name'>
                <p>Lisandro Ancewicz</p>    
            </div>
        </div>  
        <div className='comment-text'>
           <p>The cone is looking pretty good. Please fix the color.</p> 
        </div>
        <div className='comment-reply-button'>
        <Button color="transparent" size="sm" type="button">
            Reply
        </Button>
        </div>  
   
      </div>
      </>
    )
  }