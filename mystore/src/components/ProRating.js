import React from 'react'

export const ProRating = ({ rating, review }) => {
  return (
    <div className="pro_rating">
      {Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        return (<React.Fragment key={index}>
          {rating >= index + 1 ? (
            <i className="fa fa-star"></i>
          ) : rating >= number ? (
            <i className="fa fa-star-half-o"></i>
          ) : <i className="fa fa-star-o"></i>}
        </React.Fragment>)
      })}
      <span>({review})</span>
    </div>
  )
}