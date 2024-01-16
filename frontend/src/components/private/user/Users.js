import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./Users.css"
const Users = () => {
    const [showData,setShowData] = useState([]);
    const getAllUser = async() =>
    {
        try {
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTllNzFiNDMzMTU3ZThmNTIzYjM1MjgiLCJpYXQiOjE3MDU0MDMzNDcsImV4cCI6MTcwNTQ4OTc0N30.TntKuufHQi2trJZqTrABPP_eAeLe8JEylrmx4fzUPic"
            const headers = 
            {
                "Authorization":`Bearer ${token}`,
                "Content-Type":"application/json"
            }
            const responce = await fetch("http://localhost:5000/findalluser",
            {
                method:"GET",
                headers:headers
            })
            if(!responce.ok)
            {
                console.log("Data does not get");
            }
            const data = await responce.json();
            console.log(data,"data get Successfully");
            setShowData(data.message)
        } catch (error) {
            console.log(error,"Internal server error");
        }
    }
    useEffect(()=>
    {
        getAllUser();
    },[])

    const handleDelete = (id) =>
    {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTllNzFiNDMzMTU3ZThmNTIzYjM1MjgiLCJpYXQiOjE3MDU0MDMzMjAsImV4cCI6MTcwNTQ4OTcyMH0.lk-rb2qNHeSLHz9MV92oR5Yd8NcPC5QAtUk4jeUwy1Y"
        const headers = 
        {
            "Authorization":`Bearer ${token}`
        }
        fetch(`http://localhost:5000/deleteuser/${id}`,
        {
            method:"DELETE",
            headers:headers
        }).then((res)=>
        {
            console.log(res.data);
            getAllUser();

       })
    }

    
  return (
    <div className='user-cat-container'>
       <table className='user-cat-table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {showData.map((viewData) => (
                        <tr key={viewData._id}>
                            <td>{viewData._id}</td>
                            <td>{viewData.firstname}</td>
                            <td>{viewData.lastname}</td>
                            <td>{viewData.email}</td>
                            <td>{viewData.mobile}</td>
                            <td>{viewData.role}</td>
                            <td>
                                <button onClick={()=>handleDelete(viewData._id)} className='delete-button'>Delete</button>
                                <button className='edit-button'><Link to="/private/user/edit">Edit</Link></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
  )
}

export default Users