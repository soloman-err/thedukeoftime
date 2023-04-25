import React, { useEffect, useState } from 'react';
import logo from '../../assets/dukeoftime.png'
import { FaBars, FaUserCircle } from 'react-icons/fa'
import moment from 'moment';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/categories')
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((error) => console.log(error))
    }, [])

    return (
        <>
            {/* Header */}
            <div className='flex items-center justify-between mt-2 px-2 border-b'>
                <FaBars size={22} />
                <img className='w-[250px]' src={logo} alt="dukeoftime-logo" />
                <div className='flex items-center gap-2'>
                    <FaUserCircle size={22} />
                    {/* <button className='bg-slate-200 px-2 py-1 font-bold'>Login</button> */}
                </div>
            </div>

            {/* Moment */}
            <div className='text-center text-xs mt-2 font-bold'>
                {
                    moment().format('dddd, DD MMMM YYYY')
                }
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
            <nav className='flex gap-3 bg-slate-900 text-white justify-center py-2 mt-5 uppercase text-sm font-bold'>
                {
                    categories.map(category => <p
                        key={category.id}
                    >
                        <Link
                            to={`/category/${category.id}`}
                        >{category.name}</Link>
                    </p>)
                }
            </nav>
        </>
    );
};

export default Header;