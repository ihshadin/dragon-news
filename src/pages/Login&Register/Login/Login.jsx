import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const [success, setSuccess] = useState('');
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('loginpage location', location);
    const from = location?.state?.from?.pathname || '/category/0';

    const handleSignIn = event => {
        event.preventDefault();
        setSuccess('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess('You are successfully loggedin');
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <>
            <Form onSubmit={handleSignIn} className='w-50 mx-auto bg-white' style={{ padding: '75px 90px', margin: '50px 0' }}>
                <h4 className='text-center fw-bold border-bottom pb-5 mb-5'>Login your account</h4>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Email address</Form.Label>
                    <Form.Control type="email" name='email' className='rounded-0 bg-light' placeholder="Enter your email address" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control type="password" name='password' className='rounded-0 bg-light' placeholder="Enter your password" />
                </Form.Group>
                <Button variant="secondary" type="submit" className='d-block w-100 rounded-0 '>
                    Login
                </Button>
                <small className='d-block mt-4 mb-0 fw-bold text-center text-secondary'>Dont’t Have An Account ? <Link to='/register' className='text-danger'>Register</Link></small>
                <Form.Text className="text-success d-block text-center mt-3">
                    {success}
                </Form.Text>
            </Form>
        </>
    );
};

export default Login;