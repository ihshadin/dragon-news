import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')
    const [accepted, setAccepted] = useState(false);

    const { createUser } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        setError('');
        setSuccess('')

        const form = event.target;
        const name = form.your_name.value;
        const photoUrl = form.photo_url.value;
        const email = form.email.value;
        const password = form.password.value;

        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please input at least one uppper latter');
            return;
        }

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setSuccess('Congrates! You are successfully register!')
            })
            .catch(error => {
                console.log(error?.message)
            })
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }

    return (
        <>
            <Form onSubmit={handleRegister} className='w-50 mx-auto bg-white' style={{ padding: '75px 90px', margin: '50px 0' }}>
                <h4 className='text-center fw-bold border-bottom pb-5 mb-5'>Register your account</h4>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className='fw-bold'>Your Name</Form.Label>
                    <Form.Control type="text" name='your_name' className='rounded-0 bg-light' placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                    <Form.Label className='fw-bold'>Photo URL</Form.Label>
                    <Form.Control type="url" name='photo_url' className='rounded-0 bg-light' placeholder="Enter your photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Email address</Form.Label>
                    <Form.Control type="email" name='email' className='rounded-0 bg-light' placeholder="Enter your email address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control type="password" name='password' className='rounded-0 bg-light' placeholder="Enter your password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleAccepted} type="checkbox" name='accept' label={<>Accept <Link to='/terms' className='fw-semibold'>Terms & Conditions</Link></>} required />
                </Form.Group>
                <Button variant="secondary" disabled={!accepted} type="submit" className='d-block w-100 rounded-0 '>
                    Register
                </Button>
                <small className='d-block mt-4 mb-0 fw-bold text-center text-secondary'>Already have An Account ? <Link to='/login' className='text-danger'>Login</Link></small>
                {success && <Form.Text className="text-success d-block text-center mt-3">
                    {success}
                </Form.Text>}
                {error && <Form.Text className="text-danger d-block text-center mt-3">
                    {error}
                </Form.Text>}
            </Form>
        </>
    );
};

export default Register;