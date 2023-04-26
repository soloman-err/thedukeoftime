import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNav from '../Shared/BottomNav';
import Footer from '../Shared/Footer';
import MidNav from '../Shared/MidNav';

const LoginLayout = () => {
    return (
        <div style={{ position: 'relative', minHeight: '100vh' }} className='w-[90%] lg:w-[70%] mx-auto flex flex-col'>
            <div className='border-b pb-3'>
                <MidNav></MidNav>
            </div>
            <BottomNav></BottomNav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;