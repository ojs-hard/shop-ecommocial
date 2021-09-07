import React, { useState } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';

const FormData = () => {
    const [email, setEmail] = useState('');

    return (
        <Form>
        <Form.Group className='mb-3' controlled='formBasicEmail'>
            <Form.Label>Email*</Form.Label>
            <FormControl
                aria-describedby="inputGroup-sizing-default" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                type='email'
                name='email'
                required/>
        </Form.Group>
        <Button variant='primary' type='submit'>
            Subscribe
        </Button>
    </Form>
    );
};

export default FormData;
