import React from 'react';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown'
import Navbar from 'react-bootstrap/Navbar';

function Header(){
  
  const navigate = useNavigate()
  function logOut()
  {
    localStorage.clear();
    navigate("/login")
  }
 
    return(
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className='h3' ><spamm className="text-primary h2" >Education@</spamm>Consulting</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {/* <Nav className="me-auto">
              <Nav.Link href="#home"></Nav.Link>
            </Nav> */} 
          <Nav className="d-flex">
                  { localStorage.getItem("user")?
                    <Dropdown>
                          <Dropdown.Toggle variant="with" id="dropdown-basic"> { localStorage.getItem("user")} </Dropdown.Toggle>
                          <Dropdown.Menu>
                          <Dropdown.Item  href="/profile" > Profile</Dropdown.Item>
                          <Dropdown.Item onClick={logOut}>log out</Dropdown.Item>
                          </Dropdown.Menu>
                    </Dropdown>
                  : <Nav>
                        <Nav.Link href="/login">Login</Nav.Link>
                        {/* <Nav.Link href="/Register">Register</Nav.Link> */}
                    </Nav>

                  }
          </Nav>
        
        </Container>
      </Navbar>
    )
}

export default Header;