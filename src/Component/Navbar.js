import React from 'react';
import {Navbar, Nav,} from "react-bootstrap";

export default function Navbarr() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        
          <Navbar.Brand href="#home">CinéEK</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Movies</Nav.Link>
            <Nav.Link href="#features" >Series</Nav.Link>
            <Nav.Link href="#pricing">Anime</Nav.Link>
          </Nav>
        
      </Navbar>
    </div>
  )
}
