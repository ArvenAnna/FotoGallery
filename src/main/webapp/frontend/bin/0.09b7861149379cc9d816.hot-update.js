webpackHotUpdate(0,{

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AddNewAlbum__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AlbumContainer__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scroll_Scroll__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scroll_ProgressScroll__ = __webpack_require__(65);








const Page = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
    margin: 2rem 10rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    
   font-size:2rem;
`;

const Content = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
    background-color: black;
`;

let FotoSlider = class FotoSlider extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(props) {
        super(props);
        this.state = {
            addAlbumModal: false
        };
    }

    createAlbum() {
        this.setState({
            addAlbumModal: true
        });
    }

    closeModal() {
        this.setState({
            addAlbumModal: false
        });
    }

    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Page,
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5__scroll_Scroll__["a" /* default */],
                { progress: true, height: '100px', width: '200px' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    null,
                    'sadasj sakd j d sdaskd a sda k sda sjhjhshhj tteqwtetwyet 7723 dqouweu we qweqweqyo eqye qwe yqywueyqw yeyqw eg g fdgcs fggggggggggs jdhhhhhhhhhhhh ddddddddddd ddddddddddd dddddddddddd ddddddd dsjfhdhfsd hdjfd fsdgf d fd fgsd fgsdgf sdjf sjdfg dsfdshfgdsgkfgyru fjdgs dsfl sdkfh lds flsa dfdklsfkjdhs f;sdk fsd f dasjdsjfuwewuiewiriewb'
                )
            )
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (FotoSlider);

/***/ }),

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
        { className: `scroll_track ${this.props.progress && 'progress_track'}`,
          ref: node => this.track = node },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'scroll',
          ref: node => this.scroll = node
        })
      )
    );
  }
};


/* harmony default export */ __webpack_exports__["a"] = (Scroll);

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


/* unused harmony default export */ var _unused_webpack_default_export = (ProgressScroll);

/***/ })

})
//# sourceMappingURL=0.09b7861149379cc9d816.hot-update.js.map