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
                                    <Link to='/brands/Apple'>APPLE</Link>
                                </li>
                                <li>
                                    <Link to='/brands/Google'>GOOGLE</Link>
                                </li>
                                <li>
                                    <Link to='/brands/Samsung'>SAMSUNG</Link>
                                </li>
                                <li>
                                    <Link to='/brands/Alienware'>ALIENWARE</Link>
                                </li>
                                <li>
                                    <Link to='/brands/Lenovo'>LENOVO</Link>
                                </li>
                                <li>
                                    <Link to='/brands/Microsoft'>MICROSOFT</Link>
                                </li>
                                <li>
                                    <Link to='/brands/Huawei'>HUAWEI</Link>
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <ul className='list-unstyled'>
                                <li>
                                    <Link to='/brands/Xiaomi'>XIAOMI</Link>
                                </li>
                                <li>
                                    <Link to='/brands/MSI'>MSI</Link>
                                </li>
                                <li>
                                    <Link to='/brands/Dell'>DELL</Link>
                                </li>
                                <li>
                                    <Link to='/brands/Sony'>SONY</Link>
                                </li>
                                <li>
                                    <Link to='/brands/Asus'>ASUS</Link>
                                </li>
                                <li>
                                    <Link to='/brands/Razer'>RAZER</Link>
                                </li>
                                <li>
                                    <Link to='/brands/HP'>HP</Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
                <Col sm>
                    <p className='mb-4 footer-title'>Accessories</p>
                    <ul className='list-unstyled'>
                        <li>
                            <Link to='/accessories/Headset'>HEADSET</Link>
                        </li>
                        <li>
                            <Link to='/accessories/Mouse'>MOUSE</Link>
                        </li>
                        <li>
                            <Link to='/accessories/Keyboard'>KEYBOARD</Link>
                        </li>
                        <li>
                            <Link to='/accessories/Webcam'>WEBCAM</Link>
                        </li>
                        <li>
                            <Link to='/accessories/USB'>USB</Link>
                        </li>
                        <li>
                            <Link to='/accessories/Adaptor'>ADAPTOR</Link>
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
