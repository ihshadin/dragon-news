import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Container className='pt-4'>
                <div className="text-center">
                    <Link to='/'><img className='' src={logo} alt="" /></Link>
                    <p className='text-secondary pt-2 fs-5 mb-0'><small>Journalism Without Fear or Favour</small></p>
                    <p className='text-secondary pt-2 fs-5'>{moment().format("dddd, MMMM D, YYYY")}</p>
                </div>
                <div className='p-1 rounded d-flex align-items-center'>
                    <Button variant='danger'>Latest</Button>
                    <Marquee speed={200}>
                        Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as..
                    </Marquee>
                </div>
            </Container>
        </header>
    );
};

export default Header;