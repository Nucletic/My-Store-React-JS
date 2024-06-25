import React from 'react'
import { Items } from './SortItem'


export const OrderTab = () => {
  return (
    <div className="OrderTab">
      <div className="ordertabtitle">
        <h1>Orders</h1>
      </div>
      <div className="order">
        <div className="order_image_btn">
          <div className="order_img">
            <img src={Items[0].image} alt="" />
            <img src={Items[3].image} alt="" />
          </div>
          <div className="order_btn">
            <a href="">VIEW ORDER</a>
          </div>
        </div>
        <div className="order_details">
          <div className="ornum">
            <h4>Order number</h4>
            <p>7681029</p>
          </div>
          <div className="ornum">
            <h4>shipped date</h4>
            <p>10 January 2023</p>
          </div>
          <div className="ornum">
            <h4>Total</h4>
            <p>$110.00</p>
          </div>
          <div className="ornum">
            <h4>Status</h4>
            <p>Dilivered</p>
          </div>
        </div>
      </div>
    </div>
  )
}
