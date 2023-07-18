// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/UserContext';
import { Navigate } from 'react-router-dom';
import Loading from '../Shared/Loading';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <Loading></Loading>
    }
    if (user && user.uid) {
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;