import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    };
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to='/home'>Home</NavLink></li>
                            <li><NavLink to='/about'>About</NavLink></li>
                            <li><NavLink to='/appointment'>Appointment</NavLink></li>
                            <li><NavLink to='/reviews'>Reviews</NavLink></li>
                            <li><NavLink to='/contact'>Contact</NavLink></li>
                            {
                                user && <li><NavLink to='/dashboard'>Dashboard </NavLink></li>
                            }
                            <li>
                                {user ? <button
                                    onClick={logout} 
                                    className='btn btn-ghost'  >Logout</button> :
                                    <NavLink to='/login'>Login</NavLink>
                                }
                            </li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Doctor's Portal</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><NavLink to='/home'>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/appointment'>Appointment</NavLink></li>
                        <li><NavLink to='/reviews'>Reviews</NavLink></li>
                        <li><NavLink to='/contact'>Contact Us</NavLink></li>
                        {
                            user && <li><NavLink to='/dashboard'>Dashboard </NavLink></li>
                        }
                        <li>
                            {user ? <button
                                onClick={() => signOut(auth,)}
                                className='btn btn-ghost'  >Logout</button> :
                                <NavLink to='/login'>Login</NavLink>
                            }
                        </li>

                    </ul>
                </div>
                <div className="navbar-end">
                <label for="my-drawer-2"  tabIndex="1" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                

                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;