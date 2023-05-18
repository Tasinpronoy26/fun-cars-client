import React from 'react';
import logo from '../../assets/1.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
    
    const navItems =  <>
    <li><Link to="/">Home</Link></li>
    <li><Link>All toys</Link></li>
    <li><Link>My Toys</Link></li>
    <li><Link>Add A Toy</Link></li>
    <li><Link>Blog</Link></li>
</>


    return (
        <div className="navbar bg-white border-b mt-5 mb-10 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">  
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <img src={logo} className='w-24' alt="" />
                <h1 className='font-bold text-2xl'>FUN CAR</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="avatar navbar-end flex gap-5">
                <div>
                    <Link to="/login"><p className='mt-2'>Log in</p></Link>
                </div>
                <div className="w-16 rounded-full">
                    <img src={[]} />
                </div>
            </div>
        </div>
    );
};

export default NavBar;