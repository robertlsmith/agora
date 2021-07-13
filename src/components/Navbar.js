import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
    return (
        <nav>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/browse"> Browse </Link>
                <Link to="/about"> About Us </Link>
                <Link to="/"><img src = "icon.png"/> </Link>
                <Link to="/signup"> Sign Up </Link>  
                <Link to="/login"> Log In </Link>
                <Link to="/cart"> Cart </Link>
            </div>
        </nav>
    )
}
