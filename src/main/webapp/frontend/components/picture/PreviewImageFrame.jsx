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
      right: currentIndex < (props.images.length - 1),
      images: props.images,
      index: currentIndex
    };
  }

  componentDidMount() {
    this.height = this.getContainerHeight();
    window.addEventListener('resize', () => this.recalculateWidth());
  }

  getContainerHeight() {
    if (this.cont) {
        const containerStyle = this.cont.currentStyle || window.getComputedStyle(this.cont);
        return parseFloat(containerStyle.height);
    }
    return 0;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.recalculateWidth());
  }

  recalculateWidth() {
    const naturalWidth = this.state.images[this.state.index].naturalWidth;
    const naturalHeight = this.state.images[this.state.index].naturalHeight;

    if (naturalWidth && naturalHeight &&  this.cont) {
        this.height = this.getContainerHeight();
        let width = naturalWidth * this.height/ naturalHeight;
        if((width + parseFloat(constants.preview_border_width) * 2) > window.innerWidth) {
            width  = window.innerWidth - parseFloat(constants.preview_border_width) * 2;
            const height = naturalHeight * width / naturalWidth;
            this.cont.style.height = height;
        }
        this.cont.style.width = width;
        this.props.setImageWidth(width);
    }

  }

  onLoad(e) {
    let width = e.target.naturalWidth * this.height / e.target.naturalHeight;
    let newImages = [...this.state.images];
    newImages[this.state.index].naturalWidth = e.target.naturalWidth;
    newImages[this.state.index].naturalHeight = e.target.naturalHeight;
      if((width + parseFloat(constants.preview_border_width) * 2) > window.innerWidth) {
          width  = window.innerWidth - parseFloat(constants.preview_border_width) * 2;
          const height = e.target.naturalHeight * width / e.target.naturalWidth;
          this.cont.style.height = height;

      }
    this.cont.style.width = width;
    this.setState({images: newImages});
    this.props.setImageWidth(width);
  }

  onCrossClick() {
    this.props.close();
  }

  onArrowClick(arrow) {
    const {images} = this.props;
    const currentIndex = images.indexOf(this.state.main);
    let main;

    if (arrow === 'left' && currentIndex > 0) {
      main = images[currentIndex - 1];
      this.setState({
        main,
        left: (currentIndex - 1) > 0,
        right: (currentIndex - 1) < (images.length - 1),
        index: currentIndex - 1
      }, this.recalculateWidth);
    }

    if (arrow === 'right' && currentIndex < (images.length - 1)) {
        main = images[currentIndex + 1];
        this.setState({
        main,
        left: (currentIndex + 1) > 0,
        right: (currentIndex + 1) < (images.length - 1),
        index: currentIndex + 1
      }, this.recalculateWidth)
    }

    this.props.clearAnimate(main);
  }

  render() {
    const {main, left, right} = this.state;
    const {images, editRoute} = this.props;

    return (<div className='magnify_modal_img_frame_container' ref={cont => this.cont = cont}>
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
                     onLoad={(e) => this.onLoad(e)}
                     className="image_preview"
                     >
              <source src={main.src}/>
            </video>
            :<img onLoad={(e) => this.onLoad(e)}
                  src={main.src} className='image_preview'
                  ref={node => this.img = node}/>}
      </div>
    );
  }
}

export default PreviewImageFrame;