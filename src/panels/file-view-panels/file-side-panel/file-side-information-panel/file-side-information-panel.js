import './file-side-information-panel.css';
import FileInformationItem from "../../../../components/list-items/file-information-item/file-information-item";
import DescriptionInputField from "../../../../components/forms/description-input-field";

export default function FileSideInformationPanel() {
    return (
      <>
      <div className='container-file-information-panel'>
        <div className='file-description-input'>
        <DescriptionInputField />
        </div>
        <FileInformationItem />
        <span className='spacer'></span>
        <FileInformationItem />
      </div>
      </>
    )
  }