import React from 'react'

export const ChangePassword = () => {
  return (
    <>
      <form action="">
        <div className="personal_name" style={{ marginTop: 20 + 'px' }} >
          <div className="firstName">
            <p>Current Password</p>
            <input type="phone" name='firstName' placeholder='Current Password' style={{ width: 400 + 'px' }} />
          </div>
        </div>
        <div className="personal_name">
          <div className="firstName">
            <p>New Password</p>
            <input type="phone" name='firstName' placeholder='New Password' style={{ width: 400 + 'px' }} />
          </div>
        </div>
        <div className="personal_name">
          <div className="firstName">
            <p>Confirm Password</p>
            <input type="phone" name='firstName' placeholder='Confirm Password' style={{ width: 400 + 'px' }} />
          </div>
        </div>
        <div className="personal_name" style={{ marginTop: 10 + 'px' }} >
          <div className="firstName">
            <button type='submit'>Change Password</button>
          </div>
        </div>
      </form>
    </>
  )
}
