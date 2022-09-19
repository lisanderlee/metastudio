import './project-list-item.css';
import ProjectMoreOptionsDropdown from "../../dropdowns/project-options-dropdown"
import Avatar from 'react-avatar';


export default function ProjectListItem({ProjectName, ProjectOwner, ProjectId}) {
    return (
      <>
      <button className='project-item'>
            <div className='project-info'>
                <div className='project-image'>
                    <Avatar name={ProjectName} size={40} round="6px"/>
                </div>
                <div className='project-component-text'>
                    <div className='project-name'>
                        {ProjectName}
                    </div>
                    <div className='project-sub-name'>
                        {ProjectOwner}
                    </div>
                </div>
            </div>
            <div className='project-more-options'>
                <ProjectMoreOptionsDropdown ProjectId = {ProjectId} />
            </div>  
      </button>
      </>
    )
  }