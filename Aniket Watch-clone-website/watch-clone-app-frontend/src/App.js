import React from 'react';
import Navbar from './Header/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Cartdetail from './Cart/Cartdetail';
import Singup from './Component/Signup';
import Login from './Component/Login';
import Private from './Component/Private';
import Success from './payment/Success';
import Cancel from './payment/Cancel';


function App() {
  return (
<>
<Navbar />

<Routes>
  <Route element={<Private />}>
  <Route path='/' element={<Home />} />
  <Route path='/cart' element={<Cartdetail />} />
  <Route path='/logout' element={<h1>Logout</h1>} />
  <Route path="/success" element={<Success />}/>
  <Route path="/cancel" element={<Cancel />}/>
  </Route>
  <Route path='/signup' element={<Singup />} />
  <Route path='/login' element={<Login />} />

</Routes>

</>
  );
}

export default App;
