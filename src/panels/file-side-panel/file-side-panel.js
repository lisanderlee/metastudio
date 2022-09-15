import './file-side-panel.css';
import CreateByTag from '../../components/tags/created-by-tag'
import DescriptionInputField from '../../components/forms/description-input-field';
import FileSideBarContentTab from '../../components/tabs/file-side-bar-content-tab';


export default function FileSidePanel() {
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