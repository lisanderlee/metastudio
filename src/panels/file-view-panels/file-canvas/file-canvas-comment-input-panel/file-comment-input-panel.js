import './file-comment-input-panel.css';
import UserAvatarTag from "../../../../components/tags/user-avatar-tag";
import Avatar from 'react-avatar';


import {
  FormGroup,
  Form,
  Input,
  Button
} from "reactstrap";

export default function FileCanvasCommentInputPanel() {
    return (
      <>
      <div className='container-comment-input-panel'>
        <div className='avatar-input-field'>
            <div className="comment-input-avatar">
              <Avatar src= "/assets/user-3.png"size={32} round="6px"alt=""/>
            </div>
            <div className="comment-input-field">
              <Form >
              <Input
                id="exampleFormControlTextarea1"
                placeholder="Write your comment here ..."
                rows="2"
                type="textarea"
              />
              </Form>
            </div>
          </div>
            <div className='comment-button'>
              <Button color="primary" size="sm" type="button"className="mt-3 ">
                Send
              </Button>
            </div>
          
      </div>
      
      </>
    )
  }