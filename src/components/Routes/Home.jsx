import React from "react";
import Profile from "../Images/profile.png";
import Utrgv from "../Images/utrgv.png";
import Rgv from "../Images/rgv.png";

const Home = () => {
  return (
    <div className="container-fluid bg-light">
      <div className="row justify-content-center">
        <div className="col-auto">
          <img
            src={Profile}
            className="rounded m-5 border-0 shadow-lg"
            alt="Profile Img"
          />
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-auto">
          <p className="display-4">Mateo Martinez</p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-auto">
          <p className="lead">"Measure twice... cut once."</p>
        </div>
      </div>

      <div className="row justify-content-center  text-center">
        <div className="col-auto">
          <div className="container">
            <p className="lead">
              <img
                src={Rgv}
                alt="956 Logo"
                style={{ width: "7%", height: "7%" }}
              ></img>{" "}
              Developer From The Rio Grande Valley, South Texas
            </p>
            <p className="lead">
              <img
                src={Utrgv}
                alt="UTRGV Logo"
                style={{ width: "7%", height: "7%" }}
              />{" "}
              Computer Science Student at the University of Texas Rio Grande
              Valley
            </p>
          </div>
        </div>
      </div>

      <div className="row justify-content-center text-center">
        <div className="col-auto">
          <div className="container">
            <p className="lead">
              GitHub - Node - Bun - Ethereum - Linux - Bash
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
