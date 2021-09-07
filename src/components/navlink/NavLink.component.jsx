import React from 'react';
import {
    BrowserRouter as Router,
} from 'react-router-dom';

import { 
    Navbar, 
    Nav, 
    Form, 
    FormControl, 
    Container,
    Button 
} from 'react-bootstrap';

const NavList = () => {
    return (
        <Container >
            <div className='row'>
                <div className='col-md-12'>
                    <Router>
                        <Navbar>
                                <Navbar.Toggle aria-controls='responsive-navbar-nav '/>
                                <Navbar.Collapse id='responsive-navbar-nav' variant='pills' activeKey='1'>
                                    <Nav className='me-auto'>
                                        <Nav.Link href='/'>Turning Heads</Nav.Link>
                                        <Form inline className="d-flex">
                                            <FormControl 
                                                type='text' 
                                                placeholder='search' 
                                                className='mr-sm-2' 
                                                aria-label="Search"
                                            />
                                            <Button variant="outline-success">Search</Button>
                                        </Form>
                                    </Nav>
                                    <Nav >
                                        <Nav.Link eventKey="1" href='/'>Home</Nav.Link>
                                        <Nav.Link eventKey="2" href='/myblog'>My Blog</Nav.Link>
                                        <Nav.Link eventKey="3" href='/about'>About</Nav.Link>
                                        <Nav.Link eventKey="4" href='/contact'>Contact</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>

                        </Navbar>
                    </Router>
                </div>
            </div>
        </Container>
    );
};

export default NavList;