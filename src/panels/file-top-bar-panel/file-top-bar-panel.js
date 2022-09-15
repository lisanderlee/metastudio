import './file-top-bar-panel.css';
import UserSettingsDropdown from "../../components/dropdowns/user-settings-dropdown"
import MessagesNotificationModal from "../../components/modals/message-notifications-modal" 
import MembersNotificationsModal from "../../components/modals/member-notifications-modal"
import ShareDropdown from "../../components/dropdowns/share-dropdown"
import ProjectTag from '../../components/tags/project-tag';
import { Button } from "reactstrap";
import {Link} from "react-router-dom"

export default function FileTopBarPanel() {
    return (
      <>
      <div className='container-file-top-panel'>
        <div className='file-top-panel-navigation'>
            <Link to="/">
                <Button color="default" type="button">
                    <i class="fa fa-chevron-left" aria-hidden="true"></i>
                </Button>
                </Link>
            <ProjectTag className="file-top-bar-project-tag" />
        </div>
        <div className='file-top-bar-system'>
            <ShareDropdown />
            <MessagesNotificationModal />
            <MembersNotificationsModal />
            <UserSettingsDropdown />
      </div>
      </div>
      </>
    )
  }