import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { BsPersonCircle } from 'react-icons/bs';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    return (
        <Navbar collapseOnSelect expand="lg" variant="light">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto fw-semibold gap-2">
                        <Link to='/' className='text-decoration-none'>Home</Link>
                        <Link to='/about' className='text-decoration-none'>About</Link>
                        <Link to='/career' className='text-decoration-none'>Career</Link>
                    </Nav>
                    <Nav className='d-flex align-items-center gap-3'>
                        {user && <BsPersonCircle className='fs-2 text-black' />}
                        {user ? <Button variant="secondary" className='rounded-0 px-4' onClick={handleLogOut}>Logout</Button>
                            : <Link to='/login'><Button variant="secondary" className='rounded-0 px-4'>Login</Button></Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;