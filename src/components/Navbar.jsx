import React from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar 
      bg="transparent" 
      variant="dark" 
      expand="lg" 
      fixed="top"
      className="py-3"
    >
      <Container fluid>
        {/* Logo on the left */}
        <Navbar.Brand href="#home" className="me-auto">
          <img
            src="/logo.png" // Replace with your logo path
            height="40"
            className="d-inline-block align-top"
            alt="Company Logo"
          />
        </Navbar.Brand>

        {/* Toggle button - appears on mobile */}
        <Navbar.Toggle 
          aria-controls="offcanvasNavbar" 
          className="border-0"
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        {/* Offcanvas menu for mobile */}
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          className="bg-dark text-white"
        >
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {/* Navigation links - centered in offcanvas */}
            <Nav className="justify-content-center flex-grow-1 pe-3">
              <Nav.Link href="#home" className="mx-2 px-3 py-2">Home</Nav.Link>
              <Nav.Link href="#services" className="mx-2 px-3 py-2">Services</Nav.Link>
              <Nav.Link href="#contact" className="mx-2 px-3 py-2">Contact Us</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;