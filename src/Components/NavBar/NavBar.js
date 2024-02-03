import React, { useState } from "react";
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const location = useLocation();
  const [isLoggedIn, setLoggedIn] = useState(false);
   const handleLogout = () => {
     
     setLoggedIn(false);
   };
  return (
    <div className="navbar">
      <div className="logo-container">
        <div className="logo">ShopKart.</div>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/redirected-page">Products</a>
          </li>
          <li>
            {isLoggedIn ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              location.pathname !== "/" && <Link to="/">Logout</Link>
            )}
          </li>
          <li>
            <Link to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
