import React, { Component } from "react";
// image
import Background from "../images/Background.jpg";

class Backgrondone extends Component {
  state = {
    spanchange: "Committed to success",
    pChange: "",
  };

  changeInfo = () => {
    this.setState({
      spanchange: "our goals",
      pChange:"apply what you  want with three months to edit your web ,perfect web with a beautiful design and  action in section",
    });
  };

  render() {
    return (
      <div>
        <section className="Backgrondone">
          <div className="imageBack">
            <img src={Background} />
          </div>
          <div className="conatiner">
            <div className="row">
              <div className="text">
                <div
                  className="textBackground mt-4"
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="4000"
                >
                  <h4 className=" mt-4 pt-4">
                    {/* <span>----</span> */}
                    <span data-aos="fade-up">{this.state.spanchange}</span>
                  </h4>
                  <h1>
                    <span className="first ml-3">we</span> help to grow your
                    <span className="two">business</span>
                  </h1>
                  <p data-aos="fade-up">{this.state.pChange} </p>
                  <button onClick={this.changeInfo}>more Info </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Backgrondone;
