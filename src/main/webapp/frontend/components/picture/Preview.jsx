import React from "react";
import styled, {keyframes} from 'styled-components';
import './preview.less';
import PreviewImageFrame from "./PreviewImageFrame";
import constants from './styles';

const BottomSection = styled.div`
   width: ${props => props.imageWidth};
`

const increase = (props) => keyframes`
   0% {
      height: 0;
      width: 0;
  }
  50% {
      height: 90%;
      width: ${props.imageWidth};
  }
`

const decrease = (props) => keyframes`
   50% {
      height: 90%;
      width: ${props.imageWidth};
  }
  100% {
      height: 0;
      width: 0;
  }
`

const Modal = styled.div`
&.increase {
  .magnify_modal_img_frame {
    animation: ${increase} ${props => props.animationTime}s ease;
  }
}

&.decrease {
  .magnify_modal_img_frame {
    animation: ${decrease} ${props => props.animationTime}s ease;
  }
}
`

class Preview extends React.Component {

  constructor(props) {
    super(props);

    this.animationTime = parseInt(constants['preview_animation_duration']);

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