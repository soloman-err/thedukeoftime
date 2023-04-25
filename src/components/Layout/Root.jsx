import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import LeftNav from '../Shared/LeftNav';
import RightNav from '../Shared/RightNav';

const Root = () => {
    return (
        <div className='w-[90%] lg:w-[70%] mx-auto'>
            <Header></Header>
            <section className='flex flex-col md:flex md:flex-row gap-3 text-center mt-5'>
                <div className='md:w-[20%] order-1 md:order-1'>
                    <LeftNav></LeftNav>
                </div>
                <div className='md:w-[60%] order-3 md:order-2'>
                    <Outlet></Outlet>
                </div>
                <div className='md:w-[20%] order-2 md:order-3 hidden md:static md:flex md:flex-col'>
                    <RightNav></RightNav>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Root;