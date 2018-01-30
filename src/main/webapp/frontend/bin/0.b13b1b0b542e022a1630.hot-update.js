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
                containerClassName: "pagination",
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

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".app_container {\n  margin: 2rem 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.app_container .app_page {\n  background-color: black;\n  box-shadow: 0px 0px 5px 5px black;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[4];\n      grid-template-columns: repeat(4, 1fr);\n  -ms-grid-column-align: stretch;\n      justify-items: stretch;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  z-index: 0;\n}\n.app_container .app_page .pagination {\n  -ms-grid-column: 1;\n      grid-column-start: 1;\n  grid-column-end: 5;\n  color: white;\n  cursor: pointer;\n}\n.app_container .app_page .pagination .arrow {\n  fill: white;\n  height: 10px;\n  width: 10px;\n}\n.app_container .app_page .pagination .P_link_page {\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  line-height: 20px;\n  vertical-align: middle;\n  border: 1px solid white;\n}\n.app_container .app_page .pagination .P_page,\n.app_container .app_page .pagination .P_prev_page,\n.app_container .app_page .pagination .P_next_page {\n  display: inline-block;\n  margin: 2px;\n  text-align: center;\n  vertical-align: middle;\n}\n.app_container .app_page .pagination .P_link_prev_page:focus,\n.app_container .app_page .pagination .P_link_next_page:focus {\n  outline: none;\n}\n.app_container .app_page .pagination .active {\n  color: violet;\n  font-weight: 700;\n}\n.app_container .app_page .pagination .disabled {\n  color: #333333;\n  cursor: default;\n}\n.app_container .app_page .pagination .disabled .arrow {\n  fill: #333333;\n}\n@media screen and (max-width: 1400px) {\n  .app_container .app_page {\n    -ms-grid-columns: (1fr)[3];\n        grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media screen and (max-width: 1000px) {\n  .app_container .app_page {\n    -ms-grid-columns: (1fr)[2];\n        grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media screen and (max-width: 700px) {\n  .app_container .app_page {\n    -ms-grid-columns: (1fr)[1];\n        grid-template-columns: repeat(1, 1fr);\n  }\n}\n.app_container .app_page .Data_loader {\n  -ms-grid-column: 1;\n      grid-column-start: 1;\n  grid-column-end: 5;\n}\n@media screen and (max-width: 1400px) {\n  .app_container .app_page .Data_loader {\n    grid-column-end: 4;\n  }\n}\n@media screen and (max-width: 1000px) {\n  .app_container .app_page .Data_loader {\n    grid-column-end: 3;\n  }\n}\n@media screen and (max-width: 700px) {\n  .app_container .app_page .Data_loader {\n    grid-column-end: 2;\n  }\n}\n.app_container .app_page .Data_loader .loader-inner {\n  margin: auto;\n}\n.app_container .app_page .header_menu {\n  -ms-grid-column: 1;\n      grid-column-start: 1;\n  grid-column-end: 3;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n@media screen and (max-width: 1400px) {\n  .app_container .app_page .header_menu {\n    grid-column-end: 3;\n  }\n}\n@media screen and (max-width: 1000px) {\n  .app_container .app_page .header_menu {\n    grid-column-end: 2;\n  }\n}\n@media screen and (max-width: 700px) {\n  .app_container .app_page .header_menu {\n    grid-column-end: 1;\n  }\n}\n.app_container .app_page .header_menu .menu_item {\n  padding: 1rem;\n  cursor: pointer;\n  text-shadow: 2px 2px rgba(238, 130, 238, 0.5);\n  font-size: 1rem;\n}\n.app_container .app_page .header_menu .menu_item:hover {\n  color: rgba(238, 130, 238, 0.5);\n  text-shadow: none;\n}\n.app_container .app_page .header_menu .menu_item:hover a {\n  color: rgba(238, 130, 238, 0.5);\n}\n.app_container .app_page .header_menu .menu_item a {\n  text-decoration: none;\n  color: white;\n}\n.app_container .app_page .search_menu {\n  -ms-grid-column: 4;\n      grid-column-start: 4;\n  padding: 1rem;\n  text-shadow: 2px 2px rgba(238, 130, 238, 0.5);\n  font-size: 1rem;\n  text-align: right;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 15px;\n  z-index: 40;\n}\n@media screen and (max-width: 1400px) {\n  .app_container .app_page .search_menu {\n    -ms-grid-column: 3;\n        grid-column-start: 3;\n  }\n}\n@media screen and (max-width: 1000px) {\n  .app_container .app_page .search_menu {\n    -ms-grid-column: 2;\n        grid-column-start: 2;\n  }\n}\n@media screen and (max-width: 700px) {\n  .app_container .app_page .search_menu {\n    -ms-grid-column: 1;\n        grid-column-start: 1;\n    text-align: left;\n  }\n}\n.app_container .app_page .search_menu .search_input {\n  background-color: #232326;\n  color: white;\n  padding-left: 3px;\n  border: none;\n  box-shadow: 0px 0px 2px 2px;\n  margin: 4px;\n}\n.app_container .app_page .search_menu .search_input:focus {\n  outline: none;\n  background-color: #54545b;\n}\n.app_container .app_page .image_main_wrapper {\n  padding: 1rem;\n  height: 200px;\n  width: 300px;\n}\n.app_container .app_page .image_main_wrapper .image_wrapper {\n  height: 200px;\n  width: 300px;\n}\n.app_container .app_page .image_main_wrapper .image_wrapper .image {\n  height: 200px;\n  width: 300px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.app_container .app_page .image_main_wrapper .image_wrapper .overlay .overlay_top svg {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.app_container .app_page .image_main_wrapper .image_wrapper .overlay .overlay_bottom_text {\n  font-size: 1.5rem;\n  margin: 0.5rem;\n}\n", ""]);

// exports


/***/ })

})
//# sourceMappingURL=0.b13b1b0b542e022a1630.hot-update.js.map