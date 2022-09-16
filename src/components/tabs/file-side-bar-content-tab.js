import React from "react";
import classnames from "classnames";
import FileInformationPanel from "../../panels/file-information-panel/file-information-panel";// reactstrap components
import FileCommentsListPanel from "../../panels/file-comments-list-panel/file-comments-list-panel";

import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane
} from "reactstrap";

class FileSideBarContentTab extends React.Component {
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
            tabs
            role="tablist"
            
          >
            <NavItem >
              <NavLink
                aria-selected={this.state.tabs === 1}
                className={classnames("mb-sm-3 mb-md-0 ", {
                  active: this.state.tabs === 1
                })}
                onClick={e => this.toggleNavs(e, "tabs", 1)}
                href="#pablo"
                role="tab"
                
                
              >
                Comments
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
                File Information
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <Card className="shadow" color="transparent">
          <CardBody >
            <TabContent activeTab={"tabs" + this.state.tabs}>
              <TabPane tabId="tabs1">
               <FileCommentsListPanel />
              </TabPane>
              <TabPane tabId="tabs2">
                <FileInformationPanel />
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default FileSideBarContentTab;