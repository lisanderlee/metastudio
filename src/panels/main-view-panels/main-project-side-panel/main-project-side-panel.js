import './main-project-side-panel.css';
import SearchInput from '../../../components/forms/search-input-field';
import ProjectListItem from '../../../components/list-items/project-item/project-list-item'
import ProjectNewModal from '../../../components/modals/project-new-modal'
import {useSelector} from 'react-redux'

export default function MainProjectsSidePanel() {
  const projectsList = useSelector ((state) => state.projects.value)
  
    return (
      <>
        <div className='container-side-panel'>
      
          <div className='project-head'>
            <div className='project-list-tile'>
                  <h3>Projects</h3>
            </div>
            <div className='new-project-modal'>
              <ProjectNewModal />
            </div>
          </div>

        <div className='project-list-container'>
          <ProjectListItem />
          <ProjectListItem />
          <ProjectListItem />
        </div>
      </div>
      </>
    )
  }