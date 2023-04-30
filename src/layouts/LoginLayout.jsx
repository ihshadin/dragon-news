import React from 'react';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from '../pages/Shared/Footer/Footer';

const LoginLayout = () => {
    return (
        <>
            <NavigationBar />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </>
    );
};

export default LoginLayout;