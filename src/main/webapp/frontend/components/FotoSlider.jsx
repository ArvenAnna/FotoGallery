import React from 'react';
import  Slider from 'react-slick';
import styled from 'styled-components';
import {LeftArrowIcon, RightArrowIcon} from "./Icons.jsx";

const ImageWrapper = styled.div`
`

const Image = styled.img`
    margin: 0 auto;
    height: 560px;
    box-shadow: 10px 10px 5px 3px rgba(0, 0, 0, 0.5);
    border-radius:5px;
`

class FotoSlider extends React.Component {

  render () {

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: false,
    fade: true,
    nextArrow: <RightArrowIcon/>,
    prevArrow: <LeftArrowIcon/>

  };
  return (
    <Slider {...settings}>
      <ImageWrapper>
        <Image src='/foto/5b405dc14959cd421a7579261b5ee261--awesome-pictures-colorful-pictures.jpg'/>
      </ImageWrapper>
      <ImageWrapper>
        <Image src='/foto/download.jpg'/>
      </ImageWrapper>
      <ImageWrapper>
        <Image src='/foto/images.jpg'></Image>
      </ImageWrapper>
    </Slider>
  );
}
}

export default FotoSlider;