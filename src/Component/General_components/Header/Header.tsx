import React from 'react'
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
} from 'react-bootstrap'
import { BsCart4 } from 'react-icons/bs'
import { FaRegHeart } from 'react-icons/fa'
import { RiAccountBoxLine } from 'react-icons/ri'

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Test Commerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">Aboutus</Nav.Link>
                    <Nav.Link href="/contact">Contactus</Nav.Link>
                    <Nav.Link href="/product">Products</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                            Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                            Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form className="d-flex ml-auto">
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <nav className="nav navbar-nav navbar-right padding-left:45%">
                    <BsCart4 />
                    <FaRegHeart />
                    <RiAccountBoxLine />
                </nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
