webpackHotUpdate(0,{

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_slick__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_slick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_slick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icons_jsx__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Icons__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__picture_Picture__ = __webpack_require__(73);







const Content = __WEBPACK_IMPORTED_MODULE_2_styled_components__["b" /* default */].div`
  background-color: black;
`;

const Header = __WEBPACK_IMPORTED_MODULE_2_styled_components__["b" /* default */].div`
  height: 5rem;
  display: flex;
  flex-direction: row;
  color: white;
`;

const Container = __WEBPACK_IMPORTED_MODULE_2_styled_components__["b" /* default */].div`
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
      Content,
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Header,
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          'new album'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          'Search: ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', null)
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Container,
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__picture_Picture__["a" /* default */], { src: '/foto/download.jpg', animation: 'fade', images: ['/foto/images.jpg', '/foto/download.jpg'] }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__picture_Picture__["a" /* default */], { src: '/foto/images.jpg', animation: 'fade', images: ['/foto/images.jpg', '/foto/download.jpg'] }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__picture_Picture__["a" /* default */], { src: '/foto/5b405dc14959cd421a7579261b5ee261--awesome-pictures-colorful-pictures.jpg', animation: 'fade', images: ['/foto/images.jpg', '/foto/download.jpg'] }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__picture_Picture__["a" /* default */], { src: '/foto/images.jpg', animation: 'fade', images: ['/foto/images.jpg', '/foto/download.jpg'] }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__picture_Picture__["a" /* default */], { src: '/foto/download.jpg', animation: 'fade', images: ['/foto/images.jpg', '/foto/download.jpg'] }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__picture_Picture__["a" /* default */], { src: '/foto/images.jpg', animation: 'fade', images: ['/foto/images.jpg', '/foto/download.jpg'] }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__picture_Picture__["a" /* default */], { src: '/foto/download.jpg', animation: 'fade', images: ['/foto/images.jpg', '/foto/download.jpg'] })
      )
    );
  }
};


/* harmony default export */ __webpack_exports__["a"] = (FotoSlider);

/***/ })

})
//# sourceMappingURL=0.ef21abafc64d5c7ebe8f.hot-update.js.map