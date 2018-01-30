webpackHotUpdate(0,{

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preview_less__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preview_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__preview_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PreviewImageFrame__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scroll_Scroll__ = __webpack_require__(39);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }



//import { Scrollbars } from 'react-custom-scrollbars';





const BottomSection = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
   width: ${props => props.imageWidth};
`;

const increase = props => __WEBPACK_IMPORTED_MODULE_1_styled_components__["c" /* keyframes */]`
   0% {
      height: 0;
      width: 0;
      background-color: transparent;
  }
  50% {
      height: 90%;
      width: ${props.imageWidth};
      background-color: transparent;  
  }
  100% {
      background-color: ${__WEBPACK_IMPORTED_MODULE_4__styles___default.a.preview_frame_color};
  }
`;

const decrease = props => __WEBPACK_IMPORTED_MODULE_1_styled_components__["c" /* keyframes */]`
   0% {
      background-color: ${__WEBPACK_IMPORTED_MODULE_4__styles___default.a.preview_frame_color};
   }
   50% {
      height: 90%;
      width: ${props.imageWidth};
      background-color: transparent;
  }
  100% {
      height: 0;
      width: 0;
      background-color: transparent;
  }
`;

const Modal = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
&.increase {
  .magnify_modal_img_frame {
    animation: ${increase} ${props => props.animationTime}s ease;
  }
}

&.decrease {
  .magnify_modal_img_frame {
    animation: ${decrease} ${props => props.animationTime}s ease;
  }
}
`;

let Preview = class Preview extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(props) {
        super(props);

        this.animationTime = parseInt(__WEBPACK_IMPORTED_MODULE_4__styles___default.a['preview_animation_duration']);

        this.state = {
            imageWidth: 0,
            animate: '',
            currentSlide: props.main
        };
    }

    setImageWidth(width) {
        this.setState({
            imageWidth: width
        });
    }

    clearAnimate(slide) {
        this.setState({
            animate: '',
            currentSlide: slide
        });
    }

    close() {
        if (!(this.state.animate === 'decrease')) {
            this.setState({
                animate: 'decrease'
            });
            window.setTimeout(this.props.close, this.animationTime * 1000);
        }
    }

    componentDidMount() {
        this.setState({
            animate: 'increase'
        });
        window.setTimeout(() => this.clearAnimation(), this.animationTime * 1000);
    }

    clearAnimation(slide) {
        this.setState({
            animate: ''
        });
    }

    renderThumb(_ref) {
        let { style } = _ref,
            props = _objectWithoutProperties(_ref, ['style']);

        const thumbStyle = {
            backgroundColor: 'white',
            height: '70%'
        };
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', _extends({
            style: _extends({}, style, thumbStyle)
        }, props));
    }

    calculateTextWidth(imgWidth) {
        const bottomSection = document.getElementsByClassName('magnify_modal_img_frame_bottom')[0];
        if (bottomSection) {
            const style = bottomSection.currentStyle || window.getComputedStyle(bottomSection);
            const paddings = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
            return parseFloat(imgWidth) - paddings;
        }
        return 0;
    }

    calculateTextHeight() {
        const bottomSection = document.getElementsByClassName('magnify_modal_img_frame_bottom')[0];

        if (bottomSection && this.caption) {
            const bottomSectionStyle = bottomSection.currentStyle || window.getComputedStyle(bottomSection);
            const paddings = parseFloat(bottomSectionStyle.paddingTop) + parseFloat(bottomSectionStyle.paddingBottom);

            const captionStyle = this.caption.currentStyle || window.getComputedStyle(this.caption);
            return parseFloat(bottomSectionStyle.height) - paddings - parseFloat(captionStyle.height);
        }
        return 0;
    }

    render() {
        const { animate, imageWidth } = this.state;
        const { images, main } = this.props;

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Modal,
            { className: `magnify_modal ${animate}`,
                imageWidth: imageWidth,
                animationTime: this.animationTime },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'magnify_modal_img_frame' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__PreviewImageFrame__["a" /* default */], { main: main,
                    images: images,
                    editRoute: this.props.editRoute,
                    setImageWidth: width => {
                        this.setImageWidth(width);
                    },
                    close: () => this.close(),
                    clearAnimate: s => this.clearAnimate(s)
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    BottomSection,
                    { className: 'magnify_modal_img_frame_bottom',
                        imageWidth: imageWidth },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'magnify_modal_img_frame_bottom_caption', ref: r => this.caption = r },
                        this.state.currentSlide.name
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_5__scroll_Scroll__["a" /* default */],
                        { height: this.calculateTextHeight(),
                            width: this.calculateTextWidth(imageWidth),
                            className: 'magnify_modal_img_frame_bottom_text',
                            progress: true },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            null,
                            this.state.currentSlide.text
                        )
                    )
                )
            )
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (Preview);

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

const constants = {
    'preview_animation_duration': '2s',
    'picture_animation_duration': '1s',
    'preview_frame_color': 'black',
    'body_color': '#232326'
};

module.exports = constants;

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "@-webkit-keyframes fade_in_base {\n  from {\n    visibility: hidden;\n    color: transparent;\n  }\n  to {\n    visibility: visible;\n    color: rgba(255, 255, 255, 0.7);\n  }\n}\n@keyframes fade_in_base {\n  from {\n    visibility: hidden;\n    color: transparent;\n  }\n  to {\n    visibility: visible;\n    color: rgba(255, 255, 255, 0.7);\n  }\n}\n@-webkit-keyframes fade_in_top {\n  from {\n    background-color: transparent;\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n}\n@keyframes fade_in_top {\n  from {\n    background-color: transparent;\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n}\n@-webkit-keyframes fade_in_bottom {\n  from {\n    background-color: transparent;\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n}\n@keyframes fade_in_bottom {\n  from {\n    background-color: transparent;\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n}\n@-webkit-keyframes fade_in_icon {\n  from {\n    fill: transparent;\n  }\n  to {\n    fill: rgba(255, 255, 255, 0.7);\n  }\n}\n@keyframes fade_in_icon {\n  from {\n    fill: transparent;\n  }\n  to {\n    fill: rgba(255, 255, 255, 0.7);\n  }\n}\n@-webkit-keyframes fade_out_base {\n  from {\n    visibility: visible;\n    color: rgba(255, 255, 255, 0.7);\n  }\n  to {\n    visibility: hidden;\n    color: transparent;\n  }\n}\n@keyframes fade_out_base {\n  from {\n    visibility: visible;\n    color: rgba(255, 255, 255, 0.7);\n  }\n  to {\n    visibility: hidden;\n    color: transparent;\n  }\n}\n@-webkit-keyframes fade_out_top {\n  from {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n  to {\n    background-color: transparent;\n  }\n}\n@keyframes fade_out_top {\n  from {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n  to {\n    background-color: transparent;\n  }\n}\n@-webkit-keyframes fade_out_bottom {\n  from {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n  to {\n    background-color: transparent;\n  }\n}\n@keyframes fade_out_bottom {\n  from {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n  to {\n    background-color: transparent;\n  }\n}\n@-webkit-keyframes fade_out_icon {\n  from {\n    fill: rgba(255, 255, 255, 0.7);\n  }\n  to {\n    fill: transparent;\n  }\n}\n@keyframes fade_out_icon {\n  from {\n    fill: rgba(255, 255, 255, 0.7);\n  }\n  to {\n    fill: transparent;\n  }\n}\n@-webkit-keyframes move_to_right {\n  from {\n    right: 100%;\n  }\n  to {\n    right: 0;\n  }\n}\n@keyframes move_to_right {\n  from {\n    right: 100%;\n  }\n  to {\n    right: 0;\n  }\n}\n@-webkit-keyframes move_to_left {\n  from {\n    left: 100%;\n  }\n  to {\n    left: 0;\n  }\n}\n@keyframes move_to_left {\n  from {\n    left: 100%;\n  }\n  to {\n    left: 0;\n  }\n}\n@-webkit-keyframes move_to_top {\n  from {\n    top: 100%;\n  }\n  to {\n    top: 0;\n  }\n}\n@keyframes move_to_top {\n  from {\n    top: 100%;\n  }\n  to {\n    top: 0;\n  }\n}\n@-webkit-keyframes move_to_bottom {\n  from {\n    bottom: 100%;\n    top: -100%;\n  }\n  to {\n    bottom: 0;\n    top: 0;\n  }\n}\n@keyframes move_to_bottom {\n  from {\n    bottom: 100%;\n    top: -100%;\n  }\n  to {\n    bottom: 0;\n    top: 0;\n  }\n}\n@-webkit-keyframes move_from_right {\n  from {\n    right: 0;\n    visibility: visible;\n  }\n  to {\n    right: 100%;\n    visibility: hidden;\n  }\n}\n@keyframes move_from_right {\n  from {\n    right: 0;\n    visibility: visible;\n  }\n  to {\n    right: 100%;\n    visibility: hidden;\n  }\n}\n@-webkit-keyframes move_from_left {\n  from {\n    left: 0;\n    visibility: visible;\n  }\n  to {\n    left: 100%;\n    visibility: hidden;\n  }\n}\n@keyframes move_from_left {\n  from {\n    left: 0;\n    visibility: visible;\n  }\n  to {\n    left: 100%;\n    visibility: hidden;\n  }\n}\n@-webkit-keyframes move_from_top {\n  from {\n    top: 0;\n    visibility: visible;\n  }\n  to {\n    top: 100%;\n    visibility: hidden;\n  }\n}\n@keyframes move_from_top {\n  from {\n    top: 0;\n    visibility: visible;\n  }\n  to {\n    top: 100%;\n    visibility: hidden;\n  }\n}\n@-webkit-keyframes move_from_bottom {\n  from {\n    bottom: 0;\n    top: 0;\n    visibility: visible;\n  }\n  to {\n    bottom: 100%;\n    top: -100%;\n    visibility: hidden;\n  }\n}\n@keyframes move_from_bottom {\n  from {\n    bottom: 0;\n    top: 0;\n    visibility: visible;\n  }\n  to {\n    bottom: 100%;\n    top: -100%;\n    visibility: hidden;\n  }\n}\n.image_wrapper {\n  position: relative;\n  overflow: hidden;\n  color: rgba(255, 255, 255, 0.7);\n  box-shadow: 0.5rem 0.5rem 0.3rem 0.1rem rgba(0, 0, 0, 0.5);\n  border-radius: 0.3rem;\n}\n.image_wrapper:hover .overlay {\n  visibility: visible;\n}\n.image_wrapper .image {\n  margin: 0 auto;\n  height: 30rem;\n}\n.image_wrapper .overlay {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: absolute;\n  top: 0;\n  z-index: 50;\n  width: 100%;\n  height: 100%;\n  visibility: hidden;\n}\n.image_wrapper .overlay .overlay_top {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.image_wrapper .overlay .overlay_top svg {\n  width: 3rem;\n  height: 3rem;\n  fill: rgba(255, 255, 255, 0.7);\n}\n.image_wrapper .overlay .overlay_top svg:hover {\n  fill: rgba(255, 255, 255, 0.2);\n}\n.image_wrapper .overlay .overlay_bottom {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.image_wrapper .overlay .overlay_bottom_text {\n  font-weight: 400;\n  font-size: 2rem;\n  font-style: italic;\n  margin: 1.5rem;\n}\n.image_wrapper.fade_in .overlay {\n  -webkit-animation-name: fade_in_base;\n          animation-name: fade_in_base;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_in .overlay .overlay_top {\n  -webkit-animation-name: fade_in_top;\n          animation-name: fade_in_top;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_in .overlay .overlay_top svg {\n  -webkit-animation-name: fade_in_icon;\n          animation-name: fade_in_icon;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_in .overlay .overlay_bottom {\n  -webkit-animation-name: fade_in_bottom;\n          animation-name: fade_in_bottom;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_out .overlay {\n  -webkit-animation-name: fade_out_base;\n          animation-name: fade_out_base;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_out .overlay .overlay_top {\n  -webkit-animation-name: fade_out_top;\n          animation-name: fade_out_top;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_out .overlay .overlay_top svg {\n  -webkit-animation-name: fade_out_icon;\n          animation-name: fade_out_icon;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_out .overlay .overlay_bottom {\n  -webkit-animation-name: fade_out_bottom;\n          animation-name: fade_out_bottom;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.move_to_right .overlay {\n  -webkit-animation-name: move_to_right;\n          animation-name: move_to_right;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.move_to_left .overlay {\n  -webkit-animation-name: move_to_left;\n          animation-name: move_to_left;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.move_to_top .overlay {\n  -webkit-animation-name: move_to_top;\n          animation-name: move_to_top;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.move_to_bottom .overlay {\n  -webkit-animation-name: move_to_bottom;\n          animation-name: move_to_bottom;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.move_from_right .overlay {\n  -webkit-animation-name: move_from_right;\n          animation-name: move_from_right;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.move_from_left .overlay {\n  -webkit-animation-name: move_from_left;\n          animation-name: move_from_left;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.move_from_top .overlay {\n  -webkit-animation-name: move_from_top;\n          animation-name: move_from_top;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.move_from_bottom .overlay {\n  -webkit-animation-name: move_from_bottom;\n          animation-name: move_from_bottom;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n", ""]);

// exports


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "@-webkit-keyframes fade_in_preview_bottom {\n  0% {\n    background-color: transparent;\n    border-bottom: 1rem solid transparent;\n    overflow: hidden;\n  }\n  50% {\n    background-color: transparent;\n    border-bottom: 1rem solid transparent;\n    overflow: visible;\n  }\n  100% {\n    background-color: black;\n    border-bottom: 1rem solid black;\n    overflow: visible;\n  }\n}\n@keyframes fade_in_preview_bottom {\n  0% {\n    background-color: transparent;\n    border-bottom: 1rem solid transparent;\n    overflow: hidden;\n  }\n  50% {\n    background-color: transparent;\n    border-bottom: 1rem solid transparent;\n    overflow: visible;\n  }\n  100% {\n    background-color: black;\n    border-bottom: 1rem solid black;\n    overflow: visible;\n  }\n}\n@-webkit-keyframes fade_in_text_caption {\n  0% {\n    color: transparent;\n  }\n  50% {\n    color: transparent;\n  }\n  100% {\n    color: #ffffff;\n  }\n}\n@keyframes fade_in_text_caption {\n  0% {\n    color: transparent;\n  }\n  50% {\n    color: transparent;\n  }\n  100% {\n    color: #ffffff;\n  }\n}\n@-webkit-keyframes fade_in_text {\n  0% {\n    color: transparent;\n  }\n  50% {\n    color: transparent;\n  }\n  100% {\n    color: rgba(255, 255, 255, 0.7);\n  }\n}\n@keyframes fade_in_text {\n  0% {\n    color: transparent;\n  }\n  50% {\n    color: transparent;\n  }\n  100% {\n    color: rgba(255, 255, 255, 0.7);\n  }\n}\n@-webkit-keyframes fade_in_cross {\n  0% {\n    fill: transparent;\n  }\n  50% {\n    fill: transparent;\n  }\n  100% {\n    fill: rgba(0, 0, 0, 0.5);\n  }\n}\n@keyframes fade_in_cross {\n  0% {\n    fill: transparent;\n  }\n  50% {\n    fill: transparent;\n  }\n  100% {\n    fill: rgba(0, 0, 0, 0.5);\n  }\n}\n@-webkit-keyframes fade_in_arrow_container {\n  0% {\n    background-color: transparent;\n  }\n  50% {\n    background-color: transparent;\n  }\n  100% {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n}\n@keyframes fade_in_arrow_container {\n  0% {\n    background-color: transparent;\n  }\n  50% {\n    background-color: transparent;\n  }\n  100% {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n}\n@-webkit-keyframes fade_in_arrow {\n  0% {\n    fill: transparent;\n  }\n  50% {\n    fill: transparent;\n  }\n  100% {\n    fill: rgba(255, 255, 255, 0.2);\n  }\n}\n@keyframes fade_in_arrow {\n  0% {\n    fill: transparent;\n  }\n  50% {\n    fill: transparent;\n  }\n  100% {\n    fill: rgba(255, 255, 255, 0.2);\n  }\n}\n@-webkit-keyframes fade_in_counter {\n  0% {\n    background-color: transparent;\n    color: transparent;\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem transparent;\n  }\n  50% {\n    background-color: transparent;\n    color: transparent;\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem transparent;\n  }\n  100% {\n    background-color: rgba(0, 0, 0, 0.5);\n    color: rgba(255, 255, 255, 0.7);\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem rgba(0, 0, 0, 0.7);\n  }\n}\n@keyframes fade_in_counter {\n  0% {\n    background-color: transparent;\n    color: transparent;\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem transparent;\n  }\n  50% {\n    background-color: transparent;\n    color: transparent;\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem transparent;\n  }\n  100% {\n    background-color: rgba(0, 0, 0, 0.5);\n    color: rgba(255, 255, 255, 0.7);\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem rgba(0, 0, 0, 0.7);\n  }\n}\n@-webkit-keyframes fade_in_overlay {\n  0% {\n    background-color: transparent;\n  }\n  50% {\n    background-color: transparent;\n  }\n  100% {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n}\n@keyframes fade_in_overlay {\n  0% {\n    background-color: transparent;\n  }\n  50% {\n    background-color: transparent;\n  }\n  100% {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n}\n@-webkit-keyframes fade_in_scroll_track {\n  0% {\n    background-color: transparent;\n  }\n  50% {\n    background-color: transparent;\n  }\n  100% {\n    background-color: black;\n  }\n}\n@keyframes fade_in_scroll_track {\n  0% {\n    background-color: transparent;\n  }\n  50% {\n    background-color: transparent;\n  }\n  100% {\n    background-color: black;\n  }\n}\n@-webkit-keyframes fade_in_scroll {\n  0% {\n    background: transparent;\n  }\n  50% {\n    background: transparent;\n  }\n  100% {\n    background: linear-gradient(0deg, black, white);\n  }\n}\n@keyframes fade_in_scroll {\n  0% {\n    background: transparent;\n  }\n  50% {\n    background: transparent;\n  }\n  100% {\n    background: linear-gradient(0deg, black, white);\n  }\n}\n@-webkit-keyframes fade_out_preview_bottom {\n  0% {\n    background-color: black;\n    border-bottom: 1rem solid black;\n    overflow: visible;\n  }\n  50% {\n    background-color: transparent;\n    border-bottom: 1rem solid transparent;\n    overflow: hidden;\n  }\n  100% {\n    background-color: transparent;\n    border-bottom: 1rem solid transparent;\n    overflow: hidden;\n  }\n}\n@keyframes fade_out_preview_bottom {\n  0% {\n    background-color: black;\n    border-bottom: 1rem solid black;\n    overflow: visible;\n  }\n  50% {\n    background-color: transparent;\n    border-bottom: 1rem solid transparent;\n    overflow: hidden;\n  }\n  100% {\n    background-color: transparent;\n    border-bottom: 1rem solid transparent;\n    overflow: hidden;\n  }\n}\n@-webkit-keyframes fade_out_text_caption {\n  0% {\n    color: #ffffff;\n  }\n  50% {\n    color: transparent;\n  }\n  100% {\n    color: transparent;\n  }\n}\n@keyframes fade_out_text_caption {\n  0% {\n    color: #ffffff;\n  }\n  50% {\n    color: transparent;\n  }\n  100% {\n    color: transparent;\n  }\n}\n@-webkit-keyframes fade_out_text_desc {\n  0% {\n    color: rgba(255, 255, 255, 0.7);\n  }\n  50% {\n    color: transparent;\n  }\n  100% {\n    color: transparent;\n  }\n}\n@keyframes fade_out_text_desc {\n  0% {\n    color: rgba(255, 255, 255, 0.7);\n  }\n  50% {\n    color: transparent;\n  }\n  100% {\n    color: transparent;\n  }\n}\n@-webkit-keyframes fade_out_cross {\n  0% {\n    fill: rgba(0, 0, 0, 0.5);\n  }\n  50% {\n    fill: transparent;\n  }\n  100% {\n    fill: transparent;\n  }\n}\n@keyframes fade_out_cross {\n  0% {\n    fill: rgba(0, 0, 0, 0.5);\n  }\n  50% {\n    fill: transparent;\n  }\n  100% {\n    fill: transparent;\n  }\n}\n@-webkit-keyframes fade_out_arrow_container {\n  0% {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n  50% {\n    background-color: transparent;\n  }\n  100% {\n    background-color: transparent;\n  }\n}\n@keyframes fade_out_arrow_container {\n  0% {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n  50% {\n    background-color: transparent;\n  }\n  100% {\n    background-color: transparent;\n  }\n}\n@-webkit-keyframes fade_out_arrow {\n  0% {\n    fill: rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    fill: transparent;\n  }\n  100% {\n    fill: transparent;\n  }\n}\n@keyframes fade_out_arrow {\n  0% {\n    fill: rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    fill: transparent;\n  }\n  100% {\n    fill: transparent;\n  }\n}\n@-webkit-keyframes fade_out_counter {\n  0% {\n    background-color: rgba(0, 0, 0, 0.5);\n    color: rgba(255, 255, 255, 0.7);\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem rgba(0, 0, 0, 0.7);\n  }\n  50% {\n    background-color: transparent;\n    color: transparent;\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem transparent;\n  }\n  100% {\n    background-color: transparent;\n    color: transparent;\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem transparent;\n  }\n}\n@keyframes fade_out_counter {\n  0% {\n    background-color: rgba(0, 0, 0, 0.5);\n    color: rgba(255, 255, 255, 0.7);\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem rgba(0, 0, 0, 0.7);\n  }\n  50% {\n    background-color: transparent;\n    color: transparent;\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem transparent;\n  }\n  100% {\n    background-color: transparent;\n    color: transparent;\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem transparent;\n  }\n}\n@-webkit-keyframes fade_out_overlay {\n  0% {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n  50% {\n    background-color: transparent;\n  }\n  100% {\n    background-color: transparent;\n  }\n}\n@keyframes fade_out_overlay {\n  0% {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n  50% {\n    background-color: transparent;\n  }\n  100% {\n    background-color: transparent;\n  }\n}\n@-webkit-keyframes fade_out_scroll_track {\n  0% {\n    background-color: black;\n  }\n  50% {\n    background-color: transparent;\n  }\n  100% {\n    background-color: transparent;\n  }\n}\n@keyframes fade_out_scroll_track {\n  0% {\n    background-color: black;\n  }\n  50% {\n    background-color: transparent;\n  }\n  100% {\n    background-color: transparent;\n  }\n}\n@-webkit-keyframes fade_out_scroll {\n  0% {\n    background: linear-gradient(0deg, black, white);\n  }\n  50% {\n    background: transparent;\n  }\n  100% {\n    background: transparent;\n  }\n}\n@keyframes fade_out_scroll {\n  0% {\n    background: linear-gradient(0deg, black, white);\n  }\n  50% {\n    background: transparent;\n  }\n  100% {\n    background: transparent;\n  }\n}\n.magnify_modal {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.magnify_modal_img_frame {\n  height: 90%;\n  border-radius: 0.3rem;\n  background-color: black;\n}\n.magnify_modal_img_frame_container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  height: 80%;\n}\n.magnify_modal_img_frame_container .counter_container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: absolute;\n  top: 1.5rem;\n  width: 100%;\n}\n.magnify_modal_img_frame_container .counter_container .counter {\n  padding: 0.2rem 1rem;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 1rem;\n  box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem rgba(0, 0, 0, 0.7);\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 1rem;\n}\n.magnify_modal_img_frame_container .cross {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  z-index: 1;\n  width: 2rem;\n  height: 2rem;\n  fill: rgba(0, 0, 0, 0.5);\n}\n.magnify_modal_img_frame_container .cross:hover {\n  fill: #000000;\n}\n.magnify_modal_img_frame_container .edit {\n  position: absolute;\n  top: 1rem;\n  right: 3.5rem;\n  z-index: 1;\n  width: 2rem;\n  height: 2rem;\n  fill: rgba(0, 0, 0, 0.5);\n}\n.magnify_modal_img_frame_container .edit:hover {\n  fill: #000000;\n}\n.magnify_modal_img_frame_container .left_arrow {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: absolute;\n  top: 50%;\n  left: 1rem;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 0.2rem;\n  height: 5rem;\n}\n.magnify_modal_img_frame_container .left_arrow:hover {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.magnify_modal_img_frame_container .left_arrow svg {\n  width: 3rem;\n  height: 3rem;\n  fill: rgba(255, 255, 255, 0.2);\n}\n.magnify_modal_img_frame_container .left_arrow svg:hover {\n  fill: #000000;\n}\n.magnify_modal_img_frame_container .right_arrow {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: absolute;\n  top: 50%;\n  right: 1rem;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 0.2rem;\n  height: 5rem;\n}\n.magnify_modal_img_frame_container .right_arrow:hover {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.magnify_modal_img_frame_container .right_arrow svg {\n  width: 3rem;\n  height: 3rem;\n  fill: rgba(255, 255, 255, 0.2);\n}\n.magnify_modal_img_frame_container .right_arrow svg:hover {\n  fill: #000000;\n}\n.magnify_modal_img_frame_container .image_preview {\n  height: 100%;\n  border: 0.7rem solid black;\n  box-sizing: border-box;\n  border-radius: 0.3rem;\n}\n.magnify_modal_img_frame_bottom {\n  padding-left: calc(1.7rem);\n  padding-right: 0.7rem;\n  height: 20%;\n  box-sizing: border-box;\n  color: #ffffff;\n  padding-bottom: 1rem;\n}\n.magnify_modal_img_frame_bottom_caption {\n  font-size: 4vh;\n  padding-bottom: 1rem;\n  box-sizing: border-box;\n}\n.magnify_modal_img_frame_bottom_text {\n  font-style: italic;\n  font-size: 2vh;\n  color: rgba(255, 255, 255, 0.7);\n}\n.magnify_modal_img_frame_bottom_text.text_container .scroll_track {\n  background-color: black;\n  width: 6px;\n}\n.magnify_modal_img_frame_bottom_text.text_container .scroll_track .scroll {\n  background: linear-gradient(0deg, black, white);\n  width: 6px;\n}\n.magnify_modal.increase {\n  -webkit-animation-name: fade_in_overlay;\n          animation-name: fade_in_overlay;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.increase .magnify_modal_img_frame_bottom {\n  -webkit-animation-name: fade_in_preview_bottom;\n          animation-name: fade_in_preview_bottom;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.increase .magnify_modal_img_frame_bottom_caption {\n  -webkit-animation-name: fade_in_text_caption;\n          animation-name: fade_in_text_caption;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.increase .magnify_modal_img_frame_bottom_text {\n  -webkit-animation-name: fade_in_text;\n          animation-name: fade_in_text;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.increase .magnify_modal_img_frame_bottom_text.text_container .scroll_track {\n  -webkit-animation-name: fade_in_scroll_track;\n          animation-name: fade_in_scroll_track;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.increase .magnify_modal_img_frame_bottom_text.text_container .scroll_track .scroll {\n  -webkit-animation-name: fade_in_scroll;\n          animation-name: fade_in_scroll;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.increase .cross {\n  -webkit-animation-name: fade_in_cross;\n          animation-name: fade_in_cross;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.increase .edit {\n  -webkit-animation-name: fade_in_cross;\n          animation-name: fade_in_cross;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.increase .left_arrow,\n.magnify_modal.increase .right_arrow {\n  -webkit-animation-name: fade_in_arrow_container;\n          animation-name: fade_in_arrow_container;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.increase .left_arrow svg,\n.magnify_modal.increase .right_arrow svg {\n  -webkit-animation-name: fade_in_arrow;\n          animation-name: fade_in_arrow;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.increase .counter {\n  -webkit-animation-name: fade_in_counter;\n          animation-name: fade_in_counter;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.decrease {\n  -webkit-animation-name: fade_out_overlay;\n          animation-name: fade_out_overlay;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.decrease .cross {\n  -webkit-animation-name: fade_out_cross;\n          animation-name: fade_out_cross;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.decrease .edit {\n  -webkit-animation-name: fade_out_cross;\n          animation-name: fade_out_cross;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.decrease .left_arrow,\n.magnify_modal.decrease .right_arrow {\n  -webkit-animation-name: fade_out_arrow_container;\n          animation-name: fade_out_arrow_container;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.decrease .left_arrow svg,\n.magnify_modal.decrease .right_arrow svg {\n  -webkit-animation-name: fade_out_arrow;\n          animation-name: fade_out_arrow;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.decrease .counter {\n  -webkit-animation-name: fade_out_counter;\n          animation-name: fade_out_counter;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.decrease .magnify_modal_img_frame_bottom {\n  -webkit-animation-name: fade_out_preview_bottom;\n          animation-name: fade_out_preview_bottom;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.decrease .magnify_modal_img_frame_bottom_caption {\n  -webkit-animation-name: fade_out_text_caption;\n          animation-name: fade_out_text_caption;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.decrease .magnify_modal_img_frame_bottom_text {\n  -webkit-animation-name: fade_out_text_desc;\n          animation-name: fade_out_text_desc;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.decrease .magnify_modal_img_frame_bottom_text.text_container .scroll_track {\n  -webkit-animation-name: fade_out_scroll_track;\n          animation-name: fade_out_scroll_track;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.decrease .magnify_modal_img_frame_bottom_text.text_container .scroll_track .scroll {\n  -webkit-animation-name: fade_out_scroll;\n          animation-name: fade_out_scroll;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n", ""]);

// exports


/***/ })

})
//# sourceMappingURL=0.f96594f24eb087ea3d13.hot-update.js.map