import React, { useRef } from 'react';
import '../App.css';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import { BsFillEnvelopeFill, BsLockFill, BsFillPersonLinesFill } from 'react-icons/bs';
import { FaFacebookSquare, FaTwitter, FaRedditSquare } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit, errors, watch } = useForm({
        criteriaMode: 'all',
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    const password = useRef({});
    password.current = watch('password', '');

    return (
        <>
            <div className='breadcrumbs'>
                <p>
                    Home / Profile / <span>Sign Up</span>
                </p>
            </div>
            <Container id='sign-up'>
                <Row className='justify-content-center'>
                    <p className='form-title'>Sign Up</p>
                </Row>
                <Row className='justify-content-center paragraph'>
                    <p className='mb-5 form-subtitle'>Create Your Free Account</p>
                </Row>
                <Form fluid='md' onSubmit={handleSubmit(onSubmit)}>
                    <Row className='justify-content-center'>
                        <Col lg={5} md={8} sm={10} xs={11}>
                            <Form.Group className='label-text' controlId='formBasicUserName'>
                                <Form.Label className='form-label'>Username</Form.Label>
                                <div className='input-field'>
                                    <Form.Control
                                        autoComplete='off'
                                        ref={register({
                                            required: 'This is required.',
                                            pattern: {
                                                value: /^[a-z]*$/i,
                                                message: 'User Name Must Contain Letters Only',
                                            },
                                        })}
                                        name='userName'
                                        className='from-control'
                                        type='text'
                                        placeholder='Enter Full Name'
                                        required
                                    />
                                    {errors.userName && (
                                        <p style={{ color: 'red' }}>{errors.userName.message}</p>
                                    )}

                                    <BsFillPersonLinesFill className='input-icon' />
                                </div>
                                <Form.Text className='text-muted'></Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col lg={5} md={8} sm={10} xs={11}>
                            <Form.Group className='label-text'>
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
                                    {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

                                    <BsFillEnvelopeFill className='input-icon' />
                                </div>
                                <Form.Text className='text-muted'></Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col lg={5} md={8} sm={10} xs={11}>
                            <Form.Group className='label-text'>
                                <Form.Label className='form-label'>Password</Form.Label>
                                <div className='input-field'>
                                    <Form.Control
                                        autoComplete='off'
                                        name='password'
                                        type='password'
                                        ref={register({
                                            required: 'This is required.',
                                            minLength: {
                                                value: 8,
                                                message: 'Password must have at least 8 characters',
                                            },
                                            maxLength: {
                                                value: 20,
                                                message: 'Password must have less than 20 characters',
                                            },
                                        })}
                                        required
                                        placeholder='Enter password'
                                    />
                                    {errors.password && (
                                        <p style={{ color: 'red' }}>{errors.password.message}</p>
                                    )}
                                    <BsLockFill className='input-icon'></BsLockFill>
                                </div>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='justify-content-center mb-3'>
                        <Col lg={5} md={8} sm={10} xs={11}>
                            <Form.Group className='label-text'>
                                <Form.Label className='form-label'>Confirm Password</Form.Label>
                                <div className='input-field'>
                                    <Form.Control
                                        autoComplete='off'
                                        required
                                        placeholder='Confirm Password'
                                        name='password_repeat'
                                        type='password'
                                        ref={register({
                                            validate: (value) =>
                                                value === password.current || 'The passwords do not match',
                                        })}
                                    />
                                    {errors.password_repeat && (
                                        <p style={{ color: 'red' }}>{errors.password_repeat.message}</p>
                                    )}
                                    <BsLockFill className='input-icon'></BsLockFill>
                                </div>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='mb-4'>
                        <Col style={{ textAlign: 'center' }}>
                            Already have an account?
                            <Link
                                to='/signin'
                                style={{
                                    color: '#ff6600',
                                    marginLeft: '5px',
                                    textDecoration: 'none',
                                }}>
                                Sign In
                            </Link>
                        </Col>
                    </Row>
                    <Row className='mb-4'>
                        <Col style={{ textAlign: 'center' }}>
                            <Button className='sign-button' variant='white' type='submit'>
                                Sign Up
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

export default SignUp;
