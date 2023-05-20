import React from 'react';
import { GrDocumentUpdate } from 'react-icons/gr';
import { Link } from 'react-router-dom';


const MyInsertToy = ({ mytoy,handleDelete }) => {

    const { _id, sellerEmail, photo, name, sellerName, category, price, rating, quantity, details } = mytoy


    return (
        <tr>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
            <td><img src={photo} className=' w-12' alt="" /></td>
            <td>{name}</td>
            <td>{sellerName}</td>
            <td>{sellerEmail}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{rating}</td>
            <td>{quantity}</td>
            <td>{details}</td>
            <td><Link to={`/update/${_id}`}><button><GrDocumentUpdate></GrDocumentUpdate></button></Link></td>
        </tr>
    );
};

export default MyInsertToy;