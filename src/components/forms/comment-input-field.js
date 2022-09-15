import React from "react";
import UserAvatarTag from "../tags/user-avatar-tag";
import {
  FormGroup,
  Form,
  Input,
  Button
} from "reactstrap";

  export default function CommentInputField() {
    return (
      <>
      <div className="container-comment-input-field">
        <div className="comment-input-avatar">
          <UserAvatarTag />
        </div>
        <div className="comment-input-field">
        <Form >
          <Input
            id="exampleFormControlTextarea1"
            placeholder="Write your comment here ..."
            rows="2"
            type="textarea"
          />
          <div>
            <Button color="primary" size="sm" type="button"className="mt-3 ">
              Send
            </Button>
          </div>
        </Form>
        </div>
      </div>
    </>
    )
  }
