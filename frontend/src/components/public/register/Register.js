import React, { useState } from 'react'
import "./Register.css"
import { Link } from 'react-router-dom';


const Register = () => {
  const [firstname,setfirstName] = useState('');
  const [lastname,setlastName] = useState('');
  const [email,setEmail] = useState('');
  const [address,setAddress] = useState('');
  const [mobile,setMobile] = useState('');
  const [password,setPassword] = useState('');
  const [registrationStatus,setRegistrationStatus] = useState(null);
  const [validationError,setValidationError] = useState({});

  const validate = () =>
  {
    const error = {};
    if(!firstname.trim())
    {
      error.firstname = "First Name is required";
    }
    if(!lastname.trim())
    {
      error.lastname = "Last Name is required";
    }
    if (!email.trim()) {
      error.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error.email = 'Invalid email format';
    }
    if(!address.trim())
    {
      error.address = 'Address is required';
    }
    if(!mobile.trim())
    {
      error.mobile = 'Address is required';
    }
    if(!password.trim())
    {
      error.password = 'Address is required';
    }
    setValidationError(error);
    return Object.keys(error).length === 0; 
  }

  const handleSubmit = (e) =>
  {
    e.preventDefault();
    if(validate())
    {
      const data = 
      {
        firstname,
        lastname,
        email,
        address,
        mobile,
        password
      }
       fetch("http://localhost:5000/register",
       {
        method:"POST",
        headers:
        {
          'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
       }).then((res) => res.json())
       .then((res) =>
       {
        console.log(res);
        setRegistrationStatus(res.message); 
       }) 
    }

  }
  return (
    <div className='Register-Container'>
      <h1>Register From</h1>
      <div>
      <form method='post'>
        <div className='div-section'>
          <label>First Name</label>
          <br />
          <input type="text" placeholder='enter first name' onChange={(e)=>setfirstName(e.target.value)}/>
          {validationError.firstname && <div className='error-message'>{validationError.firstname}</div>}
        </div>

        <div className='div-section'>
          <label>Last Name</label>
          <br />
          <input type="text" placeholder='enter last name' onChange={(e)=>setlastName(e.target.value)}/>
          {validationError.lastname && <div className='error-message'>{validationError.lastname}</div>}
        </div>

        <div className='div-section'>
          <label>Email</label>
          <br />
          <input type="text" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
          {validationError.email && <div className='error-message'>{validationError.email}</div>}
        </div>

        <div className='div-section'>
          <label>Address</label>
          <br />
          <input type="text" placeholder='address' onChange={(e) => setAddress(e.target.value)}/>
          {validationError.address && <div className='error-message'>{validationError.address}</div>}
        </div>

        <div className='div-section'>
          <label>Mobile</label>
          <br />
          <input type="number" placeholder='contect number' onChange={(e) => setMobile(e.target.value)}/>
          {validationError.mobile && <div className='error-message'>{validationError.mobile}</div>}
        </div>

        
        <div className='div-section'>
          <label>Password</label>
          <br />
          <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
          {validationError.password && <div className='error-message'>{validationError.password}</div>}
        </div>

        <div className='div-section'>
           <button onClick={handleSubmit}>Register</button>
           <Link className='login-link' to='/public/login'>Login a User</Link>
        </div>
        {registrationStatus && (
            <div className='registration-messgae'>
              {registrationStatus}
            </div>
          )}
      </form>
      </div>
    </div>
  )
}

export default Register