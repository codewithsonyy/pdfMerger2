import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobilenav, setMobilenav] = useState(false);
  return (
    <div className="nav">
      <div className="nav-left">
        <img src="logopdfmerger.jpg" alt="" />
      </div>
      <div>
      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
        <div className="btn-nav">
          <button className="btn"> Contact Me</button>
        </div>
      </div>
      <div className="mobilenav">
                <button
                 
                  onClick={() =>setMobilenav(!mobilenav)}
                >
                  {mobilenav ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
              </div>
      <div onClick={() => setMobilenav(!mobilenav)}  className={`${
                mobilenav ? "mobile-nav" : "hidden"
              }`}>
                
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
      </div>
    </div>
  );
};

export default Navbar;
