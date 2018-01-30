webpackHotUpdate(0,{

/***/ 177:
/***/ (function(module, exports) {

const routes = {
    GET_ALBUMS: '/api/albums',
    GET_ALBUM: id => `/api/album?id=${id}`

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

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editAlbum_less__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editAlbum_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editAlbum_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fileInput_FileInput__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icons__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Card__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__HttpService__ = __webpack_require__(158);






const routesModule = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../constants/routes\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

let EditAlbum = class EditAlbum extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(props) {
        super(props);
        this.pictures = [{
            id: 1,
            src: '/foto/download.jpg',
            order: 1
        }, {
            id: 2,
            src: '/foto/images.jpg',
            order: 2
        }];
        this.state = {
            dragStarted: false,
            dragFrom: null,
            dragFromEl: null,
            dragObj: null,
            isTextOpen: false,
            pictures: []
        };
    }

    componentDidMount() {
        __WEBPACK_IMPORTED_MODULE_5__HttpService__["a" /* default */].doGet(routesModule.routes.GET_ALBUM(this.router.query.id)).then(result => this.setState({ pictures: result.images }));
    }

    openDetails() {
        this.setState({ isTextOpen: true });
    }

    onCrossClick() {
        this.setState({ isTextOpen: false });
    }

    deleteItem() {}

    changeDragState(obj) {
        this.setState(obj);
    }

    render() {
        const { isTextOpen } = this.state;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'edit_container' },
            this.pictures.sort((x, y) => x.order - y.order).map(p => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Card__["a" /* default */], {
                key: p.id,
                picture: p,
                pictures: this.pictures,
                openDetails: () => this.openDetails(),
                deleteItem: () => this.deleteItem(),
                replaceImage: target => this.replaceImage(target),
                isTextOpen: isTextOpen,
                changeDragState: obj => this.changeDragState(obj),
                dragState: this.state
            })),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__fileInput_FileInput__["a" /* default */], { className: 'new_image', disabled: isTextOpen }),
            isTextOpen && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'new_text', ref: t => this.text = t },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["f" /* SaveIcon */], { className: 'save_icon' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["a" /* CrossIcon */], { className: 'cross_icon', onClick: () => this.onCrossClick() })
            )
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (EditAlbum);

/***/ })

})
//# sourceMappingURL=0.ca98ece87a5cda006d7f.hot-update.js.map