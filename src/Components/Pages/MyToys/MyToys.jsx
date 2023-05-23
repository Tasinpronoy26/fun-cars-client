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

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://server-lyart-one.vercel.app/mytoy/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(datas => {
                        console.log(datas)
                        if (datas.deletedCount > 0) {

                            Swal.fire({
                                title: 'DELETED!!',
                                icon: 'success'

                            })

                            const data = myToys.filter(toy => toy._id !== id);
                            setMyToys(data);
                        }

                    })


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
                            <th></th>
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