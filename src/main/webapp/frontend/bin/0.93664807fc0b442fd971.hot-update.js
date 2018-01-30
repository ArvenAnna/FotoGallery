webpackHotUpdate(0,{

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_es_connect_connect__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__ = __webpack_require__(157);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class;









const routesModule = __webpack_require__(177);

let EditAlbum = (_dec = Object(__WEBPACK_IMPORTED_MODULE_6_react_redux_es_connect_connect__["a" /* default */])(store => ({}), {
    deleteFotoFromAlbum: __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__["a" /* deleteFotoFromAlbum */],
    saveFotoDescription: __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__["c" /* saveFotoDescription */]
}), _dec(_class = class EditAlbum extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(props) {
        super(props);
        this.state = {
            dragStarted: false,
            dragFrom: null,
            dragFromEl: null,
            dragObj: null,
            openPicture: null,
            openedAlbum: false,
            album: null
        };
    }

    componentDidMount() {
        __WEBPACK_IMPORTED_MODULE_5__HttpService__["a" /* default */].doGet(routesModule.routes.GET_ALBUM(this.props.match.params.id)).then(result => this.setState({ album: result }));
    }

    openDetails(picture) {
        this.setState({ openPicture: picture });
    }

    openAlbumDetails() {
        this.setState({ openedAlbum: true });
    }

    onCrossClick() {
        this.setState({ openPicture: null, openedAlbum: false });
    }

    deleteItem(picture) {
        this.props.deleteFotoFromAlbum(picture.id, this.state.album.id);
        const newPictures = this.state.album.images.filter(p => p.id != picture.id);
        const newAlbum = Object.assign({}, _extends({}, this.state.album, {
            images: newPictures
        }));
        this.setState({ album: newAlbum });
    }

    changeDragState(obj) {
        this.setState(obj);
    }

    saveFotoDescription(picture) {
        const newPictures = [...this.state.album.images];
        const editedPicture = this.state.album.images.find(p => p.id == picture.id);
        if (this.pinput.value) editedPicture.name = this.pinput.value;
        if (this.ptextarea.value) editedPicture.text = this.ptextarea.value;

        this.props.saveFotoDescription(this.state.album.id, editedPicture);

        const newAlbum = Object.assign({}, _extends({}, this.state.album, {
            images: newPictures
        }));
        this.setState({ album: newAlbum, openPicture: null });
    }

    saveAlbumDescription() {
        const editedAlbum = Object.assign({}, _extends({}, this.state.album));
        if (this.ainput.value) editedAlbum.name = this.ainput.value;
        if (this.atextarea.value) editedAlbum.description = this.atextarea.value;

        //this.props.saveAlbumDescription(this.state.album.id, editedPicture);

        this.setState({ album: editedAlbum, openedAlbum: false });
    }

    render() {
        const { openPicture, album, openedAlbum } = this.state;
        if (album) {
            console.dir(album.images);
        }
        return album && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'edit_container' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'edit_album_card' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'album_image', src: album.images[0].src }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'album_name', onClick: () => this.openAlbumDetails() },
                    album.name
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["a" /* CrossIcon */], { className: 'cross_icon', onClick: () => this.onCrossClick() })
            ),
            album.images.sort((x, y) => x.order - y.order).map(p => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Card__["a" /* default */], {
                key: p.id,
                picture: p,
                pictures: album.images,
                openDetails: p => this.openDetails(p),
                deleteItem: p => this.deleteItem(p),
                replaceImage: target => this.replaceImage(target),
                openPicture: openPicture,
                changeDragState: obj => this.changeDragState(obj),
                dragState: this.state
            })),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__fileInput_FileInput__["a" /* default */], { className: 'new_image', disabled: openPicture, label: 'Choose new foto' }),
            openPicture && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'new_text' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { defaultValue: openPicture.name, ref: i => this.pinput = i }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { defaultValue: openPicture.text, ref: t => this.ptextarea = t }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["f" /* SaveIcon */], { className: 'save_icon', onClick: () => this.saveFotoDescription(openPicture) }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["a" /* CrossIcon */], { className: 'cross_icon', onClick: () => this.onCrossClick() })
            ),
            openedAlbum && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'new_text' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { defaultValue: album.name, ref: i => this.ainput = i }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { defaultValue: album.description, ref: t => this.atextarea = t }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["f" /* SaveIcon */], { className: 'save_icon', onClick: () => this.saveAlbumDescription() }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["a" /* CrossIcon */], { className: 'cross_icon', onClick: () => this.onCrossClick() })
            )
        );
    }
}) || _class);


/* harmony default export */ __webpack_exports__["a"] = (EditAlbum);

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".edit_container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 2rem;\n  position: relative;\n}\n.edit_container .drag_container {\n  position: relative;\n  left: 0;\n  top: 0;\n  width: 300px;\n  height: 200px;\n  margin: 0.5rem;\n  z-index: 0;\n}\n.edit_container .drag_container .cross_icon,\n.edit_container .drag_container .edit_icon {\n  position: absolute;\n  fill: white;\n  width: 1rem;\n  height: 1rem;\n  top: 0.2rem;\n}\n.edit_container .drag_container .cross_icon {\n  right: 0.2rem;\n}\n.edit_container .drag_container .edit_icon {\n  right: 1.5rem;\n}\n.edit_container .drag_container .text_description {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: 0 0.3rem;\n  font-size: 16px;\n  background-color: rgba(0, 0, 0, 0.4);\n  color: white;\n}\n.edit_container .drag_image {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n.edit_container .file_input_wrapper {\n  width: 300px;\n  height: 200px;\n  margin: 0.5rem;\n}\n.edit_container .edit_album_card {\n  position: relative;\n  width: 300px;\n  height: 200px;\n  margin: 0.5rem;\n  color: white;\n  box-shadow: 0 0 0.3rem 0.1rem white;\n}\n.edit_container .edit_album_card .album_image {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.edit_container .edit_album_card .album_name {\n  position: absolute;\n  bottom: 0.3rem;\n  left: 0.3rem;\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.edit_container .edit_album_card .cross_icon {\n  width: 3rem;\n  height: 3rem;\n}\n.edit_container .new_text {\n  position: absolute;\n  width: 70%;\n  height: 50%;\n}\n.edit_container .new_text .save_icon,\n.edit_container .new_text .cross_icon {\n  position: absolute;\n  fill: white;\n  width: 2rem;\n  height: 2rem;\n  top: -2.2rem;\n}\n.edit_container .new_text .cross_icon {\n  right: 0;\n}\n.edit_container .new_text .save_icon {\n  right: 3rem;\n}\n.edit_container .new_text textarea,\n.edit_container .new_text input {\n  background-color: #232326;\n  border-radius: 0.3rem;\n  font-size: 1.5rem;\n  color: white;\n  padding: 0.5rem;\n  line-height: 2rem;\n  border: white solid 1px;\n  overflow-x: hidden;\n  resize: none;\n  width: 100%;\n}\n.edit_container .new_text textarea:focus,\n.edit_container .new_text input:focus {\n  outline: none;\n  background-color: #54545b;\n}\n", ""]);

// exports


/***/ })

})
//# sourceMappingURL=0.93664807fc0b442fd971.hot-update.js.map