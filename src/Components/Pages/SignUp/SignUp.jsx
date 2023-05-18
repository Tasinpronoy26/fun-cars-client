import React from 'react';
import image from '../../../assets/1.png';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="my-28">
            <div className="lg:flex gap-28">
                <div className='w-1/2 '>
                    <img src={image} className='w-52' alt="" />
                    <p>Fun car toys come in various forms, including miniature replicas of real vehicles, remote-controlled cars, building block sets to construct cars, and interactive toy vehicles with lights, sounds, and other engaging features. These toys often incorporate imaginative play, allowing children to create their own driving adventures and role-play scenarios.</p>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="card w-1/2">
                    <div className="form-control text-center">

                        <h1 className="label-text text font-thin mb-3 text-5xl">Create an account</h1>

                    </div>
                    <form className="card-body">
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
                    <p className='text-center'>Already have an account?<Link to="/login"><p className='font-bold text-orange-600'>log in</p></Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;