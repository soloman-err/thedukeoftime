import React from 'react';
import logo from '../../assets/dukeoftime.png'
import { FaBars, FaCloudSun, FaDiscord, FaLinkedin, FaYahoo } from 'react-icons/fa'
import moment from 'moment';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

const Header = () => {

    return (
        <>
            {/* Header */}
            <div className='md:flex justify-between py-2 border-b border-slate-300 hidden md:static'>
                <div className='flex gap-2 items-center'>
                    <FaLinkedin size={20} />
                    <FaDiscord size={20} />
                    <FaYahoo size={20} />
                </div>
                <div className='flex gap-2'>
                    <Link to='/login'>
                        <button className='border-2 px-2 border-slate-900 font-bold hover:shadow-sm'>Login</button>
                    </Link>
                    <Link to='/register'>
                        <button className='border-2 px-2 border-slate-900 font-bold hover:shadow-sm'>Register</button>
                    </Link>
                </div>
            </div>
            <div className='flex flex-row-reverse items-center justify-between md:justify-center mt-2 md:px-2'>
                <FaBars className='md:hidden' size={22} />
                <Link to='/'>
                    <img className='w-[200px] md:w-[250px]' src={logo} alt="dukeoftime-logo" />
                </Link>
                {/* <div className='flex items-center gap-2'>
                    <button className='bg-slate-200 px-2 py-1 font-bold'>Login</button>
                </div> */}
            </div>

            {/* Moment */}
            <div className='flex gap-2 items-center justify-center text-center text-xs mt-2 font-bold'>
                {
                    moment().format('dddd, DD MMMM YYYY')

                }
                <FaCloudSun size={25} />
            </div>

            {/* Marquee */}
            <div className='flex mt-5'>
                <button className='trending-btn bg-red-700 text-white font-extrabold px-2 py-1 border-b-4 border-black'>Breaking</button>
                <Marquee
                    pauseOnHover
                    autoFill={false}
                    speed={60}
                >
                    Georgia DA Investigating Trump Will Announce Charges As Soon As July.
                </Marquee>
            </div>

            {/* Navigation */}
            <nav className='flex gap-3 lg:gap-5 bg-slate-900 text-white justify-center py-3 mt-5 uppercase text-xs lg:text-sm font-bold shadow'>
                <Link className='hover:text-orange-600' to='/'>Home</Link>
                <Link className='hover:text-orange-600' to='/resources'>Resources</Link>
                <Link className='hover:text-orange-600' to='/policy'>Privacy & Policy</Link>
            </nav>
        </>
    );
};

export default Header;