import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa'
import QZone from '../QZone/QZone';
import cardBg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4 className='fw-bold mb-3'>
                Login With
            </h4>
            <div className='d-grid gap-2 text-center'>
                <Button variant="outline-primary"> <FaGoogle /> Login with Google</Button>
                <Button variant="outline-secondary"> <FaGithub /> Login with Github</Button>
            </div>
            <h4 className='fw-bold mb-3 mt-4'>
                Find Us On
            </h4>
            <div>
                <ListGroup as='ul'>
                    <ListGroup.Item as='li'>
                        <FaFacebookF /> Facebook
                    </ListGroup.Item>
                    <ListGroup.Item as='li'>
                        <FaTwitter /> Twitter
                    </ListGroup.Item>
                    <ListGroup.Item as='li'>
                        <FaInstagram /> Instagram
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <div className='bg-light px-2 py-3 mt-4 rounded'>
                <h4 className='fw-bold mb-3 '>
                    Q-Zone
                </h4>
                <div className='text-center px-2'>
                    <QZone />
                </div>
            </div>
            <div className='my-4 position-relative'>
                <div className='position-absolute z-3 p-4 text-center text-white'>
                    <h3 className='fw-bold fs-2 z-3'>Create an Amazing Newspaper</h3>
                    <p className='my-3'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <button className='btn py-3 px-4 fw-bold text-lg bg-danger text-white rounded-0'>Learn More</button>
                </div>
                <img className='img-fluid' src={cardBg} alt="" />
            </div>

        </div>
    );
};

export default RightNav;