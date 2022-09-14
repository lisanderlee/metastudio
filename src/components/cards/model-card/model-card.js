import './model-card.css';
import FileOptionsDropdown from '../../dropdowns/file-options-dropdown'


import {
  CardBody,
  CardTitle,
  Card,
  CardSubtitle,
} from "reactstrap";

export default function ModelCard() {
    return (
    <>
    <button className='card-button'>
      <Card color='dark'
        style={{
        width: '18rem',
        margin: '0px'     
        }}
        className="card ">
          <img alt="Sample" src="/assets/cone.png"/>
        <CardBody>
          <CardTitle tag="h5">
            Cone.glb
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            uploaded by Lisandro A.
            <FileOptionsDropdown className="model-more-options"/>
          </CardSubtitle>
        </CardBody>
      </Card> 
    </button>
    </>
    )
  }