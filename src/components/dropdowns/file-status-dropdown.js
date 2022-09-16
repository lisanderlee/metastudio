import { useState } from "react";
import NeedsReviewBadge from "../badges/badges-renders/needs-review-badge";
import ApprovedBadge from "../badges/badges-renders/approved-badge";
import NoStatusBadge from "../badges/badges-renders/no-status-badge";
import InProgressBadge from "../badges/badges-renders/in-progress-badge";
import StatusSelectorBadges from "../badges/status-selector-badges/status-selector-badges";
// reactstrap components
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Badge
} from "reactstrap";




export default function FileStatusDropdown() {
    const [status, setStatus] = useState(false)

    return (
    <>
    <UncontrolledDropdown group>
        <DropdownToggle caret className="btn-sm ml-3" color="transparent">
        {status ? <StatusSelectorBadges showBadge = {status} /> : "File Status"} 
            </DropdownToggle>
            <DropdownMenu>
            <DropdownItem href="#pablo" onClick={() => setStatus("needsreview")}>
                <NeedsReviewBadge />
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={() => setStatus("inprogress")}>
                <InProgressBadge />
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={() => setStatus("approved")}>
                <ApprovedBadge />
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={() => setStatus("nostatus")}>
                <NoStatusBadge />
            </DropdownItem>
        </DropdownMenu>
    </UncontrolledDropdown>
    </>
    )
  }
