import React from 'react';
import  Slider from 'react-slick';
import styled from 'styled-components';

const ImageWrapper = styled.div`
`

const Image = styled.img`
    margin: 0 auto;
    height: 600px;
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
        <Image src='/frontend/foto/5b405dc14959cd421a7579261b5ee261--awesome-pictures-colorful-pictures.jpg'/>
      </ImageWrapper>
      <ImageWrapper>
        <Image src='/frontend/foto/download.jpg'/>
      </ImageWrapper>
      <ImageWrapper>
        <Image src='/frontend/foto/images.jpg'></Image>
      </ImageWrapper>
    </Slider>
  );
}
}

export default FotoSlider;