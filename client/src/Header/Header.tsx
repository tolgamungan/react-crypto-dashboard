import React from 'react'
import "./Header.scss";

const Header = ({ }:any) => {

    return (
      
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg sticky-top">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent"></button>
            <div id="navbarSupportedContent" className="collapse navbar-collapse">
                <img className="header-logo" src='https://i.pinimg.com/originals/5c/1f/f0/5c1ff0c7b124d6f95a3a31673c2526a1.jpg' alt="Crypto Logo" height="52" />
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item px-2">
                  <a className="nav-link" href="#">Coins</a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link" href="#">NFT</a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link" href="#">Trade</a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link" href="#">Exchanges</a>
                </li>
              </ul>
            </div>
            <div className="d-flex align-items-center">
              <div className="dropdown">
                <a id="navbarDropdownMenuLink" className="text-reset me-3 dropdown-toggle hidden-arrow" href="#" data-mdb-toggle="dropdown">
                  <span className="badge rounded-pill badge-notification bg-danger">1</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="#">Some news</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">Another news</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                <a id="navbarDropdownMenuAvatar" className="dropdown-toggle d-flex align-items-center hidden-arrow" href="#" data-mdb-toggle="dropdown">
                  <img className="rounded-circle" src="http://tolga.click/Tolga%20Mungan_files/profilepic.jpg" alt="Black and White Portrait of a Man" height="25" />
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="#">My profile</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">Settings</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
       
    )
} 

export default Header
