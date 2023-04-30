import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
    return (
        <>
            <Header />
            <Container className='pt-4'>
                <Row>
                    <Col lg={9} sm>
                        <Outlet />
                    </Col>
                    <Col lg={3} sm>
                        <RightNav />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default NewsLayout;