import React from "react";
import "./Products.css";
import quality from "../Assets/quality.png";
import shipping from "../Assets/shipped.png";
import value from "../Assets/value.png";

function Products() {
  return (
    <section className="products">
      <div className="product">
        <div className="quality">
          <img src={quality} alt="quality" />
        </div>
        <div className="desc">We take pride in providing quality</div>
        <div className="content">
          We offer high-quality furniture at a fair price that represents good
          value for your money.
        </div>
      </div>

      <div className="product">
        <div className="shipping">
          <img src={shipping} alt="shipping" />
        </div>
        <div className="desc">
          Exceptional after sale that keeps you satisfied
        </div>
        <div className="content">
          We offer free deliver within Nakuru and charge a reasonable transport
          fee without Nakuru.
        </div>
      </div>

      <div className="product">
        <div className="value">
          <img src={value} alt="value" />
        </div>
        <div className="desc">value by elegance</div>
        <div className="content">
          Dobiri furnitures creates value by creating elegant beautiful spaces.
        </div>
      </div>
    </section>
  );
}

export default Products;
