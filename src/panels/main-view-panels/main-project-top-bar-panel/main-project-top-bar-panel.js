import './main-project-top-bar-panel.css';
import NewDropdown from "../../../components/dropdowns/new-dropdown"
import ShareDropdown from "../../../components/dropdowns/share-dropdown"
import MemberAddModal from '../../../components/modals/member-add-modal';

export default function MainProjectTopBarPanel() {
    return (
      <div className='container-project-top-bar'>
        <div className='buttons-project-top-bar'>
          <MemberAddModal />
          <ShareDropdown  />
          <NewDropdown />
        </div>
       
      </div>
    )
  }