import React from "react";
import { Link } from 'react-router-dom';

 function Home() {
  return (
    <main>
    	<div id="hero-background">
	    	<div id="hero">
	      		<h1>Welcome to<br/>Nail Palace</h1>
	      		<h5>"Nobody does it better"</h5>
	      		<Link to="/Contact"><button>Visit us</button></Link>
	      	</div>
      	</div>
  	</main>
  );
}

export default Home;