import React from 'react'
import { Link } from 'gatsby'
import '../components/navbar.css'
//import { Button } from 'react-bootstrap'

export default function navbar() {
    return (
        <div className="navbar">
            <div className="nav-links-right">
                <Link to="/browse" id="browse"> Browse </Link>
                <Link to="/about" id="about"> About Us </Link>
            </div>
            <div className="nav-logo">
                <Link to="/"><img src="./images/logo.png" alt="Logo" id="logo"/></Link>
            </div>
            <div className="nav-links-left">
                <Link to="/signup" id="signup"> Sign Up </Link>  
                <Link to="/login" id="login"> Log In </Link>
                <div>
                    <Link to="/cart"><img src="./images/shopping_cart.png" alt="Cart" id="cart"/></Link>
                </div>
            </div>
        </div>
    )
}
