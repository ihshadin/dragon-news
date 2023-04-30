import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log("user from private router", user);
    if (loading) {
        return <span className='position-absolute top-50 start-50 translate-middle px-2 px-4 bg-warning fw-semibold'>Loading</span>
    }

    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to='/login' replace></Navigate>
};

export default PrivateRoute;