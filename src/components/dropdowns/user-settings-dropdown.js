import './dropdowns.css';

import React from "react";
// reactstrap components
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";

export default function UserSettingsDropdown() {
    return (
      <>
    <div >
    <UncontrolledDropdown group>
          <DropdownToggle caret className="btn-sm" color="Transparent">
          <i class="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
          </DropdownToggle>
          <DropdownMenu >
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            <i class="fa fa-user" aria-hidden="true"></i>Personal Settings
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            <i class="fa fa-cog" aria-hidden="true"></i> Account Settings
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            <i class="fa fa-users" aria-hidden="true"></i>Manage Members
            </DropdownItem>
         
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            <i class="fa fa-sign-out" aria-hidden="true"></i>Sign Out
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        </div>
    
      </>
    )
  }
