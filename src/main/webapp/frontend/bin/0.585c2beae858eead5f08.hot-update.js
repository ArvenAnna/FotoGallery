webpackHotUpdate(0,{

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icons__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_less__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__dialog_less__);




let Dialog = class Dialog extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'Dialog' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icons__["a" /* CrossIcon */], { className: 'cross', onClick: this.props.onClose }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'Dialog_text' },
                this.props.text
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'button',
                { className: 'Dialog_ok_button', onClick: this.props.onClick },
                'ok'
            )
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (Dialog);

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

throw new Error("Module build failed: \n\n    color: @dialog_text;\n    background-color: @add_album_bg;\n                    ^\nVariable @add_album_bg is undefined\n      in /home/hanna/My/Gallery/FotoGallery/src/main/webapp/frontend/components/dialog/dialog.less (line 29, column 22)");

/***/ })

})
//# sourceMappingURL=0.585c2beae858eead5f08.hot-update.js.map