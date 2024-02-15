import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar=()=> {
  const auth=localStorage.getItem('user')
  const naviagate=useNavigate();
  const Logout=()=>{
    localStorage.clear();
    naviagate("/signup")
   
   }
  return (
    
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"> <img src='https://cdn-icons-png.flaticon.com/128/7361/7361546.png' height={50}></img><h3>TIMI</h3></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    {auth?  <ul class="navbar-nav ms-auto">
        <li class="nav-item">
        <Link className='nav-link active' aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link active' aria-current="page" to="/cart">Cart</Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link' onClick={Logout}to="/signup">Logout ({JSON.parse(auth).name})</Link>
          </li>
          </ul>
          :
          <ul class="navbar-nav ms-auto">
          <li class="nav-item">
          <Link className='nav-link active' aria-current="page" to="/signup">Sign Up</Link>
          </li>
          <li class="nav-item">
          <Link className='nav-link active' aria-current="page" to="/login">Login</Link>
          </li>
          </ul>
}
        
   
     
    </div>
  </div>
  
</nav>

    </div>
  )
}

export default Navbar