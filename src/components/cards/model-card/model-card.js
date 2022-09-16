import './model-card.css';
import FileOptionsDropdown from '../../dropdowns/file-options-dropdown'
import StatusSelectorBadges from '../../badges/status-selector-badges/status-selector-badges';
import {Link} from "react-router-dom"

import {
  CardBody,
  CardTitle,
  Card,
  CardSubtitle,
} from "reactstrap";

export default function ModelCard() {
    return (
    <>
      <div className='file-card'>
        <Link to="file-dashboard">
          <Card color='dark' style={{width: '18rem', margin: '0px'}}>
            <img alt="Sample" src="/assets/cone.png"/>
            <CardBody>
              <CardTitle tag="h5">
                Cone.glb
              </CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                uploaded by Lisandro A.
              </CardSubtitle>
            </CardBody>
          </Card> 
        </Link>
        <div className='badge-selector'>
        <StatusSelectorBadges showBadge = {"approved"} />
        </div>
        <div className='file-more-options'>
        <FileOptionsDropdown />
        </div>
      </div>
    </>
    )
  }