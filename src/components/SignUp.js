import React, {useState, useRef}  from 'react';
import '../App.css';
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Container, Col, Row } from 'react-bootstrap';
import { BsFillEnvelopeFill, BsLockFill, BsLock } from 'react-icons/bs';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaRedditSquare } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";

const SignUp = () => {
    const isEven = () => 6 % 2 === 0;
    const { register, handleSubmit, errors, watch } = useForm({
        criteriaMode: "all"
    });
    const onSubmit = data => { 
        console.log(data);
     };
     const password = useRef({});
     password.current = watch("password", "");
    return (
        <Container className='mt-4'>
            <Row className='justify-content-center'>
                <h1>Sign Up</h1>
            </Row>
            <Row className='justify-content-center paragraph'>
                <h3 className='mb-5'>Create Your Free Account</h3>
            </Row>
            <Form fluid='md' onSubmit={handleSubmit(onSubmit)}>

                <Row className='justify-content-center'>
                    <Col lg={5} md={8} sm={10} xs={11}>
                        <Form.Group className='label-text' controlId='formBasicUserName'>
                            <Form.Label className='form-label'>User Name</Form.Label>
                            <div className='input-field'>
                                <Form.Control autoComplete="off"
                                    ref={register({
                                        required: 'This is required.',
                                        pattern: {
                                            value: /^[a-z]*$/i,
                                            message: 'USer Name Must Contain Letters Only',
                                        },

                                    })}
                                    name="userName"
                                    className='from-control'
                                    type='text'
                                    placeholder='Enter Full Name'
                                    required
                                />

                                <ErrorMessage
                                    errors={errors}
                                    name="userName"
                                    render={({ messages }) => {
                                        return messages ?
                                            Object.entries(messages).map(([type, message]) => (
                                                <p style={{ "color": "red" }} key={type}>{message}</p>
                                            )) : null;
                                    }}
                                />
                                <BsFillPersonLinesFill className='input-icon' />
                            </div>
                            <Form.Text className='text-muted'></Form.Text>
                        </Form.Group>
                    </Col>
                </Row>


                <Row className='justify-content-center'>
                    <Col lg={5} md={8} sm={10} xs={11}>
                        <Form.Group className='label-text'>
                            <Form.Label className='form-label'>Email address</Form.Label>
                            <div className='input-field'>
                                <Form.Control autoComplete="off"
                                    ref={register({
                                        required: 'This is required.',
                                        pattern: {
                                            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                            message: 'Invalid Email Address',
                                        },
                                        
                                    })}
                                    name="email"
                                    className='from-control'
                                    type='email'
                                    placeholder='Enter Email'
                                    required
                                />

                                <ErrorMessage
                                    errors={errors}
                                    name="email"
                                    render={({ messages }) => {
                                        return messages ?
                                            Object.entries(messages).map(([type, message]) => (
                                                <p style={{ "color": "red" }} key={type}>{message}</p>
                                            )) : null;
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
                        <Form.Group className='label-text' >
                            <Form.Label className='form-label'>Password
                                   {} 
                            </Form.Label>
                            <div className='input-field'>
                                <Form.Control autoComplete="off"
                                   name="password"
                                   type="password"
                                   ref={register({
                                     required: 'This is required.',
                                     minLength: {
                                       value: 8,
                                       message: "Password must have at least 8 characters"
                                     },
                                     maxLength: {
                                        value: 20,
                                        message: "Password must have less than 20 characters"
                                      }
                                   })}
                                   required placeholder="Enter password"
                                />
 {errors.password && <p style={{color:"red"}}>{errors.password.message}</p>}
                               
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
                                <Form.Control autoComplete="off"
                                required placeholder="Re-Enter password"
                                  name="password_repeat"
                                  type="password"
                                  ref={register({
                                    validate: value =>
                                      value === password.current || "The passwords do not match"
                                  })}
                                />
 {errors.password_repeat && <p style={{color:"red"}}>{errors.password_repeat.message}</p>}

                                <BsLock className='input-icon'></BsLock>
                            </div>
                        </Form.Group>
                    </Col>
                </Row>


                <Row className='mb-4'>
                    <Col style={{ 'textAlign': 'center' }}>
                        Already have an account?
                        <a
                            href='$'
                            style={{
                                color: '#ff6600',
                                'marginLeft': '1em',
                                'textDecoration': 'none',
                            }}>
                            Sign In
                        </a>
                    </Col>
                </Row>

                <Row className='mb-4'>
                    <Col style={{ 'textAlign': 'center' }}>
                        <Button className='sign-button' variant='white' type='submit'>
                            Sign Up
                        </Button>
                    </Col>
                </Row>

                <Row className='justify-content-center mb-3'>
                    <Col lg={2} md={3} sm={4} xs={5}>
                        <hr className='horizontal-line'></hr>
                    </Col>
                    <Col style={{ 'textAlign': 'center' }} lg={1} md={2} sm={2} xs={1}>
                        <span>Or</span>
                    </Col>
                    <Col lg={2} md={3} sm={4} xs={5}>
                        <hr className='horizontal-line'></hr>
                    </Col>
                </Row>

                <Row>
                    <Col className='social-menu' style={{ 'textAlign': 'center' }}>
                        <a href='$'>
                            <FaFacebookSquare className='fa fa-facebook'></FaFacebookSquare>
                        </a>
                        <a href='$'>
                            <FaInstagramSquare className='fa fa-instagram'></FaInstagramSquare>
                        </a>
                        <a href='$'>
                            <FaTwitterSquare className='fa fa-twitter'></FaTwitterSquare>
                        </a>
                        <a href='$'>
                            <FaRedditSquare className='fa fa-reddit'></FaRedditSquare>
                        </a>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default SignUp;
