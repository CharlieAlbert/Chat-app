import React from "react";
import './navbar.css';
import {Link} from "react-router-dom";

//Images
import Logo from "../../Assets/Dobiri.png";
import searchIcon from "../../Assets/search-icon.png";
import cartIcon from "../../Assets/shopping-cart 1.png";
import profilePic from "../../Assets/card-1.jpg";

const Navbar = () =>{
    return(
        <div className="container-fluid navbar-container">
          <div className="container">
            <nav class="navbar navbar-expand-lg ">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">
                  <img src={Logo} alt="Dobiri-Logo" className="img-fluid"/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                  <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                    <li class="nav-item">
                      <a class="navbar-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="navbar-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Liquor
                      </a>
                      <ul class="dropdown-menu" id="dropdown-liquor">
                        <li><a class="dropdown-item" href="#">Whisky</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Gin</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Brandy</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Ram</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Liqueur</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Vodka</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Beer</a></li>
                      </ul>                    
                    </li>
                    <li class="nav-item dropdown">
                      <a class="navbar-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Spaces
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Beds</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Tables</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Chairs</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Shoeracks</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Shelves</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Couches</a></li>
                      </ul>
                    </li>
                  </ul>
                  <div className="searchContainer d-flex" role="search">
                    <div className="row">
                      <div className="col-sm-8">
                          <div className="row">
                            <div className="col-md-8">
                              <input className="div-control nav-search" type="search" placeholder="Search Liquor..." aria-label="Search"/>
                            </div>
                            <div className="col-md-4">
                              <div className="btn searchbtn" type="submit">
                                <img src={searchIcon} className="searchIcon" alt="search-icon"/>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div className='col-sm-4'>
                       <div className="d-flex">
                        <div className="btn cartbtn" type="submit"><img src={cartIcon} className="cartIcon" alt="search-icon"/></div>
                        <div className="linkContainer">
                          <a type="button" className="dropdown" data-bs-toggle="collapse" data-bs-target="#profile" aria-controls="profile" aria-expanded="false" aria-label="Toggle navigation">
                              <div className="">
                                  <img className="profilePic" src={profilePic}/>
                              </div>
                          </a>
                          <div className="d-flex justify-content-center">
                            <div className="profile-dropdown collapse" id='profile'>
                                <br/>
                                <Link to='/viewProfile' className="profile-link">View Profile</Link>
                                <br/>
                                <br/>
                                <Link to='/viewProfile' className="profile-link">Log Out</Link>
                                <br/>
                            </div>
                          </div>
                        </div>
                       </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>          
        </div>
      );
}

export default Navbar;