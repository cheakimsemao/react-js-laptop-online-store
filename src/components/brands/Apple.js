import React from 'react';

import Carousel from 'react-bootstrap/Carousel'
import Grid from '../Grid'

const Apple = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="../../assets/images/others/laptops/Macbook.png"
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
                    src="../../assets/images/others/laptops/Macbook.png"
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
                    src="../../assets/images/others/laptops/Macbook.png"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <h1>Apple Products</h1>
            <select name="sort" id="sort">
                <option value="newest">SORT BY: NEWEST </option>
                <option value="popularity">SORT BY: POPULARITY </option>
            </select>
            <Grid />
        </>
    )
};

export default Apple;
