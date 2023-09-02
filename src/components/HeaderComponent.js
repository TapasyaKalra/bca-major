import React, { Component } from 'react';
import { Dropdown,DropdownToggle,DropdownMenu,DropdownItem, Navbar, NavbarBrand, Nav, NavbarToggler, NavItem, Collapse} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import LoginButton from './LoginButton';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            isNavOpen : false,
            isModalOpen : false,
            dropdownOpen : false
        };
        
        //avoid using arrow function in the onClick
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }
   
    toggleDropdown(){
      this.setState({
          dropdownOpen : !this.state.dropdownOpen
          //negating current value, true turns to false and vice versa
      });
  }
    toggleNav(){
        this.setState({
            isNavOpen : !this.state.isNavOpen
            //negating current value, true turns to false and vice versa
        });
    }
    
    
  render() {
    return(
    <React.Fragment>
        <Navbar expand = "md" className = "navbar-dark bg-primary mb-0" id = "navigation">
            <div className = "container">
                <NavbarToggler onClick = {this.toggleNav} />
                
                <Collapse isOpen = {this.state.isNavOpen} navbar>
                  <NavbarBrand className = "mr-auto" href="/">
                      <img src = "assets/images/icon.png" height = "30" width = "41" alt = "Glam Nation"/>
                  </NavbarBrand>
                  <Nav navbar className = "text-light">
                    <NavItem>
                      <NavLink to = "/home" className = "nav-link text-secondary">
                        Glam Nation
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className = "nav-link" to = "/home">
                      Home
                      </NavLink>
                    </NavItem>
                    <NavItem>
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>  
                      <DropdownToggle caret className = "shadow-none bg-transparent text-light text-grey border-0 pb-1">
                        <span id = "galleryButton">Gallery</span>
                      </DropdownToggle>
                      <DropdownMenu container="body" className = "bg-light">
                        <DropdownItem onClick={function noRefCheck(){}}>
                          <NavLink className = "nav-link" to = "/bridalGallery">
                            Bridals
                          </NavLink>
                        </DropdownItem>
                        <DropdownItem onClick={function noRefCheck(){}}>
                          <NavLink className = "nav-link" to = "/engagementGallery">
                            Engagement
                          </NavLink>
                        </DropdownItem>
                        <DropdownItem onClick={function noRefCheck(){}}>
                          <NavLink className = "nav-link " to = "/partyGallery">
                            Party Makeups
                          </NavLink>
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    </NavItem>
                    <NavItem>
                      <NavLink className = "nav-link" to = "/pricing">
                        Pricing
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className = "nav-link" to = "/products">
                        Products
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className = "nav-link" to = "/contactus">
                        Contact Us
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className = "nav-link" to = "/aboutus">
                        About Us
                      </NavLink>
                    </NavItem>

                  </Nav>
                  <Nav navbar  className = "ms-auto" >
                <NavItem>

                      <LoginButton></LoginButton>   
                    </NavItem>
                  </Nav>
                </Collapse>
            </div>
        </Navbar>
        
      
      
    </React.Fragment>
    );
  }
}

export default Header;