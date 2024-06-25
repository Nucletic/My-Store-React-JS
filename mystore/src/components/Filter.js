import React, { useState, useEffect } from 'react'
import { FilterBtn } from './FilterBtn'
import { FilterOpt } from './FilterOpt';
import { Items } from './SortItem';

export const Filter = () => {
  const filterNames = ['Color', 'Price', 'Brand', 'All Filters'];
  const [show, setShow] = useState(false);

  const [position, setPosition] = useState('');

  const [filterName, setFilterName] = useState('');
  const showFilter = (text) => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
      if (text === 'Color') {
        setPosition('5%');
        setFilterName('color');
      } else if (text === 'Price') {
        setPosition('11.2%');
        setFilterName('price');
      } else if (text === 'Brand') {
        setPosition('17.4%');
        setFilterName('brand');
      } else if (text === 'All Filters') {
        setPosition('24%');
        setFilterName('All Filters');
      }
    }
  }

  useEffect(() => {
    if (document.getElementById('FilterOpt')) {
      document.getElementById('FilterOpt').style.left = position;
    }
  }, [position])

  let itemData = [];
  Items.map((i) => {
    for (const key in i) {
      if (i.hasOwnProperty(key)) {
        itemData.push(`${key}: ${i[key]}`);
      }
    }
  })
  let itemUniqueData = [...new Set(itemData)]
  return (
    <div className="filter_main">
      <div className="left_filter">
        {filterNames.map((filter, index) => {
          return (
            <React.Fragment key={index}>
              <FilterBtn text={filter} showFilter={showFilter} />
            </React.Fragment>)
        })}
        {show && (<div id="FilterOpt">
          {itemUniqueData.map((i, index) => {
            if (filterName === 'color') {
              if (itemUniqueData[index].match(filterName)) {
                return (
                  <FilterOpt text={itemUniqueData[index].slice(itemUniqueData[index].indexOf(':') + 2).toUpperCase()} key={index} />
                )
              }
            } else if (filterName === 'price') {
              if (itemUniqueData[index].match(filterName)) {
                return (
                  <FilterOpt text={itemUniqueData[index].slice(itemUniqueData[index].indexOf(':') + 2).toUpperCase()} key={index} />
                )
              }
            } else if (filterName === 'brand') {
              if (itemUniqueData[index].match(filterName)) {
                return (
                  <FilterOpt text={itemUniqueData[index].slice(itemUniqueData[index].indexOf(':') + 2).toUpperCase()} key={index} />
                )
              }
            }
          })}
        </div>)}
      </div>
      <div className="right_filter">
        <button className="filter_btn">Sort By<i className="fa fa-angle-down"></i></button>
      </div>
    </div>
  )
}