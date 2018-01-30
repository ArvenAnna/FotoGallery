webpackHotUpdate(0,{

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_less__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__map_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_google_maps_react__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_google_maps_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_google_maps_react__);





let GMap = class GMap extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedPlace: {}
        };
    }

    onCrossClick() {
        this.props.close();
    }

    onMarkerClick(g) {
        console.log(g);
    }

    onInfoWindowClose(g) {
        console.log(g);
    }

    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'map_container' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icons__["a" /* CrossIcon */], { className: 'cross',
                onClick: () => this.onCrossClick() }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_google_maps_react__["Map"],
                {
                    google: this.props.google, zoom: 14,
                    initialCenter: {
                        lat: 40.854885,
                        lng: -88.081807
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_google_maps_react__["Marker"], { onClick: this.onMarkerClick,
                    name: 'Current location' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_google_maps_react__["InfoWindow"],
                    { onClose: this.onInfoWindowClose },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'h1',
                            null,
                            this.state.selectedPlace.name
                        )
                    )
                )
            )
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_google_maps_react__["GoogleApiWrapper"])({
    apiKey: "AIzaSyDWNe8nbXT808Y9VT3ei5JbVBR-jBK-Y0s"
})(GMap));

/***/ })

})
//# sourceMappingURL=0.bdde5806132cbd9323c9.hot-update.js.map