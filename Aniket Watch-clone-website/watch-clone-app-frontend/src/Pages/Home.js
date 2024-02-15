import React, { useEffect, useState } from 'react'
import './home.css'
import Carsuals from '../Component/Carsuals'
import { addToCard } from '../redux/app/features/cartSlice';
import { useDispatch } from 'react-redux';


import Footer from '../Footer/Footer';
const Home=() =>{
    const [Data,setData]=useState([]);
    const dispatch=useDispatch()
    

    //add to cart
     const send=(e)=>{
      dispatch(addToCard(e))
     }
  


    useEffect(()=>{
        getData();
    }, [])

    async function getData(){
        const data =await fetch('http://localhost:2000/fetchapi')
        const json=await data.json()
        setData(json)
    }

   
  return (
    <div>
      <Carsuals></Carsuals>
    <div  className=' product'>
      
      <br></br>
      <br></br>
       <h1 className='textisa'>TIMI WATCHES 
       <br></br>FEEL POWER<br></br>IN YOUR HAND' s
       <img src='https://cdn-icons-gif.flaticon.com/10398/10398536.gif' height={80}></img>
       </h1>
       
     
    {
      
        Data.map((item)=>{
            return(
              
                <div className='card' key={item.id}>

                  
                <img className='card_img' src={item.image} alt="title" />
                <div >
                    <h3>{item.title}</h3>
                    
                </div>
                <div className='card_price'>
                    <span>Price :₹ {item.price}</span><br></br><br></br>
                    
                    <button className=' btn_add' onClick={()=>send(item)} >Add to Cart</button>
                </div>
              </div>
            )
        })
    }
    </div>
    <Footer />
    </div>

  )
}

export default Home
