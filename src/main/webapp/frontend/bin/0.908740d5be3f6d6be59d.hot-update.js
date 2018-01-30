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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux_es_connect_connect__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_albumActions__ = __webpack_require__(28);
var _dec, _class;








let GMap = (_dec = Object(__WEBPACK_IMPORTED_MODULE_4_react_redux_es_connect_connect__["a" /* default */])(store => ({}), {
    saveFotoInformation: __WEBPACK_IMPORTED_MODULE_5__actions_albumActions__["h" /* saveFotoInformation */]
}), _dec(_class = class GMap extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(props) {
        super(props);
        // this.pictureLocation = {
        //     lat: 37.759703, lng: -122.428093
        // }
        this.state = {
            selectedPlace: {},
            currentLocation: {},
            foto: this.props.images[this.props.index]
        };
        if (this.props.location) {
            this.setState({ currentLocation: props.location });
        } else if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
                const coords = pos.coords;
                this.setState({
                    currentLocation: {
                        lat: coords.latitude,
                        lng: coords.longitude
                    }
                });
            });
        }
    }

    onCrossClick() {
        this.props.close();
    }

    onMarkerClick(props, marker, e) {
        console.dir(props);
        console.dir(marker);
        console.dir(e);
    }

    onInfoWindowClose(g) {
        console.log(g);
    }

    onMapClicked(g, e, r) {
        console.log(e.getCenter().lat());
        const foto = Object.assign({}, this.state.foto);
        foto.position = { lat: e.getCenter().lat(), lng: e.getCenter().lng() };
        this.setState({ foto });
        this.props.saveFotoInformation(foto);
    }

    render() {

        if (!this.state.currentLocation || !this.state.currentLocation.lat) return null;

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'map_container' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icons__["a" /* CrossIcon */], { className: 'cross',
                onClick: () => this.onCrossClick() }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_google_maps_react__["Map"],
                {
                    google: this.props.google,
                    zoom: 14,
                    initialCenter: this.state.currentLocation,
                    onClick: (a, b, c) => this.onMapClicked(a, b, c)
                },
                this.state.fotoLocation && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_google_maps_react__["Marker"], { onClick: this.onMarkerClick,
                    name: 'Current location',
                    position: this.state.fotoLocation
                })
            )
        );
    }
}) || _class);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_google_maps_react__["GoogleApiWrapper"])({
    apiKey: "AIzaSyDWNe8nbXT808Y9VT3ei5JbVBR-jBK-Y0s"
})(GMap));

/***/ })

})
//# sourceMappingURL=0.908740d5be3f6d6be59d.hot-update.js.map