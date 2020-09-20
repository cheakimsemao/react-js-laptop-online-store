import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-bootstrap/Carousel';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Grid from '../Grid'


import Macbook1 from '../../assets/images/others/laptops/Macbook.png';
import Macbook2 from '../../assets/images/others/laptops/Macbook-2.png';
import Macbook3 from '../../assets/images/others/laptops/Macbook-3.png'
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


const Apple = () => {
    const classes = useStyles();
    return (
        <>
            <Carousel id="carousel">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Macbook1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Macbook2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Macbook3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div id='products'>
                <div className='review-title'>
                    <span>Apple Products</span>
                </div>
                <div>
                    <FormControl
                        style={{ width: '150px', marginRight: '30px' }}>
                        <NativeSelect
                            defaultValue='newest'
                            style={{ fontSize: '12px', color: '#ff6600' }}>
                            <option value='newest'>NEWEST</option>
                            <option value='oldest'>OLDEST</option>
                        </NativeSelect>
                        <FormHelperText style={{ fontSize: '9px' }}>SORTED BY</FormHelperText>
                    </FormControl>
                </div>
            </div>
            <Grid />
        </>
    )
};

export default Apple;
