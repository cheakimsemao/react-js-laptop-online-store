import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { FaFacebookSquare, FaTwitter, FaRedditSquare } from 'react-icons/fa';
import {Link}from "react-router-dom"
const Header = () => {
    return (
        <>
            <Navbar id="header" collapseOnSelect expand="lg" bg="" variant="">
                <Navbar.Brand href="#home" className="paragraph">100FH</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav id="left-navbar" className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <NavDropdown title="Brands" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#Brands/Apple">Apple</NavDropdown.Item>
                            <NavDropdown.Item href="#Brands/Google">Google</NavDropdown.Item>
                            <NavDropdown.Item href="#Brands/Alienware">Alienware</NavDropdown.Item>
                            <NavDropdown.Item href="#Brands/Dell">Dell</NavDropdown.Item>
                            <NavDropdown.Item href="#Brands/Lenovo">Lenovo</NavDropdown.Item>
                            <NavDropdown.Item href="#Brands/MSI">MSI</NavDropdown.Item>
                            <NavDropdown.Item href="#Brands/ROG">ROG</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#Brands/More">More...</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Accessories" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#Accessories/Keyboard">Keyboard</NavDropdown.Item>
                            <NavDropdown.Item href="#Accessories/Mouse">Mouse</NavDropdown.Item>
                            <NavDropdown.Item href="#Accessories/Headset">Headset</NavDropdown.Item>
                            <NavDropdown.Item href="#Accessories/Webcam">Webcam</NavDropdown.Item>
                            <NavDropdown.Item href="#Accessories/USB">USB</NavDropdown.Item>
                            <NavDropdown.Item href="#Accessories/Adaptor">Adaptor</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#Accessories/More">More...</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button className='search-button' variant='white' type='submit'>Search</Button>
                        </Form>

                        <Link to="/signin">
                        <a>
                            <FaFacebookSquare className='fa-facebook' />
                        </a>
                        </Link>
                        <Link to="/signout">
                        <a>
                            <FaFacebookSquare className='fa-facebook' />
                        </a>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <hr />
        </>
    )
};

export default Header;