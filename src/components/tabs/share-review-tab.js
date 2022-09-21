import React from "react";
import classnames from "classnames";
import ToggleItem from "../forms/toggle-item";
import DividerTag from "../tags/divider-tag";

// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Input,
  Button
} from "reactstrap";

class ShareReviewTab extends React.Component {
  state = {
    tabs: 1
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
  render() {
    return (
      <>
        <div className="nav-wrapper">
          <Nav
            className="nav-fill flex-column flex-md-row "
            id="tabs-icons-text"
            pills
            role="tablist"
          >
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 1}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 1
                })}
                onClick={e => this.toggleNavs(e, "tabs", 1)}
                href="#pablo"
                role="tab"
              >
           
                Sharing
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 2}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 2
                })}
                onClick={e => this.toggleNavs(e, "tabs", 2)}
                href="#pablo"
                role="tab"
              >
                
               Settings
              </NavLink>
            </NavItem>
     
          </Nav>
        </div>
        <Card className="shadow card-style">
          <CardBody>
            <TabContent activeTab={"tabs" + this.state.tabs}>
              <TabPane tabId="tabs1">
              <Input id="projectName" placeholder="f.com/short/2134s" type="email" className="mb-4"/>               
              <ToggleItem text="Anyone on your team can view project" />
              <DividerTag text="Share Via Email" />
              <Input id="projectName" placeholder="Invita via e-mail or find name" type="email" className="mb-4"/> 
                <Button
                color="primary"
                type="button"
                className="btn-sm ml-3" 
                onClick={e => e.preventDefault()}
        >Send</Button>
              </TabPane>
              <TabPane tabId="tabs2">
                <DividerTag text="Permissions" />
                <ToggleItem text="Allow AR Viewing" />
                <ToggleItem text="Allow VR Viewing" />
                <ToggleItem text="Allow Download" />
                <ToggleItem text="Allow Comments" />
                <ToggleItem text="Allow Approvals" />
                <DividerTag text="Link Settings" />
                <ToggleItem text="Password Protected" />
                <ToggleItem text="Expiration" />
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default ShareReviewTab;