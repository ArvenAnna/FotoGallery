webpackHotUpdate(0,[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (process.env.NODE_ENV !== 'production') {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (process.env.NODE_ENV === 'production') {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(33);
} else {
  module.exports = __webpack_require__(36);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 11 */
false,
/* 12 */,
/* 13 */,
/* 14 */
false,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "body {\n  background-color: #232326;\n}\n", ""]);

// exports


/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
false,
/* 26 */
false,
/* 27 */
false,
/* 28 */,
/* 29 */
false,
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_themes__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_themes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__constants_themes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_AppContainer_jsx__ = __webpack_require__(50);








__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  __WEBPACK_IMPORTED_MODULE_2_styled_components__["a" /* ThemeProvider */],
  { theme: __WEBPACK_IMPORTED_MODULE_3__constants_themes___default.a },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__containers_AppContainer_jsx__["a" /* default */], null)
), document.getElementById('mount'));

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picture_Picture__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header__ = __webpack_require__(84);





const Page = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
    margin: 2rem 10rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const Content = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
  background-color: black;
`;

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

const AddAlbum = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
`;

const AlbumModal = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
  width: 40%;
`;

let FotoSlider = class FotoSlider extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.state = {
      addAlbumModal: false
    };
  }

  createAlbum() {}

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Page,
      null,
      this.state.addAlbumModal && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        AddAlbum,
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          AlbumModal,
          null,
          'Will be modal'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Content,
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Header__["a" /* default */], { createAlbum: () => this.createAlbum() }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Container,
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__picture_Picture__["a" /* default */], { src: '/foto/download.jpg', animation: 'fade', images: ['/foto/images.jpg', '/foto/download.jpg'] }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__picture_Picture__["a" /* default */], { src: '/foto/images.jpg', animation: 'fade', images: ['/foto/images.jpg', '/foto/download.jpg'] }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__picture_Picture__["a" /* default */], { src: '/foto/5b405dc14959cd421a7579261b5ee261--awesome-pictures-colorful-pictures.jpg', animation: 'fade', images: ['/foto/images.jpg', '/foto/download.jpg'] }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__picture_Picture__["a" /* default */], { src: '/foto/images.jpg', animation: 'fade', images: ['/foto/images.jpg', '/foto/download.jpg'] }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__picture_Picture__["a" /* default */], { src: '/foto/download.jpg', animation: 'fade', images: ['/foto/images.jpg', '/foto/download.jpg'] }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__picture_Picture__["a" /* default */], { src: '/foto/images.jpg', animation: 'fade', images: ['/foto/images.jpg', '/foto/download.jpg'] }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__picture_Picture__["a" /* default */], { src: '/foto/download.jpg', animation: 'fade', images: ['/foto/images.jpg', '/foto/download.jpg'] })
        )
      )
    );
  }
};


/* harmony default export */ __webpack_exports__["a"] = (FotoSlider);

/***/ }),
/* 52 */
false,
/* 53 */
false,
/* 54 */
false,
/* 55 */
false,
/* 56 */
false,
/* 57 */
false,
/* 58 */
false,
/* 59 */
false,
/* 60 */
false,
/* 61 */
false,
/* 62 */
false,
/* 63 */
false,
/* 64 */
false,
/* 65 */
false,
/* 66 */
false,
/* 67 */
false,
/* 68 */
false,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */
false,
/* 79 */
false,
/* 80 */
false,
/* 81 */
false,
/* 82 */
false,
/* 83 */
false,
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(7);



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

/***/ })
])
//# sourceMappingURL=0.efbd703c4e58de777fdc.hot-update.js.map