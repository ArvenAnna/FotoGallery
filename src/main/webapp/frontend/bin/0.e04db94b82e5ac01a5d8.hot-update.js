webpackHotUpdate(0,{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Icons__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fileInput_FileInput__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addNewAlbum_less__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addNewAlbum_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__addNewAlbum_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scroll_Scroll__ = __webpack_require__(29);







const Label = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].span`
  width: 100%;
  margin-bottom: 0.25rem;
`;

let AddNewAlbum = class AddNewAlbum extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
    constructor(props) {
        super(props);
        this.modal = null;
        this.state = {
            height: '100%'
        };
    }

    componentDidMount() {
        window.addEventListener('resize', () => this.calculateModalHeight());
        this.calculateModalHeight();
    }

    calculateModalHeight() {
        var w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            y = w.innerHeight || e.clientHeight || g.clientHeight;

        if (this.modal) {
            const modalStyle = this.modal.currentStyle || window.getComputedStyle(this.modal);
            const height = Math.min(parseInt(y), parseInt(modalStyle.height)) + 'px';
            this.setState({
                height
            });
        }
    }

    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'add_album' },
            ' ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5__scroll_Scroll__["a" /* default */],
                { width: '40%', height: this.state.height, className: 'scroll_container' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'add_album_modal', ref: r => this.modal = r },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons__["a" /* CrossIcon */], { onClick: this.props.closeModal }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        Label,
                        null,
                        'Name'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', null),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        Label,
                        null,
                        'Title image:'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__fileInput_FileInput__["a" /* default */], { label: 'Choose main foto' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        Label,
                        null,
                        'Description'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', null),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'button',
                        null,
                        'ok'
                    )
                )
            )
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (AddNewAlbum);

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






const routesModule = __webpack_require__(177);

let EditAlbum = class EditAlbum extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(props) {
        super(props);
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
        __WEBPACK_IMPORTED_MODULE_5__HttpService__["a" /* default */].doGet(routesModule.routes.GET_ALBUM(this.props.match.params.id)).then(result => this.setState({ pictures: result.images }));
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
            this.state.pictures.sort((x, y) => x.order - y.order).map(p => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Card__["a" /* default */], {
                key: p.id,
                picture: p,
                pictures: this.state.pictures,
                openDetails: () => this.openDetails(),
                deleteItem: () => this.deleteItem(),
                replaceImage: target => this.replaceImage(target),
                isTextOpen: isTextOpen,
                changeDragState: obj => this.changeDragState(obj),
                dragState: this.state
            })),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__fileInput_FileInput__["a" /* default */], { className: 'new_image', disabled: isTextOpen, label: 'Choose new foto' }),
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

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icons__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fileInput_less__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fileInput_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__fileInput_less__);




let FileInput = class FileInput extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'file_input_wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'button',
                null,
                this.props.label
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'file_input_area' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icons__["d" /* MagnifierIcon */], null)
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'file', disabled: this.props.disabled || false })
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (FileInput);

/***/ })

})
//# sourceMappingURL=0.e04db94b82e5ac01a5d8.hot-update.js.map