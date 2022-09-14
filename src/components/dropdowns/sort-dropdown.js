import React from "react";
// reactstrap components
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";

export default function SortDropdown() {
    return (
    <>
    <UncontrolledDropdown group>
      <DropdownToggle caret className="btn-sm ml-3" color="primary">
          Sort
      </DropdownToggle>
      <DropdownMenu>
      <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
        <i class="fa fa-comment" aria-hidden="true"></i>Share for Review
      </DropdownItem>
      <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
        <i class="fa fa-desktop" aria-hidden="true"></i>Share as Presentation
      </DropdownItem>
      <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
        <i class="fa fa-code" aria-hidden="true"></i>Create IFrame
      </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
    </>
    )
  }
