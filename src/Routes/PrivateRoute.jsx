import React, { useContext } from 'react';
import { AuthContext } from '../Components/Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    // 1. Data from created Context in 'AuthProvider'
    const { user, loader } = useContext(AuthContext);

    // 3. Location
    const location = useLocation()
    console.log(location);

    // 2. Check the Loader is loaded
    if(loader) {
        return <div>Loading ...</div>
    }

    // Set conditions if user exists or not
    if (user) {
        return children;
    }

    /* 4. If user not logged in, send to login page. After login send user to where the user was. */
    return <Navigate to = '/login' state = {{from: location}} replace></Navigate>;
};

export default PrivateRoute;