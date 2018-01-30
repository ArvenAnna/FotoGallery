webpackHotUpdate(0,{

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editCanvas_less__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editCanvas_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editCanvas_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ImageRotater__ = __webpack_require__(197);
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
                height: parseInt(this.naturalHeight * this.state.height / this.naturalWidth),
                width: 200,
                // width: parseInt(this.naturalHeight * this.state.height / this.naturalWidth),
                // height: 200,
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

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;





const parseDOM = str => {
    const parser = typeof DOMParser === 'undefined' ? null : new DOMParser();

    if (!parser) {
        return null;
    }

    return parser.parseFromString(str, 'text/html');
};

const retrieveImageURL = (dataTransferItems, callback) => {
    for (let i = 0; i < dataTransferItems.length; i++) {
        let item = dataTransferItems[i];

        if (item.type === 'text/html') {
            item.getAsString(value => {
                const doc = parseDOM(value);
                const img = doc.querySelector('img');
                if (img && img.src) {
                    callback(img.src);
                }
            });
            break;
        }
    }
};

const isTouchDevice = !!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && ('ontouchstart' in window || navigator.msMaxTouchPoints > 0));

const isFileAPISupported = typeof File !== 'undefined';

const draggableEvents = {
    touch: {
        react: {
            down: 'onTouchStart',
            mouseDown: 'onMouseDown',
            drag: 'onTouchMove',
            drop: 'onTouchEnd',
            move: 'onTouchMove',
            mouseMove: 'onMouseMove',
            up: 'onTouchEnd',
            mouseUp: 'onMouseUp'
        },
        native: {
            down: 'touchstart',
            mouseDown: 'mousedown',
            drag: 'touchmove',
            drop: 'touchend',
            move: 'touchmove',
            mouseMove: 'mousemove',
            up: 'touchend',
            mouseUp: 'mouseup'
        }
    },
    desktop: {
        react: {
            down: 'onMouseDown',
            drag: 'onDragOver',
            drop: 'onDrop',
            move: 'onMouseMove',
            up: 'onMouseUp'
        },
        native: {
            down: 'mousedown',
            drag: 'dragStart',
            drop: 'drop',
            move: 'mousemove',
            up: 'mouseup'
        }
    }
};
const deviceEvents = isTouchDevice ? draggableEvents.touch : draggableEvents.desktop;

const pixelRatio = typeof window !== 'undefined' && window.devicePixelRatio ? window.devicePixelRatio : 1;

// Draws a rounded rectangle on a 2D context.
const drawRoundedRect = (context, x, y, width, height, borderRadius) => {
    if (borderRadius === 0) {
        context.rect(x, y, width, height);
    } else {
        const widthMinusRad = width - borderRadius;
        const heightMinusRad = height - borderRadius;
        context.translate(x, y);
        context.arc(borderRadius, borderRadius, borderRadius, Math.PI, Math.PI * 1.5);
        context.lineTo(widthMinusRad, 0);
        context.arc(widthMinusRad, borderRadius, borderRadius, Math.PI * 1.5, Math.PI * 2);
        context.lineTo(width, heightMinusRad);
        context.arc(widthMinusRad, heightMinusRad, borderRadius, Math.PI * 2, Math.PI * 0.5);
        context.lineTo(borderRadius, height);
        context.arc(borderRadius, heightMinusRad, borderRadius, Math.PI * 0.5, Math.PI);
        context.translate(-x, -y);
    }
};

let AvatarEditor = (_temp2 = _class = class AvatarEditor extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.state = {
            drag: false,
            my: null,
            mx: null,
            image: {
                x: 0.5,
                y: 0.5
            }
        }, this.handleMouseDown = e => {
            e = e || window.event;
            // if e is a touch event, preventDefault keeps
            // corresponding mouse events from also being fired
            // later.
            e.preventDefault();
            this.setState({
                drag: true,
                mx: null,
                my: null
            });
        }, this.handleMouseUp = () => {
            if (this.state.drag) {
                this.setState({ drag: false });
                this.props.onMouseUp();
            }
        }, this.handleMouseMove = e => {
            e = e || window.event;
            if (this.state.drag === false) {
                return;
            }

            const mousePositionX = e.targetTouches ? e.targetTouches[0].pageX : e.clientX;
            const mousePositionY = e.targetTouches ? e.targetTouches[0].pageY : e.clientY;

            const newState = {
                mx: mousePositionX,
                my: mousePositionY
            };

            let rotate = this.props.rotate;

            rotate %= 360;
            rotate = rotate < 0 ? rotate + 360 : rotate;

            if (this.state.mx && this.state.my) {
                const mx = this.state.mx - mousePositionX;
                const my = this.state.my - mousePositionY;

                const width = this.state.image.width * this.props.scale;
                const height = this.state.image.height * this.props.scale;

                let { x: lastX, y: lastY } = this.getCroppingRect();

                lastX *= width;
                lastY *= height;

                // helpers to calculate vectors
                const toRadians = degree => degree * (Math.PI / 180);
                const cos = Math.cos(toRadians(rotate));
                const sin = Math.sin(toRadians(rotate));

                const x = lastX + mx * cos + my * sin;
                const y = lastY + -mx * sin + my * cos;

                const relativeWidth = 1 / this.props.scale * this.getXScale();
                const relativeHeight = 1 / this.props.scale * this.getYScale();

                const position = {
                    x: x / width + relativeWidth / 2,
                    y: y / height + relativeHeight / 2
                };

                this.props.onPositionChange(position);

                newState.image = _extends({}, this.state.image, position);
            }

            this.setState(newState);

            this.props.onMouseMove(e);
        }, this.handleDragOver = e => {
            e = e || window.event;
            e.preventDefault();
        }, this.handleDrop = (e = window.event) => {
            e.stopPropagation();
            e.preventDefault();

            if (e.dataTransfer) {
                const { files, items } = e.dataTransfer;

                if (files && files.length) {
                    this.props.onDropFile(e);
                    this.loadImageFile(files[0]);
                } else if (items && items.length) {
                    retrieveImageUrl(items, src => this.loadImage(src));
                }
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

        if (this.isVertical()) {
            canvas.width = canvasHeight;
            canvas.height = canvasWidth;
        } else {
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
        }

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
        cropRect.x *= image.resource.width;
        cropRect.y *= image.resource.height;
        cropRect.width *= image.resource.width;
        cropRect.height *= image.resource.height;

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
        const position = this.props.position || {
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
        const context = __WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.findDOMNode(this.canvas).getContext('2d');
        if (this.props.image) {
            this.loadImage(this.props.image);
        }
        this.paint(context);
        if (document) {
            const nativeEvents = deviceEvents.native;
            document.addEventListener(nativeEvents.move, this.handleMouseMove, false);
            document.addEventListener(nativeEvents.up, this.handleMouseUp, false);
            if (isTouchDevice) {
                document.addEventListener(nativeEvents.mouseMove, this.handleMouseMove, false);
                document.addEventListener(nativeEvents.mouseUp, this.handleMouseUp, false);
            }
        }
    }

    componentWillUnmount() {
        if (document) {
            const nativeEvents = deviceEvents.native;
            document.removeEventListener(nativeEvents.move, this.handleMouseMove, false);
            document.removeEventListener(nativeEvents.up, this.handleMouseUp, false);
            if (isTouchDevice) {
                document.removeEventListener(nativeEvents.mouseMove, this.handleMouseMove, false);
                document.removeEventListener(nativeEvents.mouseUp, this.handleMouseUp, false);
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const canvas = __WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.findDOMNode(this.canvas);
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        this.paint(context);
        this.paintImage(context, this.state.image, this.props.border);

        if (prevProps.image !== this.props.image || prevProps.width !== this.props.width || prevProps.height !== this.props.height || prevProps.position !== this.props.position || prevProps.scale !== this.props.scale || prevProps.rotate !== this.props.rotate || prevState.my !== this.state.my || prevState.mx !== this.state.mx || prevState.image.x !== this.state.image.x || prevState.image.y !== this.state.image.y) {
            this.props.onImageChange();
        }
    }

    handleImageReady(image) {
        const imageState = this.getInitialSize(image.width, image.height);
        imageState.resource = image;
        imageState.x = 0.5;
        imageState.y = 0.5;
        this.setState({ drag: false, image: imageState }, this.props.onImageReady);
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
            const position = this.calculatePosition(image, border);

            context.save();

            context.translate(context.canvas.width / 2, context.canvas.height / 2);
            context.rotate(this.props.rotate * Math.PI / 180);
            context.translate(-(context.canvas.width / 2), -(context.canvas.height / 2));

            if (this.isVertical()) {
                context.translate((context.canvas.width - context.canvas.height) / 2, (context.canvas.height - context.canvas.width) / 2);
            }

            context.scale(scaleFactor, scaleFactor);

            context.globalCompositeOperation = 'destination-over';
            context.drawImage(image.resource, position.x, position.y, position.width, position.height);

            context.restore();
        }
    }

    calculatePosition(image, border) {
        image = image || this.state.image;

        const [borderX, borderY] = this.getBorders(border);

        const croppingRect = this.getCroppingRect();

        const width = image.width * this.props.scale;
        const height = image.height * this.props.scale;

        let x = -croppingRect.x * width;
        let y = -croppingRect.y * height;

        if (this.isVertical()) {
            x += borderY;
            y += borderX;
        } else {
            x += borderX;
            y += borderY;
        }

        return {
            x,
            y,
            height,
            width
        };
    }

    paint(context) {
        context.save();
        context.scale(pixelRatio, pixelRatio);
        context.translate(0, 0);
        context.fillStyle = 'rgba(' + this.props.color.slice(0, 4).join(',') + ')';

        let borderRadius = this.props.borderRadius;
        const dimensions = this.getDimensions();
        const [borderSizeX, borderSizeY] = this.getBorders(dimensions.border);
        const height = dimensions.canvas.height;
        const width = dimensions.canvas.width;

        // clamp border radius between zero (perfect rectangle) and half the size without borders (perfect circle or "pill")
        borderRadius = Math.max(borderRadius, 0);
        borderRadius = Math.min(borderRadius, width / 2 - borderSizeX, height / 2 - borderSizeY);

        context.beginPath();
        // inner rect, possibly rounded
        drawRoundedRect(context, borderSizeX, borderSizeY, width - borderSizeX * 2, height - borderSizeY * 2, borderRadius);
        context.rect(width, 0, -width, height); // outer rect, drawn "counterclockwise"
        context.fill('evenodd');

        context.restore();
    }

    render() {
        const dimensions = this.getDimensions();
        const defaultStyle = {
            width: dimensions.canvas.width,
            height: dimensions.canvas.height,
            cursor: this.state.drag ? 'grabbing' : 'grab'
        };

        const attributes = {
            width: dimensions.canvas.width * pixelRatio,
            height: dimensions.canvas.height * pixelRatio,
            style: _extends({}, defaultStyle, this.props.style)
        };

        attributes[deviceEvents.react.down] = this.handleMouseDown;
        attributes[deviceEvents.react.drag] = this.handleDragOver;
        if (!this.props.disableDrop) {
            attributes[deviceEvents.react.drop] = this.handleDrop;
        }
        if (isTouchDevice) {
            attributes[deviceEvents.react.mouseDown] = this.handleMouseDown;
        }

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
    position: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
        x: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
        y: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number
    }),
    color: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number),
    style: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
    crossOrigin: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf(['', 'anonymous', 'use-credentials']),

    onDropFile: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
    onLoadFailure: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
    onLoadSuccess: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
    onImageReady: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
    onImageChange: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
    onMouseUp: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
    onMouseMove: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
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
    onDropFile() {},
    onLoadFailure() {},
    onLoadSuccess() {},
    onImageReady() {},
    onImageChange() {},
    onMouseUp() {},
    onMouseMove() {},
    onPositionChange() {}
}, _temp2);


/* harmony default export */ __webpack_exports__["a"] = (AvatarEditor);

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(2),__webpack_require__(0),__webpack_require__(46)):"function"==typeof define&&define.amd?define(["prop-types","react","react-dom"],t):e.AvatarEditor=t(e.PropTypes,e.React,e.ReactDOM)}(this,function(e,t,o){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}e=e&&e.hasOwnProperty("default")?e.default:e,t=t&&t.hasOwnProperty("default")?t.default:t,o=o&&o.hasOwnProperty("default")?o.default:o;var r=function(e){var t="undefined"==typeof DOMParser?null:new DOMParser;return t?t.parseFromString(e,"text/html"):null},s=function(e,t){for(var o=0;o<e.length;o++){var a=e[o];if("text/html"===a.type){a.getAsString(function(e){var o=r(e).querySelector("img");o&&o.src&&t(o.src)});break}}},h=function(){function e(e,t){var o=[],a=!0,n=!1,i=void 0;try{for(var r,s=e[Symbol.iterator]();!(a=(r=s.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){n=!0,i=e}finally{try{!a&&s.return&&s.return()}finally{if(n)throw i}}return o}return function(t,o){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},c=function(){function e(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,o,a){return o&&e(t.prototype,o),a&&e(t,a),t}}(),d=!("undefined"==typeof window||"undefined"==typeof navigator||!("ontouchstart"in window||navigator.msMaxTouchPoints>0)),p="undefined"!=typeof File,l={touch:{react:{down:"onTouchStart",mouseDown:"onMouseDown",drag:"onTouchMove",drop:"onTouchEnd",move:"onTouchMove",mouseMove:"onMouseMove",up:"onTouchEnd",mouseUp:"onMouseUp"},native:{down:"touchstart",mouseDown:"mousedown",drag:"touchmove",drop:"touchend",move:"touchmove",mouseMove:"mousemove",up:"touchend",mouseUp:"mouseup"}},desktop:{react:{down:"onMouseDown",drag:"onDragOver",drop:"onDrop",move:"onMouseMove",up:"onMouseUp"},native:{down:"mousedown",drag:"dragStart",drop:"drop",move:"mousemove",up:"mouseup"}}},g=d?l.touch:l.desktop,m="undefined"!=typeof window&&window.devicePixelRatio?window.devicePixelRatio:1,v=function(e,t,o,a,n,i){if(0===i)e.rect(t,o,a,n);else{var r=a-i,s=n-i;e.translate(t,o),e.arc(i,i,i,Math.PI,1.5*Math.PI),e.lineTo(r,0),e.arc(r,i,i,1.5*Math.PI,2*Math.PI),e.lineTo(a,s),e.arc(r,s,i,2*Math.PI,.5*Math.PI),e.lineTo(i,n),e.arc(i,s,i,.5*Math.PI,Math.PI),e.translate(-t,-o)}},f=function(e){function r(){var e,t,o,i;a(this,r);for(var h=arguments.length,c=Array(h),d=0;d<h;d++)c[d]=arguments[d];return t=o=n(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(c))),o.state={drag:!1,my:null,mx:null,image:{x:.5,y:.5}},o.handleMouseDown=function(e){(e=e||window.event).preventDefault(),o.setState({drag:!0,mx:null,my:null})},o.handleMouseUp=function(){o.state.drag&&(o.setState({drag:!1}),o.props.onMouseUp())},o.handleMouseMove=function(e){if(e=e||window.event,!1!==o.state.drag){var t=e.targetTouches?e.targetTouches[0].pageX:e.clientX,a=e.targetTouches?e.targetTouches[0].pageY:e.clientY,n={mx:t,my:a},i=o.props.rotate;if(i%=360,i=i<0?i+360:i,o.state.mx&&o.state.my){var r=o.state.mx-t,s=o.state.my-a,h=o.state.image.width*o.props.scale,c=o.state.image.height*o.props.scale,d=o.getCroppingRect(),p=d.x,l=d.y;p*=h,l*=c;var g=function(e){return e*(Math.PI/180)},m=Math.cos(g(i)),v=Math.sin(g(i)),f=l+-r*v+s*m,y={x:(p+r*m+s*v)/h+1/o.props.scale*o.getXScale()/2,y:f/c+1/o.props.scale*o.getYScale()/2};o.props.onPositionChange(y),n.image=u({},o.state.image,y)}o.setState(n),o.props.onMouseMove(e)}},o.handleDragOver=function(e){(e=e||window.event).preventDefault()},o.handleDrop=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.event;if(e.stopPropagation(),e.preventDefault(),e.dataTransfer){var t=e.dataTransfer,a=t.files,n=t.items;a&&a.length?(o.props.onDropFile(e),o.loadImageFile(a[0])):n&&n.length&&s(n,function(e){return o.loadImage(e)})}},o.setCanvas=function(e){o.canvas=e},i=t,n(o,i)}return i(r,t.Component),c(r,[{key:"isVertical",value:function(){return this.props.rotate%180!=0}},{key:"getBorders",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.border;return Array.isArray(e)?e:[e,e]}},{key:"getDimensions",value:function(){var e=this.props,t=e.width,o=e.height,a=e.rotate,n=e.border,i={},r=this.getBorders(n),s=h(r,2),u=s[0],c=s[1],d=t,p=o;return this.isVertical()?(i.width=p,i.height=d):(i.width=d,i.height=p),i.width+=2*u,i.height+=2*c,{canvas:i,rotate:a,width:t,height:o,border:n}}},{key:"getImage",value:function(){var e=this.getCroppingRect(),t=this.state.image;e.x*=t.resource.width,e.y*=t.resource.height,e.width*=t.resource.width,e.height*=t.resource.height;var o=document.createElement("canvas");this.isVertical()?(o.width=e.height,o.height=e.width):(o.width=e.width,o.height=e.height);var a=o.getContext("2d");return a.translate(o.width/2,o.height/2),a.rotate(this.props.rotate*Math.PI/180),a.translate(-o.width/2,-o.height/2),this.isVertical()&&a.translate((o.width-o.height)/2,(o.height-o.width)/2),a.drawImage(t.resource,-e.x,-e.y),o}},{key:"getImageScaledToCanvas",value:function(){var e=this.getDimensions(),t=e.width,o=e.height,a=document.createElement("canvas");return this.isVertical()?(a.width=o,a.height=t):(a.width=t,a.height=o),this.paintImage(a.getContext("2d"),this.state.image,0,1),a}},{key:"getXScale",value:function(){var e=this.props.width/this.props.height,t=this.state.image.width/this.state.image.height;return Math.min(1,e/t)}},{key:"getYScale",value:function(){var e=this.props.height/this.props.width,t=this.state.image.height/this.state.image.width;return Math.min(1,e/t)}},{key:"getCroppingRect",value:function(){var e=this.props.position||{x:this.state.image.x,y:this.state.image.y},t=1/this.props.scale*this.getXScale(),o=1/this.props.scale*this.getYScale(),a={x:e.x-t/2,y:e.y-o/2,width:t,height:o},n=0,i=1-a.width,r=0,s=1-a.height;return(t>1||o>1)&&(n=-a.width,i=1,r=-a.height,s=1),u({},a,{x:Math.max(n,Math.min(a.x,i)),y:Math.max(r,Math.min(a.y,s))})}},{key:"isDataURL",value:function(e){if(null===e)return!1;var t=/^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i;return!!e.match(t)}},{key:"loadImage",value:function(e){p&&e instanceof File?this.loadImageFile(e):"string"==typeof e&&this.loadImageURL(e)}},{key:"loadImageURL",value:function(e){var t=new Image;t.onload=this.handleImageReady.bind(this,t),t.onerror=this.props.onLoadFailure,!this.isDataURL(e)&&this.props.crossOrigin&&(t.crossOrigin=this.props.crossOrigin),t.src=e}},{key:"loadImageFile",value:function(e){var t=this,o=new FileReader;o.onload=function(e){return t.loadImageURL(e.target.result)},o.readAsDataURL(e)}},{key:"componentDidMount",value:function(){var e=o.findDOMNode(this.canvas).getContext("2d");if(this.props.image&&this.loadImage(this.props.image),this.paint(e),document){var t=g.native;document.addEventListener(t.move,this.handleMouseMove,!1),document.addEventListener(t.up,this.handleMouseUp,!1),d&&(document.addEventListener(t.mouseMove,this.handleMouseMove,!1),document.addEventListener(t.mouseUp,this.handleMouseUp,!1))}}},{key:"componentWillUnmount",value:function(){if(document){var e=g.native;document.removeEventListener(e.move,this.handleMouseMove,!1),document.removeEventListener(e.up,this.handleMouseUp,!1),d&&(document.removeEventListener(e.mouseMove,this.handleMouseMove,!1),document.removeEventListener(e.mouseUp,this.handleMouseUp,!1))}}},{key:"componentDidUpdate",value:function(e,t){var a=o.findDOMNode(this.canvas),n=a.getContext("2d");n.clearRect(0,0,a.width,a.height),this.paint(n),this.paintImage(n,this.state.image,this.props.border),e.image===this.props.image&&e.width===this.props.width&&e.height===this.props.height&&e.position===this.props.position&&e.scale===this.props.scale&&e.rotate===this.props.rotate&&t.my===this.state.my&&t.mx===this.state.mx&&t.image.x===this.state.image.x&&t.image.y===this.state.image.y||this.props.onImageChange()}},{key:"handleImageReady",value:function(e){var t=this.getInitialSize(e.width,e.height);t.resource=e,t.x=.5,t.y=.5,this.setState({drag:!1,image:t},this.props.onImageReady),this.props.onLoadSuccess(t)}},{key:"getInitialSize",value:function(e,t){var o=void 0,a=void 0,n=this.getDimensions();return n.height/n.width>t/e?a=e*((o=this.getDimensions().height)/t):o=t*((a=this.getDimensions().width)/e),{height:o,width:a}}},{key:"componentWillReceiveProps",value:function(e){(e.image&&this.props.image!==e.image||this.props.width!==e.width||this.props.height!==e.height)&&this.loadImage(e.image)}},{key:"paintImage",value:function(e,t,o){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:m;if(t.resource){var n=this.calculatePosition(t,o);e.save(),e.translate(e.canvas.width/2,e.canvas.height/2),e.rotate(this.props.rotate*Math.PI/180),e.translate(-e.canvas.width/2,-e.canvas.height/2),this.isVertical()&&e.translate((e.canvas.width-e.canvas.height)/2,(e.canvas.height-e.canvas.width)/2),e.scale(a,a),e.globalCompositeOperation="destination-over",e.drawImage(t.resource,n.x,n.y,n.width,n.height),e.restore()}}},{key:"calculatePosition",value:function(e,t){e=e||this.state.image;var o=this.getBorders(t),a=h(o,2),n=a[0],i=a[1],r=this.getCroppingRect(),s=e.width*this.props.scale,u=e.height*this.props.scale,c=-r.x*s,d=-r.y*u;return this.isVertical()?(c+=i,d+=n):(c+=n,d+=i),{x:c,y:d,height:u,width:s}}},{key:"paint",value:function(e){e.save(),e.scale(m,m),e.translate(0,0),e.fillStyle="rgba("+this.props.color.slice(0,4).join(",")+")";var t=this.props.borderRadius,o=this.getDimensions(),a=this.getBorders(o.border),n=h(a,2),i=n[0],r=n[1],s=o.canvas.height,u=o.canvas.width;t=Math.max(t,0),t=Math.min(t,u/2-i,s/2-r),e.beginPath(),v(e,i,r,u-2*i,s-2*r,t),e.rect(u,0,-u,s),e.fill("evenodd"),e.restore()}},{key:"render",value:function(){var e=this.getDimensions(),o={width:e.canvas.width,height:e.canvas.height,cursor:this.state.drag?"grabbing":"grab"},a={width:e.canvas.width*m,height:e.canvas.height*m,style:u({},o,this.props.style)};return a[g.react.down]=this.handleMouseDown,a[g.react.drag]=this.handleDragOver,this.props.disableDrop||(a[g.react.drop]=this.handleDrop),d&&(a[g.react.mouseDown]=this.handleMouseDown),t.createElement("canvas",u({ref:this.setCanvas},a))}}]),r}();return f.propTypes={scale:e.number,rotate:e.number,image:e.oneOfType([e.string].concat(function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(p?[e.instanceOf(File)]:[]))),border:e.oneOfType([e.number,e.arrayOf(e.number)]),borderRadius:e.number,width:e.number,height:e.number,position:e.shape({x:e.number,y:e.number}),color:e.arrayOf(e.number),style:e.object,crossOrigin:e.oneOf(["","anonymous","use-credentials"]),onDropFile:e.func,onLoadFailure:e.func,onLoadSuccess:e.func,onImageReady:e.func,onImageChange:e.func,onMouseUp:e.func,onMouseMove:e.func,onPositionChange:e.func,disableDrop:e.bool},f.defaultProps={disableDrop:!1,scale:1,rotate:0,border:25,borderRadius:0,width:200,height:200,color:[0,0,0,.5],style:{},onDropFile:function(){},onLoadFailure:function(){},onLoadSuccess:function(){},onImageReady:function(){},onImageChange:function(){},onMouseUp:function(){},onMouseMove:function(){},onPositionChange:function(){}},f});
//# sourceMappingURL=index.js.map


/***/ })

})
//# sourceMappingURL=0.96706e0069c0bbf21e57.hot-update.js.map