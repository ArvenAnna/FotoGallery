webpackHotUpdate(0,{

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scroll_less__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scroll_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scroll_less__);



let Scroll = class Scroll extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

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

  componentWillReceiveProps() {}

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
    this.props.progress ? this.progressScrollTo(() => this.getScrollDelta(e)) : this.scrollTo(() => this.getScrollDelta(e));

    this.setState({
      currentScrollY: e.clientY
    });
  }

  scrollTo(getScrollDirectionAsNumber) {
    const scrollStyle = this.scroll.currentStyle || window.getComputedStyle(this.scroll);
    const trackStyle = this.track.currentStyle || window.getComputedStyle(this.track);

    const scrollTop = parseInt(scrollStyle.top);
    const scrollGap = parseInt(trackStyle.height) - parseInt(scrollStyle.height);

    if (scrollTop <= 0 && getScrollDirectionAsNumber() < 0 || scrollTop > scrollGap - 1 && getScrollDirectionAsNumber() > 0 || getScrollDirectionAsNumber() == 0) {
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

    if (scrollHeight <= minScrollHeight && getScrollDirectionAsNumber() < 0 || scrollHeight >= trackStyle.height && getScrollDirectionAsNumber() > 0 || getScrollDirectionAsNumber() == 0) {
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
        { className: `scroll_track ${this.props.progress ? 'progress_track' : ''}`,
          ref: node => this.track = node },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'scroll',
          ref: node => this.scroll = node
        })
      )
    );
  }
};


/* harmony default export */ __webpack_exports__["a"] = (Scroll);

/***/ })

})
//# sourceMappingURL=0.e06e3e28e135de633807.hot-update.js.map