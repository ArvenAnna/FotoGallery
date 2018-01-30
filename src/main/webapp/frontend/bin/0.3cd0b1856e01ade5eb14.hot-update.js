webpackHotUpdate(0,{

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editCanvas_less__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editCanvas_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editCanvas_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ImageRotater__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ImageRotater___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ImageRotater__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__HttpService__ = __webpack_require__(16);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





const routesModule = __webpack_require__(17);


let EditCanvas = class EditCanvas extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(props) {
        super(props);
        this.state = {
            angle: 0,
            width: 200,
            height: 200
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
        const newAngle = this.state.angle + 90;
        this.calculateParameters(newAngle);
    }

    calculateParameters(newAngle) {
        if (newAngle % 180 == 0) {
            this.setState({
                width: parseInt(this.naturalWidth * this.state.height / this.naturalHeight),
                height: 200,
                angle: newAngle
            });
        } else {
            this.setState({
                // height: parseInt(this.naturalHeight * this.state.height / this.naturalWidth),
                // width: 200,
                width: parseInt(this.naturalHeight * this.state.height / this.naturalWidth),
                height: 200,
                angle: newAngle
            });
        }
    }

    onLoad(imgInfo) {
        this.naturalWidth = imgInfo.resource.naturalWidth;
        this.naturalHeight = imgInfo.resource.naturalHeight;

        this.calculateParameters(this.state.angle);
        // this.setState({
        //     width: imgInfo.resource.naturalWidth * this.state.height / imgInfo.resource.naturalHeight,
        // });
    }

    onChangeImage() {
        console.log('===========');
    }

    render() {
        const { image } = this.props;
        const { angle, width, height } = this.state;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'Edit_canvas' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ImageRotater__["default"], {
                ref: ae => this.avatar = ae,
                image: image,
                rotate: angle,
                width: width,
                height: height,
                onLoadSuccess: imgInfo => this.onLoad(imgInfo)
                //onImageChange={() => this.onChangeImage()}
                // onDropFile={() => this.onChangeImage()}
                // onImageReady={() => this.onChangeImage()}
                //
                // onPositionChange={() => this.onChangeImage()}

            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons__["f" /* RotateIcon */], { className: 'rotate_icon', onClick: () => this.rotateImage() }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons__["g" /* SaveIcon */], { className: 'save_icon', onClick: () => this.getEditedImage() })
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (EditCanvas);

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: Unexpected token (300:8)\n\n\u001b[0m \u001b[90m 298 | \u001b[39m    render () {\n \u001b[90m 299 | \u001b[39m        \u001b[36mif\u001b[39m(\u001b[33m!\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mstate\u001b[33m.\u001b[39mimage)\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 300 | \u001b[39m        \u001b[36mconst\u001b[39m dimensions \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mgetDimensions()\n \u001b[90m     | \u001b[39m        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 301 | \u001b[39m        \u001b[36mconst\u001b[39m defaultStyle \u001b[33m=\u001b[39m {\n \u001b[90m 302 | \u001b[39m            width\u001b[33m:\u001b[39m dimensions\u001b[33m.\u001b[39mcanvas\u001b[33m.\u001b[39mwidth\u001b[33m,\u001b[39m\n \u001b[90m 303 | \u001b[39m            height\u001b[33m:\u001b[39m dimensions\u001b[33m.\u001b[39mcanvas\u001b[33m.\u001b[39mheight\u001b[33m,\u001b[39m\u001b[0m\n");

/***/ })

})
//# sourceMappingURL=0.3cd0b1856e01ade5eb14.hot-update.js.map