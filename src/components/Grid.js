import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Macbook1 from '../assets/images/others/laptops/Macbook-1.png';
import Macbook2 from '../assets/images/others/laptops/Macbook-2.png';
import Macbook3 from '../assets/images/others/laptops/Macbook-3.png';

const Grid = () => {
    // from useState 
    const parameterNumber = ["Apple1",'Apple2',"Apple3","Apple4",'Apple5', 'Apple6', 'Apple7', 'Apple8', 'Apple9'];

    return (
        <div className = "grid-container">
            {parameterNumber.map((name, idx) => 
            <div className = {"product-items index" + idx}>
                
                <img src= {Macbook1} alt="mac"/>
                <p class="product-items-title">{name}</p>
                {idx}
                <p class="price">$2000</p>
            </div>
            
            )}
        </div>


        // <Container fluid>
        //     {parameterNumber.map((idx) => (
                
        //         <Row>
        //             <Col sm>{idx}</Col>
        //             <Col sm>{idx}</Col>
        //             <Col sm>{idx}</Col>
        //         </Row>)
        //     )
        //     }
        // </Container>
    )
}

export default Grid;