import './system-top-bar-panel.css';
import UserSettingsDropdown from "../../components/dropdowns/user-settings-dropdown"
import MessagesNotificationModal from "../../components/modals/message-notifications-modal" 
import MembersNotificationsModal from "../../components/modals/member-notifications-modal"

export default function SystemTopBarPanel() {
    return (
      <>
      <div className='container-system-top-panel'>
      
      <MessagesNotificationModal />
      <MembersNotificationsModal />
      <UserSettingsDropdown />
      </div>
      </>
    )
  }