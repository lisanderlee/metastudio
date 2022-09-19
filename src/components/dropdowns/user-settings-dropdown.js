import './dropdowns.css';
import Avatar from 'react-avatar';

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
          <DropdownToggle  caret className="btn-sm" color="Transparent">
          <Avatar src= "/assets/user-3.png"size={32} round="6px"alt=""/>
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
