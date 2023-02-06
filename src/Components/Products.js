import React from "react";
import quality from "../Assets/quality.png";
import shipping from "../Assets/shipped.png";
import value from "../Assets/value.png";

function Products() {
  return (
    <div className="products">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="icon">
              <img src={quality} className="img-fluid" alt="quality" />
            </div>
            <div className="desc"></div>
          </div>
          <div className="col-lg-4">
            <div className="icon">
              <img src={value} className="img-fluid" alt="value" />
            </div>
            <div className="desc"></div>
          </div>
          <div className="col-lg-4">
            <div className="icon">
              <img src={shipping} className="img-fluid" alt="shipping" />
            </div>
            <div className="desc"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
