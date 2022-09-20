import React from "react";
import classnames from "classnames";
import FileSideInformationPanel from "../../panels/file-view-panels/file-side-panel/file-side-information-panel/file-side-information-panel"
import FileSideCommentListPanel from '../../panels/file-view-panels/file-side-panel/file-side-comment-list-panel/file-side-comment-list-panel'
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
            pills
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
          <CardBody className="p-0">
            <TabContent activeTab={"tabs" + this.state.tabs}>
              <TabPane tabId="tabs1">
               <FileSideCommentListPanel />
              </TabPane>
              <TabPane tabId="tabs2">
                <FileSideInformationPanel />
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default FileSideBarContentTab;