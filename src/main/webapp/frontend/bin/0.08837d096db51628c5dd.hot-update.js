webpackHotUpdate(0,{

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newAlbum_AddNewAlbum__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AlbumContainer__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editAlbum_EditAlbum__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_custom_scrollbars__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_custom_scrollbars___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_custom_scrollbars__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_notifications__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_notifications__);









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
        //setTimeout(() => this.scrollbars.forceUpdate(), 100);
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

        return this.state.addAlbumModal ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Content, null) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_react_custom_scrollbars__["Scrollbars"],
            {
                className: "scroll_bar",
                hideTracksWhenNotNeeded: true,
                ref: scrollbars => this.scrollbars = scrollbars },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Content, null)
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (FotoSlider);

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__picture_Picture__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux_es_connect_connect__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_albumActions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loaders__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loaders___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_loaders__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__albumContainer_less__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__albumContainer_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__albumContainer_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_loaders_css_src_animations_ball_grid_pulse_scss__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_loaders_css_src_animations_ball_grid_pulse_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_loaders_css_src_animations_ball_grid_pulse_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_notifications__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_notifications__);
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
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NotificationContainer, null)
        );
    }
}) || _class);


/* harmony default export */ __webpack_exports__["a"] = (AlbumContainer);

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotificationManager = exports.NotificationContainer = exports.Notifications = undefined;

var _Notifications = __webpack_require__(89);

var _Notifications2 = _interopRequireDefault(_Notifications);

var _NotificationContainer = __webpack_require__(224);

var _NotificationContainer2 = _interopRequireDefault(_NotificationContainer);

var _NotificationManager = __webpack_require__(93);

var _NotificationManager2 = _interopRequireDefault(_NotificationManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Notifications = _Notifications2.default;
exports.NotificationContainer = _NotificationContainer2.default;
exports.NotificationManager = _NotificationManager2.default;
exports.default = _Notifications2.default;

/***/ })

})
//# sourceMappingURL=0.08837d096db51628c5dd.hot-update.js.map