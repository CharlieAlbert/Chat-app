import React from "react";
import "./Contact.css";

import email from "../Assets/email.png";
import location from "../Assets/location.png";
import phone from "../Assets/phone.png";
import WhatsApp from "../Assets/whatsapp.png";

const Contact = () => {
  return (
    <div className="pt-5 text-fluid">
      <div className="container text-center contact w-auto border-dark rounded">
        <div className="title">
          Dob<span className="Dobiri">iri</span> furnitures
        </div>
        <div className="row row-cols-2">
          <div className="col mb-3 d-flex align-items-center justify-content-center">
            <img src={location} className="img-fluid me-3" alt="location" /> rafiki, Kabarak
          </div>
          <div className="col mb-3 d-flex align-items-center justify-content-center">
            <img src={email} className="img-fluid me-3" alt="email" /> dobiri@gmail.com
          </div>
          <div className="col mb-3 d-flex align-items-center justify-content-center">
            <img src={phone} className="img-fluid me-3" alt="phone" /> 0758044863
          </div>
          <div className="col mb-3"></div>

          <div className="intouch w-100">
            <div className="title2 text-center mt-3">
                Get In Touch
            </div>
            <div className="whatsapp my-3">
                <img src={WhatsApp} className="img-fluid" alt="whatsapp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
