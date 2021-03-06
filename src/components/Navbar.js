import React, { useContext } from "react";
import { Link } from "gatsby";
import "../components/navbar.css";
import { AuthContext } from "../context/auth";
import { navigate } from 'gatsby';
import firebase from "gatsby-plugin-firebase";
import Logo from "../assets/logo.png";
import Cart from "../assets/shopping_cart.png";

require('firebase/auth')

export default function Navbar() {
  const { user } = useContext(AuthContext);

  const handleLogout = async () => {
    await firebase.auth().signOut()
    navigate("/login")
  }
  
  return (
    <div className="navbar">
      <div className="nav-links-right">
        <Link to="/browse" id="browse">
          {" "}
          Browse{" "}
        </Link>
        <Link to="/about" id="about">
          {" "}
          About Us{" "}
        </Link>
      </div>
      <div className="nav-logo">
        <Link to="/">
          <img src={Logo} alt="Logo" id="logo" />
        </Link>
      </div>
      <div className="nav-links-left">
        {!user ? (
          <>
            <Link to="/signup" id="signup">
              {" "}
              Sign Up{" "}
            </Link>
            <Link to="/login" id="login">
              {" "}
              Log In{" "}
            </Link>
          </>
        ) : (
          <>
            <Link to="/" id="login" onClick={handleLogout}>
              Log Out
            </Link>
          </>
        )}
        <div>
          <Link to="/cart">
            <img src={Cart} alt="Cart" id="cart" />
          </Link>
        </div>
      </div>
    </div>
  );
}
