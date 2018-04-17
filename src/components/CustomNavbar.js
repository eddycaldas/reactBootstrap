import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
  render() {
    return(
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Eddy Caldas</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href='/' to='/'>
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href='/About' to='/About'>
              About
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href='/Portfolio' to='/Portfolio'>
              Portfolio
            </NavItem>
            <NavItem eventKey={4} componentClass={Link} href='/Resume' to='/Resume'>
              Resume
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}