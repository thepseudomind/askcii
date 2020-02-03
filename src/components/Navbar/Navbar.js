import React from 'react';
import './Navbar.scss';

const Navbar = ({status, toggleSidebar})=>{
    return (
        <nav className="navbar">
            <h2>cart</h2>
            <div className="navbar__logo">
                askcii
            </div>
            {
                status ? <span></span> : 
                <span htmlFor="menu" className="navbar__menu" onClick={()=>toggleSidebar(true)}>
                    <span className="navbar__menu--icons"></span>
                </span>
            }
        </nav>
    );
}

export default Navbar;