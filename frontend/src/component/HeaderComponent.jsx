
import React, { Component } from 'react'
import { Container, Navbar,Nav } from 'react-bootstrap'

export default class HeaderComponent extends Component {
  
  
  
  render() {
    return (
        <Navbar  expand="lg" style={{backgroundColor:'chocolate'}}>
        <Container>
          <Navbar.Brand style={{color:'white'}} href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={{color:'white'}} href="#home">Home</Nav.Link>
              <Nav.Link style={{color:'white'}} href="#link">Link</Nav.Link>
              <Nav.Link style={{color:'white'}} href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link style={{color:'white'}} href="#"><i className="fas fa-sign-in-alt"></i> Login</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

HeaderComponent.defaultProps = {
    content:"TeachCareer",
    icon:'fa-regular fa-user'
}


