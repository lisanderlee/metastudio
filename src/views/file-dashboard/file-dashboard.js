import './file-dashboard.css';
import FileMasterCanvasPanel from '../../panels/file-view-panels/file-canvas/file-master-canvas-panel/file-master-canvas-panel';
import FileTopBarPanel from '../../panels/file-view-panels/file-top-bar-panel/file-top-bar-panel';
import FileSideMasterPanel from '../../panels/file-view-panels/file-side-panel/file-side-master-panel/file-side-master-panel';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function FileDashboard() {
const fileId = useLocation().state.fileId;
const filesList = useSelector ((state) => state.files.value)
const fileselection = filesList.filter(file => {
  return file.id === fileId;
});

console.log(fileselection)
    return (
      <>
      <div className='container-file-dashboard'>
          <div className='file-view-top-bar'>
            <FileTopBarPanel FileName ={fileselection[0].fileName} />
          </div>
          <div className='file-view-bottom-panels'>
            <div className='file-view-canvas-panel'>
            <FileMasterCanvasPanel filePath = {fileselection[0].path} />
            </div>
            <div className="file-view-side-panel">
            <FileSideMasterPanel /> 
            </div>
          </div>  
      </div>
      </>
    )
  }