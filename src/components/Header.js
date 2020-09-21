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
            {/* <Navbar id='header' collapseOnSelect expand='lg' bg='' variant=''>
                <Navbar.Brand>
                    <Link to='/' className='store-logo'>
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
                    <Nav id='right-navbar'>
                        <Form.Group className='label-text' controlId='Search'>
                            <div className='input-field'>
                                <Form.Control className='mr-auto' type='text' placeholder='Search' />
                                <MdSearch className='input-icon' />
                            </div>
                        </Form.Group>
                        <Link to='/signin'>
                            <MdPersonOutline className='nav-icons' />
                        </Link>
                        <Link to='/cart'>
                            <MdAddShoppingCart className='nav-icons' />
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> */}
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
