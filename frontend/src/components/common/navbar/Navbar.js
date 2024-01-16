// import React from 'react'
// import { Link } from 'react-router-dom'
// import "./Navbar.css";
// import { MdOutlineProductionQuantityLimits } from "react-icons/md";

// const Navbar = () => {
//   return (
//     <div>
//         <nav class="navbar navbar-expand-lg bg-body-tertiary">
//   <div class="container-fluid">
//     <div className='left-content'>
//     <MdOutlineProductionQuantityLimits/>
//     </div>

//     <div className='middle-content'>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <Link class="nav-link active" aria-current="page" href="#">Register</Link>
//         </li>
//         <li class="nav-item">
//           <Link class="nav-link active" aria-current="page" href="#">Login</Link>
//         </li>
//         <li class="nav-item">
//           <Link class="nav-link active" aria-current="page" href="#">Users</Link>
//         </li>
//         <li class="nav-item">
//           <Link class="nav-link active" aria-current="page" href="#">Blogs</Link>
//         </li>
//         <li class="nav-item">
//           <Link class="nav-link active" aria-current="page" href="#">Product</Link>
//         </li>
//       </ul>
//     </div>
//     </div>

    
//     <div className='right-content'>
//             <input type="file" />
//           </div>
//   </div>
// </nav>
//     </div>
//   )
// }

// export default Navbar



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import profileImg from "../../../assets/profile-img.avif"

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logout clicked");
    // You can redirect the user to the logout page or perform any other necessary actions
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className='left-content'>
            <MdOutlineProductionQuantityLimits />
          </div>

          <div className='middle-content'>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/public/register">Register</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="#">Users</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="#">Blogs</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="#">Product</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='right-content'>
            <div className="profile-dropdown">
              <div className="profile-image-container" onClick={toggleDropdown}>
                {/* Replace with the actual path to your profile image */}
                <img src={profileImg} alt="Profile" className="profile-image" />
              </div>
              {isDropdownOpen && (
                <div className="dropdown">
                  <ul>
                    <li>
                      <Link to="#">User Settings</Link>
                    </li>
                    <li>
                      <button onClick={handleLogout}>Logout</button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
