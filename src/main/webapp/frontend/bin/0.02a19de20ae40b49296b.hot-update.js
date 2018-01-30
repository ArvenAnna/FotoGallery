webpackHotUpdate(0,{

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_loaders__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_loaders___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_loaders__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_loaders_css_src_animations_ball_scale_multiple_scss__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_loaders_css_src_animations_ball_scale_multiple_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_loaders_css_src_animations_ball_scale_multiple_scss__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;







const isFileAPISupported = typeof File !== 'undefined';

let AvatarEditor = (_temp2 = _class = class AvatarEditor extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.state = {
            image: null
        }, this.setCanvas = canvas => {
            this.canvas = canvas;
        }, _temp;
    }

    isVertical() {
        return this.props.rotate % 180 !== 0;
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

    componentDidUpdate() {
        if (this.canvas) {
            const canvas = __WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.findDOMNode(this.canvas);
            const context = canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width, canvas.height);
            this.paintImage(context, this.state.image);
        }
    }

    handleImageReady(image) {
        this.setState({ image }, this.props.onImageReady);
        this.props.onLoadSuccess(image);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.image && this.props.image !== newProps.image || this.props.width !== newProps.width || this.props.height !== newProps.height) {
            this.loadImage(newProps.image);
        }
    }

    paintImage(context, image) {
        if (image) {

            context.save();

            context.translate(context.canvas.width / 2, context.canvas.height / 2);
            context.rotate(this.props.rotate * Math.PI / 180);
            context.translate(-(context.canvas.width / 2), -(context.canvas.height / 2));

            if (this.isVertical()) {
                context.translate((context.canvas.width - context.canvas.height) / 2, (context.canvas.height - context.canvas.width) / 2);
            }

            context.scale(1, 1);

            context.globalCompositeOperation = 'destination-over';

            if (this.isVertical()) {
                context.drawImage(image, 0, 0, this.props.height, this.props.width);
            }
            context.drawImage(image, 0, 0, this.props.width, this.props.height);

            context.restore();
        }
    }

    getImage() {
        const image = this.state.image;

        // create a canvas with the correct dimensions
        const canvas = document.createElement('canvas');

        if (this.isVertical()) {
            canvas.width = image.height;
            canvas.height = image.width;
        } else {
            canvas.width = image.width;
            canvas.height = image.height;
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

        context.drawImage(image, 0, 0);

        return canvas;
    }

    render() {
        // // if(this.props.loading) {
        //     return <Loader type="ball-scale-multiple"/>;
        // // }

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
    rotate: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
    image: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string, ...(isFileAPISupported ? [__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.instanceOf(File)] : [])]),
    width: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
    height: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
    style: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
    crossOrigin: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf(['', 'anonymous', 'use-credentials']),

    onLoadFailure: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
    onLoadSuccess: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
    onImageReady: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
    loading: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool
}, _class.defaultProps = {
    rotate: 0,
    width: 300,
    height: 200,
    style: {},
    onLoadFailure() {},
    onLoadSuccess() {},
    onImageReady() {},
    loading: false
}, _temp2);


/* harmony default export */ __webpack_exports__["a"] = (AvatarEditor);

/***/ })

})
//# sourceMappingURL=0.02a19de20ae40b49296b.hot-update.js.map