import React from "react";
import styled, {keyframes} from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
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
      background-color: transparent;
  }
  50% {
      height: 90%;
      width: ${props.imageWidth};
      background-color: transparent;  
  }
  100% {
      background-color: ${constants.preview_frame_color};
  }
`

const decrease = (props) => keyframes`
   0% {
      background-color: ${constants.preview_frame_color};
   }
   50% {
      height: 90%;
      width: ${props.imageWidth};
      background-color: transparent;
  }
  100% {
      height: 0;
      width: 0;
      background-color: transparent;
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


    renderThumb({ style, ...props }) {
        const thumbStyle = {
            backgroundColor: 'white',
            height: '70%'
        };
        return (
            <div
                style={{ ...style, ...thumbStyle }}
                {...props}/>
        );
    }

  render() {
    const {animate, imageWidth} = this.state;
    const {images, src} = this.props;
    let bottomWidthWithoutPaddings = imageWidth;


        const bottom = document.getElementById('bottom');
        if(bottom) {
            const style = bottom.currentStyle || window.getComputedStyle(bottom);
            const padding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
            bottomWidthWithoutPaddings = imageWidth - padding;

        }


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

            <BottomSection id='bottom' className='magnify_modal_img_frame_bottom' imageWidth={imageWidth}>
              <Scrollbars
                  autoHide={false}
                  autoHeight={true}
                  style={{ width: bottomWidthWithoutPaddings, height: '100%' }}
                  renderThumbVertical={this.renderThumb}
                  renderTrackHorizontal={props => <div {...props} style={{display: 'none'}}/>}
                  renderThumbHorizontal={props => <div {...props} style={{display: 'none'}}/>}>
              <div className='magnify_modal_img_frame_bottom_caption'>Caption</div>
              <div className='magnify_modal_img_frame_bottom_text'>Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason.</div>
              </Scrollbars>
            </BottomSection>
          </div>
        </Modal>
    );
  }
}

export default Preview;