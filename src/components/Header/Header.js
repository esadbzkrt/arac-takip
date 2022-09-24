import './Header.scss';

import React from 'react';
import {BiCar}  from "react-icons/bi";

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <BiCar className="header-logo-icon"/>
                <h1 className="header-logo-title">Vehicle Task</h1>
            </div>

        </div>
    );
};

export default Header;