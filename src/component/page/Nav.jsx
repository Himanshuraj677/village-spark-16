import React, {useContext} from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../img/logo.png";
import { getAuth, signOut } from "firebase/auth";
import { checkAuth } from "../../App";

const Nav = (props) => {
  const isAuthenticated = useContext(checkAuth);
  const location = useLocation();
  // console.log(location.pathname);
  const logoutUser = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return(
    <header className="header">
      <div className="nav-icon">
        <img src={logo} alt="logo" />
      </div>
      <div className="hamburg hide-menu {menuOpen ? hide-menu : ''}">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className="nav-menu">
        <ul>
          <Link to="/home" className={location.pathname === '/' ? 'active' : ''}><li>Home</li></Link>
          <Link to="/business" className={location.pathname === '/business' ? 'active' : ''}><li>Business</li></Link>
          <Link to="/farming" className={location.pathname === '/farming' ? 'active' : ''}><li>Farming</li></Link>
          <Link to="/job" className={location.pathname === '/job' ? 'active' : ''}><li>Job</li></Link>
          <Link to="/donation" className={location.pathname === '/donation' ? 'active' : ''}><li>Donate</li></Link>
        </ul>
      </nav>
      <div className="nav-button">
        <Link className="log-sign-link" to="/login">
           <button className="login-btn" disabled={isAuthenticated}>Login</button>
        </Link>
        <Link className="log-sign-link" to="/register">
          <button className="signup-btn" disabled={isAuthenticated}>Signup</button>
        </Link>
        <Link className="log-sign-link" to="/login">
          <button onClick={logoutUser} className="logout-btn" disabled={!(isAuthenticated)}>Logout</button>
        </Link>
      </div>
    </header>
  );
};

export default Nav;
