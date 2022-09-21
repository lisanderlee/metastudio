import './file-side-master-panel.css';
import React from "react";
import classnames from "classnames";
import FileSideInformationPanel from "../file-side-information-panel/file-side-information-panel"
import FileSideCommentListPanel from '../file-side-comment-list-panel/file-side-comment-list-panel'

import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane
} from "reactstrap";

class FileSideMasterPanel extends React.Component {
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
      <div className='container-file-side-panel'>
        <div className="nav-wrapper">
          <Nav
            className="nav-fill flex-column flex-md-row "
            id="tabs-icons-text"
            pills
            role="tablist" >
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

        
        <Card className="shadow h-100"   color="transparent">
          <CardBody className="p-0 " >
            <TabContent className=' h-100' activeTab={"tabs" + this.state.tabs}>
              <TabPane className='h-100 ' tabId="tabs1">
             <FileSideCommentListPanel />
              </TabPane>
              <TabPane tabId="tabs2">
                <FileSideInformationPanel />
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
        </div>
      </>
    );
  }
}

export default FileSideMasterPanel;