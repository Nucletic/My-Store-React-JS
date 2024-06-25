import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Items } from "./SortItem";
import { useParams } from "react-router-dom";
import { ProRating } from "./ProRating";
import { Products } from "./Products";
export const ProductPage = () => {

  let params = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    Items.map((item, index) => {
      if (parseInt(item.id) === parseInt(params['*'])) {
        setProduct(item);
      }
    })
  }, [product])

  const [Quantity, setQuantity] = useState(1);

  return (
    <div className="ProductPage">
      <div className="ProductPage_main">
        <div className="navigation_links_bar">
          {product ?
            (<p>
              <Link to={"product.category"}>{product.category}</Link> / <Link to="/">Home</Link> / <span>{product.name}</span>
            </p>) : (<p>Loding...</p>)}
        </div>
        <div className="main_container_product">
          <div className="main_container_product_left">
            <div className="product_img">
              <img src={product ? product.image : "Loding..."} alt="" />
              <div className="product_img_variant">
                {product ? (
                  <>
                    <img src={product.color1} alt="" />
                    <img src={product.color2} alt="" />
                    <img src={product.color3} alt="" />
                    <img src={product.color4} alt="" />
                  </>
                ) : ("Loding...")}
              </div>
            </div>
          </div>
          <div className="main_container_product_right">
            <div className="n_i_r">
              <h1>{product ? product.name : 'Loding...'}</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse pariatur dolorem maxime suscipit fugiat!</p>
              <ProRating rating={product ? product.rating : 'Loding...'} review={product ? product.review : 'Loding...'} />
            </div>
            <div className="n_i_r">
              <h1>{product ? '$' + product.price + '.00 or ' + Math.round(product.price / 6 + 1) + '.00/month' : 'Loding...'}</h1>
              <p>Speical payments with 6 months speical financing!</p>
            </div>
            <div className="n_i_r">
              <h2>Choose a color</h2>
              <div className="nir_color">
                <div data-color={"Pink"}></div>
                <div data-color={"Black"}></div>
                <div data-color={"Green"}></div>
                <div data-color={"White"}></div>
                <div data-color={"Blue"}></div>
              </div>
            </div>
            <div className="n_i_r">
              <div className="nir_counter">
                <div className="main_counter">
                  <button onClick={() => { setQuantity(Quantity === 1 ? 1 : Quantity - 1) }} >-</button>
                  <p>{Quantity}</p>
                  <button onClick={() => { setQuantity(Quantity + 1) }} >+</button>
                </div>
                <div className="left_items">
                  <p>Only<span>12</span> Items left!</p>
                  <p>Dont-miss it.</p>
                </div>
              </div>
              <div className="buy_add_btn">
                <a href="">Buy Now</a>
                <a href="">Add to Cart</a>
              </div>
              <div className="delevery_return">
                <div className="free_delevery">
                  <h3><i className="fa fa-truck"></i>Free Delivery</h3>
                  <p>Free Delivery for item worth more then $500</p>
                </div>
                <div className="free_delevery">
                  <h3><i className="fa fa-shopping-basket"></i>Return Delivery</h3>
                  <p>Free 30 days Delivery returns.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product_specs">
          <h1>{product ? product.name : "Loding..."} Full Specifications</h1>
          <div className="specs_main">
            <div className="general_specs_main">
              <h2>General</h2>
              <div className="general_specs">
                <p><span>Brand</span>Apple</p>
                <p><span>Model</span>AirPods Max Wireless Headphones</p>
                <p><span>Price</span>$549.00</p>
                <p><span>Release date</span>December 2023</p>
                <p><span>Model Number</span>AirPods Max</p>
                <p><span>Headphone Type</span>Over-Ear</p>
                <p><span>Connectivity</span>Wireless</p>
              </div>
            </div>
            <div className="general_specs_main">
              <h2>Product Details</h2>
              <div className="general_specs">
                <p><span>Microphone</span>Yes</p>
                <p><span>Driver type</span>Dynamic</p>
                <p><span>Driver size (mm)</span>40</p>
                <p><span>Number of drivers</span>1</p>
                <p><span>Water Resistant</span>No</p>
                <p><span>Weight (g)</span>385.00</p>
                <p><span>Battery life (Hrs)</span>20</p>
              </div>
            </div>
          </div>
        </div>
        <Products text={"Similar Items you might like!"} />
      </div>
    </div>
  )
}