import React from 'react';
import './scroll.less';

class ProgressScroll extends React.Component {

  constructor(props) {
    super(props);
    this.track = null;
    this.cont = null;
    this.text = null;
    this.scroll = null;

    this.speed = this.props.speed || 2;
    this.state = {
      currentScrollY: 0,
      dragStarted: false
    }
  }

  componentDidMount() {
    this.cont.style.height = this.props.height;
    this.cont.style.width = this.props.width;
    this.track.style.height = this.props.height;

    this.scroll.style.height = this.calculateScrollHeight();
  }

  calculateScrollHeight() {
    const contRect = this.cont.getBoundingClientRect();
    const textRect = this.text.getBoundingClientRect();

    return Math.round(parseInt(contRect.height) * parseInt(contRect.height) / parseInt(textRect.height));
  }

  onWheel(e) {
    this.scrollTo(() => e.deltaY > 0 ? 1 : (e.deltaY < 0 ? -1 : 0));
  }

  onDrag(e) {
    e.preventDefault();
    if(!this.state.dragStarted) {
      return;
    }

    this.scrollTo(() => this.getScrollDelta(e));
    this.setState({
      currentScrollY: e.clientY
    });
  }

  scrollTo(getScrollDirectionAsNumber) {
    const scrollStyle = this.scroll.currentStyle || window.getComputedStyle(this.scroll);
    const trackStyle = this.track.currentStyle || window.getComputedStyle(this.track);

    const minScrollHeight = this.calculateScrollHeight();
    const scrollHeight = parseInt(scrollStyle.height);

    if ((scrollHeight <= minScrollHeight && getScrollDirectionAsNumber() < 0)
      || (scrollHeight >= trackStyle.height && getScrollDirectionAsNumber() > 0)
      || getScrollDirectionAsNumber() == 0) {
      return;
    }

    const nextScrollHeight = scrollHeight + getScrollDirectionAsNumber() * this.speed;

    this.scroll.style.height = nextScrollHeight + 'px';

    const textStyle = this.text.currentStyle || window.getComputedStyle(this.text);
    const contStyle = this.cont.currentStyle || window.getComputedStyle(this.cont);
    const nextTextTop = Math.round(- (nextScrollHeight - minScrollHeight) * (parseInt(trackStyle.height) / minScrollHeight));

    const minTextScroll = -(parseInt(textStyle.height) - parseInt(contStyle.height));

    if (nextTextTop > 0) {
      this.text.style.top = 0 + 'px';
    } else if (nextTextTop < minTextScroll) {
      this.text.style.top = minTextScroll + 'px';
    } else {
      this.text.style.top = nextTextTop + 'px';
    }
  }

  getScrollDelta(e) {
    if (e.clientY > this.state.currentScrollY) {
      return 1;
    }
    if (e.clientY < this.state.currentScrollY) {
      return -1;
    }
    return 0;
  }

  onStart(e) {
    e.preventDefault();
    return false;
  }

  onMouseDown(e) {
    e.preventDefault();
    this.setState({dragStarted: true});
  }


  onMouseLeave(e) {
    e.preventDefault();
    this.setState({dragStarted: false});
  }

  render() {
    const FirstChild = () => {
      const childrenArray = React.Children.toArray(this.props.children);
      return childrenArray[0] || null;
    }
    return (
      <div className='text_container'
           ref={node => this.cont = node}
           onWheel={(e) => this.onWheel(e)}
           onMouseLeave={(e) => this.onMouseLeave(e)}
           onMouseMove={(e) => this.onDrag(e)}
           onMouseDown={(e) => this.onMouseDown(e)}
           onMouseUp={() => this.setState({dragStarted: false})}
      >
        <div className='text'
             ref={node => this.text = node}>
          <FirstChild/>
        </div>

        <div className='scroll_track progress_track'
             ref={node => this.track = node}>
          <div className='scroll'
               ref={node => this.scroll = node}
          />
        </div>
      </div>
    );
  }
}

export default ProgressScroll;

