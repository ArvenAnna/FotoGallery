webpackHotUpdate(0,{

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
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doGet(routesModule.routes.GET_ALBUMS).then(result => dispatch(setAlbums(result))).catch(e => dispatch({ type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["b" /* REQ_ALBUMS_ERROR */], error: e }));
    };
}

function fetchAlbumsBySearch(search) {
    return dispatch => {
        dispatch(albumsRequest());
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doGet(routesModule.routes.GET_ALBUMS_SEARCH(search)).then(result => dispatch(setAlbums(result))).catch(e => dispatch({ type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["b" /* REQ_ALBUMS_ERROR */], error: e }));
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
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doDelete(routesModule.routes.DELETE_FOTO(id));
        //.then(result => dispatch(fetchAlbums()));
    };
}

function deleteAlbum(id) {
    return dispatch => {
        //dispatch(albumsRequest());
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doDelete(routesModule.routes.DELETE_ALBUM(id)).then(result => dispatch(fetchAlbums()));
    };
}

function saveFotoDescription(album, image) {
    return dispatch => {
        //dispatch(albumsRequest());
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doPut(routesModule.routes.UPDATE_FOTO(album), image);
        //.then(result => dispatch(fetchAlbums()));
    };
}

function saveAlbumDescription(album) {
    return dispatch => {
        //dispatch(albumsRequest());
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doPut(routesModule.routes.ALBUM_ROUTE, album);
        //.then(result => dispatch(fetchAlbums()));
    };
}

function saveItemsOrder(album) {
    return dispatch => {
        //dispatch(albumsRequest());
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doPut(routesModule.routes.UPDATE_ITEMS_ORDER, album);
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
//# sourceMappingURL=0.8bc32c8d58c7477ae281.hot-update.js.map