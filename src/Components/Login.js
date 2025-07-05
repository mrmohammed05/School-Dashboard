import React, { useState } from 'react'
import loginimg from '../Login.jpg'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const usertype=["Admin","HOD","Lecturer"]
    const [user,SetUser]=useState("");
    const [userid, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");

    const navigate=useNavigate();

    function handleLogin()
    {
        sessionStorage.setItem("User",userid)
        if(user=="Admin")
        {
            if(userid=="Admin" && password=="123")
            {
                
                navigate("/admindashboard")
            }
            else
            {
                setMsg("Invalid User Id/Password");
            }
        }
        else if(user=="HOD")
        {
            if(userid=="HOD" && password=="123")
            {
                navigate("/hoddashboard/maplecturer")
            }
            else
            {
                setMsg("Invalid User Id/Password");
            }
        }
        else if(user=="Lecturer")
        {
            if(userid=="Lecturer" && password=="123")
            {
                navigate("/lecturerdashboard/addstudentmarks")
            }
            else
            {
                setMsg("Invalid User Id/Password");
            }
        }
    }
  return (
    <div className='container'>
        <div className='row mt-5'>
            <div className='col-6'>
                <img src={loginimg} className='img-fluid'/>
            </div>
            <div className='col-6'>
                <div className='card px-4 py-4'>
                    <h2 className='text-primary text-center mb-3'>Login Form</h2>
                    <div className='mb-3'>
                        <label className='form-label'>Select User Type</label>
                        <select className='form-control'
                        value={user} onChange={(e)=>SetUser(e.target.value)}>
                            <option>--Select--</option>
                            {
                               usertype.map((item)=>{
                                return(
                                    <option value={item}>{item}</option>
                                )
                               }) 
                            }
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Enter User Id</label>
                        <input type="text" className='form-control'
                        value={userid} onChange={(e)=>setUserId(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Enter Password</label>
                        <input type="password" className='form-control' 
                        value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div className='text-end'>
                        <input type="button" value="Login" className="btn btn-primary" onClick={handleLogin} />
                    </div>
                    <p className='text-danger fw-bold fs-4'>{msg}</p>
                </div>
                
        
            </div>
        </div>
      
    </div>
  )
}
