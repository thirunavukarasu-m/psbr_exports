import React, { useState, useEffect } from 'react';
import './MainNavbar.css';
import { Link } from 'react-router-dom';
import logo from "../../assets/psbr_bg_removed.png";
import hamburger from "../../assets/menu.png";
import ModalPopup from '../ModalPopup/ModalPopup';
import useWindowSize from '../../utils/useWindowSize';

const MainNavbar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [visibleBgLight, setVisibleBgLight] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollYPosition = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setVisibleBgLight(scrollYPosition > 350);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  
  const { width } = useWindowSize();
  const threshold = 1000;


  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    scrollToTop()
  };
  const scrollToTop = () => {
    setNavbarState("collapse navbar-collapse")
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const [navbarState, setNavbarState] = useState("collapse navbar-collapse")

  return (
    <>
      <nav className={`navbar navbar-expand-md fixed-top ${visible ? visibleBgLight ? "bg-light" : "" : visibleBgLight ? "bg-light hidden" : "hidden"}`}>
        <div className="container-fluid">
          {width < threshold && <Link onClick={scrollToTop} to={"/"}><img src={logo} alt="PSBR Exports logo" loading="lazy" className="psbr-logo" height={150} width={198} /></Link>}
          <button className={navbarState ==="collapse navbar-collapse" ?"navbar-toggler bg-light" : "navbar-toggler" } type="button" onClick={()=>{
            if(navbarState === "collapse navbar-collapse") {
              setNavbarState("collapse navbar-collapse show bg-light text-dark")
            } else {
              setNavbarState("collapse navbar-collapse")
            }
          }}>
            <img src={hamburger} alt="PSBR Exports logo" loading="lazy" height={28} width={28} />
          </button>
          <div className={navbarState} id="navbarSupportedContent">
            <ul className="navbar-nav w-100">
              {width > threshold && (
                <li>
                  <Link onClick={() => handleItemClick('home')} to={"/"}><img src={logo} alt="PSBR Exports logo" loading="lazy" className="psbr-logo" height={200} width={208} /></Link>
                </li>                
              )}
              <li>
                <Link onClick={() => handleItemClick('home')} className={activeItem === 'home' ? 'nav-link active' : `${visibleBgLight ? "text-dark":""} nav-link`} aria-current="page" to={"/"}>Home</Link>
              </li>
              <div className="divider-line w-100"></div>
              <li>
                <Link onClick={() => handleItemClick('products')} className={activeItem === 'products' ? 'nav-link active' : `${visibleBgLight ? "text-dark":""} nav-link`} aria-current="page" to={"/products/"}>Products</Link>                
              </li>
              <div className="divider-line w-100"></div>
              <li>
                <Link onClick={() => handleItemClick('about')} className={activeItem === 'about' ? 'nav-link active' : `${visibleBgLight ? "text-dark":""} nav-link`} aria-current="page" to={"/about-us/"}>About Us</Link>               
              </li>
              <div className="divider-line w-100"></div>
              <li>
                <Link onClick={() => handleItemClick('contact')} className={activeItem === 'contact' ? 'nav-link active' : `${visibleBgLight ? "text-dark":""} nav-link`} aria-current="page" to={"/contact-us/"}>Contact Us</Link>                
              </li>
              <div className="divider-line w-100"></div>
              <li>
                <button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#exampleModal">Request Quote</button>
              </li>
              <li>
                <button className='btn btn-danger'> <Link href="src/assets/psbr.pdf" download="PSBR.pdf" className='text-white' target="_blank" 
type="application/octet-stream">Download Brochure</Link></button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ModalPopup />
    </>
  );
};

export default MainNavbar;