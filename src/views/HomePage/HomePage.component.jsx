import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Carou from '../../components/carousel/carosel.component';
import LetterCenter from './Homepage.styles';
import ImgCard from '../../components/img-card/img-card.component';
import Posts from '../../components/posts/posts.component';
import brush from '../../assets/brush.webp';
import readwomen from '../../assets/readbook.webp';
import wallet from '../../assets/wallet.webp';

const batch = [
    {
        src:  brush,
        text: "first image",
        url: '/test1',
    },
    {
        src: readwomen,
        text: "second image",
        url: '/test2',
    },
    {
        src: wallet,
        text: "third image",
        url: '/test3',
    },
]

const HomePage = () => {
    return (
        <div>
            <Carou /> 
            <Container xs={3} lg={3}>
                <LetterCenter>
                    <h1>My Life. My Blog.</h1>
                </LetterCenter>
            </Container>
            <br />
            <Container >
                <Row>
                    <Col xs={7} md={7}>
                        {
                            batch.map((data) => {
                                return (
                                    <ImgCard detail={data} xs={7} />
                                )
                            })
                        }
                    </Col>
                    <Col xs={5} md={5}>
                        <Posts />
                    </Col>
                    
                </Row>
            </Container>
        </div>
    );
};

export default HomePage;