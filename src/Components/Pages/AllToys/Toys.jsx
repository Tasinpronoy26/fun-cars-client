import React from 'react';

const Toys = ({ toy }) => {

    const { _id, sellerEmail, photo, name, sellerName, category, price, rating, quantity, details } = toy;

    return (
        
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
        
    );
};

export default Toys;