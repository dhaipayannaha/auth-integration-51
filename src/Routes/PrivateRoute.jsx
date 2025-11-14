import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, NavLink, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext)
    const location = useLocation();
    console.log(location.pathname);

    if(loading){
        return <span className="loading loading-infinity loading-xl text-error"></span>
    }

    if(!user) {
        return <Navigate state={location?.pathname} to="/Login"></Navigate>
    }


    return children;
};

export default PrivateRoute;