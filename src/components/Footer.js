import React from 'react';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
    return (
        <Container id='footer' className='mt-5 mb-5'>
            <hr />
            <Row className='mt-5'>
                <Col sm>Logo</Col>
                <Col sm={4}>
                    <p className='mb-4 footer-title'>Brands</p>
                    <Row>
                        <Col>
                            <ul className='list-unstyled'>
                                <li>
                                    <a href='#'>APPLE</a>
                                </li>
                                <li>
                                    <a href='#'>GOOGLE</a>
                                </li>
                                <li>
                                    <a href='#'>SAMSUNG</a>
                                </li>
                                <li>
                                    <a href='#'>ALIENWARE</a>
                                </li>
                                <li>
                                    <a href='#'>LENOVO</a>
                                </li>
                                <li>
                                    <a href='#'>MICROSOFT</a>
                                </li>
                                <li>
                                    <a href='#'>HUAWEI</a>
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <ul className='list-unstyled'>
                                <li>
                                    <a href='#'>XIAOMI</a>
                                </li>
                                <li>
                                    <a href='#'>MSI</a>
                                </li>
                                <li>
                                    <a href='#'>DELL</a>
                                </li>
                                <li>
                                    <a href='#'>SONY</a>
                                </li>
                                <li>
                                    <a href='#'>ASUS</a>
                                </li>
                                <li>
                                    <a href='#'>RAZER</a>
                                </li>
                                <li>
                                    <a href='#'>HP</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
                <Col sm>
                    <p className='mb-4 footer-title'>Accessories</p>
                    <ul className='list-unstyled'>
                        <li>
                            <a href='#'>KEYBOARD</a>
                        </li>
                        <li>
                            <a href='#'>MOUSE</a>
                        </li>
                        <li>
                            <a href='#'>HEADSET</a>
                        </li>
                        <li>
                            <a href='#'>WEBCAM</a>
                        </li>
                        <li>
                            <a href='#'>USB</a>
                        </li>
                        <li>
                            <a href='#'>ADAPTOR</a>
                        </li>
                    </ul>
                </Col>
                <Col sm>
                    <p className='mb-4 footer-title'>About</p>
                    <ul className='list-unstyled'>
                        <li>
                            <a href='#'>CONTACT</a>
                        </li>
                        <li>
                            <a href='#'>LOCATION</a>
                        </li>
                    </ul>
                    <p className='mt-5 mb-4 footer-title'>Follow Us</p>
                    <a href='#' className='social-media-icon'>
                        <FiFacebook />
                    </a>
                    <a href='#' className='social-media-icon'>
                        <FiTwitter />
                    </a>
                    <a href='#' className='social-media-icon'>
                        <FiInstagram />
                    </a>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
