import React from 'react'

export const PersonalInfo = () => {
  return (
    <div className="PersonalInfo">
      <div className="PersonalInfoIitle">
        <h1>Personal Information</h1>
      </div>
      <form action="">
        <div className="personal_name">
          <div className="firstName">
            <p>First Name</p>
            <input type="text" name='firstName' placeholder='John' />
          </div>
          <div className="lastName">
            <p>Last Name</p>
            <input type="text" name='firstName' placeholder='Doe' />
          </div>
        </div>
        <div className="gender_input" style={{ marginTop: 20 + 'px' }}>
          <h1>Your Gender</h1>
          <div className="gender_main">
            <div className="firstName">
              <label>
                <p>Male</p>
                <input type="radio" name='gender' value='male' placeholder='John' />
              </label>
            </div>
            <div className="lastName">
              <label>
                <p>Female</p>
                <input type="radio" name='gender' value='female' placeholder='Doe' />
              </label>
            </div>
          </div>
        </div>
        <div className="personal_name" style={{ marginTop: 20 + 'px' }}>
          <div className="firstName">
            <p>Email Address</p>
            <input type="email" name='firstName' placeholder='example@gmail.com' style={{ width: 300 + 'px' }} />
          </div>
        </div>
        <div className="personal_name" style={{ marginTop: 20 + 'px' }} >
          <div className="firstName">
            <p>Mobile Number</p>
            <input type="phone" name='firstName' placeholder='+91 952 011 6440' />
          </div>
        </div>
        <div className="personal_name" style={{ marginTop: 10 + 'px' }} >
          <div className="firstName">
            <button type='submit'>SAVE</button>
          </div>
        </div>
      </form>
    </div>
  )
}
