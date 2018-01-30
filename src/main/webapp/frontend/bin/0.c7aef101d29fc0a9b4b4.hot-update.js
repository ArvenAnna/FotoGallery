webpackHotUpdate(0,{

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__picture_Picture__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux_es_connect_connect__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_albumActions__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loaders__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loaders___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_loaders__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__albumContainer_less__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__albumContainer_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__albumContainer_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_loaders_css_src_animations_ball_grid_pulse_scss__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_loaders_css_src_animations_ball_grid_pulse_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_loaders_css_src_animations_ball_grid_pulse_scss__);
var _dec, _class;









let AlbumContainer = (_dec = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux_es_connect_connect__["a" /* default */])(store => ({
    albums: store.albums,
    isLoadingAlbums: store.isLoadingAlbums
}), {
    fetchAlbums: __WEBPACK_IMPORTED_MODULE_3__actions_albumActions__["d" /* fetchAlbums */]
}), _dec(_class = class AlbumContainer extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
    constructor(props) {
        super(props);
        this.props.fetchAlbums();
    }

    render() {
        if (!this.props.albums) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_loaders___default.a, { type: "ball-grid-pulse", className: "Data_loader" });
        const pictures = this.props.albums.map(album => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__picture_Picture__["a" /* default */], { key: album._id,
            animation: "fade",
            album: album }));
        return pictures;
    }
}) || _class);


/* harmony default export */ __webpack_exports__["a"] = (AlbumContainer);

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__ = __webpack_require__(81);


const albums = [];
const isLoadingAlbums = false;
const albumsLoadingError = null;

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

const AlbumReducer = {
    albums: albumReducer,
    isLoadingAlbums: loaderReducer
};

/* harmony default export */ __webpack_exports__["a"] = (AlbumReducer);

/***/ }),

/***/ 26:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HttpService__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_s_alert__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_s_alert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_s_alert__);


const routesModule = __webpack_require__(28);


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

function fetchAlbums() {
    return dispatch => {
        dispatch(albumsRequest());
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doGet(routesModule.routes.GET_ALBUMS).then(result => dispatch(setAlbums(result))).catch(e => __WEBPACK_IMPORTED_MODULE_2_react_s_alert___default.a.error(e.response.data.error, {}));
    };
}

function fetchAlbumsBySearch(search) {
    return dispatch => {
        dispatch(albumsRequest());
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doGet(routesModule.routes.GET_ALBUMS_SEARCH(search)).then(result => dispatch(setAlbums(result))).catch(e => __WEBPACK_IMPORTED_MODULE_2_react_s_alert___default.a.error(e.response.data.error, {}));
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

/***/ })

})
//# sourceMappingURL=0.c7aef101d29fc0a9b4b4.hot-update.js.map