import React, { useState, useEffect, useContext } from 'react'
import { OrderTab } from './OrderTab';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { MyCartTab } from './MyCartTab';
import { PersonalInfo } from './PersonalInfo';
import { ChangePassword } from './ChangePassword';
import { img } from './images';
import { Address } from './Address';
import { userContext } from '../App'

export const Account = () => {
  const { state, dispatch } = useContext(userContext)
  const navigate = useNavigate();
  const auth = async () => {
    try {
      const res = await fetch('http://localhost:5000/account', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });
      const data = await res.json();
      if (!res.satus === 200) {
        throw new Error(res.error);
      }
    } catch (err) {
      console.log(err);
      navigate('/login');
    }
  }

  useEffect(() => {
    auth();
  }, [])


  return (
    <div className="account_main">
      <div className="account_main_2">
        <div className="account_title">
          <h1>My Account</h1>
        </div>
        <div className="main_cont">
          <div className="left_main_cont">
            <div className="welcome_user_title">
              <p>Welcome, John Doe</p>
            </div>
            <div className="account_tabs">
              <Link to="Order"><button>
                <div className="left_btn">
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M23 6.066v12.065l-11.001 5.869-11-5.869v-12.131l11-6 11.001 6.066zm-21.001 11.465l9.5 5.069v-10.57l-9.5-4.946v10.447zm20.001-10.388l-9.501 4.889v10.568l9.501-5.069v-10.388zm-5.52 1.716l-9.534-4.964-4.349 2.373 9.404 4.896 4.479-2.305zm-8.476-5.541l9.565 4.98 3.832-1.972-9.405-5.185-3.992 2.177z" /></svg>
                  Orders
                </div>
                <i className='fa fa-chevron-right'></i>
              </button></Link>
              <Link to="MyCart"><button>
                <div className="left_btn">
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M13.5 21c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m-6 2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m16.5-16h-2.964l-3.642 15h-13.321l-4.073-13.003h19.522l.728-2.997h3.75v1zm-22.581 2.997l3.393 11.003h11.794l2.674-11.003h-17.861z" /></svg>
                  Cart
                </div>
                <i className='fa fa-chevron-right'></i>
              </button></Link>
              <Link to="PersonalInfo"><button>
                <div className="left_btn">
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm8.127 19.41c-.282-.401-.772-.654-1.624-.85-3.848-.906-4.097-1.501-4.352-2.059-.259-.565-.19-1.23.205-1.977 1.726-3.257 2.09-6.024 1.027-7.79-.674-1.119-1.875-1.734-3.383-1.734-1.521 0-2.732.626-3.409 1.763-1.066 1.789-.693 4.544 1.049 7.757.402.742.476 1.406.22 1.974-.265.586-.611 1.19-4.365 2.066-.852.196-1.342.449-1.623.848 2.012 2.207 4.91 3.592 8.128 3.592s6.115-1.385 8.127-3.59zm.65-.782c1.395-1.844 2.223-4.14 2.223-6.628 0-6.071-4.929-11-11-11s-11 4.929-11 11c0 2.487.827 4.783 2.222 6.626.409-.452 1.049-.81 2.049-1.041 2.025-.462 3.376-.836 3.678-1.502.122-.272.061-.628-.188-1.087-1.917-3.535-2.282-6.641-1.03-8.745.853-1.431 2.408-2.251 4.269-2.251 1.845 0 3.391.808 4.24 2.218 1.251 2.079.896 5.195-1 8.774-.245.463-.304.821-.179 1.094.305.668 1.644 1.038 3.667 1.499 1 .23 1.64.59 2.049 1.043z" /></svg>
                  Personal Info
                </div>
                <i className='fa fa-chevron-right'></i>
              </button></Link>
              <Link to="ChangePassword"><button>
                <div className="left_btn">
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M6 6c0-3.311 2.689-6 6-6s6 2.688 6 6v4h3v14h-18v-14h3v-4zm14 5h-16v12h16v-12zm-13-5v4h10v-4c0-2.76-2.24-5-5-5s-5 2.24-5 5z" /></svg>
                  Change Password
                </div>
                <i className='fa fa-chevron-right'></i>
              </button></Link>
              <Link to='Address'><button>
                <div className="left_btn">
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M22 11.414v12.586h-20v-12.586l-1.293 1.293-.707-.707 12-12 12 12-.707.707-1.293-1.293zm-6 11.586h5v-12.586l-9-9-9 9v12.586h5v-9h8v9zm-1-7.889h-6v7.778h6v-7.778z" /></svg>
                  Addresses
                </div>
                <i className='fa fa-chevron-right'></i>
              </button></Link>
              <button>
                <div className="left_btn">
                  <img src={img[2].path} width={24} height={24} alt='log out svg' />
                  Log Out
                </div>
                <i className='fa fa-chevron-right'></i>
              </button>
            </div>
          </div>
          <div className="right_main_cont">
            {state === true ? (
              <Routes>
                <Route exact path='/' element={<OrderTab />} />
                <Route exact path='Order' element={<OrderTab />} />
                <Route exact path='MyCart' element={<MyCartTab />} />
                <Route exact path='PersonalInfo' element={<PersonalInfo />} />
                <Route exact path='ChangePassword' element={<ChangePassword />} />
                <Route exact path='Address' element={<Address />} />
              </Routes>) : (<div className='for_log_at_acc'>
                <Link to='../login'>Login</Link>
                <p>You are not Logged in please Login to continue</p>
              </div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

