import React from 'react';
import logo from '../../assets/dukeoftime.png'
import { FaBars, FaCloudSun } from 'react-icons/fa';
import moment from 'moment';
import { Link } from 'react-router-dom';

const MidNav = () => {
    return (
        <div>
            <div className='flex flex-row-reverse items-center justify-between md:justify-center mt-2 md:px-2'>
                <FaBars className='md:hidden' size={25} />
                <Link to='/'>
                    <img className='w-[200px] md:w-[250px]' src={logo} alt="dukeoftime-logo" />
                </Link>
            </div>

            {/* Moment */}
            <div className='flex gap-2 items-center md:justify-center text-center text-xs md:mt-2 font-bold'>
                {
                    moment().format('dddd, DD MMMM YYYY')

                }
                <FaCloudSun size={25} />
            </div>
        </div>
    );
};

export default MidNav;