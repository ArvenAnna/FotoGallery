import React from 'react';
import './scroll.less';

// ---- Required props
// width
// height

// ---- Other props
// progress
// className

class Scroll extends React.Component {

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
        this.setStyles();
    }

    componentDidUpdate(prevProps) {
        if (prevProps != this.props) {
            window.setTimeout(() => this.setStyles(), 100);
        }
    }

    setStyles() {
        if (this.cont) {
            this.cont.style.height = this.props.height;
            this.cont.style.width = this.props.width;
        }
        if (this.track) {
            this.track.style.height = this.props.height;
        }
        if (this.scroll) {
            this.scroll.style.height = this.calculateScrollHeight();
        }
    }

    calculateScrollHeight() {
        const contRect = this.cont.getBoundingClientRect();
        const textRect = this.text.getBoundingClientRect();

        return Math.round(parseInt(contRect.height) * parseInt(contRect.height) / parseInt(textRect.height));
    }

    onWheel(e) {
        const scrollDeltaFunc = () => e.deltaY > 0 ? 1 : (e.deltaY < 0 ? -1 : 0);
        this.props.progress
            ? this.progressScrollTo(scrollDeltaFunc)
            : this.scrollTo(scrollDeltaFunc);
    }

    onDrag(e) {
        e.preventDefault();
        if (!this.state.dragStarted) {
            return;
        }
        this.props.progress
            ? this.progressScrollTo(() => this.getScrollDelta(e))
            : this.scrollTo(() => this.getScrollDelta(e));

        this.setState({
            currentScrollY: e.clientY
        });
    }

    scrollTo(getScrollDirectionAsNumber) {
        const scrollStyle = this.scroll.currentStyle || window.getComputedStyle(this.scroll);
        const trackStyle = this.track.currentStyle || window.getComputedStyle(this.track);

        const scrollTop = parseInt(scrollStyle.top);
        const scrollGap = (parseInt(trackStyle.height) - parseInt(scrollStyle.height));

        if ((scrollTop <= 0 && getScrollDirectionAsNumber() < 0)
            || (scrollTop > scrollGap - 1 && getScrollDirectionAsNumber() > 0)
            || getScrollDirectionAsNumber() == 0) {
            return;
        }

        const nextScrollTop = scrollTop + getScrollDirectionAsNumber() * this.speed;

        this.scroll.style.top = nextScrollTop + 'px';

        const nextTextTop = Math.round(-nextScrollTop * (parseInt(trackStyle.height) / parseInt(scrollStyle.height)));

        this.changeTextTop(nextTextTop);
    }

    progressScrollTo(getScrollDirectionAsNumber) {
        const scrollStyle = this.scroll.currentStyle || window.getComputedStyle(this.scroll);
        const trackStyle = this.track.currentStyle || window.getComputedStyle(this.track);

        const minScrollHeight = this.calculateScrollHeight();
        const scrollHeight = parseInt(scrollStyle.height);
        const trackHeight = parseInt(trackStyle.height);

        if ((scrollHeight <= minScrollHeight && getScrollDirectionAsNumber() < 0)
            || (scrollHeight >= trackHeight && getScrollDirectionAsNumber() > 0)
            || getScrollDirectionAsNumber() == 0) {
            return;
        }

        const nextScrollHeight = scrollHeight + getScrollDirectionAsNumber() * this.speed;

        this.scroll.style.height = nextScrollHeight + 'px';

        const nextTextTop = Math.round(-(nextScrollHeight - minScrollHeight) * (parseInt(trackStyle.height) / minScrollHeight));

        this.changeTextTop(nextTextTop);
    }

    changeTextTop(nextTextTop) {
        const textStyle = this.text.currentStyle || window.getComputedStyle(this.text);
        const contStyle = this.cont.currentStyle || window.getComputedStyle(this.cont);
        const minTextScroll = -(parseInt(textStyle.height) - parseInt(contStyle.height));

        if (nextTextTop > 0) {
            this.text.style.top = 0 + 'px';
        } else if (nextTextTop < minTextScroll) {
            this.text.style.top = minTextScroll + 'px';
        } else {
            this.text.style.top = nextTextTop + 'px';
        }

    }

    isScrollNeeded() {
        if (!this.text || !this.cont) {
            return false;
        }
        const textStyle = this.text.currentStyle || window.getComputedStyle(this.text);
        const contStyle = this.cont.currentStyle || window.getComputedStyle(this.cont);
        return !(this.props.width == 0) && (!(this.props.height == 0)) && (parseFloat(textStyle.height) - parseFloat(contStyle.height)) > 1;
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
        const Children = () => React.Children.toArray(this.props.children) || null;
        if (!this.isScrollNeeded()) {
            return <Children/>
        }
        const contentWithoutScroll = <div className={`text_container ${this.props.className || ''}`}
                                          ref={node => this.cont = node}>
            <div className='text'
                 ref={node => this.text = node}>
                <Children/>
            </div>
        </div>;
        const contentWithScroll = (
            <div className={`text_container ${this.props.className || ''}`}
                 ref={node => this.cont = node}
                 onWheel={(e) => this.onWheel(e)}
                 onMouseLeave={(e) => this.onMouseLeave(e)}
                 onMouseMove={(e) => this.onDrag(e)}
                 onMouseDown={(e) => this.onMouseDown(e)}
                 onMouseUp={() => this.setState({dragStarted: false})}>
                <div className='text'
                     ref={node => this.text = node}>
                    <Children/>
                </div>

                <div className={`scroll_track ${this.props.progress ? 'progress_track' : ''}`}
                     ref={node => this.track = node}>
                    <div className='scroll'
                         ref={node => this.scroll = node}
                    />
                </div>
            </div>
        );
        return this.isScrollNeeded() ? contentWithScroll : contentWithoutScroll;
    }
}

export default Scroll;
