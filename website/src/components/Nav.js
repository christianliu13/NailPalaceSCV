import React from 'react';
import { Link } from 'react-router-dom';


export default class Nav extends React.Component {

  render() {
    return (
    	<nav className="nav nav-pills nav-justified">
	        <Link to="/Home"><a className = "nav-item nav-link">Home</a></Link>
	        <Link to="/About"><a className = "nav-item nav-link">About</a></Link>
	  		<Link to="/Services"><a className = "nav-item nav-link">Services</a></Link>
	        <Link to="/Contact"><a className = "nav-item nav-link">Contact</a></Link>
      </nav>
    );
  }
}
