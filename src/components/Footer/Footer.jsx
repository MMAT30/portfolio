import React from 'react'
import Node from "../Images/node.png";
import Ipfs from "../Images/ipfs.png";
import Rct from "../Images/react.png";
import Ens from "../Images/ens.png";
import Ether from "../Images/ether.png";
import Meta from "../Images/meta.png";

const Footer = () => {
    return (
        <footer>
        <div className="container-fluid bg-secondary shadow-lg sticky-bottom">
        <div className="row justify-content-center text-center">
          <div className="container">
            <p className="lead">
              {" "}
              Made With Node {" "}
              <a href="https://nodejs.org/en/">
                <img
                  src={Node}
                  alt="Node Logo"
                  style={{ width: "7%", height: "auto" }}
                />
              </a>{" "}
              React{" "}
              <a href={"https://reactjs.org"}>
                <img
                  src={Rct}
                  alt="React Logo"
                  style={{ width: "4%", height: "auto" }}
                />
              </a>{" "}
              IPFS{" "}
              <a href={"https://ipfs.tech"}>
                <img
                  src={Ipfs}
                  alt="IPFS Logo"
                  style={{ width: "4%", height: "auto" }}
                />
              </a>{" "}
              ENS{" "}
              <a href="https://ens.domains">
                <img
                  src={Ens}
                  alt="ENS Logo"
                  style={{ width: "4%", height: "auto" }}
                />
              </a>{" "}
              Ethereum{" "}
              <a href="https://ethereum.org/en/">
                <img
                  src={Ether}
                  alt="Ethereum Logo"
                  style={{ width: "4%", height: "auto" }}
                />
              </a>{" "}
              MetaMask{" "}
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
      </footer>
    )
}

export default Footer