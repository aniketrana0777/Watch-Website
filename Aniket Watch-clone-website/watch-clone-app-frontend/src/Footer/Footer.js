import React from 'react'
import { Container,Row,Col } from 'react-bootstrap' 
import './Footer.css'
function Footer() {
  return (
    
    <div className='timi'>
      
    <Container>
    <Row>
    <Col className='text-center' >
    <span >Copyright &copy; TIMI</span>
    <h2>TIMI WATCHES</h2>
    <div  className="right"  style={{ float: 'right' }}>
    <h4>Helpline Number</h4><br></br>
    <p>8628915876<br></br>
    8219099459</p>
    </div>
    <div  className="left" style={{ float: 'left' }}>
    <img src='https://cdn-icons-png.flaticon.com/128/7361/7361546.png' height={80}></img>
    <h2>TIMI</h2>
    <h3>FOLLOW US</h3>
    <div className='logo'>
   <a href='https://www.facebook.com/'> <img src='https://cdn-icons-png.flaticon.com/128/5968/5968764.png' height={30}></img></a>&nbsp;&nbsp;&nbsp;
    <a href='https://www.instagram.com/'><img src='https://cdn-icons-png.flaticon.com/128/2111/2111463.png' height={30}></img></a>&nbsp;&nbsp;&nbsp;
   <a href='https://twitter.com/'><img src='https://cdn-icons-png.flaticon.com/128/5968/5968830.png' height={30}></img></a> &nbsp;&nbsp;&nbsp;
    <a href='https://www.linkedin.com/in/aniket-rana-0a7a04194/'><img src='https://cdn-icons-png.flaticon.com/128/3536/3536505.png' height={30}></img></a>&nbsp;&nbsp;&nbsp;
    <a href='https://www.youtube.com/watch?v=I9XuRYJTue8&list=RDI9XuRYJTue8&start_radio=1'><img src='https://cdn-icons-png.flaticon.com/128/1384/1384060.png' height={30}></img></a>
    </div>
    </div>
    </Col>
    </Row>
    </Container>
      
    </div>
  )
}

export default Footer
