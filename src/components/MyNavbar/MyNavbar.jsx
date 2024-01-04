import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import hamburger from "../../assets/menu.png"
import logo from "../../assets/psbr_bg_removed.png"
import useWindowSize from '../../utils/useWindowSize';



const MyNavbar = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
      const { width } = useWindowSize();
      const threshold = 768;
  return (
    <Navbar expand="md" bg="light" fixed="top">
      <Container>
        {width < threshold && (
          <Link onClick={scrollToTop} to="/">
            <img src={logo} alt="PSBR Exports logo" loading="lazy" className="psbr-logo" />
          </Link>
        )}

        <Navbar.Toggle aria-controls="navbarSupportedContent">
          <img src={hamburger} alt="PSBR Exports logo" loading="lazy" height={28} width={28} />
        </Navbar.Toggle>

        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="navbar-nav">
            {width > threshold && (
              <Nav.Item>
                <Link onClick={scrollToTop} to="/">
                  <img src={logo} alt="PSBR Exports logo" loading="lazy" className="psbr-logo" />
                </Link>
              </Nav.Item>
            )}
            <Nav.Item>
              <Link onClick={scrollToTop} className="nav-link" to="/">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link onClick={scrollToTop} className="nav-link" to="/products">
                Products
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link onClick={scrollToTop} className="nav-link" to="/about-us">
                About Us
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link onClick={scrollToTop} className="nav-link" to="/contact-us">
                Contact Us
              </Link>
            </Nav.Item>
            <Nav.Item>
              <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Request Quote
              </button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
