import './file-side-information-panel.css';
import FileInformationItem from "../../../../components/list-items/file-information-item/file-information-item";

export default function FileSideInformationPanel() {
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