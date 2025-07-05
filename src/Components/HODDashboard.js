import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function HODDashboard() {
   const [username,SetUserName]=useState("")
    useEffect(() => {
          SetUserName(sessionStorage.getItem("User"))
      }, [])
  return (
     <div className='container'>
      <h2 className='text-primary text-center'>HOD Dashboard Page</h2>
      <div className='text-center'>
        <Link to="maplecturer" className='btn btn-primary me-2' >Map Lecturer </Link>
         <Link to="viewstudent" className='btn btn-primary me-2' >View Student</Link>
          <Link to="/" className='btn btn-primary' >Logout</Link>
      </div>
      <br></br>
       <p className='text-primary fw-bold fs-5'>Welcome,{username}</p>
      <Outlet/>
    </div>
  )
}
