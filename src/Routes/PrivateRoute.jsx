import React, { useContext } from 'react';
import { AuthContext } from '../Components/Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    // Data from created Context in 'AuthProvider'
    const { user, loader } = useContext(AuthContext)

    // Check the Loader is loaded
    if(loader) {
        return <div>Loading ...</div>
    }

    // Set conditions on AuthProvider
    if (user) {
        return children;
    }
    return <Navigate to = '/login'></Navigate>;
};

export default PrivateRoute;