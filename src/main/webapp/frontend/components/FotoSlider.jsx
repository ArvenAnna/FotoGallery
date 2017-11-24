import React from 'react';
import  Slider from 'react-slick';
import styled from 'styled-components';
import {LeftArrowIcon, RightArrowIcon} from "./Icons.jsx";
import {MagnifierIcon} from "./Icons";

const ImageWrapper = styled.div`
  position: relative;
  
  
  @keyframes overlay_top {
    from {background-color: rgba(0,0,0, 0);}
    to {background-color: rgba(0,0,0, 0.5);}
  }
  
  &:hover > div {
      visibility:visible;
      
      animation-name: overlay_top;
      animation-duration: 4s;
      animation-timing-function: ease;
    }
  
  img {
      margin: 0 auto;
      height: 560px;
      box-shadow: 10px 10px 5px 3px rgba(0, 0, 0, 0.5);
      border-radius:5px;
  }
  
  .overlay {
    position: absolute;
    background-color: rgba(0,0,0, 0.5);
    width: 100%;
    height: 100%;
    z-index: 99;
    top: 0;
    visibility:hidden;
    border-radius: 5px;
    
    .overlay_top {
       height: 80%;
       display: flex;
       flex-direction: row;
       align-items: center;
       justify-content: center;
    }
    
    .overlay_bottom {
      background-color: rgba(0,0,0, 0.7);
      height: 20%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      
      &_text {
        color: rgba(255,255,255, 0.7);
        font-weight: 400;
        font-size: 24;
        font-style: italic;
        margin: 0 20px;

      }
    }
    
  }
  
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

      <ImageWrapper>
        <img src='/foto/download.jpg'/>
        <div className='overlay'>
          <div className='overlay_top'>
            <MagnifierIcon/>
          </div>
          <div className='overlay_bottom'>
            <span className='overlay_bottom_text'>some beautiful picture</span>
          </div>
        </div>
      </ImageWrapper>
    </div>


  );
}
}

export default FotoSlider;