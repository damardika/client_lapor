import React from "react";
import "./Navbar.css";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton'

const Navigation = (props) => {
  console.log(props);
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">ADMIN PENGADUAN</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          
          <Nav.Link href="/FormData">Form Data</Nav.Link>
          
          
          <DropdownButton id="dropdown-basic-button" title="Status Data">
          <Dropdown.Item href="/StatusData">Status </Dropdown.Item>
          <Dropdown.Item href="/DataInformasi">Data Informasi</Dropdown.Item>
        
          </DropdownButton>
    
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Navigation);
