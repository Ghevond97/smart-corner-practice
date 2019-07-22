import React, { Component } from "react";
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';

import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";

class NavbarPage extends Component {
state = {
  isOpen: false,
  activeTab: '',
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

// setActiveLink = () => {
//   this.setState()
// }


render() {
  return (
      <MDBNavbar color="primary-color" dark expand="md" >
        <MDBNavbarBrand>
          <strong className="white-text">Smart Corner</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} className="white-text" />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active={this.state.activeTab === 'landing'? true: false} onClick={()=>{this.setState({activeTab: 'landing'})}}>
              <MDBNavLink><Link to={ROUTES.LANDING} className="white-text">Landing</Link></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active={this.state.activeTab === 'posts'? true: false} onClick={()=>{this.setState({activeTab: 'posts'})}}>
              <MDBNavLink><Link to={ROUTES.POSTS} className="white-text">Posts</Link></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active={this.state.activeTab === 'photos'? true: false} onClick={()=>{this.setState({activeTab: 'photos'})}}>
              <MDBNavLink><Link to={ROUTES.PHOTOS} className="white-text">Photos</Link></MDBNavLink>
            </MDBNavItem>
            {/* <MDBNavItem active={this.state.activeTab === 'photos'? true: false} onClick={()=>{this.setState({activeTab: 'photos'})}}>
              <MDBNavLink><Link to={ROUTES.POSTSA} className="white-text">POSTSA</Link></MDBNavLink>
            </MDBNavItem> */}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;