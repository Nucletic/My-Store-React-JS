import React from 'react'
import { Items } from './SortItem';
import { ProRating } from './ProRating';
import { Link } from 'react-router-dom';

export const Products = ({text}) => {
  return (
    <div className="products_main">
      <div className="product_main_title">
        <h1>{text}</h1>
      </div>
      <div className="products">
        {Items.map((item, index) => {
          return (
            <Link to={`/search/${item.id}`} key={index} style={{ textDecoration: 'none' }}>
              <div className="product">
                <div className="pro_img">
                  <img src={item.image} alt="" />
                </div>
                <div className="pro_details">
                  <div className="title_price">
                    <p>{item.name}</p>
                    <p><span>$</span>{item.price}<span></span></p>
                  </div>
                  <div className="pro_info">
                    <p>{item.info}</p>
                  </div>
                  <ProRating rating={item.rating} review={item.review} />
                  <div className="add_to_cart_btn">
                    <button>Add to Cart</button>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}