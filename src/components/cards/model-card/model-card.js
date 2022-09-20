import './model-card.css';
import FileOptionsDropdown from '../../dropdowns/file-options-dropdown'
import StatusSelectorBadges from '../../badges/status-selector-badges/status-selector-badges';
import CommentCounterBadge from '../../badges/comment-counter-badge/comment-counter-badge';

import {Link} from "react-router-dom"

import {
  CardBody,
  CardTitle,
  Card,
  CardSubtitle,
} from "reactstrap";

export default function ModelCard({FileName, ProjectID, Thumbnail, FileStatus, FileComments, fileId}) {
    return (
    <>
      <div className='file-card'>
     
        <Link to="file-dashboard" state= {{fileId: fileId} }>
          <Card className=".bg-dark" color='dark' style={{width: '14rem', margin: '0px' }}>
          <div className='file-badges'>
              <div className='file-status-badge'>
                  <StatusSelectorBadges showBadge = {FileStatus} />
              </div>
              <div className='file-comments-badge'>
                  <CommentCounterBadge commentCount ={FileComments} />
              </div>
          </div>
          <img alt="Sample" src={`/assets/thumbnail/${Thumbnail}.png`}/>
          <CardBody>
              <CardTitle > 
                  {FileName}
              </CardTitle>
              <CardSubtitle className="text-muted">
                  by Lisandro Ancewicz
              </CardSubtitle>
          </CardBody>
          </Card> 
        </Link>
        <div className='file-more-options'>
        <FileOptionsDropdown fileId = {fileId} />
        </div>
       
      </div>
    </>
    )
  }