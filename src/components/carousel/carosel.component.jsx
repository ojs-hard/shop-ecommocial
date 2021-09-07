import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';

import desk from '../../assets/desk.webp';
import women from '../../assets/women.webp';
import strike from '../../assets/strike.webp';

const Carou = () => {
    return (
       <Container fluid>
           <Row>
               <Col xs={12} lg={4}>
                    <Image src={desk} alt='desk'  fluid />
               </Col>
               <Col xs={12} lg={4}>
                    <Image src={desk} alt='women'  fluid />
               </Col>
               <Col xs={12} lg={4}>
                    <Image src={strike} alt='strike'  fluid />
               </Col>
           </Row>
       </Container>
    );
};

export default Carou;