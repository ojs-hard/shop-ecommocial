import React from 'react';
import { Container} from 'react-bootstrap';

import {PostStyled, PostBack} from './posts.style';

import FormData from '../FormData/Form.component';

const Posts = () => {
    return (
        <PostBack>
            <PostStyled>
                <h1>Let the posts come to you.</h1>
                <FormData />
            </PostStyled>
        </PostBack>
    );
};

export default Posts;