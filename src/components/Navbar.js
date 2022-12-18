import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
    return (
        <>
            <div className="navbar_element">
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <div className="navbarbrand">
                            <Navbar.Brand href="#"><h3>The YAY Company</h3></Navbar.Brand>
                        </div>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link className="navbar__item" href="/">Home</Nav.Link>
                                <Nav.Link className="navbar__item" href="/components/News">News</Nav.Link>
                                <Nav.Link className="navbar__item" href="/components/Contact">Contact</Nav.Link>

                            </Nav>
                            <Form className="d-flex">
                                <Form classname="inner_searchform">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                </Form>
                                <Button className="searchform_button">Go</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default Navigation;