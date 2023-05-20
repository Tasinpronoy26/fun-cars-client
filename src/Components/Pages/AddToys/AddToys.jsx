import React from 'react';
import Swal from 'sweetalert2';

const AddToys = () => {

    const handleAddToys = (event) => {

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

        const add = {
            photo,
            name,
            sellerName: seller,
            sellerEmail,
            category,
            price,
            quantity,
            details
        }

        console.log(add);

        fetch('http://localhost:5000/addtoy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(add)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {

                    Swal.fire({
                        title: 'Successfully added!!',
                        icon: 'success'

                    })

                }
            })
        
            form.reset();


    }



    return (
        <div>

            <div className="hero-content bg-[#F3F3F3] py-16 mb-10">
                <div className="card w-full">
                    <h1 className='text-center text-5xl font-bold mb-5'>ADD YOUR TOY</h1>
                    <form onSubmit={handleAddToys} className="card-body">
                        <div className='grid grid-cols-2 gap-4'>
                            <div className="form-control">

                                <input type="text" placeholder="Photo URL" name='photo' className="input rounded-none" />
                            </div>
                            <div className="form-control">

                                <input type="text" placeholder="Name" name='name' className="input rounded-none" />
                            </div>
                            <div className="form-control">

                                <input type="text" placeholder="Seller Name" name='seller' className="input rounded-none" />
                            </div>
                            <div className="form-control">

                                <input type="email" placeholder="Seller Email" name='seller_email' className="input rounded-none" />
                            </div>
                            <div className="form-control">

                                <input type="text" placeholder="Category" name='category' className="input rounded-none" />
                            </div>
                            <div className="form-control">

                                <input type="text" placeholder="$" name='price' className="input rounded-none" />
                            </div>
                        </div>
                        <div className="form-control mt-3">

                            <input type="text" placeholder="Quantity" name='quantity' className="input rounded-none" />
                        </div>
                        <div className="form-control mt-3">

                            <input type="text" name='details' className="input rounded-none h-40" />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn border-none" value="Add" />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddToys;