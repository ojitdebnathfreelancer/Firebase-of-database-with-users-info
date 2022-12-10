import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Componets/Navbar/Navbar';

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;