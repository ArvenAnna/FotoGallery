webpackHotUpdate(0,{

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AlbumReducer__ = __webpack_require__(187);

// import MainPageReducer from './MainPageReducer';
// import SidebarReducer from './SidebarReducer';
// import IngridientReducer from './IngridientReducer';
// import ErrorReducer from './ErrorReducer';
// import CreateReceptReducer from './CreateReceptReducer';


const RootReducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["c" /* combineReducers */])(Object.assign({},
// SidebarReducer,
// MainPageReducer,
// IngridientReducer,
// ErrorReducer,
// CreateReceptReducer,
__WEBPACK_IMPORTED_MODULE_1__AlbumReducer__["a" /* default */]));

/* harmony default export */ __webpack_exports__["a"] = (RootReducer);

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__ = __webpack_require__(66);


const albums = [];

const albumReducer = (state = albums, action) => {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["b" /* SET_ALBUMS */]:
            const sortedAlbums = action.albums;
            sortedAlbums.forEach(album => {
                album.images.sort((x, y) => x.order - y.order);
            });
            return sortedAlbums;
        default:
            return state;
    }
};

const AlbumReducer = {
    albums: albumReducer
};

/* harmony default export */ __webpack_exports__["a"] = (AlbumReducer);

/***/ })

})
//# sourceMappingURL=0.42f27acdbddaeb173774.hot-update.js.map