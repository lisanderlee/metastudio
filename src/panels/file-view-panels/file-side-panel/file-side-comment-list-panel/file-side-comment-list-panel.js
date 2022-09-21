import './file-side-comment-list-panel.css';
import FileCommentItem from  "../../../../components/list-items/file-comment-item/file-comment-item";
import {Form, Button, Input} from "reactstrap";

export default function FileSideCommentListPanel() {
    return (
      <>
      <div className='container-file-comments-list-panel'>
        
        <div className='comments-list'>
          <FileCommentItem />
          
    
       
        </div>


          <div className='comment-input-field'>
              <Form >
                <Input
                  id="exampleFormControlTextarea1"
                  placeholder="Write your comment here ..."
                  rows="2"
                  type="textarea"
                />
              </Form>
            
              <div className='comment-button'>
                <Button color="primary" size="sm" type="button"className="mt-3 ">
                  Send
                </Button>
              </div>
         </div>
      </div>
      </>
    )
  }