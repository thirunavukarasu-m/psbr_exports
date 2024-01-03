import React, { useState } from 'react'
import './MainNavbar.css'
import { Link } from 'react-router-dom'
import logo from "../../assets/psbr_logo.jpeg"
import Overlay from '../Overlay/Overlay'

const MainNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    // <nav>
    //   <ul>
    //     <li>
    //         <Link to="/"><img src={logo} alt="PSBR Exports logo" loading="lazy" className='psbr-logo'/></Link>
    //     </li>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/about">About</Link>
    //     </li>
    //     <li>
    //       <Link to="/contact">Contact</Link>
    //     </li>
    //   </ul>
    // </nav>
    <>
      <div>
        {showNavbar && <Overlay onClose={handleShowNavbar} />}
        <nav className="navbar">
          <div className="nav-container">
            <div className="logo">
              <Link to="/"><img src={logo} alt="PSBR Exports logo" loading="lazy" className='psbr-logo' /></Link>
            </div>
            <div className="menu-icon" onClick={handleShowNavbar}>
              <Hamburger />
            </div>
            <div className={`nav-elements  ${showNavbar && "active"}`}>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default MainNavbar


const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="24"
    viewBox="0 0 52 24"
  >
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="52"
        height="4"
        rx="2"
        transform="translate(294 57)"
        fill="#574c4c"
      />
    </g>
  </svg>
);

