import './forms.css'
// reactstrap components
import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

export default function ToggleItem({text}) {
    return (
      <>
        <div className="container-toggle-line">
          <div className="toggle-text">
            <p>{text}</p>
          </div>
          <div className="toggle">
            <label className="custom-toggle">
            <input type="checkbox" />
            <span className="custom-toggle-slider rounded-circle" />
            </label>
          </div>
        </div>
      </>
    );
}

