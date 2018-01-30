webpackHotUpdate(0,{

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
        const image = this.state.image;

        // create a canvas with the correct dimensions
        const canvas = document.createElement('canvas');

        canvas.width = image.resource.width;
        canvas.height = image.resource.height;

        // draw the full-size image at the correct position,
        // the image gets truncated to the size of the canvas.
        const context = canvas.getContext('2d');

        context.translate(canvas.width / 2, canvas.height / 2);
        context.rotate(this.props.rotate * Math.PI / 180);
        context.translate(-(canvas.width / 2), -(canvas.height / 2));

        if (this.isVertical()) {
            context.translate((canvas.width - canvas.height) / 2, (canvas.height - canvas.width) / 2);
        }

        context.drawImage(image.resource);

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

    paintImage(context, image, scaleFactor = pixelRatio) {
        if (image.resource) {

            context.save();

            context.translate(context.canvas.width / 2, context.canvas.height / 2);
            context.rotate(this.props.rotate * Math.PI / 180);
            context.translate(-(context.canvas.width / 2), -(context.canvas.height / 2));

            if (this.isVertical()) {
                context.translate((context.canvas.width - context.canvas.height) / 2, (context.canvas.height - context.canvas.width) / 2);
            }

            context.scale(scaleFactor, scaleFactor);

            context.globalCompositeOperation = 'destination-over';
            context.drawImage(image.resource, 0, 0, image.width, image.height, 0, 0, this.props.width, this.props.width);

            context.restore();
        }
    }

    render() {
        if (!this.state.image.resource) {
            return null;
        }
        //const dimensions = this.getDimensions()

        const defaultStyle = {
            width: this.props.width,
            height: this.props.height,
            cursor: 'grab'
        };

        const attributes = {
            width: this.props.width,
            height: this.props.height,
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
//# sourceMappingURL=0.894606694df17602e1a5.hot-update.js.map