import React from "react";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
    	<div id="hero-background">
        <div class ="row">
          <div id="hero"class ="col-lg-6">
        		<h1>Welcome to<br/>Nail Palace</h1>
        		<h4>"Nobody does it better!"</h4>
        		<Link to="/Contact"><button>Visit us</button></Link>
          </div>
          <div id="hero-coupon" class ="col-lg-5">
            <h1><sup>$</sup>5 Off</h1>
            <h4>Your visit when you mention this online coupon.</h4>
          </div>
        </div>
      </div>
  	</main>
  );
}

export default Home;