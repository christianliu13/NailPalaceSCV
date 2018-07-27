import React from 'react';
import { Link } from 'react-router-dom';

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
              <div className="col-3 navs">
                <Link to="/Home"><a className="nav-item nav-link" href="#">Home</a></Link>
              </div>
              <div className="col-3 navs">
                <Link to="/About"><a className="nav-item nav-link" href="#">About</a></Link>
              </div>
              <div className="col-3 navs">
                <div class="nav-item dropdown">
                  <Link to="Services"><a class="nav-item nav-link" href="#">
                    Services
                    </a>
                  </Link>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <Link to="GiftCards"><a class="dropdown-item" href="#">Gift Cards</a></Link>
                  </div>
                </div>
              </div>
              <div className="col-3 navs">
                <Link to="/Contact"><a className="nav-item nav-link" href="#">Contact</a></Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}