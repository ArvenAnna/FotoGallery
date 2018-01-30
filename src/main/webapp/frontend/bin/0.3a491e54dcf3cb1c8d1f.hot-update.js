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
            this.state.addAlbumModal && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__AddNewAlbum__["a" /* default */], { closeModal: () => this.closeModal() }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                Content,
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Header__["a" /* default */], { createAlbum: () => this.createAlbum() }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__AlbumContainer__["a" /* default */], null)
            )
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (FotoSlider);

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(2);



const HeaderContainer = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
  display: flex;
  flex-direction: row;
  color: white;
  font-size: 1.2rem;
`;

const HeaderMenu = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;

`;

const MenuItem = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
  padding: 1rem;
  cursor: pointer;
`;

const Search = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
  padding: 1rem;
`;

let Header = class Header extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      HeaderContainer,
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        HeaderMenu,
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          MenuItem,
          { onClick: this.props.createAlbum },
          'new album'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Search,
        null,
        'Search: ',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', null)
      )
    );
  }
};


/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Icons__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FileInput__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addNewAlbum_less__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addNewAlbum_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__addNewAlbum_less__);






const Label = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].span`
  width: 100%;
  margin-bottom: 0.25rem;
`;

let AddNewAlbum = class AddNewAlbum extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'add_album' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'add_album_modal' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons__["a" /* CrossIcon */], { onClick: this.props.closeModal }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    Label,
                    null,
                    'Name'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    Label,
                    null,
                    'Title image:'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__FileInput__["a" /* default */], null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    Label,
                    null,
                    'Description'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'button',
                    null,
                    'ok'
                )
            )
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (AddNewAlbum);

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picture_Picture__ = __webpack_require__(56);




// overrides picture styles
const Container = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem;

  &>div {
     padding: 1rem;
        
     .image {
        height: 15rem;
        width: 20rem;
        object-fit: cover;
      }

      .image_wrapper .overlay .overlay_bottom_text {
         font-size: 1rem;
      }
  }
`;

let AlbumContainer = class AlbumContainer extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

         render() {
                  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                           Container,
                           null,
                           __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__picture_Picture__["a" /* default */], { src: '/foto/download.jpg', animation: 'fade',
                                    images: ['/foto/images.jpg', '/foto/download.jpg'] }),
                           __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__picture_Picture__["a" /* default */], { src: '/foto/images.jpg', animation: 'fade',
                                    images: ['/foto/images.jpg', '/foto/download.jpg'] }),
                           __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__picture_Picture__["a" /* default */], { src: '/foto/5b405dc14959cd421a7579261b5ee261--awesome-pictures-colorful-pictures.jpg',
                                    animation: 'fade', images: ['/foto/images.jpg', '/foto/download.jpg'] }),
                           __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__picture_Picture__["a" /* default */], { src: '/foto/images.jpg', animation: 'fade',
                                    images: ['/foto/images.jpg', '/foto/download.jpg'] }),
                           __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__picture_Picture__["a" /* default */], { src: '/foto/download.jpg', animation: 'fade',
                                    images: ['/foto/images.jpg', '/foto/download.jpg'] }),
                           __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__picture_Picture__["a" /* default */], { src: '/foto/images.jpg', animation: 'fade',
                                    images: ['/foto/images.jpg', '/foto/download.jpg'] }),
                           __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__picture_Picture__["a" /* default */], { src: '/foto/download.jpg', animation: 'fade',
                                    images: ['/foto/images.jpg', '/foto/download.jpg'] })
                  );
         }
};


/* harmony default export */ __webpack_exports__["a"] = (AlbumContainer);

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


/* unused harmony default export */ var _unused_webpack_default_export = (Scroll);

/***/ })

})
//# sourceMappingURL=0.3a491e54dcf3cb1c8d1f.hot-update.js.map