import React from 'react';
import '../App.css';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import { BsFillEnvelopeFill, BsLockFill } from 'react-icons/bs';
import { FaFacebookSquare, FaTwitter, FaRedditSquare } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const { register, handleSubmit, errors } = useForm({
        criteriaMode: 'all',
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <div className='breadcrumbs'>
                <p>
                    Home / Profile / <span>Sign In</span>
                </p>
            </div>
            <Container id='sign-in'>
                <Row className='justify-content-center'>
                    <p className='form-title'>Sign In</p>
                </Row>
                <Row className='justify-content-center paragraph'>
                    <p className='mb-5 form-subtitle'>Let's Get Started</p>
                </Row>
                <Form fluid='md' onSubmit={handleSubmit(onSubmit)}>
                    <Row className='justify-content-center'>
                        <Col lg={5} md={8} sm={10} xs={11}>
                            <Form.Group className='label-text' controlId='formBasicEmail'>
                                <Form.Label className='form-label'>Email</Form.Label>
                                <div className='input-field'>
                                    <Form.Control
                                        autoComplete='off'
                                        ref={register({
                                            required: 'This is required.',
                                            pattern: {
                                                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                                message: 'Invalid Email Address',
                                            },
                                        })}
                                        name='email'
                                        className='from-control'
                                        type='email'
                                        placeholder='Enter Email'
                                        required
                                    />
                                    <ErrorMessage
                                        errors={errors}
                                        name='email'
                                        render={({ messages }) => {
                                            return messages
                                                ? Object.entries(messages).map(([type, message]) => (
                                                      <p style={{ color: 'red' }} key={type}>
                                                          {message}
                                                      </p>
                                                  ))
                                                : null;
                                        }}
                                    />
                                    <BsFillEnvelopeFill className='input-icon' />
                                </div>
                                <Form.Text className='text-muted'></Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col lg={5} md={8} sm={10} xs={11}>
                            <Form.Group className='label-text' controlId='formBasicPassword'>
                                <Form.Label className='form-label'>Password</Form.Label>
                                <div className='input-field'>
                                    <Form.Control
                                        className='from-control'
                                        type='password'
                                        placeholder='Enter Password'
                                        required
                                    />
                                    <BsLockFill className='input-icon'></BsLockFill>
                                </div>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='mb-4 mt-3'>
                        <Col style={{ textAlign: 'center' }}>
                            Don't have an account yet?
                            <Link
                                to='/signup'
                                style={{
                                    color: '#ff6600',
                                    marginLeft: '5px',
                                    textDecoration: 'none',
                                }}>
                                Sign Up
                            </Link>
                        </Col>
                    </Row>
                    <Row className='mb-4'>
                        <Col style={{ textAlign: 'center' }}>
                            <Button className='sign-button' variant='white' type='submit'>
                                Sign In
                            </Button>
                        </Col>
                    </Row>
                    <Row className='justify-content-center mb-3'>
                        <Col lg={2} md={3} sm={4} xs={5}>
                            <hr className='horizontal-line'></hr>
                        </Col>
                        <Col className='or' lg={1} md={2} sm={2} xs={1}>
                            <span>OR</span>
                        </Col>
                        <Col lg={2} md={3} sm={4} xs={5}>
                            <hr className='horizontal-line'></hr>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='social-menu'>
                            <a href='$'>
                                <FaFacebookSquare className='fa-facebook' />
                            </a>
                            <a href='$'>
                                <FcGoogle className='fc-google' />
                            </a>
                            <a href='$'>
                                <FaTwitter className='fa-twitter' />
                            </a>
                            <a href='$'>
                                <FaRedditSquare className='fa-reddit' />
                            </a>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    );
};

export default SignIn;
