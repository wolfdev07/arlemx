import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Favicon } from "../assets/favicon"

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
                <Nav.Link className='active' href="#home">Inicio</Nav.Link>
                <Nav.Link href="#link">Servicios</Nav.Link>
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

