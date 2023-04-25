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
            <section className='flex flex-row gap-3 text-center mt-5'>
                <div className='w-[20%]'>
                    <LeftNav></LeftNav>
                </div>
                <div className='w-[60%]'>
                    <Outlet></Outlet>
                </div>
                <div className='w-[20%]'>
                    <RightNav></RightNav>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Root;