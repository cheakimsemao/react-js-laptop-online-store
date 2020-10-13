import React, { useState } from 'react';

import { Container, Row, Col, Modal, Button, Form } from 'react-bootstrap';

import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

import { GrLocation } from 'react-icons/gr';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import { BsFillEnvelopeFill, BsFillPersonLinesFill } from 'react-icons/bs';
import { MdTitle, MdMessage } from 'react-icons/md';

import JBL1 from '../../assets/images/others/headsets/JBL-1.jpg';
import Razer1 from '../../assets/images/others/headsets/Razer-1.jpg';
import Razer2 from '../../assets/images/others/headsets/Razer-2.jpg';
import Razer3 from '../../assets/images/others/headsets/Razer-3.png';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        '& > * + *': {
            marginTop: theme.spacing(1),
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
    },
}));

const AccessoryDetails = () => {
    const classes = useStyles();

    const initialCount = 1;
    const [count, setCount] = useState(initialCount);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='breadcrumbs'>
                <p>
                    Home / Accessories / Headsets / JBL / <span>Accessory Details</span>
                </p>
            </div>
            <div id='accessory-detail'>
                <Container>
                    <Row>
                        <Col sm className='accessory-detail-image'>
                            <img src={JBL1} alt='macbook-pro-2020' />
                        </Col>
                        <Col>
                            <p className='accessory-detail-title'>Razer Kraken Pro</p>
                            <Row className='accessory-detail-option'>
                                <Col lg={3}>
                                    <h6 className='price'>$179.00</h6>
                                </Col>
                                <Col lg={9} className={classes.root}>
                                    <Box component='fieldset' mb={3} borderColor='transparent'>
                                        <Rating name='read-only' value={5} size='small' readOnly />
                                    </Box>
                                </Col>
                            </Row>
                            <Row className='accessory-detail-option'>
                                <Col sm={3}>
                                    <p>COLOR: </p>
                                </Col>
                                <Col sm={9}>
                                    <button className='color-picker black'>&nbsp;</button>
                                    <button className='color-picker white'>&nbsp;</button>
                                    <button className='color-picker red'>&nbsp;</button>
                                </Col>
                            </Row>
                            <Row className='product-detail-option'>
                                <Col lg={4}>
                                    <form class='quantity-input'>
                                        <div
                                            class='value-button'
                                            id='decrease'
                                            onClick={() =>
                                                setCount((prevCount) =>
                                                    prevCount > 1 ? prevCount - 1 : null
                                                )
                                            }>
                                            -
                                        </div>
                                        <input type='number' id='number' value={count} />
                                        <div
                                            class='value-button'
                                            id='increase'
                                            onClick={() => setCount((prevCount) => prevCount + 1)}>
                                            +
                                        </div>
                                    </form>
                                </Col>
                                <Col lg={8}>
                                    <button className='add-to-cart-btn'>ADD TO CART</button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <div id='specification'>
                    <div className='specification-title'>
                        <span>SPECIFICATION</span>
                    </div>
                    <Container className='specification-details'>
                        <Row className='mt-5'>
                            <Col sm={3}>
                                <p>Audio Specifications</p>
                            </Col>
                            <Col sm={9}>
                                <p>
                                    <span>
                                        Frequency range 20Hz-20KHz
                                        <br />
                                    </span>
                                    <span>
                                        Sensitivity passive mode 95dBSPL / 1mW
                                        <br />
                                    </span>
                                    <span>
                                        Sensitivity active mode 102 dBSPL / 1mW
                                        <br />
                                    </span>
                                    <span>
                                        Transducer Impedance 32Ohm
                                        <br />
                                    </span>
                                    <span>
                                        Max input power 40mW
                                        <br />
                                    </span>
                                    <span>
                                        Transmit sensitivity -15 Dbv/Pa
                                        <br />
                                    </span>
                                </p>
                            </Col>
                            <Col sm={3}>
                                <p>Control and Connection Specifications</p>
                            </Col>
                            <Col sm={9}>
                                <p>
                                    <span>
                                        Bluetooth transmitted power less than 5d8m
                                        <br />
                                    </span>
                                    <span>
                                        Bluetooth transmitted modulation GFSK, π/4DQPSK
                                        <br />
                                    </span>
                                    <span>
                                        Bluetooth frequency 2.402GHz-2.480GHz
                                        <br />
                                    </span>
                                    <span>
                                        Bluetooth profiles version A2DP 1.2, AVRCP 1.5, HFP 1.6, HSP 1.2
                                        <br />
                                    </span>
                                    <span>
                                        1.2 Bluetooth version 4.2
                                        <br />
                                    </span>
                                </p>
                            </Col>
                            <Col sm={3}>
                                <p>Battery</p>
                            </Col>
                            <Col sm={9}>
                                <p>
                                    <span>
                                        Headset battery type Polymer Li-ion Battery(610mAh/3.7V)
                                        <br />
                                    </span>
                                    <span>
                                        Power supply 5V ⎓ 1A
                                        <br />
                                    </span>
                                    <span>
                                        Charging time less than 2 hrs from empty
                                        <br />
                                    </span>
                                    <span>
                                        Music play time with BT on 27 hrs
                                        <br />
                                    </span>
                                </p>
                            </Col>
                            <Col sm={3}>
                                <p>Size</p>
                            </Col>
                            <Col sm={9}>
                                <p>
                                    <span>
                                        Driver size 40mm dynamic driver
                                        <br />
                                    </span>
                                    <span>
                                        Weight (g) 220 g<br />
                                    </span>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div id='review'>
                    <div className='review-title'>
                        <span>REVIEWS</span>
                    </div>
                    <div>
                        <FormControl
                            className={classes.formControl}
                            style={{ width: '150px', marginRight: '30px' }}>
                            <NativeSelect
                                defaultValue='newest'
                                style={{ fontSize: '12px', color: '#ff6600' }}>
                                <option value='newest'>NEWEST</option>
                                <option value='oldest'>OLDEST</option>
                            </NativeSelect>
                            <FormHelperText style={{ fontSize: '9px' }}>SORTED BY</FormHelperText>
                        </FormControl>
                        <button className='write-a-review-btn' onClick={handleShow}>
                            WRITE A REVIEW
                        </button>
                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop='static'
                            keyboard={false}
                            animation={true}
                            centered>
                            <Modal.Header closeButton>
                                <Modal.Title>WRITE A REVIEW</Modal.Title>
                            </Modal.Header>
                            <Modal.Body id='write-a-review'>
                                <Form id='review-form'>
                                    <div className='input-field'>
                                        <Form.Group controlId='formGroupName'>
                                            <Form.Control type='text' placeholder='Full name' />
                                            <BsFillPersonLinesFill className='input-icon' />
                                        </Form.Group>
                                    </div>
                                    <div className='input-field'>
                                        <Form.Group controlId='formGroupEmail'>
                                            <Form.Control type='email' placeholder='Email' />
                                            <BsFillEnvelopeFill className='input-icon' />
                                        </Form.Group>
                                    </div>
                                    <div className='mb-3'>
                                        <span className='mr-3'>Rating:</span>
                                        <Rating
                                            className='item-rating'
                                            name='size-small'
                                            defaultValue={0}
                                            size='small'
                                        />
                                    </div>
                                    <div className='input-field'>
                                        <Form.Group controlId='formGroupNumber'>
                                            <Form.Control type='text' placeholder='Review Title' />
                                            <MdTitle className='input-icon' />
                                        </Form.Group>
                                    </div>
                                    <div className='input-field'>
                                        <Form.Group controlId='exampleForm.ControlTextarea1'>
                                            <Form.Control
                                                as='textarea'
                                                rows='5'
                                                placeholder='Body of Review'
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
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
                <Container className='mt-5'>
                    <Row className='review-item'>
                        <Col sm={4}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar src='/static/images/avatar/1.jpg' />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<span className='reviewer-name'>Kevin Wisky</span>}
                                    secondary={
                                        <>
                                            <GrLocation />
                                            <span className='reviewer-location'>Phnom Penh</span>
                                        </>
                                    }
                                />
                            </ListItem>
                        </Col>
                        <Col sm={8} className={classes.root} style={{ paddingTop: '12px' }}>
                            <div className='d-flex'>
                                <Box component='fieldset' mb={3} borderColor='transparent'>
                                    <Rating name='read-only' value={5} size='small' readOnly />
                                </Box>
                                <span className='review-datetime'>08/08/2020</span>
                            </div>
                            <p className='comment'>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                Velit officia conseq duis enim velit mollit. Exercitation veniam consequat
                                sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor
                                do amet sint. Velit officia consequat duis enim velit mollit. Exercitation
                                veniam consequat sunt nostrud amet.
                            </p>
                        </Col>
                    </Row>
                    <Row className='review-item'>
                        <Col sm={4}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar src='/static/images/avatar/1.jpg' />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<span className='reviewer-name'>Devid Dom</span>}
                                    secondary={
                                        <>
                                            <GrLocation />
                                            <span className='reviewer-location'>Phnom Penh</span>
                                        </>
                                    }
                                />
                            </ListItem>
                        </Col>
                        <Col sm={8} className={classes.root} style={{ paddingTop: '12px' }}>
                            <div className='d-flex'>
                                <Box component='fieldset' mb={3} borderColor='transparent'>
                                    <Rating name='read-only' value={5} size='small' readOnly />
                                </Box>
                                <span className='review-datetime'>07/08/2020</span>
                            </div>
                            <p className='comment'>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                Velit officia conseq duis enim velit mollit. Exercitation veniam consequat
                                sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor
                                do amet sint. Velit officia consequat duis enim velit mollit. Exercitation
                                veniam consequat sunt nostrud amet.
                            </p>
                        </Col>
                    </Row>
                    <Row className='review-item'>
                        <Col sm={4}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar src='/static/images/avatar/1.jpg' />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<span className='reviewer-name'>Jenny Ry</span>}
                                    secondary={
                                        <>
                                            <GrLocation />
                                            <span className='reviewer-location'>Phnom Penh</span>
                                        </>
                                    }
                                />
                            </ListItem>
                        </Col>
                        <Col sm={8} className={classes.root} style={{ paddingTop: '12px' }}>
                            <div className='d-flex'>
                                <Box component='fieldset' mb={3} borderColor='transparent'>
                                    <Rating name='read-only' value={5} size='small' readOnly />
                                </Box>
                                <span className='review-datetime'>06/08/2020</span>
                            </div>
                            <p className='comment'>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                Velit officia conseq duis enim velit mollit. Exercitation veniam consequat
                                sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor
                                do amet sint. Velit officia consequat duis enim velit mollit. Exercitation
                                veniam consequat sunt nostrud amet.
                            </p>
                        </Col>
                    </Row>
                    <div className='center'>
                        <button className='load-more-btn'>Load More</button>
                    </div>
                </Container>
            </div>
            <hr className='seperated-line' />
            <div id='recommendation'>
                <div className='recommend-title'>
                    <span>YOU MAY ALSO LIKE</span>
                    <div>
                        <AiFillLeftCircle className='prev-next-btn' />
                        <AiFillRightCircle className='prev-next-btn' />
                    </div>
                </div>
                <Container>
                    <Row>
                        <Col lg className='recommended-card'>
                            <img src={Razer1} alt='macbook-pro-2020' />
                            <h6>Razer Kraken Pro</h6>
                            <Box component='fieldset' borderColor='transparent'>
                                <Rating name='read-only' value={5} size='small' readOnly />
                            </Box>
                            <p>$179.00</p>
                        </Col>
                        <Col lg className='recommended-card'>
                            <img src={Razer2} alt='macbook-pro-2020' />
                            <h6>Razer Kraken Pro V2</h6>
                            <Box component='fieldset' borderColor='transparent'>
                                <Rating name='read-only' value={5} size='small' readOnly />
                            </Box>
                            <p>$179.00</p>
                        </Col>
                        <Col lg className='recommended-card'>
                            <img src={Razer3} alt='macbook-pro-2020' />
                            <h6>Razer Kraken Star War Edition</h6>
                            <Box component='fieldset' borderColor='transparent'>
                                <Rating name='read-only' value={5} size='small' readOnly />
                            </Box>
                            <p>$179.00</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default AccessoryDetails;
