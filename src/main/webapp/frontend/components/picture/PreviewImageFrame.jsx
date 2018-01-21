import React from "react";
import {CrossIcon, EditIcon, LeftArrowIcon, RightArrowIcon} from "../Icons";
import "./preview.less";
import {Link} from "react-router-dom";
import {isVideo} from "../../utils/index";
import constants from '../../constants/styles';

class PreviewImageFrame extends React.Component {

  constructor(props) {
    super(props);

    this.img = null;

    const current = props.images.find(img => img.src === props.main.src);
    const currentIndex = props.images.indexOf(current);

    this.state = {
      imageWidth: 0,
      main: props.main,
      left: currentIndex > 0,
      right: currentIndex < (props.images.length - 1)
    };
  }

  componentDidMount() {
    this.changeImageWidth();
    window.addEventListener('resize', () => this.changeImageWidth());
    const animationTime = parseInt(constants['preview_animation_duration']);
    window.setTimeout(() => this.changeImageWidth(), animationTime*1000 + 50)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.changeImageWidth());
  }

  getImageContainerWidth() {
    const img = this.img;
    if (!img) return 0;
    const imageRect = img.getBoundingClientRect();
    return imageRect.width;
  }

  changeImageWidth() {
    this.props.setImageWidth(this.getImageContainerWidth());
  }

  onCrossClick() {
    this.props.close();
  }

  onArrowClick(arrow) {
    const {images} = this.props;
    //const current = images.find(img => img === this.state.main);
    const currentIndex = images.indexOf(this.state.main);
    let main;

    if (arrow === 'left' && currentIndex > 0) {
      main = images[currentIndex - 1];
      this.setState({
        main,
        left: (currentIndex - 1) > 0,
        right: (currentIndex - 1) < (images.length - 1)
      });
    }

    if (arrow === 'right' && currentIndex < (images.length - 1)) {
        main = images[currentIndex + 1];
        this.setState({
        main,
        left: (currentIndex + 1) > 0,
        right: (currentIndex + 1) < (images.length - 1)
      })
    }

    this.props.clearAnimate(main);
  }

  render() {
    const {main, left, right} = this.state;
    const {images, editRoute} = this.props;

    return (<div className='magnify_modal_img_frame_container'>
        <CrossIcon className='cross' onClick={() => this.onCrossClick()}/>
            {editRoute && <Link to={this.props.editRoute}><EditIcon className='edit'/></Link>}
        {left && <div className='left_arrow'>
          <LeftArrowIcon onClick={() => this.onArrowClick('left')}/>
        </div>}
        {right && <div className='right_arrow'>
          <RightArrowIcon onClick={() => this.onArrowClick('right')}/>
        </div>}
        <div className='counter_container'>
          <div className='counter'>{`${(images.indexOf(main) + 1)} of ${images.length}`}</div>
        </div>
        {isVideo(main.src)
            ? <video controls="controls"
                     ref={node => this.img = node}
                     onLoad={() => this.changeImageWidth()}
                     className="image_preview"
                     >
              <source src={main.src}/>
            </video>
            :<img onLoad={() => this.changeImageWidth()}
                  src={main.src} className='image_preview'
                  ref={node => this.img = node}/>}
      </div>
    );
  }
}

export default PreviewImageFrame;