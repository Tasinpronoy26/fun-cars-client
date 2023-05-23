import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyDetails from './ToyDetails';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const CarDetails = () => {
    const { carDetails, setCarDetails } = useContext(AuthContext);
    const data = useLoaderData();
    // console.log(typeof (data));

    console.log(data);
    console.log(carDetails);
    console.log("upore pic")



    return (
        <div>
            {
                data.map(d => (d.toys.map((a, i) => {
                    if (carDetails == a.picture) {
                        
                        return <ToyDetails key={i} a={a}>{console.log("hi")} </ToyDetails>
                    }
                })))
            }
        </div >
    );
};

export default CarDetails;
