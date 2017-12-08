import React from "react";
import styled from 'styled-components';
import {CrossIcon, LeftArrowIcon, RightArrowIcon} from "../Icons";
import './preview.less';
import PreviewImageFrame from "./PreviewImageFrame";

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

    this.animationTime = 2;

    this.state = {
      imageWidth: 0,
      animate: ''
    };
  }

  setImageWidth(width) {
    this.setState({
      imageWidth: width,
    });
  }

  clearAnimate() {
    this.setState({
      animate: ''
    });
  }

  close() {
    if (!(this.state.animate === 'decrease')) {
      this.setState({
        animate: 'decrease'
      });
      window.setTimeout(this.props.close, this.animationTime * 1000);
    }
  }

  componentDidMount() {
    this.setState({
      animate: 'increase'
    });
  }

  render() {
    const {animate, imageWidth} = this.state;
    const {images, src} = this.props;

    return (
        <Modal className={`magnify_modal ${animate}`}
               imageWidth={imageWidth}
               animationTime={this.animationTime}>
          <div className='magnify_modal_img_frame'>
            <PreviewImageFrame src={src}
                               images={images}
                               setImageWidth={(width) => {this.setImageWidth(width)}}
                               close={() => this.close()}
                               clearAnimate={() => this.clearAnimate()}
            />
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