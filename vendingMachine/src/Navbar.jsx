import React from 'react';
import {NavLink} from 'react-router-dom';

function Navbar(){
    return (
        <nav className='nav'>
            <NavLink exact to='/' className='home'>Vending Machine</NavLink>
            <NavLink exact to='/Chips'>Chips</NavLink>
            <NavLink exact to='/Cookies'>Cookies</NavLink>
            <NavLink exact to='/Chocolate'>Chocolate</NavLink>
        </nav>
    )
}

export default Navbar;