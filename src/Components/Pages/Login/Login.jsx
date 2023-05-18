import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const { user, createLogIn, createUSerWithGoogle } = useContext(AuthContext);

    const handleLogIn = (event) => {

        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        /*LOG IN WITH EMAIL & PASS*/

        createLogIn(email, password)
            .then(result => {
                const user = result.user;
                if (user) {
                    Swal.fire({
                        title: 'Successfully log in!!',
                        icon: 'success'

                    })
                }
            })
            .catch(error => {

                if (error) {

                    Swal.fire({
                        title: (error),
                        icon: 'error'

                    })
                }

            })

    }


    /*GOOGLE LOG IN*/

    const provider = new GoogleAuthProvider();

    const handleGoogle = () => {

        createUSerWithGoogle(provider)
            .then(result => {

                const user = result.user;
                if (user) {

                    Swal.fire({
                        title: 'Successfully log in!!',
                        icon: 'success'

                    })

                }
            })
            .catch(error => {

                Swal.fire({
                    title: (error),
                    icon: 'error'

                })
            })

    }


    return (
        <div className="my-28">
            <div className="hero-content md:flex gap-32">
                <div className="card flex-shrink-0 w-96">
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control text-center">

                            <h1 className="label-text text font-thin mb-3 text-5xl">Log in</h1>

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
                        <div className="form-control mt-6 text-center">
                            <input type="submit" value="Log in" className="btn btn-block bg-black-50 text-white gap-3" />
                        </div>
                    </form>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="w-96">
                    <div className="flex flex-col w-full border-opacity-50 gap-2 text-center">
                        <button onClick={handleGoogle} className="btn btn-block bg-neutral-50 text-black gap-3"><FcGoogle></FcGoogle>GOOGLE</button>
                        <button className="btn btn-block bg-neutral-50 text-black gap-3"><BsGithub></BsGithub>Github</button>
                        <div className="divider">OR</div>
                        <span>Haven't an account?<Link to="/signup"><span className='font-bold text-orange-600'>Sign Up</span></Link></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;