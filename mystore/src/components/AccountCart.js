import React from 'react'
import { img } from './images';
import { Link } from 'react-router-dom';
export const AccountCart = () => {
    return (
        <div className="account_cart_nav">
            <Link to="/account/Order">
                <img src={img[0].path} alt="user acount" width='15' />
                Account
            </Link>
            <Link to="/account/MyCart">
                <img src={img[1].path} alt="user acount" width='20' />
                Cart
            </Link>
        </div>
    )
}
