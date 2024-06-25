import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { img } from './images'
import { userContext } from '../App'

export const Login = () => {

  const { state, dispatch } = useContext(userContext)
  let navigate = useNavigate();
  const [user, setUser] = useState({ email: '', password: '' });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  const postData = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    await fetch('http://localhost:5000/login', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    }).then((response) => { return response.json() })
      .then((data) => {
        if (data) {
          navigate('/account');
          dispatch({ type: 'USER', payload: true })
        } else {
          console.log('There\'s error Logging in, please try again later.')
        }
      })
  }

  return (
    <>
      <div className='main_login'>
        <div className='main_login_1'>
          <div className="login_title">
            <h1>Login to Your Account</h1>
          </div>
          <form method='POST' onSubmit={postData}>
            <input type="text" placeholder='Username or Email' name='email' value={user.email} onChange={handleInput} autoComplete='off' />
            <input type="password" placeholder='Password' name='password' value={user.password} onChange={handleInput} autoComplete='off' />
            <Link to={'forgotpassword'}>Forgot Password?</Link>
            <button type="submit" name='submit'>LOGIN</button>
            <Link to={'signup'}>Don't have an account? Signup</Link>
            <p><span></span>OR<span></span></p>
            <button className='gglesgnup'><img src={img[10].path} alt="" />Login with Google</button>
          </form>
        </div>
      </div>
    </>

  )
}
