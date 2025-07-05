import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function AdminDashboard() {
  const [username,SetUserName]=useState("")
  useEffect(() => {
        SetUserName(sessionStorage.getItem("User"))
    }, [])
  return (
    <div className='container'>
      <h2 className='text-primary text-center'>Admin Dashboard Page</h2>
      <div className='text-center'>
        <Link to="addcourse" className='btn btn-primary me-2' >Add Course</Link>
         <Link to="addstaff" className='btn btn-primary me-2' >Add Staff</Link>
          <Link to="/" className='btn btn-primary' >Logout</Link>
          <br></br>
          <p className='text-primary fw-bold fs-5'>Welcome,{username}</p>
      </div>
      <Outlet/>
    </div>
  )
}
