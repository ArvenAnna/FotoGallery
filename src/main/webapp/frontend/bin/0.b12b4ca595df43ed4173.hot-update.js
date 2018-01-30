webpackHotUpdate(0,{

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_FotoSlider_jsx__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_less__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__main_less__);




let AppContainer = class AppContainer extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_FotoSlider_jsx__["a" /* default */], null);
  }
};


/* harmony default export */ __webpack_exports__["a"] = (AppContainer);

/***/ }),

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Header__ = __webpack_require__(84);








const Page = __WEBPACK_IMPORTED_MODULE_2_styled_components__["b" /* default */].div`
    margin: 2rem 10rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const Content = __WEBPACK_IMPORTED_MODULE_2_styled_components__["b" /* default */].div`
  background-color: black;
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
      Page,
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Content,
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Header__["a" /* default */], null),
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
      )
    );
  }
};


/* harmony default export */ __webpack_exports__["a"] = (FotoSlider);

/***/ }),

/***/ 84:
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
          null,
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

})
//# sourceMappingURL=0.b12b4ca595df43ed4173.hot-update.js.map