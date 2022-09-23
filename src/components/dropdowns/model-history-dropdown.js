import {useState} from "react";

// reactstrap components
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";

export default function ModelHistoryDropdown() {


    return (
    <>
    <UncontrolledDropdown group >
      <DropdownToggle caret className="btn-sm ml-3 text-white text-capitalize font-weight-bold"  color="primary">
          2 Hours Ago
      </DropdownToggle>
      <DropdownMenu>
      <DropdownItem href="#pablo" >
          2 Days Ago      
      </DropdownItem>
      <DropdownItem href="#pablo">
          1 Week Ago
      </DropdownItem>
      <DropdownItem href="#pablo" >
          2 Weeks Ago
      </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
   

    </>
    )
  }
