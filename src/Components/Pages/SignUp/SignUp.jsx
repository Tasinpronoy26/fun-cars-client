import React, { useContext } from 'react';
import image from '../../../assets/1.png';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'



const SignUp = () => {

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = (event) => {

        event.preventDefault();

        const form = event.target;


        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;


        console.log(name, email, password, photo);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                if (user) {
                    Swal.fire({
                        title: 'success!',
                        icon: 'success'

                    })
                }

                navigate('/');
                form.reset();

            })
            .catch(error => {

                if (error) {
                    Swal.fire({
                        title: 'Already have a account!',
                        icon: 'Error'

                    })
                }

            })


    }


    return (
        <div className="my-28">
            <div className="lg:flex gap-28">
                <div className='w-1/2 '>
                    <img src={image} className='w-52' alt="" />
                    <span>Fun car toys come in various forms, including miniature replicas of real vehicles, remote-controlled cars, building block sets to construct cars, and interactive toy vehicles with lights, sounds, and other engaging features. These toys often incorporate imaginative play, allowing children to create their own driving adventures and role-play scenarios.</span>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="card w-1/2">
                    <div className="form-control text-center">

                        <h1 className="label-text text font-thin mb-3 text-5xl">Create an account</h1>

                    </div>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name='password' className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" placeholder="photo URL" name='photo' className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="sign up" className="btn btn-block bg-black-50 text-white gap-3" />
                        </div>
                    </form>
                    <span className='text-center'>Already have an account?<Link to="/login"><span className='font-bold text-orange-600'>log in</span></Link></span>
                </div>
            </div>
        </div>
    );
};

export default SignUp;