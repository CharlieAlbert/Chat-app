import React from "react";
import './HeroSection.css'
import BonusBadge from "../Assets/BonusBadge.png";


function HeroSection() {
  return (
    <div className="hero-section">
        <div className="Hero mb-5 container">
            <h1>Create Your Haven With</h1>
            <h1>Our <span className="furniture">Furniture</span> Pieces</h1>
        </div>
        <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <img src={BonusBadge} className='img-fluid' alt="bonus" />
          </div>
          <div className="col-lg-8 d-flex align-items-center justify-content-center">
            <div className="px-2">
              <p className="fs-5">
                Furnish your home with elegance and comfort. Our collection of
                furniture offers a wide <br /> range of styles to fit any taste. From
                sofas to tables, we have everything you need to transform your
                space.
              </p>
            </div>
            
          </div>
          <div className="col-lg-2"></div>
        </div>
        <div>
            <button className="explore px-5 py-2 mt-4">Explore</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
