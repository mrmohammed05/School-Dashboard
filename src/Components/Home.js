import React from 'react'
import banner from '../college.png';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='container'>
      <h2 className='text-primary text-center mt-5 mb-5'>College Management System</h2>
      <div className='text-end mb-3'>
        <Link to="login" className='btn btn-warning'>Login</Link>
      </div>
      <div className='row'>
        <div className='col-6'>

        <img src={banner} className='img-fluid' />

        </div>
        <div className='col-6'>
            <div className='card px-4 py-4'>
                <p>
                    A college management system (also known as an ERP system for higher education) is a software solution that automates and streamlines various administrative, academic, and financial processes within a college or university. It helps manage tasks like admissions, student records, course scheduling, attendance, fee collection, and more. 
                </p>

            </div>

        </div>

      </div>
    </div>
  )
}
