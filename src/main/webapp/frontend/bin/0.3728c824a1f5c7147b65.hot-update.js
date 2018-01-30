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
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ImageRotater__["a" /* default */], {
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;





const isFileAPISupported = typeof File !== 'undefined';

const pixelRatio = typeof window !== 'undefined' && window.devicePixelRatio ? window.devicePixelRatio : 1;

let AvatarEditor = (_temp2 = _class = class AvatarEditor extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.state = {
            my: null,
            mx: null,
            image: {
                x: 0.5,
                y: 0.5
            }
        }, this.setCanvas = canvas => {
            this.canvas = canvas;
        }, _temp;
    }

    isVertical() {
        return this.props.rotate % 180 !== 0;
    }

    getBorders(border = this.props.border) {
        return Array.isArray(border) ? border : [border, border];
    }

    getDimensions() {
        const { width, height, rotate, border } = this.props;

        const canvas = {};

        const [borderX, borderY] = this.getBorders(border);

        const canvasWidth = width;
        const canvasHeight = height;

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        canvas.width += borderX * 2;
        canvas.height += borderY * 2;

        return {
            canvas,
            rotate,
            width,
            height,
            border
        };
    }

    getImage() {
        // get relative coordinates (0 to 1)
        const cropRect = this.getCroppingRect();
        const image = this.state.image;

        // get actual pixel coordinates
        cropRect.x = image.resource.width;
        cropRect.y = image.resource.height;
        cropRect.width = image.resource.width;
        cropRect.height = image.resource.height;

        // create a canvas with the correct dimensions
        const canvas = document.createElement('canvas');

        if (this.isVertical()) {
            canvas.width = cropRect.height;
            canvas.height = cropRect.width;
        } else {
            canvas.width = cropRect.width;
            canvas.height = cropRect.height;
        }

        // draw the full-size image at the correct position,
        // the image gets truncated to the size of the canvas.
        const context = canvas.getContext('2d');

        context.translate(canvas.width / 2, canvas.height / 2);
        context.rotate(this.props.rotate * Math.PI / 180);
        context.translate(-(canvas.width / 2), -(canvas.height / 2));

        if (this.isVertical()) {
            context.translate((canvas.width - canvas.height) / 2, (canvas.height - canvas.width) / 2);
        }

        context.drawImage(image.resource, -cropRect.x, -cropRect.y);

        return canvas;
    }

    /**
     * Get the image scaled to original canvas size.
     * This was default in 4.x and is now kept as a legacy method.
     */
    getImageScaledToCanvas() {
        const { width, height } = this.getDimensions();

        const canvas = document.createElement('canvas');

        if (this.isVertical()) {
            canvas.width = height;
            canvas.height = width;
        } else {
            canvas.width = width;
            canvas.height = height;
        }

        // don't paint a border here, as it is the resulting image
        this.paintImage(canvas.getContext('2d'), this.state.image, 0, 1);

        return canvas;
    }

    getXScale() {
        const canvasAspect = this.props.width / this.props.height;
        const imageAspect = this.state.image.width / this.state.image.height;

        return Math.min(1, canvasAspect / imageAspect);
    }

    getYScale() {
        const canvasAspect = this.props.height / this.props.width;
        const imageAspect = this.state.image.height / this.state.image.width;

        return Math.min(1, canvasAspect / imageAspect);
    }

    getCroppingRect() {
        const position = {
            x: this.state.image.x,
            y: this.state.image.y
        };
        const width = 1 / this.props.scale * this.getXScale();
        const height = 1 / this.props.scale * this.getYScale();

        const croppingRect = {
            x: position.x - width / 2,
            y: position.y - height / 2,
            width,
            height
        };

        let xMin = 0;
        let xMax = 1 - croppingRect.width;
        let yMin = 0;
        let yMax = 1 - croppingRect.height;

        // If the cropping rect is larger than the image, then we need to change
        // our maxima & minima for x & y to allow the image to appear anywhere up
        // to the very edge of the cropping rect.
        const isLargerThanImage = width > 1 || height > 1;

        if (isLargerThanImage) {
            xMin = -croppingRect.width;
            xMax = 1;
            yMin = -croppingRect.height;
            yMax = 1;
        }

        return _extends({}, croppingRect, {
            x: Math.max(xMin, Math.min(croppingRect.x, xMax)),
            y: Math.max(yMin, Math.min(croppingRect.y, yMax))
            //
            // const croppingRect = {
            //     x: this.state.image.x,
            //     y: this.state.image.y,
            //     width,
            //     height
            // }
            //
            // return croppingRect;
        });
    }

    isDataURL(str) {
        if (str === null) {
            return false;
        }
        const regex = /^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i;
        return !!str.match(regex);
    }

    loadImage(image) {
        if (isFileAPISupported && image instanceof File) {
            this.loadImageFile(image);
        } else if (typeof image === 'string') {
            this.loadImageURL(image);
        }
    }

    loadImageURL(imageURL) {
        const imageObj = new Image();
        imageObj.onload = this.handleImageReady.bind(this, imageObj);
        imageObj.onerror = this.props.onLoadFailure;
        if (!this.isDataURL(imageURL) && this.props.crossOrigin) {
            imageObj.crossOrigin = this.props.crossOrigin;
        }
        imageObj.src = imageURL;
    }

    loadImageFile(imageFile) {
        const reader = new FileReader();
        reader.onload = e => this.loadImageURL(e.target.result);
        reader.readAsDataURL(imageFile);
    }

    componentDidMount() {
        if (this.props.image) {
            this.loadImage(this.props.image);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const canvas = __WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.findDOMNode(this.canvas);
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        this.paintImage(context, this.state.image, this.props.border);

        if (prevProps.image !== this.props.image || prevProps.width !== this.props.width || prevProps.height !== this.props.height || prevProps.scale !== this.props.scale || prevProps.rotate !== this.props.rotate || prevState.my !== this.state.my || prevState.mx !== this.state.mx || prevState.image.x !== this.state.image.x || prevState.image.y !== this.state.image.y) {
            this.props.onImageChange();
        }
    }

    handleImageReady(image) {
        const imageState = this.getInitialSize(image.width, image.height);
        imageState.resource = image;
        imageState.x = 0.5;
        imageState.y = 0.5;
        this.setState({ image: imageState }, this.props.onImageReady);
        this.props.onLoadSuccess(imageState);
    }

    getInitialSize(width, height) {
        let newHeight;
        let newWidth;

        const dimensions = this.getDimensions();
        const canvasRatio = dimensions.height / dimensions.width;
        const imageRatio = height / width;

        if (canvasRatio > imageRatio) {
            newHeight = this.getDimensions().height;
            newWidth = width * (newHeight / height);
        } else {
            newWidth = this.getDimensions().width;
            newHeight = height * (newWidth / width);
        }

        return {
            height: newHeight,
            width: newWidth
        };
    }

    componentWillReceiveProps(newProps) {
        if (newProps.image && this.props.image !== newProps.image || this.props.width !== newProps.width || this.props.height !== newProps.height) {
            this.loadImage(newProps.image);
        }
    }

    paintImage(context, image, border, scaleFactor = pixelRatio) {
        if (image.resource) {

            const width = image.width * this.props.scale;
            const height = image.height * this.props.scale;

            context.save();

            context.translate(context.canvas.width / 2, context.canvas.height / 2);
            context.rotate(this.props.rotate * Math.PI / 180);
            context.translate(-(context.canvas.width / 2), -(context.canvas.height / 2));

            if (this.isVertical()) {
                context.translate((context.canvas.width - context.canvas.height) / 2, (context.canvas.height - context.canvas.width) / 2);
            }

            context.scale(scaleFactor, scaleFactor);

            context.globalCompositeOperation = 'destination-over';
            context.drawImage(image.resource, 0, 0, width, height);

            context.restore();
        }
    }

    render() {
        const dimensions = this.getDimensions();
        const defaultStyle = {
            width: dimensions.canvas.width,
            height: dimensions.canvas.height,
            cursor: 'grab'
        };

        const attributes = {
            width: dimensions.canvas.width * pixelRatio,
            height: dimensions.canvas.height * pixelRatio,
            style: _extends({}, defaultStyle, this.props.style)
        };

        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('canvas', _extends({ ref: this.setCanvas }, attributes));
    }
}, _class.propTypes = {
    scale: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
    rotate: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
    image: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string, ...(isFileAPISupported ? [__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.instanceOf(File)] : [])]),
    border: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number)]),
    borderRadius: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
    width: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
    height: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
    color: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number),
    style: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
    crossOrigin: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf(['', 'anonymous', 'use-credentials']),

    onLoadFailure: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
    onLoadSuccess: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
    onImageReady: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
    onImageChange: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
    onPositionChange: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,

    disableDrop: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool
}, _class.defaultProps = {
    disableDrop: false,
    scale: 1,
    rotate: 0,
    border: 25,
    borderRadius: 0,
    width: 200,
    height: 200,
    color: [0, 0, 0, 0.5],
    style: {},
    onLoadFailure() {},
    onLoadSuccess() {},
    onImageReady() {},
    onImageChange() {},
    onPositionChange() {}
}, _temp2);


/* harmony default export */ __webpack_exports__["a"] = (AvatarEditor);

/***/ })

})
//# sourceMappingURL=0.3728c824a1f5c7147b65.hot-update.js.map