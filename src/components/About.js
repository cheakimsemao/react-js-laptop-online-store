import React from 'react';
import '../App.css';
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { BsFillEnvelopeFill, BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { ImPhone } from 'react-icons/im';
import { MdMessage } from 'react-icons/md';

const About = () => {
    return (
        <>
            <div className='breadcrumbs'>
                <p>
                    Home / <span>About</span>
                </p>
            </div>
            <div id='about'>
                <div>
                    <h1 className='text-center about-title'>About Us</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod suspendisse placerat
                        est varius id vitae nulla. Morbi diam gravida risus sodales eget vestibulum. Nunc
                        molestie mattis in pretium elementum id morbi id. Pharetra ac adipiscing aliquet
                        sagittis egestas.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ornare sollicitudin
                        feugiat nulla aliquet lorem. Arcu fermentum mattis lectus quis netus semper donec
                        orci, a. Sed gravida nec, fermentum mi. Tortor phasellus id sed nullam condimentum
                        cursus. Tellus egestas tempor mauris sed. In commodo, fusce interdum ipsum malesuada
                        etiam id eros. In amet, integer velit odio sed fermentum morbi sed vitae. Purus orci
                        scelerisque semper accumsan bibendum a tristique et. Nulla adipiscing mauris velit
                        venenatis nibh placerat vitae eget a. Libero sed tortor neque, aliquam tortor ipsum
                        posuere. Viverra donec bibendum velit in sodales maecenas dolor id.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ornare sollicitudin
                        feugiat nulla aliquet lorem. Arcu fermentum mattis lectus quis netus semper donec
                        orci, a. Sed gravida nec, fermentum mi. Tortor phasellus id sed nullam condimentum
                        cursus. Tellus egestas tempor mauris sed. In commodo, fusce interdum ipsum malesuada
                        etiam id eros. In amet, integer velit odio sed fermentum morbi sed vitae. Purus orci
                        scelerisque semper accumsan bibendum a tristique et. Nulla adipiscing mauris velit
                        venenatis nibh placerat vitae eget a.
                    </p>
                </div>
                <div className='text-center'>
                    <h1 className='team-title'>Our Team</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod suspendisse placerat
                        est varius id vitae nulla. Morbi diam gravida risus sodales eget vestibulum.
                    </p>
                </div>
                <Container className='card-container'>
                    <Row id='team'>
                        <Col lg={3}>
                            <Card className='team-card '>
                                <Card.Body>
                                    <div className='position-relative overflow-hidden mx-auto team-profile'>
                                        <img src='https://scontent.fpnh3-1.fna.fbcdn.net/v/t1.0-9/116666648_1570223706461040_8934943181573800174_o.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=ybVyNpGswtsAX-0uMot&_nc_ht=scontent.fpnh3-1.fna&oh=4e9076f34362a7e220bdc446ae867881&oe=5F8633E0'></img>
                                    </div>
                                    <Card.Title className='card-name'>Cheang Suy Fou</Card.Title>
                                    <Card.Text className='card-location'>
                                        <span>
                                            <HiOutlineLocationMarker className='card-icon' />
                                        </span>
                                        Phnom Penh
                                    </Card.Text>
                                    <Col sm>
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
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3}>
                            <Card className='team-card '>
                                <Card.Body>
                                    <div className='position-relative overflow-hidden mx-auto team-profile'>
                                        <img src='https://scontent.fpnh3-1.fna.fbcdn.net/v/t1.0-9/17903666_1953359964897194_5081674949640058810_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=F0DkYjrkETIAX-KIDSa&_nc_ht=scontent.fpnh3-1.fna&oh=267a716b3af44a529ffe0405003ebabd&oe=5F869840'></img>
                                    </div>
                                    <Card.Title className='card-name'>Seanghai Heng</Card.Title>
                                    <Card.Text className='card-location'>
                                        <span>
                                            <HiOutlineLocationMarker className='card-icon' />
                                        </span>
                                        Phnom Penh
                                    </Card.Text>
                                    <Col sm>
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
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3}>
                            <Card className='team-card'>
                                <Card.Body>
                                    <div className='position-relative overflow-hidden mx-auto team-profile'>
                                        <img src='https://scontent.fpnh3-1.fna.fbcdn.net/v/t1.0-9/65241776_1088465818208068_5493561444177805312_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=0tchq1k2rVMAX-Z16EV&_nc_ht=scontent.fpnh3-1.fna&oh=06f45ed87aea74823ea4d35130656b4d&oe=5F8989C0'></img>
                                    </div>
                                    <Card.Title className='card-name'>Cheakimhok Mao</Card.Title>
                                    <Card.Text className='card-location'>
                                        <span>
                                            <HiOutlineLocationMarker className='card-icon' />
                                        </span>
                                        Phnom Penh
                                    </Card.Text>
                                    <Col sm>
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
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3}>
                            <Card className='team-card'>
                                <Card.Body>
                                    <div className='position-relative overflow-hidden mx-auto team-profile'>
                                        <img src='https://scontent.fpnh6-1.fna.fbcdn.net/v/t1.0-9/65968500_862318104161355_718931629329874944_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=qSVuAONCXXcAX86QjPY&_nc_ht=scontent.fpnh6-1.fna&oh=0cd87d93fcd8c03a787f13e36def5eb1&oe=5F89ACCC'></img>
                                    </div>
                                    <Card.Title className='card-name'>Cheakimse Mao</Card.Title>
                                    <Card.Text className='card-location'>
                                        <span>
                                            <HiOutlineLocationMarker className='card-icon' />
                                        </span>
                                        Phnom Penh
                                    </Card.Text>
                                    <Col sm>
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
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row id='contact'>
                        <Col lg={5} className='contact-padding-1'>
                            <h1 className='mb-5'>Contact Info</h1>
                            <div id='contact-margin'>
                                <h5 id='contact-info'>
                                    <span>
                                        <HiOutlineMail className='contact-icon' />
                                    </span>
                                    EMAIL
                                </h5>
                                <p id='contact-detail'>info@summer-project.com</p>
                            </div>
                            <div id='contact-margin'>
                                <h5 id='contact-info'>
                                    <span>
                                        <HiOutlinePhone className='contact-icon' />
                                    </span>
                                    PHONE NUMBER
                                </h5>
                                <p id='contact-detail'>(+855) (023 | 012 | 081) 11 22 33</p>
                            </div>
                            <div id='contact-margin'>
                                <h5 id='contact-info'>
                                    <span>
                                        <HiOutlineLocationMarker className='contact-icon' />
                                    </span>
                                    ADDRESS
                                </h5>
                                <p id='contact-detail'>
                                    Corner of Preah Norodom Blvd and Street 106, Phnom Penh, Cambodia.
                                </p>
                            </div>
                        </Col>
                        <Col lg={7} className='contact-padding-2'>
                            <h1 className='text-center mb-5'>Get In Touch</h1>
                            <Form id='submit-form'>
                                <div className='input-field'>
                                    <Form.Group controlId='formGroupName'>
                                        <Form.Control
                                            type='text'
                                            placeholder='Full name'
                                            autoComplete='off'
                                        />
                                        <BsFillPersonLinesFill className='input-icon' />
                                    </Form.Group>
                                </div>
                                <div className='input-field'>
                                    <Form.Group controlId='formGroupEmail'>
                                        <Form.Control type='email' placeholder='Email' autoComplete='off' />
                                        <BsFillEnvelopeFill className='input-icon' />
                                    </Form.Group>
                                </div>

                                <div className='input-field'>
                                    <Form.Group controlId='formGroupNumber'>
                                        <Form.Control
                                            type='text'
                                            placeholder='Phone number'
                                            autoComplete='off'
                                        />
                                        <ImPhone className='input-icon' />
                                    </Form.Group>
                                </div>

                                <div className='input-field'>
                                    <Form.Group controlId='exampleForm.ControlTextarea1'>
                                        <Form.Control
                                            as='textarea'
                                            rows='3'
                                            placeholder='Your message'
                                            autoComplete='off'
                                        />
                                        <MdMessage className='input-icon' />
                                    </Form.Group>
                                </div>
                                <div className='center'>
                                    <Button className='submit-button' variant='white' type='submit'>
                                        Submit
                                    </Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.5734929007886!2d104.89579291480817!3d11.58240269177775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109517bf7757d23%3A0x965c34888684bf1!2sParagon%20International%20University!5e0!3m2!1sen!2skh!4v1600512480991!5m2!1sen!2skh'
                        frameborder='0'
                        allowfullscreen=''
                        aria-hidden='false'
                        tabindex='0'></iframe>
                </Container>
            </div>
        </>
    );
};

export default About;
