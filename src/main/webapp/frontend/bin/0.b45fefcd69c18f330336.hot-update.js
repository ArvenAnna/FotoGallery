webpackHotUpdate(0,{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newAlbum_AddNewAlbum__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AlbumContainer__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editAlbum_EditAlbum__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_custom_scrollbars__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_custom_scrollbars___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_custom_scrollbars__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_s_alert__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_s_alert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_s_alert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_s_alert_dist_s_alert_default_css__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_s_alert_dist_s_alert_default_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_s_alert_dist_s_alert_default_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_s_alert_dist_s_alert_css_effects_scale_css__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_s_alert_dist_s_alert_css_effects_scale_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_s_alert_dist_s_alert_css_effects_scale_css__);











let FotoSlider = class FotoSlider extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(props) {
        super(props);
        this.state = {
            addAlbumModal: false,
            width: 0,
            height: 0
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

    componentDidMount() {
        setTimeout(() => this.scrollbars.forceUpdate(), 100);
    }

    render() {

        const Content = () => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "app_container" },
            this.state.addAlbumModal && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__newAlbum_AddNewAlbum__["a" /* default */], { closeModal: () => this.closeModal() }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "app_page" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], { createAlbum: () => this.createAlbum() }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["e" /* Switch */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["d" /* Route */], { exact: true, path: "/", component: __WEBPACK_IMPORTED_MODULE_3__AlbumContainer__["a" /* default */] }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["d" /* Route */], { path: "/edit/:id", component: __WEBPACK_IMPORTED_MODULE_5__editAlbum_EditAlbum__["a" /* default */] })
                )
            )
        );

        return this.state.addAlbumModal ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Content, null) : [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_react_custom_scrollbars__["Scrollbars"],
            {
                className: "scroll_bar",
                hideTracksWhenNotNeeded: true,
                ref: scrollbars => this.scrollbars = scrollbars },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Content, null)
        ), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_s_alert___default.a, { stack: { limit: 6 },
            effect: "scale",
            timeout: 5000,
            position: "top-right",
            beep: {
                // info: '/path-to-audio/file-info.mp3',
                error: '../sounds/Sound_error.mp3',
                // warning: '/path-to-audio/file-warning.mp3',
                success: '../sounds/Sound_success.mp3' }
        })];
    }
};


/* harmony default export */ __webpack_exports__["a"] = (FotoSlider);

/***/ })

})
//# sourceMappingURL=0.b45fefcd69c18f330336.hot-update.js.map