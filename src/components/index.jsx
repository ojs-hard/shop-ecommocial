import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavList from './navlink/NavLink.component';

import HomePage from '../views/HomePage/HomePage.component';
import BlogPage from '../views/BlogPage/BlogPage.component';
import About from '../views/AboutPage/AboutPage.component';
import Contact from '../views/ContactPage/ContactPage.component';

const Header = () => {
    return (
        <div>
            <NavList />
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/blogpage' component={BlogPage} />
                <Route path='/contact' component={Contact} />
                <Route path='/about' component={ About } />
            </Switch>
        </div>
    );
};

export default Header;