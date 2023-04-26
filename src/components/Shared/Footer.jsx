import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='text-center text-white bg-slate-900 py-2 absolute bottom-0 w-full'>
            <small>Copyright &copy; <Link to='/'>dukeoftime</Link></small>
        </div>
    );
};

export default Footer;