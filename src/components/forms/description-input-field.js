
import {
  FormGroup,
  Form,
  Input,
  Button
} from "reactstrap";

  export default function DescriptionInputField() {
    return (
      <>
      <Form>
        <Input
          id="exampleFormControlTextarea1"
          placeholder="Write file description here ..."
          rows="3"
          type="textarea"
        />
        <div className="d-flex ">
          <div className="ml-auto">
            <Button color="transparent" size="sm" type="button" className="mt-3 align-items-start">
              Cancel
            </Button>
            <Button color="dark" size="sm" type="button"className="mt-3 ">
              Save
            </Button>
          </div>
        </div>
      </Form>
    </>
    )
  }
