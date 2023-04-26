import React, { useContext } from 'react';
import { FaDiscord, FaLinkedin, FaYahoo } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';


const TopNav = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <div className='hidden md:flex justify-between py-2 border-b border-slate-300'>
                <div className='flex gap-2 items-center'>
                    <FaLinkedin size={20} />
                    <FaDiscord size={20} />
                    <FaYahoo size={20} />
                </div>
                {
                    user ?

                        // Logout:
                        <Link to=''>
                            <button className='border-2 px-2 border-slate-900 font-bold hover:shadow-sm'>Logout</button>
                        </Link>
                        :

                        // Login & Register:
                        <div className='flex gap-2'>
                            <Link to='/login'>
                                <button className='border-2 px-2 border-slate-900 font-bold hover:shadow-sm'>Login</button>
                            </Link>
                            <Link to='/register'>
                                <button className='border-2 px-2 border-slate-900 font-bold hover:shadow-sm'>Register</button>
                            </Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default TopNav;