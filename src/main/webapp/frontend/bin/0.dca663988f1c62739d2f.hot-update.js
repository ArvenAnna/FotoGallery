webpackHotUpdate(0,{

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
            return action.count;
        default:
            return state;
    }
};

const AlbumReducer = {
    albums: albumReducer,
    isLoadingAlbums: loaderReducer,
    itemCount: countReducer
};

/* harmony default export */ __webpack_exports__["a"] = (AlbumReducer);

/***/ })

})
//# sourceMappingURL=0.dca663988f1c62739d2f.hot-update.js.map