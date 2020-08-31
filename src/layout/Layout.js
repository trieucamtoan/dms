import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';

export const NavigationBar = () => {
  const isLoggedIn = () => {
    return (localStorage.getItem("isLoggedIn") === "true")
  }

  const populateNavDynamically = () => {
    if (isLoggedIn()){
      return (
        <Nav className="mr-auto">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/logout">Logout</Nav.Link>
        </Nav>
      )
    }
    else {
      return (
        <Nav className="mr-auto">
          <Nav.Link href="/features">Features</Nav.Link>
          <Nav.Link href="/sign-up">Sign Up</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      )
    }
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/home">Dine-In Management System</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        {populateNavDynamically()}
      </Navbar.Collapse>
    </Navbar>
  )
}
