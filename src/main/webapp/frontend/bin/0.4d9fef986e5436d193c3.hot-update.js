webpackHotUpdate(0,{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export albumsRequest */
/* unused harmony export setAlbums */
/* harmony export (immutable) */ __webpack_exports__["b"] = fetchAlbums;
/* harmony export (immutable) */ __webpack_exports__["a"] = deleteFotoFromAlbum;
/* harmony export (immutable) */ __webpack_exports__["c"] = saveFotoDescription;
/* unused harmony export saveAlbumDescription */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HttpService__ = __webpack_require__(158);


const routesModule = __webpack_require__(177);

function albumsRequest() {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["a" /* REQ_ALBUMS */]
    };
}

function setAlbums(albums) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["b" /* SET_ALBUMS */],
        albums
    };
}

function fetchAlbums() {
    return dispatch => {
        dispatch(albumsRequest());
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doGet(routesModule.routes.GET_ALBUMS).then(result => dispatch(setAlbums(result)));
    };
}

// export function deleteFotoRequest() {
//     return {
//         type: types.REQ_ALBUMS
//     };
// }

function deleteFotoFromAlbum(id, album) {
    return dispatch => {
        //dispatch(albumsRequest());
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doDelete(routesModule.routes.DELETE_FOTO(id, album)).then(result => dispatch(fetchAlbums()));
    };
}

function saveFotoDescription(album, image) {
    return dispatch => {
        //dispatch(albumsRequest());
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doPut(routesModule.routes.UPDATE_FOTO(album), image).then(result => dispatch(fetchAlbums()));
    };
}

function saveAlbumDescription(album) {
    return dispatch => {
        //dispatch(albumsRequest());
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doPut(routesModule.routes.ALBUM_ROUTE, album).then(result => dispatch(fetchAlbums()));
    };
}

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

const apiPrefix = '/api/';

const routes = {
    GET_ALBUMS: `${apiPrefix}albums`,

    ALBUM_ROUTE: `${apiPrefix}album`,
    GET_ALBUM: id => `${apiPrefix}album?id=${id}`,

    FOTO_ROUTE: `${apiPrefix}foto`,
    DELETE_FOTO: (id, album) => `${apiPrefix}foto?album=${album}&id=${id}`,
    UPDATE_FOTO: album => `${apiPrefix}foto?album=${album}`

    // GET_RECEPTS: (departId) => `/recept_list.req?departId=${departId}`,
    // GET_RECEPT: (receptId) => `/recept.req?receptId=${receptId}`,
    // GET_INGRIDIENTS: '/ing_list.req',
    // GET_TAGS: '/tags.req',
    //
    // POST_INGRIDIENTS: '/ingridient.req',
    // POST_CREATE_RECEPT: '/recept.req',
    //
    // UPLOAD_FILE: '/file.req',
    //
    // IMAGE_CATALOG: '/foto/'
};

exports.routes = routes;

/***/ })

})
//# sourceMappingURL=0.4d9fef986e5436d193c3.hot-update.js.map