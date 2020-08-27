import React from 'react';
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Portfolio</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Navigation;