import React, { Component } from 'react';
import './style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class RelatedSliders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderFor: null,
      sliderNav: null,
    };
  }

  componentDidMount() {
    this.setState({
      sliderFor: this.sliderForRef,
      sliderNav: this.SliderNavRef
    });
  }

  getImages = () => {
    return (
      this.props.imgList.map(img => (
        <div className="slider__slide" key={img.id} id={img.id} >
          <img className="slider__img" src={img.src} alt={img.title} />
        </div>
      ))
    )
  }

  render() {
    return (
      <div className="mb-5">
        {this.props.title && <h2>{this.props.title}</h2>}
        <div className="slider slider-for">
          <img src="/img/icon/close.svg" alt="" className="slider-for__delete"/>
          <Slider
            asNavFor={this.state.sliderNav}
            ref={slider => (this.sliderForRef = slider)}
            fade={true}
          >
            {this.getImages()}
          </Slider>
        </div>
        <div className="slider-nav">
          <Slider
            asNavFor={this.state.sliderFor}
            ref={slider => (this.SliderNavRef = slider)}
            slidesToShow={5}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            {this.getImages()}
        </Slider>
        </div>
      </div>
    );
  }
}

export default RelatedSliders;