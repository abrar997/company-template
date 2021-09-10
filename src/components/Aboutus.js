import React, { Component } from "react";
import Background from "../images/imggirl.png";


export class Aboutus extends Component {
  state = {
    aboutCompany:
      "Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess cillum dolore egru lofrre dsu quality mollit anim laborumuis au dolor in voluptate velit cillu.",
    headerComapny: "About",
  };

  history = () => {
    this.setState({
      aboutCompany:
        "Our home lives have been revolutionised by the technology created with these languages, but what about our working lives?",
      headerComapny: "history",
    });
  };

  render() {
    return (
      <section className="AboutUs" data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="4000"  >
        <div className="row" >
          <div className="left col-lg-5"></div>
          <div className="right col-lg-7"> </div>
        </div>
            <div className="container">
                <div className="row" >
            <div className="image col-lg-6">
              <img src={Background} />
            </div>
            <div className="text col-lg-6">
              <p>{this.props.title}</p>
              <h1>
                {this.state.headerComapny} <span>code/Mu. </span> company
              </h1>
              <h3>{this.state.aboutCompany}</h3>
              <div className="btn" onClick={this.history}>
                History of our company
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Aboutus;
