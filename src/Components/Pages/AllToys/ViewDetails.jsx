import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {

    const ViewDetails = useLoaderData();



    return (
        <div className="hero min-h-screen mb-10">
            <div className="text-center flex gap-28 border p-20">
                <img src={ViewDetails.photo} className="max-w-sm rounded-lg shadow-2xl mx-auto w-64" />
                <div className="divider lg:divider-horizontal"></div>
                <div className=' text-left'>
                    <h1 className="text-5xl font-bold text-orange-300">{ViewDetails.name}</h1>
                    <p className="py-6 text-2xl">Seller Name : {ViewDetails.sellerName}</p>
                    <p className="py-6 text-2xl">Price : ${ViewDetails.price}</p>
                    <p className="py-6 text-2xl">Available Quantity: {ViewDetails.quantity}</p>
                    <p className="py-6 text-2xl">Ratings :{ViewDetails.rating}</p>

                </div>
            </div>
        </div>
    );
};

export default ViewDetails;