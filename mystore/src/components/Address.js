import React, { useState } from 'react'

export const Address = () => {
  const [AddMenu, setAddMenu] = useState(false);
  const [newAddress, setnewAddress] = useState(false);
  const addAddress = () => {
    if (newAddress === false) setnewAddress(true);
    else setnewAddress(false);
  }
  const [AddressEdit, setAddressEdit] = useState(false);


  return (
    <div className="Address">
      <div className="address_title">
        <h1>Addresses</h1>
      </div>
      {newAddress === false ? (
        <div className="add_address" onClick={() => { addAddress() }}>
          <p>+</p><p>ADD A NEW ADDRESS</p>
        </div>
      ) : (
        <form action="">
          <div className="add_new_address">
            <div className="use_my_curr_loc">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill='#fff' viewBox="0 0 24 24"><path d="M24 11h-2.051c-.469-4.725-4.224-8.48-8.949-8.95v-2.05h-2v2.05c-4.725.47-8.48 4.225-8.949 8.95h-2.051v2h2.051c.469 4.725 4.224 8.48 8.949 8.95v2.05h2v-2.05c4.725-.469 8.48-4.225 8.949-8.95h2.051v-2zm-11 8.931v-3.931h-2v3.931c-3.611-.454-6.478-3.32-6.931-6.931h3.931v-2h-3.931c.453-3.611 3.32-6.477 6.931-6.931v3.931h2v-3.931c3.611.454 6.478 3.319 6.931 6.931h-3.931v2h3.931c-.453 3.611-3.32 6.477-6.931 6.931zm1-7.931c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2z" /></svg>Use my current location
              </button>
            </div>
            <div className="top_4_inputs">
              <input type="text" placeholder='Name' />
              <input type="text" placeholder='10-digit mobile number' />
              <input type="text" placeholder='Pincode' />
              <input type="text" placeholder='Locality' />
            </div>
            <div className="top_4_inputs">
              <textarea name="" id="" cols="75" placeholder='Address (Area and Street)' rows="5"></textarea>
            </div>
            <div className="top_4_inputs">
              <input type="text" placeholder='City/District/Town' />
              <input type="text" placeholder='State' />
              <input type="text" placeholder='Landmark (Optional)' />
              <input type="text" placeholder='Alternate Phone (Optional)' />
            </div>
            <div className="bottom_2_radio">
              <h3>Address Type</h3>
              <div>
                <label>
                  <p>Home</p>
                  <input type="radio" name='gender' />
                </label>
                <label>
                  <p>Work</p>
                  <input type="radio" name='gender' />
                </label>
              </div>
            </div>
            <div className="top_4_inputs">
              <button type='submit'>SAVE</button>
              <button onClick={() => { addAddress() }}>CANCEL</button>
            </div>
          </div>
        </form>)}
      <div className="main_address">
        <div className="Home_opt"><p>HOME</p><svg xmlns="http://www.w3.org/2000/svg" onClick={() => { setAddMenu(!AddMenu) }} fill='#333' width="18" height="18" viewBox="0 0 24 24"><path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" /></svg></div>
        {AddMenu ? (<div className="addmenu">
          <button>Delete</button>
        </div>) : ""}

        <div className="address_info">
          <div className="no_name_add">
            <p>Priyanshukuntal</p>
            <p>+91 9520116440</p>
          </div>
          <p>11b, Nh2 Raj bihar colany Navada mathura, Mathura, Uttar Pradesh - 281001</p>
        </div>
      </div>
    </div>
  )
}
