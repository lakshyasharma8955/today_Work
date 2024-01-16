import React, { useState } from 'react'
import "./EditUser.css";

const EditUser = () => {
      const [firstname,setfirstName] = useState("");
      const [lastname,setlastName] = useState("");
      const [email,setEmail] = useState("");
      const [mobile,setMobile] = useState("");
      const [role,setRole] = useState("");

    const handleUpdate = (id) =>
    {
        fetch(`http://localhost:5000/updateuser/${id}`)
    }
  return (
    <div className='edit-container'>
        <h1 className='edit-head'>Update Information</h1>
        <p className='edit-para'>User details :</p>
        <form method='post'>
            <div>
                <label className='edit-label'>First Name :</label>
                <input className='edit-input' type="text" placeholder='Enter First Name here' onChange={(e)=>setfirstName(e.target.value)}/>
            </div>

            <div>
                <label className='edit-label'>Last Name :</label>
                <input  className='edit-input' type="text" placeholder='Enter Last Name here' onChange={(e)=>setlastName(e.target.value)}/>
            </div>

            <div>
                <label className='edit-label'>Email :</label>
                <input  className='edit-input edit-input-email' type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
            </div>

            <div>
                <label className='edit-label'>Mobile Number :</label>
                <input  className='edit-input edit-input-number' type="text" placeholder='Phone Number' onChange={(e)=>setMobile(e.target.value)}/>
            </div>

            
            <div>
                <label className='edit-label'>User Role :</label>
                <input  className='edit-input' type="text" placeholder='role' onChange={(e)=>setRole(e.target.value)}/>
            </div>

            
            <div>
            <button onClick={handleUpdate} className=' user-edit-btn'>Update</button>
            </div>
        </form>
    </div>
  )
}

export default EditUser