webpackHotUpdate(0,{

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__picture_Picture__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux_es_connect_connect__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_albumActions__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loaders__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loaders___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_loaders__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__albumContainer_less__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__albumContainer_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__albumContainer_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_loaders_css_src_animations_ball_grid_pulse_scss__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_loaders_css_src_animations_ball_grid_pulse_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_loaders_css_src_animations_ball_grid_pulse_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_paginate__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_paginate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_paginate__);
var _dec, _class;










let AlbumContainer = (_dec = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux_es_connect_connect__["a" /* default */])(store => ({
    albums: store.albums,
    isLoadingAlbums: store.isLoadingAlbums
}), {
    fetchAlbums: __WEBPACK_IMPORTED_MODULE_3__actions_albumActions__["d" /* fetchAlbums */]
}), _dec(_class = class AlbumContainer extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
    constructor(props) {
        super(props);
        this.perPages = 3;
        this.props.fetchAlbums();
    }

    handlePageClick(data) {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.perPage);
        this.props.fetchAlbums();
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
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { key: "paginate", className: "pagination_container" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_paginate___default.a, {
                    previousLabel: "previous",
                    nextLabel: "next",
                    breakLabel: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "a",
                        { href: "" },
                        "..."
                    ),
                    breakClassName: "break-me",
                    pageCount: this.pageCount,
                    marginPagesDisplayed: 2,
                    pageRangeDisplayed: 5,
                    onPageChange: data => this.handlePageClick(data),
                    containerClassName: "pagination",
                    subContainerClassName: "pages pagination",
                    activeClassName: "active" })
            )
        );
    }
}) || _class);


/* harmony default export */ __webpack_exports__["a"] = (AlbumContainer);

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__ = __webpack_require__(81);


const albums = [];
const isLoadingAlbums = false;

const albumReducer = (state = albums, action) => {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["c" /* SET_ALBUMS */]:
            const sortedAlbums = action.albums;
            sortedAlbums.forEach(album => {
                album.images.sort((x, y) => x.order - y.order);
            });
            return sortedAlbums;
        default:
            return state;
    }
};

const loaderReducer = (state = isLoadingAlbums, action) => {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["a" /* REQ_ALBUMS */]:
            return true;
        case __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["c" /* SET_ALBUMS */]:
            return false;
        case __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["b" /* REQ_ALBUMS_ERROR */]:
            return false;
        default:
            return state;
    }
};

const countReducer = (state = 0, action) => {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["c" /* SET_ALBUMS */]:
            return false;
        case __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["b" /* REQ_ALBUMS_ERROR */]:
            return false;
        default:
            return state;
    }
};

const AlbumReducer = {
    albums: albumReducer,
    isLoadingAlbums: loaderReducer
};

/* harmony default export */ __webpack_exports__["a"] = (AlbumReducer);

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export albumsRequest */
/* unused harmony export setAlbums */
/* harmony export (immutable) */ __webpack_exports__["d"] = fetchAlbums;
/* harmony export (immutable) */ __webpack_exports__["e"] = fetchAlbumsBySearch;
/* harmony export (immutable) */ __webpack_exports__["c"] = deleteFotoFromAlbum;
/* harmony export (immutable) */ __webpack_exports__["b"] = deleteAlbum;
/* harmony export (immutable) */ __webpack_exports__["g"] = saveFotoDescription;
/* harmony export (immutable) */ __webpack_exports__["f"] = saveAlbumDescription;
/* harmony export (immutable) */ __webpack_exports__["h"] = saveItemsOrder;
/* harmony export (immutable) */ __webpack_exports__["a"] = createAlbum;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HttpService__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_s_alert__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_s_alert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_s_alert__);


const routesModule = __webpack_require__(29);


function albumsRequest() {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["a" /* REQ_ALBUMS */]
    };
}

function setAlbums(albums) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["c" /* SET_ALBUMS */],
        albums
    };
}

function fetchAlbums(offset, perPage) {
    return dispatch => {
        dispatch(albumsRequest());
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doGet(routesModule.routes.GET_ALBUMS_PAGINATE(offset, perPage)).then(result => dispatch(setAlbums(result))).catch(e => {
            __WEBPACK_IMPORTED_MODULE_2_react_s_alert___default.a.error(e.response.data.error, {});
            dispatch({ type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["b" /* REQ_ALBUMS_ERROR */] });
        });
    };
}

function fetchAlbumsBySearch(search) {
    return dispatch => {
        dispatch(albumsRequest());
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doGet(routesModule.routes.GET_ALBUMS_SEARCH(search)).then(result => {
            dispatch(setAlbums(result));
            dispatch({ type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["b" /* REQ_ALBUMS_ERROR */] });
        }).catch(e => __WEBPACK_IMPORTED_MODULE_2_react_s_alert___default.a.error(e.response.data.error, {}));
    };
}

// export function deleteFotoRequest() {
//     return {
//         type: types.REQ_ALBUMS
//     };
// }

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

function saveFotoDescription(album, image) {
    return dispatch => {
        //dispatch(albumsRequest());
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doPut(routesModule.routes.UPDATE_FOTO(album), image).catch(e => __WEBPACK_IMPORTED_MODULE_2_react_s_alert___default.a.error(e.response.data.error, {}));
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

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

const apiPrefix = '/api/';

const routes = {
    GET_ALBUMS: `${apiPrefix}albums`,
    GET_ALBUMS_PAGINATE: (offset, perPage) => `${apiPrefix}albums?offset=${offset}&pePage=${perPage}`,
    GET_ALBUMS_SEARCH: search => `${apiPrefix}albums?search=${search}`,

    ALBUM_ROUTE: `${apiPrefix}album`,
    GET_ALBUM: id => `${apiPrefix}album?id=${id}`,
    DELETE_ALBUM: id => `${apiPrefix}album?id=${id}`,
    UPDATE_ITEMS_ORDER: `${apiPrefix}album/items`,

    FOTO_ROUTE: `${apiPrefix}foto`,
    DELETE_FOTO: id => `${apiPrefix}foto?id=${id}`,
    UPDATE_FOTO: album => `${apiPrefix}foto?album=${album}`,

    UPLOAD_FOTO: `${apiPrefix}upload`
};

exports.routes = routes;

/***/ })

})
//# sourceMappingURL=0.1c9aec38da0d1b144464.hot-update.js.map