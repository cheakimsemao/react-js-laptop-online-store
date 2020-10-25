import React, { useState, useEffect } from 'react';

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

import axios from 'axios';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

import { GrLocation } from 'react-icons/gr';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import { BsFillEnvelopeFill, BsFillPersonLinesFill } from 'react-icons/bs';
import { MdTitle, MdMessage } from 'react-icons/md';

import Macbook1 from '../../assets/images/others/laptops/Macbook-1.png';
import Macbook2 from '../../assets/images/others/laptops/Macbook-2.png';
import Macbook3 from '../../assets/images/others/laptops/Macbook-3.png';

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

const AccessoryDetails = (name) => {
    const classes = useStyles();

    const initialCount = 1;
    const [count, setCount] = useState(initialCount);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState({ loading: true });
    const [info, setInfo] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:3000/accessories?productName=${name.name}`)
            .then((res) => {
                setData(res.data);
                setInfo(res.data[0].productInformation);
                setLoading({ loading: false });
            })
            .catch((err) => {
                if (err.response) {
                    setLoading({ loading: false });
                }
            });
    }, []);

    const productInformation = Object.keys(info).map((key) => {
        if (key !== '' && info[key] !== '') {
            return (
                <>
                    <Col sm={3}>
                        <p>{key}</p>
                    </Col>
                    <Col sm={9}>
                        <p>{info[key]}</p>
                    </Col>
                </>
            );
        }
    });

    const goBack = () => window.history.back();

    return (
        <>
            {data.length > 0 ? (
                data.map((item) => (
                    <div key={item.id}>
                        <div className='breadcrumbs'>
                            <p>
                                Home / Accessories / {item.category} / <span>{item.productName}</span>
                            </p>
                        </div>
                        <div id='product-detail'>
                            <Container>
                                <Row>
                                    <Col sm className='product-detail-image'>
                                        <img src={item.imageURL} alt={item.productName} />
                                    </Col>
                                    <Col sm>
                                        <p className='product-detail-title'>{item.productName}</p>
                                        <Row className='product-detail-option'>
                                            <Col lg={3}>
                                                <h6 className='price'>${item.price}</h6>
                                            </Col>
                                            <Col lg={9} className={classes.root}>
                                                <Box component='fieldset' mb={3} borderColor='transparent'>
                                                    <Rating
                                                        name='read-only'
                                                        value={5}
                                                        size='small'
                                                        readOnly
                                                    />
                                                </Box>
                                            </Col>
                                        </Row>
                                        <Row className='product-detail-option'>
                                            <Col sm={3}>
                                                <p>COLOR: </p>
                                            </Col>
                                            <Col sm={9}>
                                                <button className='color-picker space-gray'>&nbsp;</button>
                                                <button className='color-picker white'>&nbsp;</button>
                                            </Col>
                                        </Row>
                                        <Row className='product-detail-option'>
                                            <Col lg={4}>
                                                <form className='quantity-input'>
                                                    <div
                                                        className='value-button'
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
                                                        className='value-button'
                                                        id='increase'
                                                        onClick={() =>
                                                            setCount((prevCount) => prevCount + 1)
                                                        }>
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
                                    <span>PRODUCT INFORMATION</span>
                                </div>
                                <Container className='specification-details'>
                                    <Row className='mt-5'>{productInformation}</Row>
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
                                                        <Form.Control
                                                            type='text'
                                                            placeholder='Review Title'
                                                        />
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
                                                    <Button
                                                        className='submit-button'
                                                        variant='white'
                                                        type='submit'>
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
                                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                                            amet sint. Velit officia conseq duis enim velit mollit.
                                            Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
                                            non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                                            officia consequat duis enim velit mollit. Exercitation veniam
                                            consequat sunt nostrud amet.
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
                                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                                            amet sint. Velit officia conseq duis enim velit mollit.
                                            Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
                                            non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                                            officia consequat duis enim velit mollit. Exercitation veniam
                                            consequat sunt nostrud amet.
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
                                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                                            amet sint. Velit officia conseq duis enim velit mollit.
                                            Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
                                            non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                                            officia consequat duis enim velit mollit. Exercitation veniam
                                            consequat sunt nostrud amet.
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
                ))
            ) : (
                <>
                    <ClipLoader size={150} color={'#123abc'} loading={loading.loading} />
                    {loading.loading === false && (
                        <>
                            <Link onClick={goBack}>Go Back</Link>
                            <br></br>
                            Sorry, no data available
                        </>
                    )}
                </>
            )}
        </>
    );
};

export default AccessoryDetails;
