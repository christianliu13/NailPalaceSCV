import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default class Nav extends React.Component {
  render() {
    return (
     <nav className="navbar navbar-expand-lg navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav nav-fill">
            <div id="nav-spacing" className="row container-fluid">
              <div className="col-lg-3 col-sm-12 navs">
                <Link className="nav-item nav-link" to="/NailPalaceSCV/">Home</Link>
              </div>
              <div className="col-lg-3 col-sm-12 navs">
                <Link className="nav-item nav-link" to="/NailPalaceSCV/About">About</Link>
              </div>
              <div className="col-lg-3 col-sm-12 navs">
                <div className="nav-item dropdown">
                  <Link className="nav-item nav-link" to="/NailPalaceSCV/Services">Services</Link>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <Link className="nav-item nav-link dropdown-item" to="/NailPalaceSCV/GiftCards">Gift Cards</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-12 navs">
                <Link className="nav-item nav-link" to="/NailPalaceSCV/Contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}