import React from "react";
import Profile from "../Images/profile.png";
import Utrgv from "../Images/utrgv.png";
import Rgv from "../Images/rgv.png";

import Bun from "../Images/bun.png";
import Ipfs from "../Images/ipfs.png";
import Rct from "../Images/react.png"
import Ens from "../Images/ens.png"
import Ether from "../Images/ether.png"
import Meta from "../Images/meta.png"

const Home = () => {
  return (
    <React.Fragment>
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

      <div className="container-fluid bg-secondary shadow-lg">
        <div className="row justify-content-center text-center">
          <div className="container m-3">
            <p className="lead">
              {" "}
              Made With Bun{" "}
              <a href="https://bun.sh">
                <img
                  src={Bun}
                  alt="Bun Logo"
                  style={{ width: "4%", height: "auto" }}
                />
              </a>{" "}
              React {" "}
              <a href="https://reactjs.org">
                <img
                  src={Rct}
                  alt="React Logo"
                  style={{ width: "4%", height: "auto" }}
                />
              </a>{" "}
              IPFS{" "}
              <a href="https://ipfs.tech">
                <img
                  src={Ipfs}
                  alt="IPFS Logo"
                  style={{ width: "4%", height: "auto" }}
                />
              </a>
              {" "}
              ENS{" "}
              <a href="https://ens.domains">
                <img
                  src={Ens}
                  alt="ENS Logo"
                  style={{ width: "4%", height: "auto" }}
                />
              </a>
              {" "}
              Ethereum {" "}
              <a href="https://ethereum.org/en/">
                <img
                  src={Ether}
                  alt="Ethereum Logo"
                  style={{ width: "4%", height: "auto" }}
                />
              </a>
              {" "}
              MetaMask {" "}
              <a href="https://metamask.io">
                <img
                  src={Meta}
                  alt="MetaMask Logo"
                  style={{ width: "4%", height: "auto" }}
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
