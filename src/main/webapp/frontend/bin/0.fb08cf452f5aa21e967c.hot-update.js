webpackHotUpdate(0,{

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editCanvas_less__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editCanvas_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editCanvas_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_avatar_editor__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_avatar_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_avatar_editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__HttpService__ = __webpack_require__(16);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





const routesModule = __webpack_require__(17);


let EditCanvas = class EditCanvas extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(props) {
        super(props);
        this.state = {
            angle: 0
        };
    }

    getEditedImage() {
        const { album, image } = this.props;
        this.avatar.getImage().toBlob(img => {
            let name = image.split('/');
            name = name[name.length - 1];
            const file = new File([img], name);

            __WEBPACK_IMPORTED_MODULE_4__HttpService__["a" /* default */].sendFile(routesModule.routes.UPLOAD_FOTO, file).then(downloadedFoto => {
                __WEBPACK_IMPORTED_MODULE_4__HttpService__["a" /* default */].doPost(routesModule.routes.FOTO_ROUTE, {
                    src: downloadedFoto.src,
                    album: album._id
                }).then(result => {
                    const newPictures = [...album.images];
                    newPictures.push(result);
                    const newAlbum = Object.assign({}, _extends({}, album, {
                        images: newPictures
                    }));

                    this.props.cleanImage({
                        imageDownloaded: null,
                        album: newAlbum
                    });
                });
            });
        });
    }

    rotateImage() {
        this.setState({
            angle: this.state.angle + 90
        });
    }

    render() {
        const { image } = this.props;
        const { angle } = this.state;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'Edit_canvas' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_avatar_editor___default.a, {
                ref: ae => this.avatar = ae,
                image: image,
                rotate: angle

            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons__["f" /* RotateIcon */], { className: 'rotate_icon', onClick: () => this.rotateImage() }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons__["g" /* SaveIcon */], { className: 'save_icon', onClick: () => this.getEditedImage() })
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (EditCanvas);

/***/ })

})
//# sourceMappingURL=0.fb08cf452f5aa21e967c.hot-update.js.map