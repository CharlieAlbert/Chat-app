import { React } from 'react';
import { Link } from 'react-router-dom';

import './footer.css';

//Images
import Logo from "../../Assets/Dobiri.png";

const Footer = () =>{
    return(
        <div className='container-fluid footer-bg'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8'>
                        <div  className='row'>
                        <div className='col-md-4'>
                            <Link class="navbar-brand" to="/">
                                <img src={Logo} alt="Dobiri-Logo" className="img-fluid"/>
                                <br/>
                            </Link>
                        </div>
                        <div className='col-md-4'>
                            <ul className='Help-Links'>
                                <br/>
                                <h4><b>We are here to help</b></h4>
                                <br/>
                                <Link className='footer-link'><li>Customer care</li></Link>
                                <br/>
                                <Link className='footer-link'><li>Order status</li></Link>
                                <br/>
                                <Link className='footer-link'><li>About</li></Link>
                                <br/>
                                <Link className='footer-link'><li>Terms and Conditions</li></Link>
                            </ul>
                        </div>
                        <div className='col-md-4'>
                            <ul className='Help-Links'>
                                <br/>
                                <h4><b>Useful Links</b></h4>
                                <br/>
                                <Link className='footer-link'><li>Pricing</li></Link>
                                <br/>
                                <Link className='footer-link'><li>About Us</li></Link>
                                <br/>
                                <Link className='footer-link'><li>How it works</li></Link>
                                <br/>
                                <Link className='footer-link'><li>Privacy Policy</li></Link>
                                <br/>
                                <Link className='footer-link'><li>Terms and Conditions</li></Link>
                                <br/>
                                <Link className='footer-link'><li>Contact Us</li></Link>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <span className=''>© 2023 Bitskill Inc., All Rights Reserved</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;