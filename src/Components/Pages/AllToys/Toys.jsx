import React from 'react';
import { Link } from 'react-router-dom';

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
                <td><Link to={`/alltoys/${_id}`}><button  className='btn btn-xs p-2 rounded-lg'>View Details</button></Link></td>
                
                
            </tr>
        
    );
};

export default Toys;