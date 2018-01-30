webpackHotUpdate(0,{

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_less__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__map_less__);




let Map = class Map extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(props) {
        super(props);
    }

    onCrossClick() {
        this.props.close();
    }

    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'map_container' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icons__["a" /* CrossIcon */], { className: 'cross', onClick: () => this.onCrossClick() })
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (Map);

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".map_container {\n  height: 80%;\n  width: 100%;\n}\n.map_container .cross {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  z-index: 1;\n  width: 2rem;\n  height: 2rem;\n  fill: white;\n  background-color: rgba(0, 0, 0, 0.7);\n  padding: 3px;\n}\n", ""]);

// exports


/***/ })

})
//# sourceMappingURL=0.b5d4018c396053fc9155.hot-update.js.map