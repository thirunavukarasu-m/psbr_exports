import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import MainNavbar from './components/MainNavbar/MainNavbar';
import Footer from './components/Footer/Footer';
import ProductsPage from './pages/ProductsPage/ProductsPage';


function App() {
  return (
    <>

      <Router>
        <MainNavbar />
        <div className="pages">
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/products" Component={ProductsPage} />
            <Route path="/about-us" Component={AboutUsPage} />
            <Route path="/contact-us" Component={ContactUsPage} />
            <Route path="/products" Component={ProductsPage} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
