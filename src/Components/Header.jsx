import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { IoMdCalculator } from 'react-icons/io';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm py-3 header-fixed">
      <Container>
        <Navbar.Brand className="fs-4 fw-semibold text-success ">
           String Calculator  <IoMdCalculator/>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex gap-2">
            <Button variant="outline-success" size="sm">Home</Button>
            <Button variant="outline-success" size="sm">About</Button>
            <Button variant="outline-success" size="sm">Help</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
