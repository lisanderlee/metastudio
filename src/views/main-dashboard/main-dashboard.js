import './main-dashboard.css';
import MainProjectsSidePanel from '../../panels/main-view-panels/main-project-side-panel/main-project-side-panel';
import ProjectTopBarPanel from '../../panels/main-view-panels/main-project-top-bar-panel/main-project-top-bar-panel';
import MainCanvasPanel from '../../panels/main-view-panels/main-canvas-panel/main-canvas-panel';
import MainSystemTopBarPanel  from  '../../panels/main-view-panels/main-system-top-bar-panel/system-top-bar-panel';


export default function MainDashboard() {
    return (
      <>
      <div className='container-main-dashboard'>
        <MainProjectsSidePanel/>
        <div className='container-headers'>
          <MainSystemTopBarPanel />
          <ProjectTopBarPanel />
          <MainCanvasPanel />
        </div>
      </div>
      </>
    )
  }