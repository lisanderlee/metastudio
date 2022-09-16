import './badges-selector.css'
import ApprovedBadge from '../badges-renders/approved-badge'
import InProgressBadge from '../badges-renders/in-progress-badge'
import NeedsReviewBadge from '../badges-renders/needs-review-badge'
import NoStatusBadge from '../badges-renders/no-status-badge'

export default function BadgesSelector({showBadge}) {
{console.log(showBadge)}
  {(() => {
    switch (showBadge) {
      case 'approved':
        return <ApprovedBadge />
      case 'inprogress':
        return <InProgressBadge />
      case 'needsreview':
        return <NeedsReviewBadge />
      case 'nostatus':
        return <NoStatusBadge />
      default:
        return <NoStatusBadge />
    }
  })()}
  
}