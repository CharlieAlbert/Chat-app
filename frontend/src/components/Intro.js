import React from "react";
import BonusBadge from "../Assets/BonusBadge.png";

function Intro() {
  return (
    <div className="intro">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <img src={BonusBadge} alt="bonus" />
          </div>
          <div className="col-lg-8">
            <div>
              <p>
                Furnish your home with elegance and comfort. Our collection of
                furniture offers a wide range of styles to fit any taste. From
                sofas to tables, we have everything you need to transform your
                space.
              </p>
            </div>
            <button>Explore</button>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
