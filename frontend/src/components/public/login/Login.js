import React, { useState } from 'react'
import "./Login.css"
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [loginstatus,setloginStatus] = useState(null);
  const [validationError,setValidationError] = useState({});

  const validate = () =>
  {
    const error = {};
    if (!email.trim()) {
      error.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error.email = 'Invalid email format';
    }
    if(!password.trim())
    {
      error.password = "Password is required";
    }
     setValidationError(error)
     return Object.keys(error).length===0;
  }

  const handleSubmit = (e) =>
  {
    e.preventDefault();
    if(validate())
    {
      const data = 
      {
        email,
        password
      }
      e.preventDefault();
      fetch("http://localhost:5000/login",
      {
        method:"POST",
        headers:
        {
          'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
      })
      .then((res) => res.json())
      .then((res) =>
      {
        console.log(res);
        setloginStatus(res.message)
      })
    }

  }
  return (
    <div className='Login-Container'>
       <h1>Login Form</h1>
       <div>
        <form method='post'>
          <div className='div-section'>
            <label>Email</label>
            <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
            {validationError.email && <div className='error-message'>{validationError.email}</div>}
          </div>
  
          <div className='div-section'>
            <label>Password</label>
            <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
            {validationError.password && <div className='error-message'>{validationError.password}</div>}
          </div>

          <div>
            <button onClick={handleSubmit}>Login</button>
            <Link className='register-link' to='/public/register'>Register a User</Link>
          </div>
          {
             loginstatus &&
             (
              <div className='login-message'>
                {loginstatus}
              </div>
             )}
        </form>
       </div>
    </div>
  )
}

export default LoginForm