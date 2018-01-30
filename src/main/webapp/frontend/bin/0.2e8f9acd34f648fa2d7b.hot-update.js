webpackHotUpdate(0,{

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux_es_connect_connect__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_albumActions__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom_es_withRouter__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(26);
var _dec, _class;







let Header = (_dec = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux_es_connect_connect__["a" /* default */])(store => ({}), {
    fetchAlbumsBySearch: __WEBPACK_IMPORTED_MODULE_2__actions_albumActions__["f" /* fetchAlbumsBySearch */],
    fetchAlbums: __WEBPACK_IMPORTED_MODULE_2__actions_albumActions__["e" /* fetchAlbums */]
}), Object(__WEBPACK_IMPORTED_MODULE_3_react_router_dom_es_withRouter__["a" /* default */])(_class = _dec(_class = class Header extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    onEnter(e) {
        if (e.key == "Enter") {
            if (e.target.value) this.props.fetchAlbumsBySearch(e.target.value);else this.props.fetchAlbums();
            this.props.history.push('/');
        }
    }

    render() {
        return [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { key: "header_menu", className: "header_menu" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "menu_item", onClick: this.props.createAlbum },
                "new album"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "menu_item" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["c" /* NavLink */],
                    { to: "/" },
                    "album's list"
                )
            )
        ), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "search_menu", key: "search" },
            "Search: ",
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { className: "search_input", defaultValue: "",
                onKeyPress: e => this.onEnter(e) })
        )];
    }
}) || _class) || _class);


/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fileInput_FileInput__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addNewAlbum_less__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addNewAlbum_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__addNewAlbum_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux_es_connect_connect__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_index__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_custom_scrollbars__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_custom_scrollbars___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_custom_scrollbars__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__HttpService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_loaders__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_loaders___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_loaders__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_loaders_css_src_animations_ball_scale_multiple_scss__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_loaders_css_src_animations_ball_scale_multiple_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_loaders_css_src_animations_ball_scale_multiple_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__actions_albumActions__ = __webpack_require__(28);
var _dec, _class;









const routesModule = __webpack_require__(30);





const Label = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].span`
  width: 100%;
  margin-bottom: 0.25rem;
`;

let AddNewAlbum = (_dec = Object(__WEBPACK_IMPORTED_MODULE_5_react_redux_es_connect_connect__["a" /* default */])(store => ({}), {
    createAlbum: __WEBPACK_IMPORTED_MODULE_11__actions_albumActions__["b" /* createAlbum */]
}), _dec(_class = class AddNewAlbum extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
    constructor(props) {
        super(props);
        this.modal = null;
        this.state = {
            height: '100%',
            name: '',
            description: '',
            src: null,
            fileUploading: false
        };
    }

    componentDidMount() {
        setTimeout(() => this.scrollbars.forceUpdate(), 100);

        // window.addEventListener('resize', () => this.calculateModalHeight())
        this.calculateModalHeight();
    }

    calculateModalHeight() {
        var w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            y = w.innerHeight || e.clientHeight || g.clientHeight;

        if (this.modal) {
            const modalStyle = this.modal.currentStyle || window.getComputedStyle(this.modal);
            const height = Math.min(parseInt(y), parseInt(modalStyle.height)) + 'px';
            this.setState({
                height
            });
        }
    }

    uploadFile(file) {
        this.setState({ fileUploading: true });
        __WEBPACK_IMPORTED_MODULE_8__HttpService__["a" /* default */].sendFile(routesModule.routes.UPLOAD_FOTO, file).then(id => {
            this.setState({ src: id.src, fileUploading: false });
        }).catch(e => this.setState({ fileUploading: false }));
    }

    createAlbum() {
        const { name, description, src } = this.state;
        if (name && description && src) {
            this.props.createAlbum({
                name, description, src
            });
            this.props.closeModal();
        }
    }

    render() {
        const { name, description, src, fileUploading, height } = this.state;

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'add_album' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_react_custom_scrollbars__["Scrollbars"],
                {
                    hideTracksWhenNotNeeded: true,
                    className: 'scroll_bar'
                    // renderTrackVertical={({ style, ...props }) =>
                    //     <div {...props} style={{ ...style, backgroundColor: 'blue' }}/>}
                    // renderTrackVertical={props => <div {...props} className="track-vertical"/>}
                    // renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}
                    , ref: scrollbars => this.scrollbars = scrollbars
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'add_album_modal', ref: r => this.modal = r },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons__["a" /* CrossIcon */], { className: 'cross_icon', onClick: this.props.closeModal }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        Label,
                        null,
                        'Name'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { value: name, onChange: e => this.setState({ name: e.target.value }) }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        Label,
                        null,
                        'Title image:'
                    ),
                    fileUploading ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_loaders___default.a, { type: 'ball-scale-multiple' }) : src ? Object(__WEBPACK_IMPORTED_MODULE_6__utils_index__["a" /* isVideo */])(src) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'video',
                        { controls: 'controls' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { src: src })
                    ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: src }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__fileInput_FileInput__["a" /* default */], { label: 'Choose main foto',
                        uploadFile: file => this.uploadFile(file) }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        Label,
                        null,
                        'Description'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { value: description, onChange: e => this.setState({ description: e.target.value }) }),
                    src && !Object(__WEBPACK_IMPORTED_MODULE_6__utils_index__["a" /* isVideo */])(src) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'warning' },
                        'You will be able to rotate your foto in the edit mode after album creation.'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'button',
                        { className: 'ok_button', onClick: () => this.createAlbum() },
                        'ok'
                    )
                )
            )
        );
    }
}) || _class);


/* harmony default export */ __webpack_exports__["a"] = (AddNewAlbum);

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__picture_Picture__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux_es_connect_connect__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_albumActions__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loaders__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loaders___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_loaders__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__albumContainer_less__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__albumContainer_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__albumContainer_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_loaders_css_src_animations_ball_grid_pulse_scss__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_loaders_css_src_animations_ball_grid_pulse_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_loaders_css_src_animations_ball_grid_pulse_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_paginate__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_paginate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_paginate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__svg_left_arrow_svg__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__svg_left_arrow_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__svg_left_arrow_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__svg_right_arrow_svg__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__svg_right_arrow_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__svg_right_arrow_svg__);
var _dec, _class;












let AlbumContainer = (_dec = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux_es_connect_connect__["a" /* default */])(store => ({
    albums: store.albums,
    isLoadingAlbums: store.isLoadingAlbums,
    itemCount: store.itemCount
}), {
    fetchAlbums: __WEBPACK_IMPORTED_MODULE_3__actions_albumActions__["e" /* fetchAlbums */]
}), _dec(_class = class AlbumContainer extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
    constructor(props) {
        super(props);
        this.props.fetchAlbums();
    }

    handlePageClick(data) {
        let selected = data.selected;
        let offset = Math.ceil(selected * __WEBPACK_IMPORTED_MODULE_3__actions_albumActions__["a" /* PAGE_ITEMS */]);
        this.props.fetchAlbums(offset);
    }

    render() {
        if (!this.props.albums) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_loaders___default.a, { type: "ball-grid-pulse", className: "Data_loader" });
        const pictures = this.props.albums.map(album => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__picture_Picture__["a" /* default */], { key: album._id,
            animation: "fade",
            album: album }));
        const pagesCount = Math.ceil(this.props.itemCount / __WEBPACK_IMPORTED_MODULE_3__actions_albumActions__["a" /* PAGE_ITEMS */]);
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment,
            null,
            pictures,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_paginate___default.a, {
                previousLabel: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__svg_left_arrow_svg___default.a, { className: "arrow" }),
                nextLabel: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__svg_right_arrow_svg___default.a, { className: "arrow" }),
                breakLabel: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "a",
                    { href: "" },
                    "..."
                ),
                breakClassName: "break-me",
                pageCount: pagesCount,
                marginPagesDisplayed: 2,
                pageRangeDisplayed: 5,
                onPageChange: data => this.handlePageClick(data),
                containerClassName: "P_pagination",
                pageClassName: "P_page",
                pageLinkClassName: "P_link_page",
                previousClassName: "P_prev_page",
                nextLinkClassName: "P_link_prev_page",
                previousLinkClassName: "P_link_next_page",
                nextClassName: "P_next_page",
                subContainerClassName: "pages_pagination",
                activeClassName: "active",
                disabledClassName: "disabled"
            })
        );
    }
}) || _class);


/* harmony default export */ __webpack_exports__["a"] = (AlbumContainer);

/***/ }),

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
            foto: this.props.foto
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
        this.setState({ fotoLocation: { lat: e.getCenter().lat(), lng: e.getCenter().lng() } });
        //this.props.saveFotoInformation();
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

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editAlbum_less__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editAlbum_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editAlbum_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fileInput_FileInput__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Card__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__HttpService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_es_connect_connect__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dialog_Dialog__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__EditCanvas__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_index__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_styles__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__constants_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_loaders__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_loaders___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_loaders__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_loaders_css_src_animations_ball_scale_multiple_scss__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_loaders_css_src_animations_ball_scale_multiple_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_loaders_css_src_animations_ball_scale_multiple_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_loaders_css_src_animations_ball_grid_pulse_scss__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_loaders_css_src_animations_ball_grid_pulse_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_loaders_css_src_animations_ball_grid_pulse_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_react_s_alert__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_react_s_alert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_react_s_alert__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class;













const routesModule = __webpack_require__(30);





let EditAlbum = (_dec = Object(__WEBPACK_IMPORTED_MODULE_6_react_redux_es_connect_connect__["a" /* default */])(store => ({}), {
    deleteFotoFromAlbum: __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__["d" /* deleteFotoFromAlbum */],
    saveFotoInformation: __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__["h" /* saveFotoInformation */],
    saveAlbumDescription: __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__["g" /* saveAlbumDescription */],
    deleteAlbum: __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__["c" /* deleteAlbum */],
    saveItemsOrder: __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__["i" /* saveItemsOrder */]
}), _dec(_class = class EditAlbum extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(props) {
        super(props);
        this.state = {
            dragStarted: false,
            dragFrom: null,
            dragFromEl: null,
            dragObj: null,
            openPicture: null,
            openedAlbum: false,
            album: null,
            openedDialog: false,
            imageDownloaded: false,
            imageLoading: true,
            imageLoadStarted: false,
            albumLoading: false
        };
    }

    componentDidMount() {
        this.loadAlbum();
    }

    loadAlbum() {
        this.setState({ albumLoading: true });
        __WEBPACK_IMPORTED_MODULE_5__HttpService__["a" /* default */].doGet(routesModule.routes.GET_ALBUM(this.props.match.params.id)).then(result => {
            result.images.sort((x, y) => x.order - y.order);
            result.images.forEach(image => image.src = image.src + '?forceUpdate=' + new Date().toISOString());
            this.setState({ album: result, albumLoading: false });
        }).catch(e => __WEBPACK_IMPORTED_MODULE_15_react_s_alert___default.a.error(e.response.data.error, {}));
    }

    openDetails(picture) {
        this.setState({ openPicture: picture });
    }

    openAlbumDetails() {
        this.setState({ openedAlbum: true });
    }

    onCrossClick() {
        this.setState({ openPicture: null, openedAlbum: false });
    }

    deleteItem(picture) {
        if (this.state.album.images.length == 1) {
            this.setState({ openedDialog: true });
            return;
        }

        this.props.deleteFotoFromAlbum(picture._id);
        const newPictures = this.state.album.images.filter(p => p._id != picture._id);
        const newAlbum = Object.assign({}, _extends({}, this.state.album, {
            images: newPictures
        }));
        this.setState({ album: newAlbum });
    }

    removeAlbum() {
        this.props.deleteAlbum(this.state.album._id);
        this.props.history.push('/');
    }

    changeState(obj) {
        this.setState(obj);
    }

    saveFotoDescription(picture) {
        const newPictures = [...this.state.album.images];
        const editedPicture = this.state.album.images.find(p => p._id == picture._id);
        if (this.pinput.value) editedPicture.name = this.pinput.value;
        if (this.ptextarea.value) editedPicture.text = this.ptextarea.value;

        this.props.saveFotoInformation(editedPicture);

        const newAlbum = Object.assign({}, _extends({}, this.state.album, {
            images: newPictures
        }));
        this.setState({ album: newAlbum, openPicture: null });
    }

    saveAlbumDescription() {
        const editedAlbum = Object.assign({}, _extends({}, this.state.album));
        if (this.ainput.value) editedAlbum.name = this.ainput.value;
        if (this.atextarea.value) editedAlbum.description = this.atextarea.value;

        this.props.saveAlbumDescription(editedAlbum);

        this.setState({ album: editedAlbum, openedAlbum: false });
    }

    uploadFile(file) {
        __WEBPACK_IMPORTED_MODULE_5__HttpService__["a" /* default */].sendFile(routesModule.routes.UPLOAD_FOTO, file).then(downloadedFoto => {
            if (Object(__WEBPACK_IMPORTED_MODULE_10__utils_index__["a" /* isVideo */])(downloadedFoto.src)) {
                __WEBPACK_IMPORTED_MODULE_5__HttpService__["a" /* default */].doPost(routesModule.routes.FOTO_ROUTE, {
                    src: downloadedFoto.src,
                    album: this.state.album._id
                }).then(result => {
                    const newPictures = [...this.state.album.images];
                    newPictures.push(result);
                    const newAlbum = Object.assign({}, _extends({}, this.state.album, {
                        images: newPictures
                    }));

                    this.setState({
                        //imageDownloaded: null,
                        album: newAlbum
                    });
                }).catch(e => __WEBPACK_IMPORTED_MODULE_15_react_s_alert___default.a.error(e.response.data.error, {}));
            } else {
                this.setState({
                    imageDownloaded: downloadedFoto.src
                });
            }
        }).catch(e => __WEBPACK_IMPORTED_MODULE_15_react_s_alert___default.a.error(e.response.data.error, {}));
    }

    onImageLoad() {
        this.setState({ imageLoading: false });
    }

    onImageError() {
        __WEBPACK_IMPORTED_MODULE_15_react_s_alert___default.a.error("Image for name {" + this.state.album.images[0].name + "} loading failed", {});
        this.setState({ imageLoading: false });
    }

    loadImage(src) {
        this.setState({ imageLoadStarted: true });
        const imageObj = new Image();
        imageObj.onload = this.onImageLoad.bind(this);
        imageObj.onerror = this.onImageError.bind(this);
        imageObj.src = src;
    }

    renderEditAlbumCard() {
        if (!this.state.imageLoadStarted) this.loadImage(this.state.album.images[0].src);
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'edit_album_card', key: 'edit_album_card' },
            this.state.imageLoading ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_react_loaders___default.a, { type: 'ball-scale-multiple' }) : Object(__WEBPACK_IMPORTED_MODULE_10__utils_index__["a" /* isVideo */])(this.state.album.images[0].src) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'video',
                { className: 'album_image',
                    height: __WEBPACK_IMPORTED_MODULE_11__constants_styles__["picture_edit_height"],
                    width: __WEBPACK_IMPORTED_MODULE_11__constants_styles__["picture_edit_width"],
                    controls: 'controls' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { src: this.state.album.images[0].src })
            ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'album_image',
                src: this.state.album.images[0].src }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'album_name', onClick: () => this.openAlbumDetails() },
                this.state.album.name
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["a" /* CrossIcon */], { className: 'cross_icon', onClick: () => this.setState({ openedDialog: true }) })
        );
    }

    renderImages() {
        return this.state.album.images.sort((x, y) => x.order - y.order).map(p => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Card__["a" /* default */], {
            key: p._id,
            picture: p,
            pictures: this.state.album.images,
            openDetails: p => this.openDetails(p),
            deleteItem: p => this.deleteItem(p),
            replaceImage: target => this.replaceImage(target),
            openPicture: this.state.openPicture,
            changeDragState: obj => this.changeState(obj),
            dragState: this.state,
            updateOrder: album => this.props.saveItemsOrder(album),
            loadAlbum: () => this.loadAlbum()
        }));
    }

    renderFileInput() {
        return !this.state.imageDownloaded && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__fileInput_FileInput__["a" /* default */], { className: 'edit_file_input',
            disabled: this.state.openPicture,
            label: 'Choose new foto',
            uploadFile: file => this.uploadFile(file)
        });
    }

    renderEditCanvas() {
        return this.state.imageDownloaded && !Object(__WEBPACK_IMPORTED_MODULE_10__utils_index__["a" /* isVideo */])(this.state.imageDownloaded) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__EditCanvas__["a" /* default */], {
            image: this.state.imageDownloaded,
            cleanImage: obj => this.changeState(obj),
            album: this.state.album
        });
    }

    renderChangeFotoTextInfoDialog() {
        return this.state.openPicture && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'new_text_overlay' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'new_text' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'new_text_caption' },
                    'Enter foto name and description:'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["h" /* SaveIcon */], { className: 'save_icon', onClick: () => this.saveFotoDescription(this.state.openPicture) }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["a" /* CrossIcon */], { className: 'cross_icon', onClick: () => this.onCrossClick() }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { defaultValue: this.state.openPicture.name, ref: i => this.pinput = i }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { defaultValue: this.state.openPicture.text, ref: t => this.ptextarea = t })
            )
        );
    }

    renderChangeAlbumTextInfoDialog() {
        return this.state.openedAlbum && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'new_text_overlay' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'new_text' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'new_text_caption' },
                    'Enter album name and description:'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["h" /* SaveIcon */], { className: 'save_icon', onClick: () => this.saveAlbumDescription() }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["a" /* CrossIcon */], { className: 'cross_icon', onClick: () => this.onCrossClick() }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { defaultValue: this.state.album.name, ref: i => this.ainput = i }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { defaultValue: this.state.album.description, ref: t => this.atextarea = t })
            )
        );
    }

    renderDeleteDialog() {
        return this.state.openedDialog && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__dialog_Dialog__["a" /* default */], { onClick: () => this.removeAlbum(),
            onClose: () => this.setState({ openedDialog: false }),
            text: 'Do you really want to delete the album?' });
    }

    render() {
        const { album, albumLoading } = this.state;
        if (albumLoading) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_react_loaders___default.a, { type: 'ball-grid-pulse', className: 'Data_loader' });
        if (!album) return null;

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment,
            null,
            this.renderEditAlbumCard(),
            this.renderImages(),
            this.renderFileInput(),
            this.renderEditCanvas(),
            this.renderChangeFotoTextInfoDialog(),
            this.renderChangeAlbumTextInfoDialog(),
            this.renderDeleteDialog()
        );
    }
}) || _class);


/* harmony default export */ __webpack_exports__["a"] = (EditAlbum);

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export albumsRequest */
/* unused harmony export setAlbums */
/* harmony export (immutable) */ __webpack_exports__["e"] = fetchAlbums;
/* harmony export (immutable) */ __webpack_exports__["f"] = fetchAlbumsBySearch;
/* harmony export (immutable) */ __webpack_exports__["d"] = deleteFotoFromAlbum;
/* harmony export (immutable) */ __webpack_exports__["c"] = deleteAlbum;
/* harmony export (immutable) */ __webpack_exports__["h"] = saveFotoInformation;
/* harmony export (immutable) */ __webpack_exports__["g"] = saveAlbumDescription;
/* harmony export (immutable) */ __webpack_exports__["i"] = saveItemsOrder;
/* harmony export (immutable) */ __webpack_exports__["b"] = createAlbum;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HttpService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_s_alert__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_s_alert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_s_alert__);


const routesModule = __webpack_require__(30);


const PAGE_ITEMS = 3;
/* harmony export (immutable) */ __webpack_exports__["a"] = PAGE_ITEMS;


function albumsRequest() {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["a" /* REQ_ALBUMS */]
    };
}

function setAlbums(result) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["c" /* SET_ALBUMS */],
        result: result
    };
}

function fetchAlbums(offset, perPage) {
    const pagesOffset = offset | 0;
    const itemsPerPage = perPage | PAGE_ITEMS;
    return dispatch => {
        dispatch(albumsRequest());
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doGet(routesModule.routes.GET_ALBUMS_PAGINATE(pagesOffset, itemsPerPage)).then(result => dispatch(setAlbums(result))).catch(e => {
            __WEBPACK_IMPORTED_MODULE_2_react_s_alert___default.a.error(e.response.data.error, {});
            dispatch({ type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["b" /* REQ_ALBUMS_ERROR */] });
        });
    };
}

function fetchAlbumsBySearch(search, offset, perPage) {
    const pagesOffset = offset | 0;
    const itemsPerPage = perPage | PAGE_ITEMS;
    return dispatch => {
        dispatch(albumsRequest());
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doGet(routesModule.routes.GET_ALBUMS_SEARCH(search, pagesOffset, itemsPerPage)).then(result => dispatch(setAlbums(result))).catch(e => {
            __WEBPACK_IMPORTED_MODULE_2_react_s_alert___default.a.error(e.response.data.error, {});
            dispatch({ type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["b" /* REQ_ALBUMS_ERROR */] });
        });
    };
}

function deleteFotoFromAlbum(id) {
    return dispatch => {
        //dispatch(albumsRequest());
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doDelete(routesModule.routes.DELETE_FOTO(id)).then(result => __WEBPACK_IMPORTED_MODULE_2_react_s_alert___default.a.success('Album deleted', {})).catch(e => __WEBPACK_IMPORTED_MODULE_2_react_s_alert___default.a.error(e.response.data.error, {}));
        //.then(result => dispatch(fetchAlbums()));
    };
}

function deleteAlbum(id) {
    return dispatch => {
        //dispatch(albumsRequest());
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doDelete(routesModule.routes.DELETE_ALBUM(id)).then(result => dispatch(fetchAlbums())).catch(e => __WEBPACK_IMPORTED_MODULE_2_react_s_alert___default.a.error(e.response.data.error, {}));
    };
}

function saveFotoInformation(album, image) {
    return dispatch => {
        //dispatch(albumsRequest());
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doPut(routesModule.routes.FOTO_ROUTE, image).catch(e => __WEBPACK_IMPORTED_MODULE_2_react_s_alert___default.a.error(e.response.data.error, {}));
        //.then(result => dispatch(fetchAlbums()));
    };
}

function saveAlbumDescription(album) {
    return dispatch => {
        //dispatch(albumsRequest());
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doPut(routesModule.routes.ALBUM_ROUTE, album).catch(e => __WEBPACK_IMPORTED_MODULE_2_react_s_alert___default.a.error(e.response.data.error, {}));
        //.then(result => dispatch(fetchAlbums()));
    };
}

function saveItemsOrder(album) {
    return dispatch => {
        //dispatch(albumsRequest());
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doPut(routesModule.routes.UPDATE_ITEMS_ORDER, album).catch(e => __WEBPACK_IMPORTED_MODULE_2_react_s_alert___default.a.error(e.response.data.error, {}));
        //.then(result => dispatch(fetchAlbums()));
    };
}

function createAlbum(album) {
    return dispatch => {
        //dispatch(albumsRequest());
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doPost(routesModule.routes.ALBUM_ROUTE, album).then(result => {
            __WEBPACK_IMPORTED_MODULE_2_react_s_alert___default.a.success('Album created', {});
            dispatch(fetchAlbums());
        }).catch(e => __WEBPACK_IMPORTED_MODULE_2_react_s_alert___default.a.error(e.response.data.error, {}));
    };
}

/***/ })

})
//# sourceMappingURL=0.2e8f9acd34f648fa2d7b.hot-update.js.map