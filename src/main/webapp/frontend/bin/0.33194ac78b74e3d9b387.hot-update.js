webpackHotUpdate(0,{

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AddNewAlbum__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AlbumContainer__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scroll_Scroll__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scroll_Scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__scroll_Scroll__);







const Page = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
    margin: 2rem 10rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
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
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__scroll_Scroll__["default"], null);
    }
};


/* harmony default export */ __webpack_exports__["a"] = (FotoSlider);

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: Unexpected token (71:33)\n\n\u001b[0m \u001b[90m 69 | \u001b[39m    \u001b[36mconst\u001b[39m textStyle \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtext\u001b[33m.\u001b[39mcurrentStyle \u001b[33m||\u001b[39m window\u001b[33m.\u001b[39mgetComputedStyle(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtext)\u001b[33m;\u001b[39m\n \u001b[90m 70 | \u001b[39m    textStyle\u001b[33m.\u001b[39mtop\u001b[33m;\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 71 | \u001b[39m    \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtext\u001b[33m.\u001b[39mstyle\u001b[33m.\u001b[39mtransform \u001b[33m=\u001b[39m ()\n \u001b[90m    | \u001b[39m                                 \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 72 | \u001b[39m  }\n \u001b[90m 73 | \u001b[39m\n \u001b[90m 74 | \u001b[39m  render() {\u001b[0m\n");

/***/ })

})
//# sourceMappingURL=0.33194ac78b74e3d9b387.hot-update.js.map