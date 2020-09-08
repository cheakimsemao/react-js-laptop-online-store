import React from "react";
import "../App.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container, Col, Row } from "react-bootstrap";
import { BsFillEnvelopeFill, BsLockFill, BsLock} from 'react-icons/bs';
import {FaFacebookSquare, FaTwitterSquare, FaInstagramSquare,FaRedditSquare} from 'react-icons/fa';

const SignUp = () => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <h1>Sign Up</h1>
      </Row>
      <Row className="justify-content-center paragraph">
        <h3 className="mb-5">Create Your Free Account</h3>
      </Row>
      <Form fluid="md">
        <Row className="justify-content-center">
          <Col lg={5} md={8} sm={10} xs={11}>
            <Form.Group className="label-text" controlId="formBasicEmail">
              <Form.Label className="form-label">Email address</Form.Label>
              <div class="input-field">   
              <Form.Control className="from-control" type="email" placeholder="Enter Email"required />
              <BsFillEnvelopeFill className="input-icon"/>
              </div>
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={5} md={8} sm={10} xs={11}>
            <Form.Group className="label-text" controlId="formBasicPassword">
              <Form.Label className="form-label">Password</Form.Label>
              <div class="input-field">
              <Form.Control className="from-control" type="password" placeholder="Enter Password" required />
                <BsLockFill className="input-icon"></BsLockFill>
            </div>
            </Form.Group>
          </Col>
        </Row>

        <Row className="justify-content-center mb-3">
          <Col lg={5} md={8} sm={10} xs={11}>
            <Form.Group className="label-text" controlId="formBasicPassword">
              <Form.Label className="form-label">Confirm Password</Form.Label>
              <div class="input-field">
              <Form.Control className="from-control" type="password" placeholder="Re-Enter Password" required />
                    <BsLock className="input-icon"></BsLock>
                </div>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col style={{ "text-align": "center" }}>
            Already have an account?
            <a
              href="$"
              style={{
                color: "#ff6600",
                "margin-left": "1em",
                "text-decoration": "none",
              }}
            >
              Sign In
            </a>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col style={{ "text-align": "center" }}>
            <Button className="sign-button" variant="white" type="submit">
              Sign Up
            </Button>
          </Col>
        </Row>

              <Row className="justify-content-center mb-3">
                  <Col lg={2} md={3} sm={4} xs={5}>
                        <hr className="horizontal-line"></hr>
                  </Col>
                  <Col style={{"text-align":"center"}} lg={1} md={2} sm={2} xs={1}>
                    <span>Or</span>
                  </Col>
                  <Col lg={2} md={3} sm={4} xs={5}>
                        <hr className="horizontal-line"></hr>
                  </Col>
              </Row>

              <Row>
                    <Col classname="social-menu" style={{ "text-align": "center" }}>

   <a href="$"><FaFacebookSquare className="fa fa-facebook"></FaFacebookSquare></a>
   <a href="$"><FaInstagramSquare className="fa fa-instagram"></FaInstagramSquare></a>
   <a href="$"><FaTwitterSquare className="fa fa-twitter"></FaTwitterSquare></a>
   <a href="$"><FaRedditSquare className="fa fa-reddit"></FaRedditSquare></a>
  

                   
                  
                    </Col>
              </Row>
      </Form>
    </Container>
  );
};

export default SignUp;
