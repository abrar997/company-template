import React, { Component } from 'react'
import './App.css';
import Nav from './components/Nav';
import Backgrondone from './components/Backgrondone'
import Services from './components/Services';
import Aboutus from './components/Aboutus';
import Team from './components/Team';
import Swiper from './components/Swiper';
import Featuredcase from './components/Featuredcase';
import Footer from './components/Footer';
import images from '../src/images/featured.png'



export class App extends Component {
state={
Featuredcase:[
  { imgUrl:images,h:"Strategy planing",p:"within the consruction industry as their overdraft"},
  { imgUrl:images,h:"Strategy planing",p:"within the consruction industry as their overdraft"},
  { imgUrl:images,h:"Strategy planing",p:"within the consruction industry as their overdraft"},
  { imgUrl:images, h:"Strategy planing", p:"within the consruction industry as their overdraft" }
]
}


  render() {
    return (
      <div>
        <Nav />
        <Backgrondone  />
        <Services />
        <Aboutus title="OUR TOP SERVICES" />
        <Team />
        <Featuredcase infoFeatured={this.state.Featuredcase} />
        <Swiper  />

        <Footer />
      </div>
    )

  }


}

export default App

