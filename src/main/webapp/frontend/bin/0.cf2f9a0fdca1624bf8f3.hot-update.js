webpackHotUpdate(0,{

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_slick__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_slick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_slick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icons_jsx__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Icons__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__picture_Picture__ = __webpack_require__(72);







const Sr = __WEBPACK_IMPORTED_MODULE_2_styled_components__["b" /* default */].div`
@keyframes sr {
  from {
    background-color: transparent;
  }
  to {
    background-color: rgba(0, 0, 0, 0.7);
  }
}

animation-name: sr;
animation-duration: 1s;
animation-timing-function: ease;
animation-direction: reverse;

`;

let FotoSlider = class FotoSlider extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {

    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: false,
      centerMode: true,
      fade: true,
      nextArrow: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons_jsx__["d" /* RightArrowIcon */], null),
      prevArrow: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons_jsx__["b" /* LeftArrowIcon */], null)
    };
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Sr,
        null,
        'SRTTTTT'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__picture_Picture__["a" /* default */], { src: '/foto/download.jpg', animation: 'fade', images: ['/foto/images.jpg', '/foto/download.jpg'] })
    );
  }
};


/* harmony default export */ __webpack_exports__["a"] = (FotoSlider);

/***/ })

})
//# sourceMappingURL=0.cf2f9a0fdca1624bf8f3.hot-update.js.map