import React from 'react';
import '../App.css';

import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Apple from '../assets/images/others/brands/Apple.png';
import Razer from '../assets/images/others/brands/Razer.png';
import Microsoft from '../assets/images/others/brands/Microsoft.png';
import Google from '../assets/images/others/brands/Google.png';
import Alienware from '../assets/images/others/brands/Alienware.png';
import Samsung from '../assets/images/others/brands/Samsung.png';
import Dell from '../assets/images/others/brands/Dell.png';
import Asus from '../assets/images/others/brands/Asus.png';
import Sony from '../assets/images/others/brands/Sony.png';
import Hp from '../assets/images/others/brands/Hp.png';
import Lenovo from '../assets/images/others/brands/Lenovo.png';
import Msi from '../assets/images/others/brands/Msi.png';
import Huawei from '../assets/images/others/brands/Huawei.png';
import Xiaomi from '../assets/images/others/brands/Xiaomi.png';

const Brands = () => {
    return (
        <>
            <div className='breadcrumbs'>
                <p>
                    Home / <span>Brands</span>
                </p>
            </div>
            <div id='brands'>
                <div>
                    <h1 className='text-center brands-title'>Brands</h1>
                </div>
                <Container className='brands-container'>
                    <Row id='team' className='brand-item'>
                        <Col lg={4}>
                            <Link to='/brands/Apple'>
                                <Card className='brand-apple'>
                                    <Card.Body>
                                        <img src={Apple}></img>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col lg={4}>
                            <Link to='/brands/Razer'>
                                <Card className='brand-razer'>
                                    <Card.Body>
                                        <img src={Razer}></img>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col lg={4}>
                            <Link to='/brands/Microsoft'>
                                <Card className='brand-microsoft'>
                                    <Card.Body>
                                        <img src={Microsoft}></img>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                    <Row id='team' className='brand-item'>
                        <Col lg={4}>
                            <Link to='/brands/Google'>
                                <Card className='brand-google'>
                                    <Card.Body>
                                        <img src={Google}></img>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col lg={4}>
                            <Link to='/brands/Alienware'>
                                <Card className='brand-alienware'>
                                    <Card.Body>
                                        <img src={Alienware}></img>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col lg={4}>
                            <Link to='/brands/Samsung'>
                                <Card className='brand-samsung'>
                                    <Card.Body>
                                        <img src={Samsung}></img>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                    <Row id='team' className='brand-item'>
                        <Col lg={4}>
                            <Link to='/brands/Dell'>
                                <Card className='brand-dell'>
                                    <Card.Body>
                                        <img src={Dell}></img>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col lg={4}>
                            <Link to='/brands/Asus'>
                                <Card className='brand-asus'>
                                    <Card.Body>
                                        <img src={Asus}></img>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col lg={4}>
                            <Link to='/brands/Sony'>
                                <Card className='brand-sony'>
                                    <Card.Body>
                                        <img src={Sony}></img>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                    <Row id='team' className='brand-item'>
                        <Col lg={4}>
                            <Link to='/brands/HP'>
                                <Card className='brand-hp'>
                                    <Card.Body>
                                        <img src={Hp}></img>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col lg={4}>
                            <Link to='/brands/Lenovo'>
                                <Card className='brand-lenovo'>
                                    <Card.Body>
                                        <img src={Lenovo}></img>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col lg={4}>
                            <Link to='/brands/MSI'>
                                <Card className='brand-msi'>
                                    <Card.Body>
                                        <img src={Msi}></img>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                    <Row id='team' className='brand-item' style={{ marginBottom: '200px' }}>
                        <Col lg={4}>
                            <Link to='/brands/Huawei'>
                                <Card className='brand-huawei'>
                                    <Card.Body>
                                        <img src={Huawei}></img>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col lg={4}>
                            <Link to='/brands/Xiaomi'>
                                <Card className='brand-xiaomi'>
                                    <Card.Body>
                                        <img src={Xiaomi}></img>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Brands;
