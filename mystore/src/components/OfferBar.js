import React from 'react'

export const OfferBar = () => {
    return (
        <div className='offer-bar-container'>
            <div className='offerbar-2'>
                <div className="offer_obj">
                    <p>+91 9520116440</p>
                </div>
                <div className="offer_obj">
                    <p>Get 50% Off On Selected Items</p>
                    <span>|</span>
                    <p><a href="">Show Now</a></p>
                </div>
                <div className="offer_obj">
                    <p>Eng<i className="fa fa-angle-down" aria-hidden="true"></i></p>
                    <p>Location<i className="fa fa-angle-down" aria-hidden="true"></i></p>
                </div>
            </div>
        </div>
    )
}
