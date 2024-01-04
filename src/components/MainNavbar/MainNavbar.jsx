import React, { useState } from 'react'
import './MainNavbar.css'
import { Link } from 'react-router-dom'
import logo from "../../assets/psbr_bg_removed.png"
import hamburger from "../../assets/menu.png"
import ModalPopup from '../ModalPopup/ModalPopup'
import useWindowSize from '../../utils/useWindowSize'

const MainNavbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const { width } = useWindowSize();
  const threshold = 768;

  const [navbarState, setNavbarState] = useState("collapse navbar-collapse")
  return (

    <>
      <nav className="navbar navbar-expand-md bg-light fixed-top">
        <div className="container-fluid">
          {width < threshold && <Link onClick={scrollToTop} to={"/"}><img src={logo} alt="PSBR Exports logo" loading="lazy" classNameName='psbr-logo' height={150} width={198}/></Link>}
          <button className="navbar-toggler" type="button" onClick={()=>{
            if(navbarState === "collapse navbar-collapse") {
              setNavbarState("collapse navbar-collapse show")
            } else {
              setNavbarState("collapse navbar-collapse")
            }
          }}>
            <img src={hamburger} alt="PSBR Exports logo" loading="lazy" height={28} width={28} />
          </button>
          <div className={navbarState} id="navbarSupportedContent">
            <ul className="navbar-nav">
              {width > threshold && (
                <li>
                  <Link onClick={scrollToTop} to={"/"}><img src={logo} alt="PSBR Exports logo" loading="lazy" classNameName='psbr-logo' height={170} width={208} /></Link>
                </li>
              )}
              <li>
                <Link onClick={scrollToTop} className="nav-link" aria-current="page" to={"/"}>Home</Link>
              </li>
              <li>
                <Link onClick={scrollToTop} className="nav-link" aria-current="page" to={"/products"}>Products</Link>
              </li>
              <li>
                <Link onClick={scrollToTop} className="nav-link" aria-current="page" to={"/about-us"}>About Us</Link>
              </li>
              <li>
                <Link onClick={scrollToTop} className="nav-link" aria-current="page" to={"/contact-us"}>Contact Us</Link>
              </li>
              <li>
                <button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#exampleModal">Request Quote</button>

              </li>
            </ul>

          </div>
        </div>

      </nav>
      <ModalPopup />
    </>
  )
}

export default MainNavbar

