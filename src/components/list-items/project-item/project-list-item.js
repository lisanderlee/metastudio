import './project-list-item.css';
import ProjectMoreOptionsDropdown from "../../dropdowns/project-options-dropdown"
import Avatar from 'react-avatar';


export default function ProjectListItem() {
    return (
      <>
      <div className='project-item'>
            <div className='project-image'>
            <Avatar name="" size={40} round="6px"/>
            </div>
            <div className='project-component-text'>
                <div className='project-name'>
                    Name of project
                </div>
                <div className='project-sub-name'>
                    by Lisandro Ancewicz
                </div>
            </div>
            <div className='project-more-options'>
                <ProjectMoreOptionsDropdown />
            </div>  
      </div>
      </>
    )
  }