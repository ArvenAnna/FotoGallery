webpackHotUpdate(0,{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newAlbum_AddNewAlbum__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AlbumContainer__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scroll_Scroll__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scroll_ProgressScroll__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_dom__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__editAlbum_EditAlbum__ = __webpack_require__(179);










const Page = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
    margin: 2rem 10rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    
   font-size:2rem;
`;

const Content = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
    background-color: black;
    width: 100%;
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
            this.state.addAlbumModal && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__newAlbum_AddNewAlbum__["a" /* default */], { closeModal: () => this.closeModal() }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                Content,
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Header__["a" /* default */], { createAlbum: () => this.createAlbum() }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7_react_router_dom__["d" /* Switch */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["c" /* Route */], { exact: true, path: '/', component: __WEBPACK_IMPORTED_MODULE_4__AlbumContainer__["a" /* default */] }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["c" /* Route */], { path: '/edit/:id', component: __WEBPACK_IMPORTED_MODULE_8__editAlbum_EditAlbum__["a" /* default */] })
                )
            )
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (FotoSlider);

/***/ })

})
//# sourceMappingURL=0.0b29419a44ea3eeb72ad.hot-update.js.map