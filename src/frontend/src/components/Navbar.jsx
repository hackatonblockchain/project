import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom"
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
                <div className="NavInputParent">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.58342 18.125C4.87508 18.125 1.04175 14.2917 1.04175 9.58335C1.04175 4.87502 4.87508 1.04169 9.58342 1.04169C14.2917 1.04169 18.1251 4.87502 18.1251 9.58335C18.1251 14.2917 14.2917 18.125 9.58342 18.125ZM9.58342 2.29169C5.55841 2.29169 2.29175 5.56669 2.29175 9.58335C2.29175 13.6 5.55841 16.875 9.58342 16.875C13.6084 16.875 16.8751 13.6 16.8751 9.58335C16.8751 5.56669 13.6084 2.29169 9.58342 2.29169Z" fill="#202020" fill-opacity="0.33"/>
                        <path d="M18.3333 18.9583C18.175 18.9583 18.0166 18.9 17.8916 18.775L16.225 17.1083C15.9833 16.8667 15.9833 16.4667 16.225 16.225C16.4666 15.9833 16.8666 15.9833 17.1083 16.225L18.775 17.8917C19.0166 18.1333 19.0166 18.5333 18.775 18.775C18.65 18.9 18.4916 18.9583 18.3333 18.9583Z" fill="#202020" fill-opacity="0.33"/>
                    </svg>
                    <input className='NavInput' placeholder="Search any property"></input>
                </div>
            </div>
            <div className='NavLinks'>
                <Link to="/marketplace"  className='NavLinksItems'>Connect Wallet</Link>
                <Link to="/marketplace" className='NavLinksItems'>Log in</Link>
            </div>
        </nav>
    )
}

export default MyNavbar