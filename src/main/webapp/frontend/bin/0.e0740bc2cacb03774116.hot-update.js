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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux_es_connect_connect__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_albumActions__ = __webpack_require__(23);
var _dec, _class;








let GMap = (_dec = Object(__WEBPACK_IMPORTED_MODULE_4_react_redux_es_connect_connect__["a" /* default */])(store => ({}), {
    saveFotoInformation: __WEBPACK_IMPORTED_MODULE_5__actions_albumActions__["h" /* saveFotoInformation */]
}), _dec(_class = class GMap extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(props) {
        super(props);
        const foto = props.images[props.index];
        this.state = {
            selectedPlace: {},
            currentLocation: {},
            foto: foto
        };
    }

    componentDidMount() {
        const foto = this.props.images[this.props.index];
        if (foto.position) {
            this.setState({ currentLocation: foto.position });
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
        console.log(r.latLng.lat());
        const foto = Object.assign({}, this.state.foto);
        foto.position = { lat: r.latLng.lat(), lng: r.latLng.lng() };
        this.setState({ foto });
        this.props.changeCoordinates(foto);
        this.props.saveFotoInformation(foto);
    }

    render() {
        const { foto } = this.state;
        let images = [...this.props.images];
        images = images.splice(this.props.index, 1);

        if (!this.state.currentLocation || !this.state.currentLocation.lat) return null;
        if (!this.props.google) return null;

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
                foto.position && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_google_maps_react__["Marker"], { onClick: (a, b, c) => this.onMarkerClick(a, b, c),
                    key: 'active',
                    title: foto.name,
                    name: foto.name,
                    position: foto.position,
                    icon: {
                        url: "../../svg/placeholder_green.svg",
                        anchor: new google.maps.Point(16, 16),
                        scaledSize: new google.maps.Size(32, 32)
                    }
                }),
                images && images.map((image, index) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_google_maps_react__["Marker"], { onClick: (a, b, c) => this.onMarkerClick(a, b, c),
                    key: index,
                    title: image.name,
                    name: image.name,
                    position: image.position
                }))
            )
        );
    }
}) || _class);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_google_maps_react__["GoogleApiWrapper"])({
    apiKey: "AIzaSyDWNe8nbXT808Y9VT3ei5JbVBR-jBK-Y0s"
})(GMap));

/***/ })

})
//# sourceMappingURL=0.e0740bc2cacb03774116.hot-update.js.map