import React from "react";
import './categoryPage.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from "../navbar/navbar";
import { Icon } from "semantic-ui-react";

//Images
import heroSectionImg from "../../Assets/HeroImg.png";
import Whisky from "../../Assets/william-lawsons-removebg-preview 1.png";
import Wine from "../../Assets/Wine.png";
import Liqueur from "../../Assets/Liqueur.png";
import Gin from "../../Assets/Gin.png";
import Brandy from "../../Assets/Brandy.png";
import Rum from "../../Assets/Rum.png";
import Vodka from "../../Assets/Vodka.png";
import Beer from "../../Assets/Beer.png";
import vodkaWeekly from "../../Assets/vodkaWeekly.png";
import weeklyOffer from "../../Assets/weeklyOffer.png";
import Footer from "../footer/footer";
import NavbarSignedout from "../navbar/navbar-signedout";

const CategoryPage = () =>{
    return(
        <div className="container-fluid" id="container-fluid">
            <>     
                <Routes>
                    <Route exact path="/" element={<NavbarSignedout/>}/>

                </Routes>
            </>

            <div className="container">
               {/*Section 2 */}
                <div className="row">
                    <h2 className="text-center">Buy Whisky</h2>
                    <div className="row rowPadding">
                        <div className="col-md-3">
                            <Link to="/whisky" className="brand-label">
                                <div className="card" id='card'>
                                    <img src={Whisky} className="img-fluid whisky" alt="Whisky-Img"/>                                   
                                    <span className="text-center"><b>Whisky</b></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="" className="brand-label">
                                <div className="card" id='card'>
                                    <img src={Wine} className="img-fluid" alt="Wine-Img"/>
                                    <br/>
                                    <br/>
                                    <span className="text-center"><b>Wine</b></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="" className="brand-label">
                                <div className="card" id='card'>
                                    <img src={Liqueur} className="img-fluid" alt="Liqueur-Img"/>
                                    
                                    <span className="text-center"><b>Liqueur</b></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="" className="brand-label">
                                <div className="card" id='card'>
                                    <img src={Gin} className="img-fluid" alt="Gin-Img"/>
                                    <span className="text-center"><b>Gin</b></span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <Link to="" className="brand-label">
                                <div className="card" id='card'>
                                    <img src={Brandy} className="img-fluid" alt="Brandy-Img"/>
                                    <span className="text-center"><b>Brandy</b></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="" className="brand-label">
                                <div className="card" id='card'>
                                    <img src={Rum} className="img-fluid" alt="Rum-Img"/>
                                    <span className="text-center"><b>Rum</b></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="" className="brand-label">
                                <div className="card" id='card'>
                                    <img src={Vodka} className="img-fluid" alt="Vodka-Img"/>
                                    <span className="text-center"><b>Vodka</b></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="" className="brand-label">
                                <div className="card" id='card'>
                                    <img src={Beer} className="img-fluid" alt="Beer-Img"/>
                                    <span className="text-center"><b>Beer</b></span>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>

                {/* Section 3 */}
                <div className="row rowPadding">
                    <span className="weeklyTopLabel"><b>Smirnoff vodka @ Ksh1350</b></span>
                    <div className="col-lg-6">
                        <div>
                            <img src={weeklyOffer} className="img-fluid weeklyOffer" alt="Weekly-offer"/>
                        </div>
                        <img src={vodkaWeekly} className="img-fluid" alt="weeklyTopLiquor"/>
                    </div>
                    <div className="col-lg-6 weekly-top">
                        <h3 className="highlight-word"><b>Weekly Top Selling</b></h3>
                        <span>Get a taste of the weeks top selling drink!</span>
                        <div className="d-flex weeklyTop-section-btns">
                            <button className="secondary-Btn">Add to cart</button>
                            <button className="primary-Btn">Buy now</button>
                        </div>
                    </div>
                </div>

            </div>

            <Footer/>
            
        </div>
      );
}

export default CategoryPage;