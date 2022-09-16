import NeedsReviewBadge from "../badges/badges-renders/needs-review-badge";
import ApprovedBadge from "../badges/badges-renders/approved-badge";
import NoStatusBadge from "../badges/badges-renders/no-status-badge";
import InProgressBadge from "../badges/badges-renders/in-progress-badge";

// reactstrap components
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Badge
} from "reactstrap";




export default function FileStatusDropdown() {
    return (
    <>
    <UncontrolledDropdown group>
        <DropdownToggle caret className="btn-sm ml-3" color="transparent">
        File Status
            </DropdownToggle>
            <DropdownMenu>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                <NeedsReviewBadge />
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                <InProgressBadge />
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                <ApprovedBadge />
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                <NoStatusBadge />
            </DropdownItem>
        </DropdownMenu>
    </UncontrolledDropdown>
    </>
    )
  }
