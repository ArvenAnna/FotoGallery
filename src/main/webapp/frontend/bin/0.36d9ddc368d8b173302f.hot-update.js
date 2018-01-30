webpackHotUpdate(0,{

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





// const parseDOM = (str) => {
//     const parser = typeof DOMParser === 'undefined' ? null : new DOMParser()
//     if (!parser) {
//         return null
//     }
//     return parser.parseFromString(str, 'text/html')
// }
//
// const retrieveImageURL = (dataTransferItems, callback) => {
//     for (let i = 0; i < dataTransferItems.length; i++) {
//         let item = dataTransferItems[i]
//
//         if (item.type === 'text/html') {
//             item.getAsString(value => {
//                 const doc = parseDOM(value)
//                 const img = doc.querySelector('img')
//                 if (img && img.src) {
//                     callback(img.src)
//                 }
//             })
//             break
//         }
//     }
// }

const isFileAPISupported = typeof File !== 'undefined';

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
    onPositionChange() {}
}, _temp2);


/* harmony default export */ __webpack_exports__["a"] = (AvatarEditor);

/***/ })

})
//# sourceMappingURL=0.36d9ddc368d8b173302f.hot-update.js.map