import { React, useState } from "react";
import './liquorLandingPage.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from "../navbar/navbar";
import { Icon } from "semantic-ui-react";
import Cookies from 'js-cookie';

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

const LiquorLandingPage = () =>{

    var whisky = 'Whisky';
    var wine = 'Wine';
    var brandy = 'Brandy';
    var liqueur = 'Liqueur';
    var beer = 'Beer';
    var rum = 'Rum';
    var gin = 'Gin';
    var vodka = 'Vodka';

    const [link, setCookie] = useState('');

    const setCookieLink = () =>{
        
    }

    Cookies.set('link', 'whisky', { expires: 7, path: '/' });

    return(
        <div className="container-fluid" id="container-fluid">
            <>     
                <Routes>
                    <Route exact path="/" element={<Navbar/>}/>

                </Routes>
            </>

            {/*Section 1*/}
            <div className="container">
                <div className="row rowPadding">
                    <div className="col-lg-7 colPadding">
                        <h1 className="hero-heading">Your <span className="highlight-word">Party</span>, Delivered to Your Doorstep</h1>
                        <br/>
                        <br/>
                        <span className="hero-description">
                            Raise a Toast to Convenient &nbsp;
                            <span className="highlight-word">
                                Liquor Delivery
                            </span>
                        </span>
                        <br/>
                        <br/>
                        <p className="hero-paragraph">
                        Uncork the celebration with just a click! Say goodbye to long lines and crowded liquor stores. 
                        Our liquor delivery service brings your favorite tipples right to your doorstep.
                        </p>
                        <br/>
                        <br/>
                        <div className="arrowBtn">
                            <div className="exploreLabel">Explore</div>
                            <br/>
                            <span className="exploreArrow"> <Icon className="down-arrow" name="long arrow alternate down" /></span>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <span className="ad-highlight">
                            <span className="highlight-word">
                                mapema &nbsp;
                            </span>
                            ndo
                        </span>
                        <img className="img-fluid" src={heroSectionImg} alt="Hero-section-img"/>
                    </div>
                </div>

                {/*Section 2 */}
                <div className="row">
                    <h2 className="text-center">Brands</h2>
                    <div className="row rowPadding">
                        <div className="col-md-3">
                            <Link to="/categoryPage" className="brand-label" onClick={setCookieLink}>
                                <div className="card" id='card'>
                                    <img src={Whisky} className="img-fluid whisky" alt="Whisky-Img"/>                                   
                                    <span className="text-center"><b>{whisky}</b></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="/categoryPage" className="brand-label" onClick={setCookieLink}>
                                <div className="card" id='card'>
                                    <img src={Wine} className="img-fluid" alt="Wine-Img"/>
                                    <br/>
                                    <br/>
                                    <span className="text-center"><b>{wine}</b></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="/categoryPage" className="brand-label" onClick={setCookieLink}>
                                <div className="card" id='card'>
                                    <img src={Liqueur} className="img-fluid" alt="Liqueur-Img"/>
                                    
                                    <span className="text-center"><b>{liqueur}</b></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="/categoryPage" className="brand-label" onClick={setCookieLink}>
                                <div className="card" id='card'>
                                    <img src={Gin} className="img-fluid" alt="Gin-Img"/>
                                    <span className="text-center"><b>{gin}</b></span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <Link to="/categoryPage" className="brand-label" onClick={setCookieLink}>
                                <div className="card" id='card'>
                                    <img src={Brandy} className="img-fluid" alt="Brandy-Img"/>
                                    <span className="text-center"><b>{brandy}</b></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="/categoryPage" className="brand-label" onClick={setCookieLink}>
                                <div className="card" id='card'>
                                    <img src={Rum} className="img-fluid" alt="Rum-Img"/>
                                    <span className="text-center"><b>{rum}</b></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="/categoryPage" className="brand-label" onClick={setCookieLink}>
                                <div className="card" id='card'>
                                    <img src={Vodka} className="img-fluid" alt="Vodka-Img"/>
                                    <span className="text-center"><b>{vodka}</b></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="/categoryPage" className="brand-label" onClick={setCookieLink}>
                                <div className="card" id='card'>
                                    <img src={Beer} className="img-fluid" alt="Beer-Img"/>
                                    <span className="text-center"><b>{beer}</b></span>
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

export default LiquorLandingPage;