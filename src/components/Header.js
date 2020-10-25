import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FormControl, Button } from 'react-bootstrap';
import { MdAddShoppingCart, MdPersonOutline, MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Header = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/brands`).then((res) => {
            setData(res.data);
        });
    }, []);

    const brands = data.map((item) => {
        for (var i = item.id; i < 6; i++) {
            return (
                <NavDropdown.Item key={item.id}>
                    <Link to={`/brands/${item.name}`}>{item.name}</Link>
                </NavDropdown.Item>
            );
        }
    });

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
                            {brands}
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <Link to='/brands'>More...</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title='Accessories' id='basic-nav-dropdown' className='mr-3'>
                            <NavDropdown.Item>
                                <Link to='/accessories/Headset'>Headset</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to='/accessories/Mouse'>Mouse</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to='/accessories/Keyboard'>Keyboard</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to='/accessories/Webcam'>Webcam</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to='/accessories/Speaker'>Speaker</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to='/accessories/Adaptor'>Adaptor</Link>
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
