import React, { Component } from "react";
import "./web.css";

// aos animation 
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();


export class Nav extends Component {
  render() {

    return (

<div className="nav">
        <div
          className="container"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light ">
              <a
                className="navbar-brand"
                href="#"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="5000"
              >
                code/<span>Mu</span>{" "}
                <span style={{ color: "rgb(133, 22, 41)" }}>.</span>{" "}
              </a>
              
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>  

              <div
                className="collapse navbar-collapse m-auto"
                id="navbarNav"
                data-aos="zoom-in"
              >
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      about
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
