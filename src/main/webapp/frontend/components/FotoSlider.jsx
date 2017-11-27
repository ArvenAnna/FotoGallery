import React from 'react';
import  Slider from 'react-slick';
import styled from 'styled-components';
import {LeftArrowIcon, RightArrowIcon} from "./Icons.jsx";
import {MagnifierIcon} from "./Icons";
import Picture from "./picture/Picture";

class FotoSlider extends React.Component {

  render () {

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: false,
    centerMode: true,
    fade: true,
    nextArrow: <RightArrowIcon/>,
    prevArrow: <LeftArrowIcon/>
  };
  return (
    <div>
    {/*<Slider {...settings}>*/}
      {/*<ImageWrapper>*/}
        {/*<img src='/foto/5b405dc14959cd421a7579261b5ee261--awesome-pictures-colorful-pictures.jpg'/>*/}
        {/*<div className='overlay'></div>*/}
      {/*</ImageWrapper>*/}
      {/*<ImageWrapper>*/}
        {/*<img src='/foto/download.jpg'/>*/}
        {/*<div className='overlay'></div>*/}
      {/*</ImageWrapper>*/}
      {/*<ImageWrapper>*/}
        {/*<img src='/foto/images.jpg'></img>*/}
        {/*<div className='overlay'></div>*/}
      {/*</ImageWrapper>*/}
    {/*</Slider>*/}

      <Picture src='/foto/download.jpg' animation='fade'/>

    </div>


  );
}
}

export default FotoSlider;