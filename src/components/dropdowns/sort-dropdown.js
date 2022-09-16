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
      <DropdownToggle caret className="btn-sm ml-3" color="transparent">
          Sort
      </DropdownToggle>
      <DropdownMenu>
      <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
        Date Uploaded
      </DropdownItem>
      <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
        Name
      </DropdownItem>
      <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
        Type
      </DropdownItem>
      <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
        Size
      </DropdownItem>
      <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
        Status
      </DropdownItem>
      <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
        Commmetns
      </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
    </>
    )
  }
