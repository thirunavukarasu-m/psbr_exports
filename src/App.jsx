import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import MainNavbar from './components/MainNavbar/MainNavbar';
import Footer from './components/Footer/Footer';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './utils/PageTransition';
import whatsApp from './assets/whatsapp-logo.png'

function App() {
  return (
    <>
      <Router>
        <MainNavbar />
        <div className="pages position-relative">
          <AnimatePresence mode='wait'>
            <Routes>
              <Route
                path="/"
                element={<PageTransition><HomePage /></PageTransition>}
              />
              <Route
                path="/products"
                element={<PageTransition><ProductsPage /></PageTransition>}
              />
              <Route
                path="/about-us"
                element={<PageTransition><AboutUsPage /></PageTransition>}
              />
              <Route
                path="/contact-us"
                element={<PageTransition><ContactUsPage /></PageTransition>}
              />
            </Routes>
          </AnimatePresence>
          <div className="fixed-bottom p-3 w-100 d-flex justify-content-end whatsApp">
            <Link to={'https://wa.me/message/AUKBGAFITFRAJ1?src=qr'} target="_blank" rel="noopener noreferrer">
              <img src={whatsApp} alt="whatsApp logo" />
            </Link>
          </div>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;