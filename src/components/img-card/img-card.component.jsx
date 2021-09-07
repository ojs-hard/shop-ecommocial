import React from 'react';

import { Card, Col, Row, NavLink } from 'react-bootstrap';

const ImgCard = ({detail: { src, text, url }}) => {
    return (
        <>
          <Card className='bg-light text-black'  style={{ width: '35rem', marginTop: '25px'}}>
 
                <Row >
                    <Col>
                    <img src={src} alt='img' />
                    </Col>
                    <Col>
                        <NavLink href={url}>{text}</NavLink>
                    </Col>
                </Row>

          </Card>
        </>
    );
};

export default ImgCard;