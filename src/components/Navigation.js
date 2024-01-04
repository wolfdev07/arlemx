import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Favicon } from "../assets/favicon"
import { Link as LinkRoute } from 'react-router-dom';

export function Navigation() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">
                <Favicon alt="Logo" width="35" height="30" className="d-inline-block align-text-center"/>
                Área Legal México
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav><LinkRoute className='nav-link active' to='/'>Inicio</LinkRoute></Nav>
                <Nav><LinkRoute className='nav-link' to='/services'>Servicios</LinkRoute></Nav>
                <Nav><LinkRoute className='nav-link' to='/about-us'>Contáctanos</LinkRoute></Nav>
                <NavDropdown title="Clientes" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Aviso de Privacidad</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Centurion App</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

