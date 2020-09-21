import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FormControl, Button } from 'react-bootstrap';
import { MdAddShoppingCart, MdPersonOutline, MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar id='header' expand='lg' sticky='top'>
                <Navbar.Brand>
                    <Link to='/' className='store-logo'>
                        100FH
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mr-auto'>
                        <Nav.Link>
                            <Link to='/'>Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/about'>About</Link>
                        </Nav.Link>
                        <NavDropdown title='Brands' id='basic-nav-dropdown' className='mr-3'>
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
                        <NavDropdown title='Accessories' id='basic-nav-dropdown' className='mr-3'>
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
                    <Form inline>
                        <FormControl type='text' placeholder='Search' className='mr-sm-2' />
                        <MdSearch className='search-icon' />
                        <Button className='search-btn'>Search</Button>
                        <div className='header-icons'>
                            <Link to='/signin'>
                                <MdPersonOutline className='nav-profile-icon' />
                            </Link>
                            <Link to='/cart'>
                                <MdAddShoppingCart className='nav-cart-icon' />
                            </Link>
                        </div>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;
