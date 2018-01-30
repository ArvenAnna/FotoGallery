webpackHotUpdate(0,{

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export albumsRequest */
/* unused harmony export setAlbums */
/* harmony export (immutable) */ __webpack_exports__["e"] = fetchAlbums;
/* harmony export (immutable) */ __webpack_exports__["f"] = fetchAlbumsBySearch;
/* harmony export (immutable) */ __webpack_exports__["d"] = deleteFotoFromAlbum;
/* harmony export (immutable) */ __webpack_exports__["c"] = deleteAlbum;
/* harmony export (immutable) */ __webpack_exports__["h"] = saveFotoDescription;
/* harmony export (immutable) */ __webpack_exports__["g"] = saveAlbumDescription;
/* unused harmony export saveFotoPosition */
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

function saveFotoDescription(album, image) {
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

function saveFotoPosition(image) {
    return dispatch => {
        //dispatch(albumsRequest());
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doPut(routesModule.routes.FOTO_ROUTE, image).catch(e => __WEBPACK_IMPORTED_MODULE_2_react_s_alert___default.a.error(e.response.data.error, {}));
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

/***/ 30:
/***/ (function(module, exports) {

const apiPrefix = '/api/';

const routes = {
    GET_ALBUMS: `${apiPrefix}albums`,
    GET_ALBUMS_PAGINATE: (offset, perPage) => `${apiPrefix}albums?offset=${offset}&limit=${perPage}`,
    GET_ALBUMS_SEARCH: (search, offset, perPage) => `${apiPrefix}albums?search=${search}&offset=${offset}&limit=${perPage}`,

    ALBUM_ROUTE: `${apiPrefix}album`,
    GET_ALBUM: id => `${apiPrefix}album?id=${id}`,
    DELETE_ALBUM: id => `${apiPrefix}album?id=${id}`,
    UPDATE_ITEMS_ORDER: `${apiPrefix}album/items`,

    FOTO_ROUTE: `${apiPrefix}foto`,
    DELETE_FOTO: id => `${apiPrefix}foto?id=${id}`,

    UPLOAD_FOTO: `${apiPrefix}upload`
};

exports.routes = routes;

/***/ })

})
//# sourceMappingURL=0.4695a0b2dd473885d31b.hot-update.js.map