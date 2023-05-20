import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import MyInsertToy from './MyInsertToy';

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



    return (
        <div>

            <h1 className='text-center my-10 font-bold text-5xl'> My Toys </h1>

            <div>
                {
                    myToys.map(mytoy => <MyInsertToy key={mytoy._id} mytoy={mytoy} ></MyInsertToy>)
                }
            </div>

        </div>
    );
};

export default MyToys;