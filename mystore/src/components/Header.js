import React, { useState } from 'react'
import { AccountCart } from './AccountCart'
import { Link } from 'react-router-dom';
import { img } from './images';
import { useNavigate } from 'react-router-dom';



export const Header = () => {
  const [category, setCategory] = useState(false);
  return (
    <header className='navbar'>
      <div className="logo">
        <Link to="/">
          Shopcart
        </Link>
      </div>
      <div className="navlinks">
        <Link to="#" id='category_btn' onClick={() => { setCategory(!category) }}>
          Categories
          <i className="fa fa-angle-down"></i>
        </Link>
        <Category category={category} />
        <Link to="#">Deals</Link>
        <Link to="#">What's New</Link>
        <Link to="#">Delivery</Link>
      </div>
      <NavSearchBar />
      <AccountCart />
    </header >
  )
}

const Category = ({ category }) => {
  return (
    <div className={`category ${category ? 'active' : ''}`}>
      <div className="category_title">
        <h2>Popular Categories</h2>
      </div>
      <div className="category_main">
        <CategoryBox image={img[4].path} name={'Furniture'} items={200} />
        <CategoryBox image={img[5].path} name={'Audio & Music'} items={200} />
        <CategoryBox image={img[8].path} name={'Shoe'} items={200} />
        <CategoryBox image={img[7].path} name={'Fashion'} items={200} />
        <CategoryBox image={img[6].path} name={'Laptops'} items={200} />
        <CategoryBox image={img[9].path} name={'Books'} items={200} />
      </div>
    </div>
  )
}

const CategoryBox = ({ image, name, items }) => {
  return (
    <Link to='#' className="category_box">
      <div className="category_img"><img src={image} alt='' /></div>
      <div className="category_info">
        <h4>{name}</h4>
        <p>{items} items available</p>
      </div>
    </Link>
  )
}
const NavSearchBar = () => {
  const [OpenSearch, setOpenSearch] = useState(false);

  const animateSearchbar = () => {
    setOpenSearch(!OpenSearch)
    let search = document.querySelector('.nav_search_bar');
    let removeBtn = document.querySelector('.navlinks').childNodes;

    if (OpenSearch === true) {
      search.style.width = '35%';
      search.style.marginLeft = '0';
      removeBtn.forEach((btn, index) => {
        btn.style.marginLeft = "1.66vw";
        btn.style.transition = "0.2s";
      })
    }
    if (OpenSearch === false) {
      search.style.width = '25%';
      search.style.marginLeft = '5.1vw';
      removeBtn.forEach((btn, index) => {
        btn.style.marginLeft = "2.66vw";
      })
    }
  }

  let navigate = useNavigate();
  const [searchInput, setSearchInput] = useState({ search: "" })
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setSearchInput({ ...searchInput, [name]: value });
  }
  const postData = async (e) => {
    e.preventDefault();
    const { search } = searchInput;
    await fetch(`http://localhost:5000/searchProduct/${search}`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { return response.json() })
      .then((data) => { console.log(data); navigate('/products') })
  }

  return (
    <form className="nav_search_bar" onSubmit={postData} onClick={() => { animateSearchbar() }}>
      <input type="text" placeholder='Search Product' name='search' value={searchInput.query} onChange={handleInput} />
      <i className="fa fa-search" aria-hidden="true"></i>
    </form>
  )
}
