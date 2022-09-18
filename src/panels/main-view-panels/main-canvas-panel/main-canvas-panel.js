import './main-canvas-panel.css';
import ModelCard from '../../../components/cards/model-card/model-card'
import SortDropdown from '../../../components/dropdowns/sort-dropdown';

export default function MainCanvasPanel() {
    return (
      <>
      <div className='container-main-dashboard-content'>
        <div className='main-canvas-top-options'>
        <SortDropdown />
        </div>
        <div className='main-canvas-body'>
        <ModelCard /> 
        </div> 
        
      </div>
      </>
    )
  }