import React, { Component } from "react";

export class Featuredcase extends Component {
  render() {
    // inside render 
    const { infoFeatured } = this.props;
    const Featured = infoFeatured.map((item, ind) => {
// terminal operator:: return (conditon)?(result of true condition ):(else) 

      return item.imgUrl.length > 0 ? (
        <div key={ind} className="item d-flex col-lg-6">
          <img src={item.imgUrl} />
          <div className="text">
            <h5>{item.h}</h5>
            <h3>{item.p}</h3>
          </div>
        </div>
      ) : (
        <h2>system upadate FEATURED CASE STUDY</h2>
      );
    });



    return (
      <div className="featured">
        <div className="container">
          <div className="row">
            <h4 data-aos="fade-up">OUR PORTFOLIOS OF CASES</h4>
            <h1 data-aos="fade-up">Featured Case Study</h1>

            <div className="cards" data-aos="fade-up" data-aos-duration="5000">
              {Featured}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Featuredcase;
