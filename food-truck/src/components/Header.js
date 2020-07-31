import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const logoutToken = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className='nav-bar'>
      <h1>Food Truck Tracker</h1>
      <ul>
        <li>
          <Link to='/signup'>Sign Up</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/food'>Food</Link>
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/' onClick={logoutToken}>
            Log Out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
