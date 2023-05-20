import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';


const UpdateToyInfo = () => {

    const { users } = useContext(AuthContext);
    const update = useLoaderData()
    const { id } = useParams();

    const { _id, photo, name, sellerName, category, price, rating, quantity, details } = update;

    const handleUpdate = (event) => {

        event.preventDefault();
        const form = event.target;

        const photo = form.photo.value;
        const name = form.name.value;
        const seller = form.seller.value;
        const sellerEmail = form.seller_email.value;
        const category = form.category.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const rating = form.rating.value;

        const update = {
            photo,
            name,
            sellerName: seller,
            sellerEmail,
            category,
            price,
            quantity,
            details,
            rating
        }

        console.log(update);


       fetch(`http://localhost:5000/mytoy/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    title: 'Successfully Updated!!',
                    icon: 'success'

                })


            })



        form.reset();


    }

    return (
        <div>

            <div className="hero-content bg-[#F3F3F3] py-16 mb-10">
                <div className="card w-full">
                    <h1 className='text-center text-5xl font-bold mb-5'>Update</h1>
                    <form onSubmit={handleUpdate} className="card-body">
                        <div className='grid grid-cols-2 gap-4'>
                            <div className="form-control">

                                <input type="text" placeholder="Photo URL" name='photo' defaultValue={photo} disabled className="input rounded-none" />
                            </div>
                            <div className="form-control">

                                <input type="text" placeholder="Name" name='name' defaultValue={name} disabled className="input rounded-none" />
                            </div>
                            <div className="form-control">

                                <input type="text" placeholder="Seller Name" name='seller' defaultValue={sellerName} disabled className="input rounded-none" />
                            </div>
                            <div className="form-control">

                                <input type="email" placeholder="Seller Email" name='seller_email' defaultValue={users.email} disabled className="input rounded-none" />
                            </div>
                            <div className="form-control">

                                <input type="text" placeholder="Category" name='category' defaultValue={category} disabled className="input rounded-none" />
                            </div>
                            <div className="form-control">

                                <input type="text" placeholder="$" name='price' defaultValue={price} className="input rounded-none" />
                            </div>
                            <div className="form-control mt-3">

                                <input type="text" placeholder="Quantity" name='quantity' defaultValue={quantity} className="input rounded-none" />
                            </div>
                            <div className="form-control mt-3">

                                <input type="text" placeholder="Rating" name='rating' defaultValue={rating} disabled className="input rounded-none" />
                            </div>
                        </div>

                        <div className="form-control mt-3">

                            <input type="text" name='details' defaultValue={details} className="input rounded-none h-40" />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn border-none" value="UPDATE" />
                        </div>
                    </form>

                </div>
            </div>
        </div>

    );
};

export default UpdateToyInfo;