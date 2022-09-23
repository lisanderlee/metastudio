import './main-canvas-panel.css';
import ModelCard from '../../../components/cards/model-card/model-card'
import SortDropdown from '../../../components/dropdowns/sort-dropdown';
import {useSelector} from 'react-redux'


export default function MainCanvasPanel() {
  const filesList = useSelector ((state) => state.files.value)
  const selectedFile = useSelector((state)=> state.selected)

  console.log(selectedFile.value)

    return (
      <>
      <div className='container-main-dashboard-content'>
        <div className='main-canvas-top-options'>
        <SortDropdown />
        </div>
        <div className='main-canvas-body'>  
       {       
       filesList.map(  (file) => { if ( file.projectID == selectedFile.value) {
        return <ModelCard FileName={file.fileName} ProjectID={file.projectID} Thumbnail={file.thumbnail} FileStatus={file.status} FileComments={file.comments} fileId={file.id}/>
      }})
      }
        </div> 
      </div>
      </>
    )}
