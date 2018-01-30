webpackHotUpdate(0,{

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__picture_Picture__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux_es_connect_connect__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_albumActions__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loaders__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loaders___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_loaders__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__albumContainer_less__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__albumContainer_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__albumContainer_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_loaders_css_src_animations_ball_grid_pulse_scss__ = __webpack_require__(221);
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
        let loader = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_loaders___default.a, { type: "ball-grid-pulse" });
        return loader;
        if (!this.props.albums) return loader;
        const pictures = this.props.albums.map(album => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__picture_Picture__["a" /* default */], { key: album._id,
            animation: "fade",
            album: album
        }));
        return pictures;
    }
}) || _class);


/* harmony default export */ __webpack_exports__["a"] = (AlbumContainer);

/***/ }),

/***/ 204:
false,

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "@-webkit-keyframes ball-grid-pulse {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  50% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    opacity: 0.7; }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; } }\n\n@keyframes ball-grid-pulse {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  50% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    opacity: 0.7; }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; } }\n\n.ball-grid-pulse {\n  width: 57px; }\n  .ball-grid-pulse > div:nth-child(1) {\n    -webkit-animation-delay: 0.69s;\n            animation-delay: 0.69s;\n    -webkit-animation-duration: 1.03s;\n            animation-duration: 1.03s; }\n  .ball-grid-pulse > div:nth-child(2) {\n    -webkit-animation-delay: -0.14s;\n            animation-delay: -0.14s;\n    -webkit-animation-duration: 0.63s;\n            animation-duration: 0.63s; }\n  .ball-grid-pulse > div:nth-child(3) {\n    -webkit-animation-delay: 0.23s;\n            animation-delay: 0.23s;\n    -webkit-animation-duration: 0.78s;\n            animation-duration: 0.78s; }\n  .ball-grid-pulse > div:nth-child(4) {\n    -webkit-animation-delay: 0.05s;\n            animation-delay: 0.05s;\n    -webkit-animation-duration: 1.13s;\n            animation-duration: 1.13s; }\n  .ball-grid-pulse > div:nth-child(5) {\n    -webkit-animation-delay: 0.1s;\n            animation-delay: 0.1s;\n    -webkit-animation-duration: 0.98s;\n            animation-duration: 0.98s; }\n  .ball-grid-pulse > div:nth-child(6) {\n    -webkit-animation-delay: 0.35s;\n            animation-delay: 0.35s;\n    -webkit-animation-duration: 1.38s;\n            animation-duration: 1.38s; }\n  .ball-grid-pulse > div:nth-child(7) {\n    -webkit-animation-delay: 0.36s;\n            animation-delay: 0.36s;\n    -webkit-animation-duration: 1.23s;\n            animation-duration: 1.23s; }\n  .ball-grid-pulse > div:nth-child(8) {\n    -webkit-animation-delay: 0.55s;\n            animation-delay: 0.55s;\n    -webkit-animation-duration: 1.24s;\n            animation-duration: 1.24s; }\n  .ball-grid-pulse > div:nth-child(9) {\n    -webkit-animation-delay: 0.5s;\n            animation-delay: 0.5s;\n    -webkit-animation-duration: 1.1s;\n            animation-duration: 1.1s; }\n  .ball-grid-pulse > div {\n    background-color: #fff;\n    width: 15px;\n    height: 15px;\n    border-radius: 100%;\n    margin: 2px;\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n    display: inline-block;\n    float: left;\n    -webkit-animation-name: ball-grid-pulse;\n            animation-name: ball-grid-pulse;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    -webkit-animation-delay: 0;\n            animation-delay: 0; }\n", ""]);

// exports


/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(220);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(220, function() {
			var newContent = __webpack_require__(220);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 44:
false

})
//# sourceMappingURL=0.18506242c02f4d99d6ff.hot-update.js.map