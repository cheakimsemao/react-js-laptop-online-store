import React from 'react';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container id='footer' className='mt-5 mb-5'>
            <Row className='mt-5'>
                <Col sm className='mb-5'>
                    <Link to='/' className='store-logo'>
                        100FH
                    </Link>
                </Col>
                <Col sm={4}>
                    <p className='mb-4 footer-title'>Brands</p>
                    <Row>
                        <Col>
                            <ul className='list-unstyled'>
                                <li>
                                    <Link to='/brands/apple'>APPLE</Link>
                                </li>
                                <li>
                                    <Link to='/brands/google'>GOOGLE</Link>
                                </li>
                                <li>
                                    <Link to='/brands/samsung'>SAMSUNG</Link>
                                </li>
                                <li>
                                    <Link to='/brands/alienware'>ALIENWARE</Link>
                                </li>
                                <li>
                                    <Link to='/brands/lenovo'>LENOVO</Link>
                                </li>
                                <li>
                                    <Link to='/brands/microsoft'>MICROSOFT</Link>
                                </li>
                                <li>
                                    <Link to='/brands/huawei'>HUAWEI</Link>
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <ul className='list-unstyled'>
                                <li>
                                    <Link to='/brands/xiaomi'>XIAOMI</Link>
                                </li>
                                <li>
                                    <Link to='/brands/msi'>MSI</Link>
                                </li>
                                <li>
                                    <Link to='/brands/dell'>DELL</Link>
                                </li>
                                <li>
                                    <Link to='/brands/sony'>SONY</Link>
                                </li>
                                <li>
                                    <Link to='/brands/asus'>ASUS</Link>
                                </li>
                                <li>
                                    <Link to='/brands/razer'>RAZER</Link>
                                </li>
                                <li>
                                    <Link to='/brands/hp'>HP</Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
                <Col sm>
                    <p className='mb-4 footer-title'>Accessories</p>
                    <ul className='list-unstyled'>
                        <li>
                            <Link to='/accessories/keyboard'>KEYBOARD</Link>
                        </li>
                        <li>
                            <Link to='/accessories/mouse'>MOUSE</Link>
                        </li>
                        <li>
                            <Link to='/accessories/headset'>HEADSET</Link>
                        </li>
                        <li>
                            <Link to='/accessories/webcam'>WEBCAM</Link>
                        </li>
                        <li>
                            <Link to='/accessories/usb'>USB</Link>
                        </li>
                        <li>
                            <Link to='/accessories/adaptor'>ADAPTOR</Link>
                        </li>
                    </ul>
                </Col>
                <Col sm>
                    <p className='mb-4 footer-title'>About</p>
                    <ul className='list-unstyled'>
                        <li>
                            <Link to='/about'>CONTACT</Link>
                        </li>
                        <li>
                            <Link to='/about'>LOCATION</Link>
                        </li>
                    </ul>
                    <p className='mt-5 mb-4 footer-title'>Follow Us</p>
                    <Link to='' className='social-media-icon'>
                        <FiFacebook />
                    </Link>
                    <Link to='' className='social-media-icon'>
                        <FiTwitter />
                    </Link>
                    <Link to='' className='social-media-icon'>
                        <FiInstagram />
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
