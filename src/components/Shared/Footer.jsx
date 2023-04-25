import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='text-center'>
            <small>Copyright &copy; <Link to='/'>dukeoftime</Link></small>
        </div>
    );
};

export default Footer;