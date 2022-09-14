import './main-dashboard-canvas.css';
import ModelCard from '../../components/cards/model-card/model-card'
import ToggleItem from '../../components/forms/toggle-item';
import DividerTag from '../../components/tags/divider-tag';
export default function MainDashboardCanvas() {
    return (
      <>
      <div className='container-main-dashboard-content'>
        <ModelCard />  
      </div>
      </>
    )
  }