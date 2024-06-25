import React from 'react'

export const Footer = () => {
  return (
    <footer>
      <div className="footer_main">
        <div className="logo">
          Shopcart
          <p>Get anything on lowest Prices.</p>
        </div>
        <div className="footer_links">
          <h2>NAVIGATE</h2>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Category</a>
          <a href="">T&C</a>
        </div>
        <div className="footer_social">
          <h2>FOLLOW US</h2>
          <div className="social_links">
            <a href=""><i className="fa fa-facebook"></i></a>
            <a href=""><i className="fa fa-instagram"></i></a>
            <a href=""><i className="fa fa-twitter"></i></a>
            <a href=""><i className="fa fa-github"></i></a>
            <a href=""><i className="fa fa-youtube-play"></i></a>
          </div>
        </div>
        <div className="footer_contact">
          <h2>CONTACT US</h2>
          <p><b>Phone:</b> +91 (821) 802 5546</p>
          <p><b>Email:</b> sales@yatiglobalsolutions.com</p>
          <p><b>Address:</b> 11b Raj Vihar Navada Mathura, UP</p>
        </div>
      </div>
      <div className="hori"></div>
      <div className="footer_copy">
        © ShopCart. All Rights Reserved.
      </div>
      <div className="footer_created_by">
        Created By <a href="http://yatiglobalsolutions.com/" target="_blank">YGS Web Solutions Pvt. Ltd.</a>
      </div>
    </footer>
  )
}
