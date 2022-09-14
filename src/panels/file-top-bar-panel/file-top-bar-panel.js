import './file-top-bar-panel.css';
import UserSettingsDropdown from "../../components/dropdowns/user-settings-dropdown"
import MessagesNotificationModal from "../../components/modals/message-notifications-modal" 
import MembersNotificationsModal from "../../components/modals/member-notifications-modal"
import ShareDropdown from "../../components/dropdowns/share-dropdown"
import ProjectTag from '../../components/tags/project-tag';
import { Button } from "reactstrap";

export default function FileTopBarPanel() {
    return (
      <>
      <div className='container-system-top-panel'>
      <Button color="default" type="button">
      <i class="fa fa-chevron-left" aria-hidden="true"></i>
        </Button>
      <ProjectTag />
      <ShareDropdown />
      <MessagesNotificationModal />
      <MembersNotificationsModal />
      <UserSettingsDropdown />
      </div>
      </>
    )
  }