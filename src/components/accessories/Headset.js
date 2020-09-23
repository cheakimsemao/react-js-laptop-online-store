import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-bootstrap/Carousel';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Pagination from 'react-bootstrap/Pagination';

import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import Headset1 from '../../assets/images/others/headsets/Razer-Kraken.jpg';
import Headset2 from '../../assets/images/others/headsets/Beat-1.jpeg';

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

const Headset = () => {
    const classes = useStyles();

    const parameterNumber = [
        'Headset1',
        'Headset2',
        'Headset3',
        'Headset4',
        'Headset5',
        'Headset6',
        'Headset7',
        'Headset8',
        'Headset9',
    ];

    const grid = parameterNumber.map((name, idx) => (
        <div className={'product-items index' + idx}>
            <img src={Headset2} alt='mac' />
            <p class='product-items-title'>{name}</p>
            {/* {idx} */}
            <div className={classes.root}>
                <Box component='fieldset' mt={1} mb={1} borderColor='transparent'>
                    <Rating name='read-only' value={5} size='small' readOnly />
                </Box>
            </div>
            <p class='price'>$179.00</p>
        </div>
    ));

    return (
        <>
            <div className='breadcrumbs'>
                <p>
                    Home / Accessories / <span>Headset</span>
                </p>
            </div>
            <Carousel id='carousel'>
                <Carousel.Item>
                    <img className='d-block w-100' src={Headset1} alt='First slide' />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100' src={Headset1} alt='Second slide' />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100' src={Headset1} alt='Third slide' />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div id='products'>
                <div className='review-title'>
                    <span>Headset Products</span>
                    <hr />
                </div>
                <div className='sorted-by'>
                    <FormControl style={{ width: '150px', marginRight: '30px' }}>
                        <NativeSelect defaultValue='newest' style={{ fontSize: '12px', color: '#ff6600' }}>
                            <option value='newest'>NEWEST</option>
                            <option value='oldest'>OLDEST</option>
                        </NativeSelect>
                        <FormHelperText style={{ fontSize: '9px' }}>SORTED BY</FormHelperText>
                    </FormControl>
                </div>
            </div>
            <div className='grid-container'>{grid}</div>
            <Pagination>
                {/* <Pagination.First /> */}
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                {/* <Pagination.Last /> */}
            </Pagination>
        </>
    );
};

export default Headset;
