import React from 'react'
import Navbar from '../../components/common/navbar/Navbar'
import Users from '../../components/private/user/Users'
import EditUser from '../../components/private/user/EditUser'
import { Routes,Route} from 'react-router-dom'
const PrivateRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Navbar/>}/>
            <Route path='/user' element={<Users/>}/>
            <Route path='/user/edit' element={<EditUser/>}/>
        </Routes>
    </div>
  )
}

export default PrivateRouter