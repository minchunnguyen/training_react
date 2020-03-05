import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export class NavBar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">Worker List</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-Navbar-nav" />
                <Navbar.Collapse id="basic-Navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Worker</Nav.Link>
                        {/* <Nav.Link href="/#/task">Task</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar
