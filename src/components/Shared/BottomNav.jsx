import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

const BottomNav = () => {
    return (
        <div>
            {/* Marquee */}
            {/* <div className='flex mt-5'>
                <button className='trending-btn bg-red-700 text-white font-extrabold px-2 py-1 border-b-4 border-black'>Breaking</button>
                <Marquee
                    pauseOnHover
                    autoFill={false}
                    speed={60}
                >
                    Georgia DA Investigating Trump Will Announce Charges As Soon As July.
                </Marquee>
            </div> */}
            {/* Navigation */}
            <nav className='flex gap-3 lg:gap-5 bg-slate-900 text-white justify-center py-3 mt-5 uppercase text-xs lg:text-sm font-bold shadow'>
                <Link className='hover:text-orange-600' to='/'>Home</Link>
                <Link className='hover:text-orange-600' to='/resources'>Resources</Link>
                <Link className='hover:text-orange-600' to='/policy'>Privacy & Policy</Link>
            </nav>
        </div>
    );
};

export default BottomNav;