import './status-selector-badges.css'
import ApprovedBadge from '../badges-renders/approved-badge'
import InProgressBadge from '../badges-renders/in-progress-badge'
import NeedsReviewBadge from '../badges-renders/needs-review-badge'
import NoStatusBadge from '../badges-renders/no-status-badge'

export default function StatusSelectorBadges({showBadge}) {
  switch (showBadge) {
    case 'inprogress':
      return <InProgressBadge />
    case 'approved':
      return <ApprovedBadge />
    case 'needsreview':
      return <NeedsReviewBadge />
    case 'nostatus':
      return <NoStatusBadge />
    default:
      return null
  }

}