import React from 'react';

const MyInsertToy = ({ mytoy }) => {

    const { sellerEmail, photo, name, sellerName, category, price, rating, quantity, details } = mytoy

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Seller Name</th>
                        <th>Seller Email</th>
                        <th>Sub-Categories</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Available Quantity</th>
                        <th>Details Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        
                        <td><img src={photo} className=' w-12' alt="" /></td>
                        <td>{name}</td>
                        <td>{sellerName}</td>
                        <td>{sellerEmail}</td>
                        <td>{category}</td>
                        <td>{price}</td>
                        <td>{rating}</td>
                        <td>{quantity}</td>
                        <td>{details}</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    );
};

export default MyInsertToy;