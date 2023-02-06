import React from "react";
import "./Selections.css";
import BedRoom from "../Assets/BedRoom.png";
import DiningOverlook from "../Assets/Dining-overlook.png";
import DiningOverlookLarge from "../Assets/Dining-overlookLarge.png";
import KitchenSeats from "../Assets/Kitchen-seats.png";
import StudyEnv from "../Assets/Studyenv-1.png";
import StudyEnvLarge from "../Assets/Studyenv-large.png";

function Selections() {
  return (
    <div className="Selection">
        <span className="fs-4">A variety of options for every room</span>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="large me-3 mb-3">
              <img src={BedRoom} alt="bedroom" className="large img-fluid" />
            </div>
            <div className="small ms-3 mb-3 mt-2">
              <img src={StudyEnv} alt="study" className="small img-fluid" />
            </div>
            <div className="large me-3 mb-3">
              <img src={DiningOverlookLarge} alt="dining" className="large img-fluid" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="small mb-3">
              <img src={DiningOverlook} alt="dining" className="small img-fluid" />
            </div>
            <div className="large me-3 mb-3">
              <img src={KitchenSeats} alt="kitchen" className="large img-fluid" />
            </div>
            <div className="small ms-3 mb-3">
              <img src={StudyEnvLarge} alt="study" className="small img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Selections;
