import React, { useContext } from 'react';
import { AuthContext } from '../Components/Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    // Data from created Context in 'AuthProvider'
    const { user } = useContext(AuthContext)

    // Set conditions on AuthProvider
    if (user) {
        return children;
    }
    return <Navigate to = '/login'></Navigate>;
};

export default PrivateRoute;