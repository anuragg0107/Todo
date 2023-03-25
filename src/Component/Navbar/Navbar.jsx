import React from "react";
import "./Navbar.css";
import { auth } from "../../firebase";
import {  useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
 let loggeduser= sessionStorage.getItem('username')
  // console.log(loggeduser)
  const navigate = useNavigate();
  return (
    <div>
      <div className="Nav-wrapper">
        <Link to="/" className="brand-logo">
          Todo App
        </Link>
        <ul className="right">
          {loggeduser ? (
            <>
              <li>
                <h2 >
                  welcome - {loggeduser} 
                </h2>
              </li>
              <li>
                <button
                  className="btn"
                  onClick={() => {
                    auth.signOut();
                    sessionStorage.removeItem("username")
                    navigate("/");
                  }}
                >
                  logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/">SignIn</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
