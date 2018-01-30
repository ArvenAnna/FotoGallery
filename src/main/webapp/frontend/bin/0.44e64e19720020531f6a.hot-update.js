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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__svg_left_arrow_svg__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__svg_left_arrow_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__svg_left_arrow_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__svg_right_arrow_svg__ = __webpack_require__(185);
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
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { key: "paginate", className: "pagination_container" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_paginate___default.a, {
                    previousLabel: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__svg_left_arrow_svg___default.a, null),
                    nextLabel: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__svg_right_arrow_svg___default.a, null),
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
                    containerClassName: "pagination",
                    pageClassName: "P_page",
                    pageLinkClassName: "P_link_page",
                    previousClassName: "P_prev_page",
                    nextClassName: "P_next_page",
                    subContainerClassName: "pages_pagination",
                    activeClassName: "active" })
            )
        );
    }
}) || _class);


/* harmony default export */ __webpack_exports__["a"] = (AlbumContainer);

/***/ })

})
//# sourceMappingURL=0.44e64e19720020531f6a.hot-update.js.map