import './file-dashboard.css';
import FileDashboardCanvas from '../../panels/file-dashboard-canvas/file-dashboard-canvas';
import FileTopBarPanel from '../../panels/file-top-bar-panel/file-top-bar-panel';
import FileSidePanel from '../../panels/file-side-panel/file-side-panel';
export default function FileDashboard() {
    return (
      <>
      <div className='container-file-dashboard'>
        <FileTopBarPanel />
        
        <div className='file-dashboard-bottom'>
        <FileDashboardCanvas />
        <FileSidePanel />
          
        </div>
      </div>
      </>
    )
  }