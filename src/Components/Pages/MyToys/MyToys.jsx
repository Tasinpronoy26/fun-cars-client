import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import MyInsertToy from './MyInsertToy';
import Swal from 'sweetalert2';

const MyToys = () => {

    const { users } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);


    const url = `http://localhost:5000/mytoy?sellerEmail=${users.email}`

    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))


    }, [users.email])

    console.log(myToys);


    const handleDelete = id => {

    


            fetch(`http://localhost:5000/mytoy/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const data = myToys.filter(toy => toy._id !== id);
                        setMyToys(data);
                    }
                })
        

    }



    return (
        <div>

            <h1 className='text-center my-10 font-bold text-5xl'> My Toys </h1>


            <div className="overflow-x-auto w-full mb-20">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
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

                        {
                            myToys.map(mytoy => <MyInsertToy key={mytoy._id} mytoy={mytoy} handleDelete={handleDelete} ></MyInsertToy>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyToys;