import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';

const Login = () => {
    return (
        <div className="my-28">
            <div className="hero-content md:flex gap-32">
                <div className="card flex-shrink-0 w-96">
                    <form className="card-body">
                        <div className="form-control text-center">
                            
                                <h1 className="label-text text font-thin mb-3 text-5xl">Log in</h1>
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name='password' className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6 text-center">
                            <Link><input type="submit" value="Log in" className="btn btn-block bg-black-50 text-white gap-3" /></Link>
                        </div>
                    </form>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="w-96">
                    <div className="flex flex-col w-full border-opacity-50 gap-2 text-center">
                        <button className="btn btn-block bg-neutral-50 text-black gap-3"><FcGoogle></FcGoogle>GOOGLE</button>
                        <button className="btn btn-block bg-neutral-50 text-black gap-3"><BsGithub></BsGithub>Github</button>
                        <div className="divider">OR</div>
                        <p>Haven't an account?<Link to="/signup"><p className='font-bold text-orange-600'>Sign Up</p></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;