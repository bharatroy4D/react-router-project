import React from 'react';
import Navber from '../Navber/Navber';
import { Outlet } from 'react-router-dom';
import Foter from '../Footer/Foter';

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Foter></Foter>
        </div>
    );
};

export default Root;