import React, { Component } from "react";
import image from "../images/girlwith computer.jpg";
import imageBoy from "../images/boy.webp";
import boy2 from "../images/boy2.webp";

export class Team extends Component {
  state = {
    info: [
      { imgUrl: image, name: "judy Abot", job: "front end" },
      { imgUrl: imageBoy, name: "john smith", job: "full stuck" },
      { imgUrl: image, name: "sedy ", job: "graphic designer" },
    ],
  };

  firstTeam = () => {
    this.setState({
      info: [
        { imgUrl: image, name: "judy Abot", job: "front end" },
        { imgUrl: imageBoy, name: "john smith", job: "full stuck" },
        { imgUrl: boy2, name: "sedy ", job: "graphic designer" },
      ],
    });
  };
  secondTeam = () => {
    this.setState({
      info: [
        { imgUrl: imageBoy, name: "eren", job: "back end" },
        { imgUrl: image, name: "oscar", job: "saler managment" },
        { imgUrl: boy2, name: "naruto ", job: "full stack" },
      ],
    });
  };
  thirdTeam = () => {
    this.setState({
      info: [
        { imgUrl: image, name: "yuna", job: "full stuck" },
        { imgUrl: imageBoy, name: "eren", job: "designer " },
        { imgUrl: image, name: "hanji ", job: "data entire" },
      ],
    });
  };

  // light=()=>{
  // document.body.style.backgroundColor="#eee"

  // }

  render() {
    //     const animals=['cat','dog','elephantt']
    // console.log(animals.slice(0,2));

    return (
      <section className="Team">
        <div className="container">
          <div className="row">
            <h4 data-aos="fade-up">OUR PROFESSIONAL MEMBERS</h4>
            <h1 data-aos="fade-up">Our Team Mambers</h1>

            <div
              className="card-group"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="card">
                <img src={this.state.info[0].imgUrl} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{this.state.info[0].name}</h5>
                  <p className="card-text">{this.state.info[0].job}</p>
                  {/* <p className ="card-text"><small className ="text-muted">Last updated 3 mins ago</small></p> */}
                </div>
              </div>

              <div className="card  ml-4">
                <img src={this.state.info[1].imgUrl} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{this.state.info[1].name}</h5>
                  <p className="card-text">{this.state.info[1].job}</p>
                  {/* <p className ="card-text"><small className ="text-muted">Last updated 3 mins ago</small></p> */}
                </div>
              </div>

              <div className="card ml-4">
                <img src={this.state.info[2].imgUrl} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{this.state.info[2].name}</h5>
                  <p className="card-text">{this.state.info[2].job}</p>
                  {/* <p className ="card-text"><small className ="text-muted">Last updated 3 mins ago</small></p> */}
                </div>
              </div>
            </div>
          </div>

          <div className="btnss">
            <div className="btn" onClick={this.firstTeam}>
              1
            </div>
            <div className="btn" onClick={this.secondTeam}>
              2
            </div>
            <div className="btn" onClick={this.thirdTeam}>
              3
            </div>
            {/* <div className="btn" onClick={this.light}>
              4
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
