import './file-comment-item.css';
import UserAvatarTag from '../../tags/user-avatar-tag';
import   {Button} from "reactstrap";
import Avatar from 'react-avatar';
export default function FileCommentItem() {
    return (
      <>
      <div className='comment-item'>
  
        <div className='comment-information'>
            <div className='comment-image'>
            <Avatar src= "/assets/user-3.png"size={33} round="6px"alt=""/>
            </div>
            <div className='avatar-text'>
            <div className='comment-name'>
                <p>Lisandro Ancewicz</p>    
            </div>
            <div className='post-date'>
                2 days ago
            </div>
            </div>
        </div>  
        <div className='comment-text'>
           <p>The cone is looking pretty good. Please fix the color.</p> 
        </div>
        <div className='comment-reply-button'>
          <div className='footer-divider'></div>
        <Button className='mt-2 ml-0 pl-0' color="transparent" size="sm" type="button">
            Reply
        </Button>
        </div>  
   
      </div>
      </>
    )
  }