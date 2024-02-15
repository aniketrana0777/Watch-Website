import React, { useEffect, useState } from 'react'
import './user.css'
import { useNavigate } from 'react-router-dom'
function Singup() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const naviagate=useNavigate();

  useEffect(()=>{
    const auth=localStorage.getItem('user')
    if(auth){
      naviagate('/')
    }
  })
  
  const handleForm=async()=>{
    console.log(name,email,password)
    let result=await fetch('http://localhost:2000/create',{
      method:'Post',
      body:JSON.stringify({name,email,password}),
      headers:{
        'Content-Type':'application/json'
      },
    });
    const data=await result.json()
    console.log(data)
    
    if(result){
      localStorage.setItem("user",JSON.stringify(data));
      naviagate('/')
    }


  }
  
  
  
  
  return (
    <div className='signup'>
        <h1>Create Account</h1>
      <input className="inputBox" value={name} onChange={(e)=>setName(e.target.value)}  type="text" placeholder='Enter Name' />
      <br></br>
       
       <input className="inputBox" value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Enter the Email' />
       <br></br>
      
       <input className='inputBox'value={password} type='password' onChange={(e)=>setPassword(e.target.value)} placeholder='Enter the Password' />
       <br></br>

       <input className='submit' onClick={handleForm}  type="Submit"  />
    </div>
  )
}

export default Singup
