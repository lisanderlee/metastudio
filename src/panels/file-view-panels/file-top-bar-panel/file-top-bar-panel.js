import './file-top-bar-panel.css';
import UserSettingsDropdown from "../../../components/dropdowns/user-settings-dropdown"
import MessagesNotificationModal from "../../../components/modals/message-notifications-modal" 
import MembersNotificationsModal from "../../../components/modals/member-notifications-modal"
import ShareDropdown from "../../../components/dropdowns/share-dropdown"
import FileNameTag from '../../../components/tags/file-name-tag';
import FileStatusDropdown from '../../../components/dropdowns/file-status-dropdown';



import { Button } from "reactstrap";
import {Link} from "react-router-dom"

export default function FileTopBarPanel(FileName) {

    return (
      <>
      <div className='container-file-top-panel'>
        <div className='file-top-panel-navigation'>
            <Link to="/">
                <Button color="default" type="button" size='sm'>
                    <i class="fa fa-chevron-left" aria-hidden="true"></i>
                </Button>
                </Link>
            <FileNameTag FileName={FileName.FileName} className="file-top-bar-project-tag" />
        </div>
        <div className='file-status'>
            <FileStatusDropdown />
        </div>
        <div className='file-top-bar-system'>
           
            <div className='share-button'>
            <ShareDropdown />
            </div>
            <MessagesNotificationModal />
            <MembersNotificationsModal />
            <UserSettingsDropdown />
      </div>
      </div>
      </>
    )
  }