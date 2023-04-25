import React, { useEffect, useState } from 'react';
import logo from '../../assets/dukeoftime.png'
import { FaBars, FaUserCircle } from 'react-icons/fa'
import moment from 'moment';
import { Link } from 'react-router-dom';

const Header = () => {
    const [categories, setCategories] = useState([]);
    console.log(categories);

    useEffect(() => {
        fetch('http://localhost:8000/categories')
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((error) => console.log(error))
    }, [])

    return (
        <>
            <div className='flex items-center justify-between mt-2 px-2 border-b'>
                <FaBars size={22} />
                <img className='w-[250px]' src={logo} alt="dukeoftime-logo" />
                <div className='flex items-center gap-2'>
                    <FaUserCircle size={22} />
                    {/* <button className='bg-slate-200 px-2 py-1 font-bold'>Login</button> */}
                </div>
            </div>
            <div className='text-center text-xs mt-2 font-bold'>
                {
                    moment().format('dddd, DD MMMM YYYY')
                }
            </div>

            <nav className='flex gap-3 bg-slate-900 text-white justify-center py-2 mt-5 uppercase text-sm font-bold'>
                {/* <Link to='/world'>World</Link>
                <Link to='/tech'>Tech</Link>
                <Link to='/sports'>Sports</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/business'>Business</Link>
                <Link to='/community'>Community</Link>
                <Link to='/policy'>Culture</Link> */}

                {
                    categories.map(category => <p
                        key={category.id}
                    >
                        <Link
                            to={`/categories/${category.id}`}
                        >{category.name}</Link>
                    </p>)
                }
            </nav>
        </>
    );
};

export default Header;