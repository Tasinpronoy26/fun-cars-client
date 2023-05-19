import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const PrivateRoute = ({ children }) => {

    const { loading, users } = useContext(AuthContext);

    if (!users) {

        Swal.fire({
            title: 'Without a login, you can not visit the single toy details page.',
            icon: 'Error'

        })
    }

    if (loading) {

        return <progress className="progress w-56"></progress>;
    }
    if (users) {

        return children;
    }

    return (
        <Navigate to="/login">

        </Navigate>
    );
};

export default PrivateRoute;