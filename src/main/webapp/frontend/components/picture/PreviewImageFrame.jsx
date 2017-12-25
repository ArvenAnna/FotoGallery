import React from "react";
import {CrossIcon, EditIcon, LeftArrowIcon, RightArrowIcon} from "../Icons";
import "./preview.less";
import {Link} from "react-router-dom";

class PreviewImageFrame extends React.Component {

  constructor(props) {
    super(props);

    this.img = null;

    const current = props.images.find(img => img === props.src);
    const currentIndex = props.images.indexOf(current);

    this.state = {
      imageWidth: 0,
      main: props.main,
      left: currentIndex > 0,
      right: currentIndex < (props.images.length - 1)
    };
  }

  componentDidMount() {
    this.props.setImageWidth(this.getImageContainerWidth());
    window.addEventListener('resize', () => this.changeImageWidth());
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.main != this.state.main) {
      // in order to make sure width will be recalculated
      window.setTimeout(() => this.changeImageWidth(), 100);
    }
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

  edit() {
      //const current = this.props.images.find(img => img === this.state.src);
      const currentIndex = this.props.images.indexOf(this.state.main);
      return this.props.editRoute + '/' + currentIndex;
  }

  render() {
    const {main, left, right} = this.state;
    const {images, editRoute} = this.props;

    return (<div className='magnify_modal_img_frame_container'>
        <CrossIcon className='cross' onClick={() => this.onCrossClick()}/>
            {editRoute && <Link to={this.edit()}><EditIcon className='edit'/></Link>}
        {left && <div className='left_arrow'>
          <LeftArrowIcon onClick={() => this.onArrowClick('left')}/>
        </div>}
        {right && <div className='right_arrow'>
          <RightArrowIcon onClick={() => this.onArrowClick('right')}/>
        </div>}
        <div className='counter_container'>
          <div className='counter'>{`${(images.indexOf(main) + 1)} of ${images.length}`}</div>
        </div>
        <img src={main.src} className='image_preview' ref={node => this.img = node}/>
      </div>
    );
  }
}

export default PreviewImageFrame;