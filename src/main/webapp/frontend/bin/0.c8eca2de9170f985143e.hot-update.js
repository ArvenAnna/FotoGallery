webpackHotUpdate(0,{

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__picture_Picture__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux_es_connect_connect__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_albumActions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loaders__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loaders___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_loaders__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__albumContainer_less__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__albumContainer_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__albumContainer_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_loaders_css_src_animations_ball_grid_pulse_scss__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_loaders_css_src_animations_ball_grid_pulse_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_loaders_css_src_animations_ball_grid_pulse_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_notifications__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_notifications_lib_notifications_css__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_notifications_lib_notifications_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_notifications_lib_notifications_css__);
var _dec, _class;











let AlbumContainer = (_dec = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux_es_connect_connect__["a" /* default */])(store => ({
    albums: store.albums,
    isLoadingAlbums: store.isLoadingAlbums,
    albumsLoadingError: store.albumsLoadingError
}), {
    fetchAlbums: __WEBPACK_IMPORTED_MODULE_3__actions_albumActions__["d" /* fetchAlbums */]
}), _dec(_class = class AlbumContainer extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
    constructor(props) {
        super(props);
        this.props.fetchAlbums();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.albumsLoadingError && this.props.albumsLoadingError != nextProps.albumsLoadingError) {
            __WEBPACK_IMPORTED_MODULE_7_react_notifications__["NotificationManager"].error('Error message', 'Click me!', 5000);
        }
    }

    render() {
        if (!this.props.albums) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_loaders___default.a, { type: "ball-grid-pulse", className: "Data_loader" });
        const pictures = this.props.albums.map(album => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__picture_Picture__["a" /* default */], { key: album._id,
            animation: "fade",
            album: album }));
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment,
            null,
            pictures,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_notifications__["NotificationContainer"], null)
        );
    }
}) || _class);


/* harmony default export */ __webpack_exports__["a"] = (AlbumContainer);

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (1:0)\nYou may need an appropriate loader to handle this file type.\n| @charset \"UTF-8\";\n| @font-face {\n|   font-family: 'Notification';");

/***/ })

})
//# sourceMappingURL=0.c8eca2de9170f985143e.hot-update.js.map