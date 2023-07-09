// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "./CSS/Navbar.css";

const Navbar = () => {
    const navigate = useNavigate();
    const productList = <>
        <li><button onClick={(event) => handleClicked(event.target.value)}
            type='button' value='ladies bag' className='uppercase'>Ladies bag</button></li>
        <li><button onClick={(event) => handleClicked(event.target.value)}
            type='button' value='sataronji' className='uppercase'>sataronji</button></li>
        <li><button onClick={(event) => handleClicked(event.target.value)}
            type='button' value='chandor' className='uppercase'>chandor</button></li>
        <li><button onClick={(event) => handleClicked(event.target.value)}
            type='button' value='papose' className='uppercase'>papose</button></li>
        <li><button onClick={(event) => handleClicked(event.target.value)}
            type='button' value='pot' className='uppercase'>pot</button></li>
    </>

    const handleClicked = (catagory) => {
        navigate(`/other/${catagory}`)

    }

    return (
        <div>
            <div className="navbar bg-base-300 mt-0 fixed w-full z-10 top-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul id='mobilemenu' tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li id='parent'>
                                <a>Catagory</a>
                                <ul id='onhover' className="p-2">
                                    {productList}
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                    <NavLink to='/' className="btn btn-ghost normal-case text-xl">HOME</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/login'>Login</NavLink></li>
                        <li><NavLink to='/products'>Products</NavLink></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Catagory</summary>
                                <ul className="p-2" id='submenu'>
                                    {productList}
                                </ul>
                            </details>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;