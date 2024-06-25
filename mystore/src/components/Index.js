import React from 'react'
import { OfferBar } from './OfferBar';
import { Header } from './Header';
import { MainPageSlider } from './MainPageSlider';
import { Footer } from './Footer';
import { Account } from './Account';
import { ProductPage } from './ProductPage';
import { Products } from './Products';
import { ForgotPassword } from './ForgotPassword';
import { Login } from './Login';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Signup } from './Signup';


export const Index = () => {
  return (
    <Router>
      <div className="container">
        <OfferBar />
        <Header />
        <Routes>
          <Route exact path='/' element={<>
            <MainPageSlider />
            <TopCate />
          </>}>
          </Route>
          <Route exact path={'/login'} element={<Login />} />
          <Route exact path={'/login/forgotpassword'} element={<ForgotPassword />} />
          <Route exact path='/login/signup' element={<Signup />} />
          <Route exact path={'/account/*'} element={<Account />} />
          <Route exact path={'/search/*'} element={<ProductPage />} />
          <Route exact path={'/products/*'} element={<Products />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}


const TopCate = () => {
  return (
    <div className="TopCate">
      <div className="TopCateTitle">
        <h2>Shop Our Top Categories</h2>
      </div>
      <div className="MainTopCate">
        <Link to="#">
          <div className="TopCateCont" style={{ background: 'url(../images/tc1.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h2>Furniture</h2>
          </div>
        </Link>
        <Link to="#">
          <div className="TopCateCont" style={{ background: 'url(../images/tc2.avif)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h2>Audio & Music</h2>
          </div>
        </Link>
        <Link to="#">
          <div className="TopCateCont" style={{ background: 'url(../images/tc4.avif)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h2>Shoe</h2>
          </div>
        </Link>
        <Link to="#">
          <div className="TopCateCont" style={{ background: 'url(../images/tc5.avif)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h2>Fashion</h2>
          </div>
        </Link>
        <Link to="#">
          <div className="TopCateCont" style={{ background: 'url(../images/tc3.avif)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h2>Laptops</h2>
          </div>
        </Link>
        <Link to="#">
          <div className="TopCateCont" style={{ background: 'url(../images/c5.avif)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h2>Books</h2>
          </div>
        </Link>
      </div>
    </div>
  )
}
