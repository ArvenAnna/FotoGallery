import React from "react";
import styled, {keyframes} from 'styled-components';
//import { Scrollbars } from 'react-custom-scrollbars';
import './preview.less';
import PreviewImageFrame from "./PreviewImageFrame";
import constants from './styles';
import Scroll from "../scroll/Scroll";

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
        window.setTimeout(() => this.clearAnimation(), this.animationTime * 1000);
    }


    clearAnimation() {
        this.setState({
            animate: ''
        });
    }


    renderThumb({style, ...props}) {
        const thumbStyle = {
            backgroundColor: 'white',
            height: '70%'
        };
        return (
            <div
                style={{...style, ...thumbStyle}}
                {...props}/>
        );
    }

    calculateTextWidth(imgWidth) {
        const bottomSection = document.getElementsByClassName('magnify_modal_img_frame_bottom')[0];
        if(bottomSection){
            const style = bottomSection.currentStyle || window.getComputedStyle(bottomSection);
            const paddings = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
            return parseFloat(imgWidth) - paddings;
        }
        return 0;
    }

    calculateTextHeight() {
        const bottomSection = document.getElementsByClassName('magnify_modal_img_frame_bottom')[0];

        if(bottomSection && this.caption){
            const bottomSectionStyle = bottomSection.currentStyle || window.getComputedStyle(bottomSection);
            const paddings = parseFloat(bottomSectionStyle.paddingTop) + parseFloat(bottomSectionStyle.paddingBottom);

            const captionStyle = this.caption.currentStyle || window.getComputedStyle(this.caption);
            return parseFloat(bottomSectionStyle.height) - paddings - parseFloat(captionStyle.height);
        }
        return 0;
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
                                       editRoute={this.props.editRoute}
                                       setImageWidth={(width) => {
                                           this.setImageWidth(width)
                                       }}
                                       close={() => this.close()}
                                       clearAnimate={() => this.clearAnimate()}
                    />

                    <BottomSection className='magnify_modal_img_frame_bottom'
                                   imageWidth={imageWidth}>

                        <div className='magnify_modal_img_frame_bottom_caption' ref={r => this.caption = r }>Caption</div>

                        <Scroll height={this.calculateTextHeight()}
                                width={this.calculateTextWidth(imageWidth)}
                                className='magnify_modal_img_frame_bottom_text'
                                progress={true}>
                            <div>Some text which was provided for some reason. Some text which was provided for some
                                reason. Some text which was provided for some reason. Some text which was provided for
                                some reason. Some text which was provided for some reason. Some text which was provided
                                for some reason. Some text which was provided for some reason. Some text which was
                                provided for some reason. Some text which was provided for some reason. Some text which
                                was provided for some reason.
                            </div>
                        </Scroll>

                    </BottomSection>

                </div>
            </Modal>
        );
    }
}

export default Preview;