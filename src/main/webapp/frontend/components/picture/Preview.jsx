import React from "react";
import styled from 'styled-components';
import {CrossIcon, LeftArrowIcon, RightArrowIcon} from "../Icons";
import './preview.less';

const BottomSection = styled.div`
   width: ${props => props.imageWidth};
`

const Modal = styled.div`

@keyframes increase {
  0% {
      height: 0;
      width: 0;
  }
  50% {
      height: 90%;
      width: ${props => props.imageWidth};
  }
}

&.increase {
  
   animation: fade_in_overlay ${props => props.animationTime}s ease;

  .magnify_modal_img_frame {
    animation: increase ${props => props.animationTime}s ease;
  }
  .cross {
     animation: fade_in_cross ${props => props.animationTime}s ease;
  }
  .left_arrow, .right_arrow {
     animation: fade_in_arrow_container ${props => props.animationTime}s ease;
     
     svg {
          animation: fade_in_arrow ${props => props.animationTime}s ease;
     }
  }
  .counter {
     animation: fade_in_counter ${props => props.animationTime}s ease;
  }
  .magnify_modal_img_frame_bottom_caption {
    animation: fade_in_text_caption ${props => props.animationTime}s ease;
  }
  .magnify_modal_img_frame_bottom_text {
      animation: fade_in_text ${props => props.animationTime}s ease;
  }
   
}

@keyframes decrease {
  50% {
      height: 90%;
      width: ${props => props.imageWidth};
  }
  100% {
      height: 0;
      width: 0;
  }
}


&.decrease {

  animation: fade_out_overlay ${props => props.animationTime}s ease;

  .magnify_modal_img_frame {
    animation: decrease ${props => props.animationTime}s ease;
  }
  .cross {
     animation: fade_out_cross ${props => props.animationTime}s ease;
  }
  .left_arrow, .right_arrow {
     animation: fade_out_arrow_container ${props => props.animationTime}s ease;
     svg {
          animation: fade_out_arrow ${props => props.animationTime}s ease;
     }
  }
  .counter {
     animation: fade_out_counter ${props => props.animationTime}s ease;
  }
  .magnify_modal_img_frame_bottom_caption {
      animation: fade_out_text_caption ${props => props.animationTime}s ease;
  }
  .magnify_modal_img_frame_bottom_text {
    animation: fade_out_text_desc ${props => props.animationTime}s ease;
  }
}
`



class Preview extends React.Component {

  constructor(props) {
    super(props);

    this.animationTime = 4;

    const current = props.images.find(img => img === props.src);
    const currentIndex = props.images.indexOf(current);

    this.state = {
      imageWidth: 0,
      animate: '',
      src: props.src,
      left: currentIndex > 0,
      right: currentIndex < (props.images.length - 1)
    };
  }

  componentDidMount() {
    this.setState({
      imageWidth: this.getImageContainerWidth(),
      animate: 'increase'
    });
    window.addEventListener('resize', () => this.resize());
  }

  componentWillUnmount() {
      window.removeEventListener('resize', () => this.resize());
  }

  getImageContainerWidth() {
    const img = this.refs.img;
    if (!img) return 0;
    const imageRect = img.getClientRects()[0];
    const style = img.currentStyle || window.getComputedStyle(img);
    //const margin = parseFloat(style.borderLeft) + parseFloat(style.borderRight);
    return imageRect.width;
  }

  componentWillReceiveProps(props) {
    const dd = props;
    console.log(props);
  }

  componentDidUpdate(pvevProps, prevState) {
    if(prevState.src != this.state.src) {
      this.setState({
          imageWidth: this.getImageContainerWidth(),
          animate: ''
      });
    }
  }

  onCrossClick() {
    if (!(this.state.animate === 'decrease')) {
      this.setState({
        imageWidth: this.getImageContainerWidth(),
        animate: 'decrease'
      });
      window.setTimeout(this.props.close, this.animationTime * 1000);
    }
  }

  onArrowClick(arrow) {
    const {images} = this.props;
    const current = images.find(img => img === this.state.src);
    const currentIndex = images.indexOf(current);

    if (current && arrow === 'left' && currentIndex > 0) {
      this.setState({
        src: images[currentIndex - 1],
        left: (currentIndex - 1) > 0,
        right: (currentIndex - 1) < (images.length - 1)
      });
    }

    if (current && arrow === 'right' && currentIndex < (images.length - 1)) {
      this.setState({
        src: images[currentIndex + 1],
        left: (currentIndex + 1) > 0,
        right: (currentIndex + 1) < (images.length - 1)
      })
    }

  }

  resize(e) {
      this.setState({
          imageWidth: this.getImageContainerWidth()
      });
  }

  render() {
    const {src, left, right, animate, imageWidth} = this.state;
    const {images} = this.props;

    return (
        <Modal className={`magnify_modal ${animate}`}  imageWidth={imageWidth} animationTime={this.animationTime}>
          <div className='magnify_modal_img_frame'>
            <div className='magnify_modal_img_frame_container'>
              <CrossIcon className='cross' onClick={() => this.onCrossClick()}/>
              {left && <div className='left_arrow'>
                <LeftArrowIcon onClick={() => this.onArrowClick('left')}/>
              </div>}
              {right && <div className='right_arrow'>
                <RightArrowIcon onClick={() => this.onArrowClick('right')}/>
              </div>}
              <div className='counter_container'>
                <div className='counter'>{`${(images.indexOf(src) + 1)} of ${images.length}`}</div>
              </div>
              <img src={src} className='image_preview' ref='img'/>
            </div>
            <BottomSection className='magnify_modal_img_frame_bottom' imageWidth={imageWidth}>
              <div className='magnify_modal_img_frame_bottom_caption'>Caption</div>
              <div className='magnify_modal_img_frame_bottom_text'>Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason.</div>
            </BottomSection>
          </div>
        </Modal>
    );
  }
}

export default Preview;