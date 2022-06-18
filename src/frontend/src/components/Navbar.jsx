import React from 'react'
import './Navbar.css'
import { Link, Routes, Route} from "react-router-dom";
import Home from '../pages/Home';
const MyNavbar = () => {
    return (
        <nav className='Nav'>
            <div className='NavItem'>
                <div className='NavItems'>Logo</div>
                <Link to="/home" className='NavItems'>Home</Link>
                <Link to="/marketplace" className='NavItems'>Marketplace</Link>
                <Link to="/marketplace" className='NavItems'>About us</Link>
            </div>
            <div>
                <input className='NavInput' placeholder="Search any property"></input>
            </div>
            <div className='NavLinks'>
                <Link to="/marketplace"  className='NavLinksItems'>Connect Wallet</Link>
                <Link to="/marketplace" className='NavLinksItems'>Log in</Link>
            </div>

        </nav>
    )
}

export default MyNavbar