import React from "react";
import './Header.css';

const Header = () =>{
    return(
    <div className="header-container">
        <div className="header-title">
            Hospital Management
        </div>
        <img src={require('../../Assets/—Pngtree—hospital logo_4125031.png')} className="header-logo" />
    </div>
    );
}

export default Header;