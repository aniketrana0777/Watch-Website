import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';


const Login=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const naviagate=useNavigate();

     useEffect(()=>{
        const auth=localStorage.getItem('user')
        if(auth){
            naviagate('/')
        }
     })


    const handleClick=async()=>{
        // console.log(email,password)
        
        let result=await fetch('http://localhost:2000/login',{
            method:"post",
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            },

        });
         result=await result.json()
         console.log(result)
         if(result.name){
            localStorage.setItem("user",JSON.stringify(result));
            naviagate('/')
         }else{
            alert('Correct details')
         }
         
    }
    return(<>
    <div className='signup'>
     <h1>Login</h1>
  
    <input className="inputBox" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter the Email' />
  
    <input className='inputBox' value={password} onChange={(e)=>{setPassword(e.target.password)}} type='password' placeholder='Enter the Password' />
  
    <input className='submit' onClick={handleClick} type="Submit"  />

        </div>
    </>)
}
export default Login