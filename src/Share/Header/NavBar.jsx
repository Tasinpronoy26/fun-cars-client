import React, { useContext } from 'react';
import logo from '../../assets/1.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';




const NavBar = () => {

    const { users, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const userLogOut = () => {

        logOut()
            .then(() => {


                Swal.fire({
                    title: 'Log out!',
                    icon: 'success'
                })
                navigate('/login')



            })
            .catch(error => {

                console.log(error);
            })
    }




    return (
        <div className="navbar bg-white border-b mt-5 mb-10 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {users ?

                            <>

                                <li><Link to="/">Home</Link></li>
                                <li><Link>All toys</Link></li>
                                <li><Link>Blog</Link></li>
                                <li><Link>My Toys</Link></li>
                                <li><Link>Add A Toy</Link></li>

                            </> : <>

                                <li><Link to="/">Home</Link></li>
                                <li><Link>All toys</Link></li>
                                <li><Link>Blog</Link></li>

                            </>
                        }
                    </ul>
                </div>
                <img src={logo} className='w-24' alt="" />
                <h1 className='font-bold text-2xl'>FUN CAR</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {users ?

                        <>

                            <li><Link to="/">Home</Link></li>
                            <li><Link>All toys</Link></li>
                            <li><Link>Blog</Link></li>
                            <li><Link>My Toys</Link></li>
                            <li><Link>Add A Toy</Link></li>

                        </> : <>

                            <li><Link to="/">Home</Link></li>
                            <li><Link>All toys</Link></li>
                            <li><Link>Blog</Link></li>

                        </>
                    }
                </ul>
            </div>
            <div className="avatar navbar-end flex gap-5">
                <div>
                    {
                        users ?.email ? <button onClick={userLogOut} className='mt-2 btn'>Log out</button>
                            :
                            <button className='mt-2 btn'><Link to="/login"><span className='mt-2'>Log in</span></Link></button>



                    }
                </div>

            </div>
        </div>
    );
};

export default NavBar;