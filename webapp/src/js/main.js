import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import { Categories } from './components/categories/categories'
import { Templates } from './components/templates/templates'
import { Users } from './components/users/users';
import { Login } from './login';
import { Pages } from './components/pages/pages';

const App = () =>
    <BrowserRouter>
        <div>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Pages} />
                <Route path="/login" component={Login} />
                <Route path="/categories" component={Categories} />
                <Route path="/templates" component={Templates} />
                <Route path="/users" component={Users} />
            </Switch>
        </div>
    </BrowserRouter>    
    
const NavBar = () =>
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">MyWriter</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Pages</Nav.Link>
            <Nav.Link as={Link} to="/login">Log in</Nav.Link>
            <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
            <Nav.Link as={Link} to="/templates">Templates</Nav.Link>
            <Nav.Link as={Link} to="/users">Users</Nav.Link>
        </Nav>
    </Navbar>

ReactDOM.render(
    <App />, document.getElementById('app')
)