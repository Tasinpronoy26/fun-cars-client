import React, { useEffect, useState } from 'react';
import Toys from './Toys';


const AllToys = () => {

    const [allToys, setAllToys] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/mytoy')
            .then(res => res.json())
            .then(data => setAllToys(data))

    }, [])


    return (
        <div>

            <div className="overflow-x-auto w-full mb-20">
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

                        {
                            allToys.map(toy => <Toys toy={toy}></Toys>)
                        }


                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default AllToys;