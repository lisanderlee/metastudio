import './file-side-master-panel.css';
import CreateByTag from "../../../../components/tags/created-by-tag";
import FileSideBarContentTab from "../../../../components/tabs/file-side-bar-content-tab";
import DescriptionInputField from "../../../../components/forms/description-input-field";

export default function FileSideMasterPanel() {
    return (
      <>
      <div className='container-file-side-panel'>
        <div className='file-description'>
            <CreateByTag />
            <DescriptionInputField />
        </div>
        <div className='file-tabs'>
            <FileSideBarContentTab />
        </div>
      </div>
      </>
    )
  }