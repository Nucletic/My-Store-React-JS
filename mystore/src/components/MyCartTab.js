import React, { useState } from 'react'
import { Items } from './SortItem'
import { img } from './images'

export const MyCartTab = () => {

  const [ItemCount, setItemCount] = useState(1)
  const cartItems = [{
    id: 1,
    image: '/./images/Items/airpods_pink.jpg',
    name: 'AirPods Max',
    price: 559,
    info: 'Lorem ipsum dolor sit amet.',
    rating: 5,
    review: 121,
    type: 'true wireless',
    color: 'pink',
    brand: 'Apple',
    discount: '',
    microphonepresent: 'yes',
    offers: 'no cost EMI',
    compaitaiblewith: 'laptop mobile desktop',
    category: 'audio & video'
  }];

  const [itemList, setItemList] = useState(cartItems);
  function removeCartItem(id) {
    const newList = itemList.filter((item) => item.id !== id);
    setItemList(newList);
  }

  return (
    <div className="MyCartTab">
      <div className="CartTitle">
        <h1>Cart</h1>
      </div>
      {itemList.length === 0 ? (
        (
          <><img src={img[3].path} className="emptycartimg" alt="" /></>
        )
      ) : itemList.map((cartitem, index) => {
        return (
          <div className="cartItem" key={index}>
            <div className="left_cart_item">
              <div className="cart_img">
                <img src={cartitem.image} alt="" />
              </div>
              <div className="cart_item_counter">
                <button className="increament" onClick={() => { ItemCount === 1 ? setItemCount(1) : setItemCount(ItemCount - 1) }}>-</button>
                <p>{ItemCount}</p>
                <button className="decreament" onClick={() => { setItemCount(ItemCount + 1) }}>+</button>
              </div>
            </div>
            <div className="right_cart_item">
              <div className="cart_item_details">
                <h2>{cartitem.name}</h2>
                <p>{cartitem.color}</p>
                <p>Seller: {Items[1].brand}</p>
                <h3><strike>$1,400</strike>${cartitem.price}<span>63% Off</span></h3>
              </div>
              <div className="cart_item_btns">
                <button className="remove_cart_item" onClick={() => { removeCartItem(cartitem.id); }}>REMOVE</button>
                <button className="remove_cart_item">PLACE ORDER</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
