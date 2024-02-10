import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" id="container-nav">
      <Navbar.Brand href="/" className="container-logo">
        <img
          alt=""
          src="/logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        <h3>EcoBanco</h3>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <NavDropdown title="Para Você" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Para seu Negócio" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Sobre o EcoBanco" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Central de Ajuda" id="basic-nav-dropdown">
              <NavDropdown.Item className="Drop-item" href="#action/3.1">Fale com a gente</NavDropdown.Item>
              <NavDropdown.Item className="Drop-item" href="#action/3.2">Ouvidoria</NavDropdown.Item>
              <NavDropdown.Item className="Drop-item" href="#action/3.3">Renegociação de dívidas</NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link href="/blog">Blog</Nav.Link>
        </Nav>
        <Nav>
            <Nav.Link as={Link} to="/login" className="btn-custom">Area do Cliente</Nav.Link>
            <Button as={Link} to="/cadastro" className="btn btn-success" >Abra sua conta</Button>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
    
  );
};

export default Header;
