webpackHotUpdate(0,{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newAlbum_AddNewAlbum__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AlbumContainer__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scroll_Scroll__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scroll_ProgressScroll__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_dom__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__editAlbum_EditAlbum__ = __webpack_require__(182);










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
    box-shadow: 5px 5px 5px 5px black;
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
                    __WEBPACK_IMPORTED_MODULE_7_react_router_dom__["e" /* Switch */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["d" /* Route */], { exact: true, path: '/', component: __WEBPACK_IMPORTED_MODULE_4__AlbumContainer__["a" /* default */] }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["d" /* Route */], { path: '/edit/:id', component: __WEBPACK_IMPORTED_MODULE_8__editAlbum_EditAlbum__["a" /* default */] })
                )
            )
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (FotoSlider);

/***/ })

})
//# sourceMappingURL=0.a8ad24c0f5db298bbf78.hot-update.js.map