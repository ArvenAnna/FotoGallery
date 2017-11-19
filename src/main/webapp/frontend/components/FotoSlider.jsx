import React from 'react';
import  Slider from 'react-slick';
import styled from 'styled-components';

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

  };
  return (
    <Slider {...settings}>
      <ImageWrapper>
        <Image src='/frontend/foto/IMG_2119.JPG'/>
      </ImageWrapper>
      <ImageWrapper>
        <Image src='/frontend/foto/IMG_2357.JPG'/>
      </ImageWrapper>
      <ImageWrapper>
        <Image src='/frontend/foto/images.jpg'></Image>
      </ImageWrapper>
    </Slider>
  );
}
}

export default FotoSlider;