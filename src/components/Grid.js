import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Grid = () => {
    // from useState 
    const parameterNumber = ["Apple1",'Apple2',"Apple3","Apple4",'Apple5',"Apple6","Apple7",'Apple8',"Apple9"];
    return (
        <Container fluid>
            {parameterNumber.map((idx) => (
                
                <Row>
                    <Col sm>{idx}</Col>
                    <Col sm>{idx}</Col>
                    <Col sm>{idx}</Col>
                </Row>)
            )
            }
        </Container>
    )
}

export default Grid;