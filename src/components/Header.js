import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaFacebookSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar id='header' collapseOnSelect expand='lg' bg='' variant=''>
                <Navbar.Brand>
                    <Link to='/' className='paragraph'>
                        100FH
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav id='left-navbar' className='mr-auto'>
                        <Nav.Link>
                            <Link to='/'>Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/about'>About</Link>
                        </Nav.Link>
                        <NavDropdown title='Brands' id='collasible-nav-dropdown'>
                            <NavDropdown.Item>
                                <Link to={'/brands/apple'}>Apple</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to={'/brands/google'}>Google</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to='/brands/alienware'>Alienware</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to='/brands/dell'>Dell</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to='/brands/lenovo'>Lenovo</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to='/brands/msi'>MSI</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to='/brands/asus'>Asus</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <Link to='/brands'>More...</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title='Accessories' id='collasible-nav-dropdown'>
                            <NavDropdown.Item>
                                <Link to='/accessories/keyboard'>Keyboard</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to='/accessories/mouse'>Mouse</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to='/accessories/headset'>Headset</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to='/accessories/webcam'>Webcam</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to='/accessories/usb'>USB</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to='/accessories/adaptor'>Adaptor</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Form inline>
                            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
                            <Button className='search-button' variant='white' type='submit'>
                                Search
                            </Button>
                        </Form>

                        <Link to='/signin'>
                            <FaFacebookSquare className='fa-facebook' />
                        </Link>
                        <Link to='/cart'>
                            <FaFacebookSquare className='fa-facebook' />
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <hr />
        </>
    );
};

export default Header;
