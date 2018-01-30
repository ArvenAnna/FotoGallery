webpackHotUpdate(0,{

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

/***/ })

})
//# sourceMappingURL=0.abdc50c2e079cd109b2d.hot-update.js.map