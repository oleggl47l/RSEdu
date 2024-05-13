import {Navbar as BootstrapNavbar, Nav, NavDropdown, Container} from "react-bootstrap";
import './navBarStyle.css';
import {useEffect, useState} from "react";
import {extractRoleFromToken} from "../../Services/extractRoleFromToken.ts";

export const Navbar = () => {
    const [role, setRole] = useState('');
    const isAuthenticated = localStorage.getItem('token') !== null;

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const extractedRole = extractRoleFromToken(token);
            setRole(extractedRole);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    return (
        <BootstrapNavbar expand="lg" style={{ backgroundColor: '#003049' }} variant={"dark"}>
            <Container style={{margin: 'auto'}}>

                <BootstrapNavbar.Brand href="/">
                    <img
                        src={"src/images/text.svg"}
                        alt="Image robot"
                        className="d-inline-block align-content-center custom-logo"
                        style={{width: '150px'}}
                    />
                    <img
                        src={"src/images/robot.svg"}
                        alt="Image robot"
                        className="d-inline-block align-content-center custom-logo"
                        style={{width: '60px', marginRight: 'auto'}}
                    />
                </BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav"/>
                <BootstrapNavbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto my-2 my-lg-0">
                        <Nav.Link href="/">Main</Nav.Link>
                        <Nav.Link href="/aboutPage">About</Nav.Link>
                        <Nav.Link href="/downloadPage">Downloads</Nav.Link>
                        {isAuthenticated && role === 'Admin' && (
                            <NavDropdown title="Admin" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/usersPage">Users</NavDropdown.Item>
                                <NavDropdown.Item href="/rolesPage">Roles</NavDropdown.Item>
                                <NavDropdown.Item href="/groupsPage">Groups</NavDropdown.Item>
                            </NavDropdown>
                        )}
                        {isAuthenticated && role === 'Teacher' && (
                            <NavDropdown title="Teacher" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/groupsPage">Groups</NavDropdown.Item>
                            </NavDropdown>
                        )}
                        <Nav.Link href="/newsPage">News</Nav.Link>
                    </Nav>
                    <Nav className="me-xxl-1 my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        {isAuthenticated ? (
                            <>
                                <Nav.Link href="/profile">Profile</Nav.Link>
                                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link href="/registration">Registration</Nav.Link>
                                <Nav.Link href="/login">Login</Nav.Link>
                            </>
                        )}
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
};