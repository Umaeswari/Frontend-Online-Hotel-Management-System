import Navbar from '../Navbar'
import React from 'react';

import '../FrontPages/Home.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function Home() {
  return (
    <div>
      <Navbar />
       <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
       
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="slide"  src="https://miro.medium.com/max/1400/1*aKc554fLMrRF_jW4GNYFSQ.jpeg" alt="First slide"/>
          </div>
        </div>
      </div> 
      
       <footer>
        <div className="footer-content">
          <strong data-testid="para"></strong>
          <h3>Online Hotel management System</h3>

          
        </div>
        <div className="footer-bottom">
          <p>copyright &copy; <a href="#"> Hotel Management  System</a>  </p>
          <div className="footer-menu">
            <ul className="f-menu">
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
            </ul>
          </div>
        </div>

      </footer> 

       </div>
      
   
  )
}

export default Home;