import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';



const CarDetails = () => {
    
    
    const { carDetails, setCarDetails } = useContext(AuthContext);

    const details = useLoaderData();

    const {_id} = details;
    

    
    

    

    


    


    return (
        <div>

            <h1>{_id}</h1>

         
        </div>
    );
};

export default CarDetails;