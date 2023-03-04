import React from 'react';
import {
  Navbar, Nav, DropdownButton, Dropdown,
} from 'react-bootstrap';

function MyNavbar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">My React App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <DropdownButton id="dropdown-basic-button" title="Dropdown">
        <Dropdown.Item href="#action-1">Action 1</Dropdown.Item>
        <Dropdown.Item href="#action-2">Action 2</Dropdown.Item>
        <Dropdown.Item href="#action-3">Action 3</Dropdown.Item>
      </DropdownButton>
    </div>

  );
}

export default MyNavbar;
