import React, { Component } from "react";
// import { IoIosStarOutline } from "react-icons/io";


export class Swiper extends Component {
  render() {
    // const { dataCustomer } = this.props;
    // const swiperData = dataCustomer.map((item) => {
    //   return (
    //     <div>
    //       <div
    //         id="carouselExampleControls"
    //         className="carousel slide"
    //         data-ride="carousel"
    //       >
    //         <div className="carousel-inner">
    //           <div className="carousel-item active">
    //             <p>{item.name} </p>
    //             <h3>{item.opinion}</h3>
    //           </div>
    //         </div>

    //       </div>
    //     </div>
    //   );
    // });

    return (
      <section className="swiper">
              <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
      
        >
          <div className="container">
            <div className="row">
              <h4 data-aos="fade-left">OUR customer say </h4>
              <h1 className="swiperheader" data-aos="fade-left">our customer say </h1>

              <div className="carousel-inner" data-aos="fade-left"
           >
                <div className="carousel-item active">
                  <p className="swiperp">john smith</p>
                  <h1 className="headerh1">
                    tha sgsgsggf gsfgasrfs earsd nsxfs abtar5a daresr lkjdhgy
                    like is yor gfgvbv hfgfyu vccvsvg 
                  </h1>
            
                </div>

                <div className="carousel-item">
                  <p className="swiperp">mark smith</p>
                  <h1 className="headerh1">
                    sudy and fun ,try and fun ,work hard and fun never scared
                    about any thing and never forget fun in every moment 
                  </h1>
                </div>

                <div className="carousel-item">
                  <p className="swiperp">seno smith</p>
                  <h1 className="headerh1">
                    as ou want , all dreams will be truth in one day just
                    believe in Allah 
                  </h1>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Swiper;
