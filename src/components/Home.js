import React from 'react';

import { Link } from 'react-router-dom';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';

import Macbook from '../assets/images/others/laptops/Macbook.png';
import Macbook1 from '../assets/images/others/laptops/Macbook-1.png';
import Macbook2 from '../assets/images/others/laptops/Macbook-2.png';
import Macbook3 from '../assets/images/others/laptops/Macbook-3.png';

const Home = () => {
    return (
        <div>
            <Carousel id='carousel'>
                <Carousel.Item>
                    <img className='d-block w-100' src={Macbook} alt='First slide' />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100' src={Macbook} alt='Second slide' />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100' src={Macbook} alt='Third slide' />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div id='new-arrival'>
                <div className='recommend-title'>
                    <div>
                        <span>NEW ARRIVAL</span>
                        <hr />
                    </div>
                    <div>
                        <AiFillLeftCircle className='prev-next-btn' />
                        <AiFillRightCircle className='prev-next-btn' />
                    </div>
                </div>
                <Container>
                    <Row>
                        <Col lg className='recommended-card'>
                            <img src={Macbook1} alt='macbook-pro-2020' />
                            <h6>MACBOOK PRO 16-INCH 2020</h6>
                            <Box component='fieldset' borderColor='transparent'>
                                <Rating name='read-only' value={5} size='small' readOnly />
                            </Box>
                            <p>$2099.00</p>
                        </Col>
                        <Col lg className='recommended-card'>
                            <img src={Macbook3} alt='macbook-pro-2020' />
                            <h6>MACBOOK PRO 15-INCH 2020</h6>
                            <Box component='fieldset' borderColor='transparent'>
                                <Rating name='read-only' value={5} size='small' readOnly />
                            </Box>
                            <p>$1999.00</p>
                        </Col>
                        <Col lg className='recommended-card'>
                            <img src={Macbook2} alt='macbook-pro-2020' />
                            <h6>MACBOOK AIR 2020</h6>
                            <Box component='fieldset' borderColor='transparent'>
                                <Rating name='read-only' value={5} size='small' readOnly />
                            </Box>
                            <p>$1199.00</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div id='trending'>
                <div className='recommend-title'>
                    <div>
                        <span>MOST POPULAR</span>
                        <hr />
                    </div>
                    <div>
                        <AiFillLeftCircle className='prev-next-btn' />
                        <AiFillRightCircle className='prev-next-btn' />
                    </div>
                </div>
                <Container>
                    <Row>
                        <Col lg className='recommended-card'>
                            <img src={Macbook1} alt='macbook-pro-2020' />
                            <h6>MACBOOK PRO 16-INCH 2020</h6>
                            <Box component='fieldset' borderColor='transparent'>
                                <Rating name='read-only' value={5} size='small' readOnly />
                            </Box>
                            <p>$2099.00</p>
                        </Col>
                        <Col lg className='recommended-card'>
                            <img src={Macbook3} alt='macbook-pro-2020' />
                            <h6>MACBOOK PRO 15-INCH 2020</h6>
                            <Box component='fieldset' borderColor='transparent'>
                                <Rating name='read-only' value={5} size='small' readOnly />
                            </Box>
                            <p>$1999.00</p>
                        </Col>
                        <Col lg className='recommended-card'>
                            <img src={Macbook2} alt='macbook-pro-2020' />
                            <h6>MACBOOK AIR 2020</h6>
                            <Box component='fieldset' borderColor='transparent'>
                                <Rating name='read-only' value={5} size='small' readOnly />
                            </Box>
                            <p>$1199.00</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg className='recommended-card'>
                            <img src={Macbook1} alt='macbook-pro-2020' />
                            <h6>MACBOOK PRO 16-INCH 2020</h6>
                            <Box component='fieldset' borderColor='transparent'>
                                <Rating name='read-only' value={5} size='small' readOnly />
                            </Box>
                            <p>$2099.00</p>
                        </Col>
                        <Col lg className='recommended-card'>
                            <img src={Macbook3} alt='macbook-pro-2020' />
                            <h6>MACBOOK PRO 15-INCH 2020</h6>
                            <Box component='fieldset' borderColor='transparent'>
                                <Rating name='read-only' value={5} size='small' readOnly />
                            </Box>
                            <p>$1999.00</p>
                        </Col>
                        <Col lg className='recommended-card'>
                            <img src={Macbook2} alt='macbook-pro-2020' />
                            <h6>MACBOOK AIR 2020</h6>
                            <Box component='fieldset' borderColor='transparent'>
                                <Rating name='read-only' value={5} size='small' readOnly />
                            </Box>
                            <p>$1199.00</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Home;
