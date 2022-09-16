import './file-information-panel.css';
import FileInformationItem from '../../components/list-items/file-information-item/file-information-item';

export default function FileInformationPanel() {
    return (
      <>
      <div className='container-file-information-panel'>
        <FileInformationItem />
        <span className='spacer'></span>
        <FileInformationItem />
      </div>
      </>
    )
  }