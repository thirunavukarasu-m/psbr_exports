import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import MainNavbar from './components/MainNavbar/MainNavbar';
import Footer from './components/Footer/Footer';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import { AnimatePresence } from 'framer-motion';


function App({ router }) {

  return (
    <>

      <Router>
        <MainNavbar />

        <div className="pages">
          <AnimatePresence >
            <Routes>
              <Route path="/" Component={HomePage} key={1} />
              <Route path="/products" Component={ProductsPage} key={2} />
              <Route path="/about-us" Component={AboutUsPage} key={3} />
              <Route path="/contact-us" Component={ContactUsPage} key={4} />
              <Route path="/products" Component={ProductsPage} key={5} />
            </Routes>
          </AnimatePresence>
        </div>

        <Footer />
      </Router>
    </>
  );
}

export default App;
