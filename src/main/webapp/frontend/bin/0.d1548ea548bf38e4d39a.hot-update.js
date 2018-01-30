webpackHotUpdate(0,{

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ":root {\n  --scroll-track-width: 20px;\n  --scroll-width: 20px;\n  --scroll-color: rgba(1, 1, 1, 0.7);\n  --track-color: rgba(1, 1, 1, 0.3);\n}\n.text_container {\n  overflow: hidden;\n  position: relative;\n  padding-right: var(--scroll-track-width);\n}\n.text_container .text {\n  position: relative;\n  overflow: hidden;\n}\n.text_container .scroll_track {\n  position: absolute;\n  width: var(--scroll-track-width);\n  top: 0;\n  right: 0;\n  cursor: default;\n  border-radius: 3px;\n  background-color: var(--track-color);\n}\n.text_container .scroll_track .scroll {\n  --delta-width: calc(var(--scroll-track-width) - var(--scroll-width));\n  position: relative;\n  width: var(--scroll-width);\n  left: calc(var(--delta-width) / 2);\n  background-color: var(--scroll-color);\n  cursor: default;\n  border-radius: 3px;\n}\n.text_container .progress_track .scroll {\n  border-radius: 0px;\n  background: linear-gradient(0deg, var(--track-color), var(--scroll-color));\n}\n", ""]);

// exports


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scroll_less__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scroll_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scroll_less__);



let ProgressScroll = class ProgressScroll extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

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
    };
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
    this.scrollTo(() => e.deltaY > 0 ? 1 : e.deltaY < 0 ? -1 : 0);
  }

  onDrag(e) {
    e.preventDefault();
    if (!this.state.dragStarted) {
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

    if (scrollHeight <= minScrollHeight && getScrollDirectionAsNumber() < 0 || scrollHeight >= trackStyle.height && getScrollDirectionAsNumber() > 0 || getScrollDirectionAsNumber() == 0) {
      return;
    }

    const nextScrollHeight = scrollHeight + getScrollDirectionAsNumber() * this.speed;

    this.scroll.style.height = nextScrollHeight + 'px';

    const textStyle = this.text.currentStyle || window.getComputedStyle(this.text);
    const contStyle = this.cont.currentStyle || window.getComputedStyle(this.cont);
    const nextTextTop = Math.round(-(nextScrollHeight - minScrollHeight) * (parseInt(trackStyle.height) / minScrollHeight));

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
    this.setState({ dragStarted: true });
  }

  onMouseLeave(e) {
    e.preventDefault();
    this.setState({ dragStarted: false });
  }

  render() {
    const FirstChild = () => {
      const childrenArray = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.toArray(this.props.children);
      return childrenArray[0] || null;
    };
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'text_container',
        ref: node => this.cont = node,
        onWheel: e => this.onWheel(e),
        onMouseLeave: e => this.onMouseLeave(e),
        onMouseMove: e => this.onDrag(e),
        onMouseDown: e => this.onMouseDown(e),
        onMouseUp: () => this.setState({ dragStarted: false })
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'text',
          ref: node => this.text = node },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FirstChild, null)
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'scroll_track progress_track',
          ref: node => this.track = node },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'scroll',
          ref: node => this.scroll = node
        })
      )
    );
  }
};


/* harmony default export */ __webpack_exports__["a"] = (ProgressScroll);

/***/ })

})
//# sourceMappingURL=0.d1548ea548bf38e4d39a.hot-update.js.map