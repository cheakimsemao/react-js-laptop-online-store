import React from 'react';
import '../App.css';
import { Table, Container, Row, Col, Form } from 'react-bootstrap';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Cart = () => {
    const amount = 1;

    return (
        <>
            <div className='breadcrumbs'>
                <p>
                    Home / <span>Cart</span>
                </p>
            </div>
            <Container id='cart'>
                <Row>
                    <Col lg={7} md={12} sm={12}>
                        <h1 className='productHeader mb-5'>Shopping Cart</h1>
                        <Table responsive>
                            <thead>
                                <tr className='productHeader'>
                                    <th>Product Details</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                            <div>
                                                <img
                                                    src='https://www.fonez.ie/wp-content/uploads/2020/04/iPhoneXSilver.jpg'
                                                    alt='IPHONE X'
                                                    width='150px'
                                                    height='150px'></img>
                                            </div>
                                            <div className='productDetail'>
                                                <ul>
                                                    <li className='productName'>IPHONE X</li>
                                                    <li>COLOR: White</li>
                                                    <li>RAM: 8 GB</li>
                                                    <li>STORAGE: 64 GB</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex'>
                                            <button className='plus-minus-button mr-3' size='sm'>
                                                -
                                            </button>
                                            <div>{amount}</div>
                                            <button className='plus-minus-button ml-3' size='sm'>
                                                +
                                            </button>
                                        </div>
                                    </td>
                                    <td>$1,999</td>
                                    <td>$1,999</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                            <div>
                                                <img
                                                    src='https://www.fonez.ie/wp-content/uploads/2020/04/iPhoneXSilver.jpg'
                                                    alt='IPHONE X'
                                                    width='150px'
                                                    height='150px'></img>
                                            </div>
                                            <div className='productDetail'>
                                                <ul>
                                                    <li className='productName'>IPHONE X</li>
                                                    <li>COLOR: White</li>
                                                    <li>RAM: 8 GB</li>
                                                    <li>STORAGE: 64 GB</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex'>
                                            <button className='plus-minus-button mr-3' size='sm'>
                                                -
                                            </button>
                                            <div>{amount}</div>
                                            <button className='plus-minus-button ml-3' size='sm'>
                                                +
                                            </button>
                                        </div>
                                    </td>
                                    <td>$1,999</td>
                                    <td>$1,999</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col lg={5} md={12} sm={12} id='order-summary'>
                        <h1 className='productHeader mb-5'>Order Summary</h1>
                        <div className='d-flex justify-content-between mb-4'>
                            <strong>Items : 2</strong>
                            <strong> $XXXX</strong>
                        </div>
                        <strong>Shipping Method</strong>
                        <div className='radio-group mb-4 mt-4' style={{ 'text-align': 'center' }}>
                            <label class='radio'>
                                <input type='radio' value='free-delivery' name='pickup-method'></input>
                                Free Delivery <span></span>
                            </label>
                            <label class='radio'>
                                <input type='radio' value='pick-up' name='pickup-method'></input>
                                Pick Up <span></span>
                            </label>
                        </div>
                        <div className='mb-4'>
                            <strong>Promo Code</strong>
                            <Row className='mt-4'>
                                <Col md={8}>
                                    <Form>
                                        <Form.Group>
                                            <Form.Control type='text' placeholder='Enter Your Code' />
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col md={4}>
                                    <button className='apply-button' variant='white' type='submit'>
                                        Apply
                                    </button>
                                </Col>
                            </Row>
                        </div>
                        <hr></hr>
                        <div className='d-flex justify-content-between mb-4'>
                            <strong>Total Cost</strong>
                            <strong> $XXXX</strong>
                        </div>
                        <Link to='/cart/checkout' className='checkout-button' variant='white' type='button'>
                            Checkout
                        </Link>
                    </Col>
                </Row>
                <hr></hr>
                <Link to='/' className='go-back'>
                    <strong>
                        <BsArrowLeft className='arrow-left mr-2' style={{ fontSize: '30px' }} />
                        Continue Shopping
                    </strong>
                </Link>
            </Container>
        </>
    );
};

export default Cart;
