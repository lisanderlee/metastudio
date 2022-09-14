import './main-dashboard.css';
import ProjectsSidePanel from "../../panels/project-side-panel/project-side-panel"
import SystenTopBarPanel from "../../panels/system-top-bar-panel/system-top-bar-panel"
import ProjectTopBarPanel from "../../panels/project-top-bar-panel/project-top-bar-panel"
import MainDashboardCanvas from "../../panels/main-dashboard-canvas/main-dashboard-canvas"

export default function MainDashboard() {
    return (
      <>
      <div className='container-main-dashboard'>
        <ProjectsSidePanel/>
        <div className='container-headers'>
          <SystenTopBarPanel />
          <ProjectTopBarPanel />
          <MainDashboardCanvas />
        </div>
      </div>
      </>
    )
  }