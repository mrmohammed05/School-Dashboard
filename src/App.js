import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import AdminDashboard from './Components/AdminDashboard'
import AddCourse from './Components/AddCourse'
import AddStaff from './Components/AddStaff'
import HODDashboard from './Components/HODDashboard'
import MapLecturer from './Components/MapLecturer'
import ViewStudent from './Components/ViewStudent'
import LecturerDashboard from './Components/LecturerDashboard'
import AddStudentMarks from './Components/AddStudentMarks'

export default function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="" element={<Home/>}/>
    <Route path="login" element={<Login/>}/>
     <Route path="admindashboard" element={<AdminDashboard/>}>
      <Route path="addcourse" element={<AddCourse/>}/>
       <Route path="addstaff" element={<AddStaff/>}/>
     </Route>
      <Route path="hoddashboard" element={<HODDashboard/>}>
      <Route path="maplecturer" element={<MapLecturer/>}/>
       <Route path="viewstudent" element={<ViewStudent/>}/>
     </Route>
      <Route path="lecturerdashboard" element={<LecturerDashboard/>}>
      <Route path="addstudentmarks" element={<AddStudentMarks/>}/>
       <Route path="viewstudent" element={<ViewStudent/>}/>
     </Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}
