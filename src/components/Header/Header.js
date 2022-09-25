import './Header.scss';

import React from 'react';
import {BiCar} from "react-icons/bi";

const Header = () => {
    return (
        <div className="header">
            <div className="header-items">
                <BiCar className="header-items-icon"/>
                <h1 className="header-items-title">Vehicles</h1>
                <h1 className="header-items-title">Models</h1>
                <h1 className="header-items-title">Locations</h1>
                <div className="header-items-space"></div>
                <button>Logout</button>
            </div>
        </div>
    );
};

export default Header;