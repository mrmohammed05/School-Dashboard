import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function LecturerDashboard() {
  const [username,SetUserName]=useState("")
    useEffect(() => {
          SetUserName(sessionStorage.getItem("User"))
      }, [])
  return (
    <div className='container'>
      <h2 className='text-primary text-center'>Lecturer Dashboard Page</h2>
      <div className='text-center'>
        <Link to="addstudentmarks" className='btn btn-primary me-2' >Add Student Marks </Link>
         <Link to="viewstudent" className='btn btn-primary me-2' >View Student</Link>
          <Link to="/" className='btn btn-primary' >Logout</Link>
      </div>
      <br></br>
        <p className='text-primary fw-bold fs-5'>Welcome,{username}</p>
      <Outlet/>
    </div>
  )
}
