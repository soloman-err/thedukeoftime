import React from 'react';
import TopNav from './TopNav';
import MidNav from './MidNav';
import BottomNav from './BottomNav';

const Header = () => {

    return (
        <>
            {/* Header */}
            <TopNav></TopNav>
            <MidNav></MidNav>
            <BottomNav></BottomNav>
        </>
    );
};

export default Header;