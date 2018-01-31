import React from 'react';
//import './scroll.less';
import styled from 'styled-components';

const Track = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: pink;
`

const ScrollBar = styled.div`
    width: 6px;
    background-color: red;
`


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

    // componentDidMount() {
    //     this.setStyles();
    // }
    //
    // componentDidUpdate(prevProps) {
    //     if (prevProps != this.props) {
    //         window.setTimeout(() => this.setStyles(), 100);
    //     }
    // }

    // setStyles() {
    //     if (this.cont) {
    //         this.cont.style.height = this.props.height;
    //         this.cont.style.width = this.props.width;
    //     }
    //     if (this.track) {
    //         this.track.style.height = this.props.height;
    //     }
    //     if (this.scroll) {
    //         this.scroll.style.height = this.calculateScrollHeight();
    //     }
    // }

    // calculateScrollHeight() {
    //     const contRect = this.cont.getBoundingClientRect();
    //     const textRect = this.text.getBoundingClientRect();
    //
    //     return Math.round(parseInt(contRect.height) * parseInt(contRect.height) / parseInt(textRect.height));
    // }
    //
    // changeTextTop(nextTextTop) {
    //     const textStyle = this.text.currentStyle || window.getComputedStyle(this.text);
    //     const contStyle = this.cont.currentStyle || window.getComputedStyle(this.cont);
    //     const minTextScroll = -(parseInt(textStyle.height) - parseInt(contStyle.height));
    //
    //     if (nextTextTop > 0) {
    //         this.text.style.top = 0 + 'px';
    //     } else if (nextTextTop < minTextScroll) {
    //         this.text.style.top = minTextScroll + 'px';
    //     } else {
    //         this.text.style.top = nextTextTop + 'px';
    //     }
    //
    // }

    isScrollNeeded() {
        //console.dir(React.Children.only(this.props.children));
        //console.dir(this.ch);
        if (this.props.child) {
            const childrenStyle = this.props.child.currentStyle || window.getComputedStyle(this.props.child);
            return !(this.props.width == 0) && (!(this.props.height == 0)) && (parseFloat(childrenStyle.height) - parseFloat(this.props.height)) > 1;
        }
        //const app = document.getElementById("app_page");
        return false;
    //     const textStyle = this.text.currentStyle || window.getComputedStyle(this.text);
    //     const contStyle = this.cont.currentStyle || window.getComputedStyle(this.cont);
    //     return !(this.props.width == 0) && (!(this.props.height == 0)) && (parseFloat(textStyle.height) - parseFloat(contStyle.height)) > 1;
     }


    render() {
        const Children = () => React.Children.toArray(this.props.children) || null;
        const contentWithoutScroll = <Children/>;
        const contentWithScroll = [
                    <Children key="children"/>,
                    <Track key="track"
                        ref={node => this.track = node}>
                        <ScrollBar ref={node => this.scroll = node}/>
                     </Track>
        ];
        return this.isScrollNeeded() ? contentWithScroll : contentWithoutScroll;
    }
}

export default Scroll;
