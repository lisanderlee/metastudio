import './file-dashboard.css';
import FileMasterCanvasPanel from '../../panels/file-view-panels/file-canvas/file-master-canvas-panel/file-master-canvas-panel';
import FileTopBarPanel from '../../panels/file-view-panels/file-top-bar-panel/file-top-bar-panel';
import FileSideMasterPanel from '../../panels/file-view-panels/file-side-panel/file-side-master-panel/file-side-master-panel';


export default function FileDashboard() {
    return (
      <>
      <div className='container-file-dashboard'>
            <div className='top-panel'>
            <FileTopBarPanel />
            </div>
          <div className='file-dashboard-bottom'>
          <div className='file'>
          <FileMasterCanvasPanel />
          </div>
          <div className="panel">
          <FileSideMasterPanel /> 
          </div>
          </div>
      </div>
      </>
    )
  }