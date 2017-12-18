import React from 'react';
import './scroll.less';

class Scroll extends React.Component {

    constructor(props) {
        super(props);
        this.track = null;
        this.cont = null;
        this.text = null;
        this.scroll = null;

        this.speed = this.props.speed || 4;
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

        return parseInt(contRect.height) * parseInt(contRect.height) / parseInt(textRect.height);
    }

    onWheel(e) {
        this.scrollTo(() => e.deltaY > 0 ? 1 : (e.deltaY < 0 ? -1 : 0));
    }

    onDrag(e) {
        if(!this.state.dragStarted) {
            return;
        }

        this.scrollTo(() => this.getScrollDelta(e));
        this.setState({
            currentScrollY: e.clientY
        });
        //return false;
    }

    scrollTo(getScrollDirectionAsNumber) {
        const scrollStyle = this.scroll.currentStyle || window.getComputedStyle(this.scroll);
        const trackStyle = this.track.currentStyle || window.getComputedStyle(this.track);

        const scrollTop = parseInt(scrollStyle.top);
        const scrollGap = (parseInt(trackStyle.height) - parseInt(scrollStyle.height));

        if ((scrollTop <= 0 && getScrollDirectionAsNumber() < 0)
            || (scrollTop >= scrollGap && getScrollDirectionAsNumber() > 0)
            || getScrollDirectionAsNumber() == 0) {
            return;
        }

        const nextScrollTop = scrollTop + getScrollDirectionAsNumber() * this.speed;

        this.scroll.style.top = nextScrollTop + 'px';

        const textStyle = this.text.currentStyle || window.getComputedStyle(this.text);
        const contStyle = this.cont.currentStyle || window.getComputedStyle(this.cont);
        const nextTextTop = - nextScrollTop * (parseInt(trackStyle.height) / parseInt(scrollStyle.height));

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
        console.log(e.clientY);
        if (e.clientY > this.state.currentScrollY) {
            return 1;
        }
        if (e.clientY < this.state.currentScrollY) {
            return -1;
        }
        return 0;
    }

    onStart(e) {
        // console.log('start');
        // e.dataTransfer.setData('text/plain', 'anything');
        //e.dataTransfer.effectAllowed = 'none';
        //e.dataTransfer.setData( 'text/plain', '' );
        // var crt = e.target.cloneNode(true);
        // crt.style.backgroundColor = "red";
        // crt.style.cursor ="pointer";
        // crt.style.display = "none";
        // e.target.style.cursor = 'pointer';
        // /* or visibility: hidden, or any of the above */
        // document.body.appendChild(crt);
        // e.dataTransfer.setDragImage(crt, 0, 0);
    }



    render() {
        const FirstChild = () => {
            const childrenArray = React.Children.toArray(this.props.children);
            return childrenArray[0] || null;
        }
        return (
                <div className='text_container' ref={node => this.cont = node}>
                    <div className='text'
                         onWheel={(e) => this.onWheel(e)}
                         ref={node => this.text = node}>
                        <FirstChild/>
                    </div>

                    <div className='scroll_track'
                         onMouseLeave={() => this.setState({dragStarted: false})}
                         ref={node => this.track = node}>
                        <div className='scroll'
                             //onDragStart={(e) => this.onStart(e)}
                             ref={node => this.scroll = node}
                             onMouseDown={() => this.setState({dragStarted: true})}
                             //onMouseUp={() => this.setState({dragStarted: false})}
                             onMouseMove={(e) => this.onDrag(e)}
                             //draggable='true'
                            // onDrag={(e) => this.onDrag(e)}
                            />
                    </div>
                </div>
        );
    }
}

export default Scroll;
