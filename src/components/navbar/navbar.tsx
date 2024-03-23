import {Navbar as BootstrapNavbar, Nav, NavDropdown, Container} from "react-bootstrap";
import './navBarStyle.css';

export const Navbar = () => {
    return (
        <BootstrapNavbar className="custom-navbar" variant={"dark"}>
        <Container>
            <BootstrapNavbar.Brand href="#home">ТУТ ЛОГО</BootstrapNavbar.Brand>
            <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav"/>
            <BootstrapNavbar.Collapse id="responsive-navbar-nav">
                <Nav className="m-auto">
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#downloads">Downloads</Nav.Link>
                    <NavDropdown title="Documentation" id="collapsible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#news">News</Nav.Link>
                </Nav>
            </BootstrapNavbar.Collapse>
        </Container>
    </BootstrapNavbar>
    );
};