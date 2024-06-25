import React from 'react'

export const FilterBtn = ({ text, showFilter }) => {
  return (
    <button className="filter_btn" onClick={() => { showFilter(text) }}> {text} <i className="fa fa-angle-down"></i></button>
  )
}
