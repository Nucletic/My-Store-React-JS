import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { img } from './images'

export const Signup = () => {

  let navigate = useNavigate();
  const [user, setUser] = useState({ email: '', username: '', phone: '', password: '', confirmpassword: '' });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  const postData = async (e) => {
    e.preventDefault();
    const { email, username, phone, password } = user
    const res = await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, username, phone, password })
    }).then((response) => { return response.json() })
      .then((data) => { data ? navigate('/login') : alert('There\'s error signing up, please try again later.') });
  }

  return (
    <>
      <div className='main_login'>
        <div className='main_login_1'>
          <div className="login_title">
            <h1>SignUp</h1>
          </div>
          <form method='POST' onSubmit={postData}>
            <input type="email" placeholder='Email' name='email' value={user.email} onChange={handleInput} autoComplete='off' />
            <input type="text" placeholder='UserName' name='username' value={user.username} onChange={handleInput} autoComplete='off' />
            <input type="tel" placeholder='Phone' name='phone' value={user.phone} onChange={handleInput} autoComplete='off' />
            <input type="password" placeholder='Password' name='password' value={user.password} onChange={handleInput} autoComplete='off' />
            <input type="password" placeholder='Confirm Password' name='confirmpassword' value={user.confirmpassword} onChange={handleInput} autoComplete='off' />
            <button type="submit" name='submit'>SIGNUP</button>
            <Link to={'../login'}>Already Have an Account?login</Link>
            <p><span></span>OR<span></span></p>
            <button className='gglesgnup'><img src={img[10].path} alt="" />Signup with Google</button>
          </form>
        </div>
      </div>
    </>

  )
}
