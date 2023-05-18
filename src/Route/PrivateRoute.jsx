import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    
    const {loading , users} = useContext(AuthContext);
    
    if(loading){

        return <progress className="progress w-56"></progress>;
    }
    if(users){

        return children;
    }

    return (
        <Navigate to="/login">

        </Navigate>
    );
};

export default PrivateRoute;