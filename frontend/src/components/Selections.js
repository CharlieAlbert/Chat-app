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
      <div className="container fluid">
        <div className="row m-2 d-flex align-items-center">
          <div className="col-lg-6">
            <div className="selection-1a large d-flex align-items-center">
              <div className="w-auto py-2 bg-dark-subtle">
                Bedroom Furniture
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="selection-1b small">
              <div className="desc w-auto py-2 bg-dark-subtle">
                Bedroom Furniture
              </div>
            </div>
          </div>
        </div>
        <div className="row m-2 d-flex align-items-center">
          <div className="col-lg-6">
            <div className="selection-2a small">
              <div className="desc w-auto py-2 bg-dark-subtle">
                Bedroom Furniture
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="selection-2b large">
              <div className="desc w-auto py-2 bg-dark-subtle">
                Bedroom Furniture
              </div>
            </div>
          </div>
        </div>
        <div className="row m-2 d-flex align-items-center">
          <div className="col-lg-6">
            <div className="selection-3a large">
              <div className="desc w-auto py-2 bg-dark-subtle">
                Bedroom Furniture
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="selection-3b small">
              <div className="desc w-auto py-2 bg-dark-subtle">
                Bedroom Furnitures
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Selections;
