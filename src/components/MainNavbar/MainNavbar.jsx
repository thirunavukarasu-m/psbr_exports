import React from 'react'
import './MainNavbar.css'
import { Link } from 'react-router-dom'
import logo from "../../assets/psbr_bg_removed.png"
import hamburger from "../../assets/menu.png"
import ModalPopup from '../ModalPopup/ModalPopup'

const MainNavbar = () => {


  return (

    <>
      <nav class="navbar navbar-expand-md bg-light fixed-top">
        <div class="container-fluid">
          <Link class="navbar-brand" href="#"><img src={logo} alt="PSBR Exports logo" loading="lazy" className='psbr-logo' /></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <img src={hamburger} alt="PSBR Exports logo" loading="lazy" height={28} width={28} />
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav d-flex align-items-center me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to={"/"}>Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to={"/products"}>Products</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to={"/about-us"}>About Us</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to={"/contact-us"}>Contact Us</Link>
              </li>
            </ul>
            <button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#exampleModal">Request Quote</button>
          </div>
        </div>
        
      </nav>
      <ModalPopup/>
    </>
  )
}

export default MainNavbar

