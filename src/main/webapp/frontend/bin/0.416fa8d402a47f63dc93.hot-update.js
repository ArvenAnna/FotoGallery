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
      background-color: ${__WEBPACK_IMPORTED_MODULE_4__styles__["default"].preview_frame_color};
  }
`;

const decrease = props => __WEBPACK_IMPORTED_MODULE_1_styled_components__["c" /* keyframes */]`
   0% {
      background-color: ${__WEBPACK_IMPORTED_MODULE_4__styles__["default"].preview_frame_color};
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

        this.animationTime = parseInt(__WEBPACK_IMPORTED_MODULE_4__styles__["default"]['preview_animation_duration']);

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

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/hanna/My/Gallery/FotoGallery/src/main/webapp/frontend/components/picture/styles.js'");

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/hanna/My/Gallery/FotoGallery/src/main/webapp/frontend/components/picture/styles.js'\n    at Object.fs.openSync (fs.js:652:18)\n    at Object.fs.readFileSync (fs.js:553:33)\n    at Object.Module._extensions..js (module.js:583:20)\n    at Module.load (module.js:507:32)\n    at tryModuleLoad (module.js:470:12)\n    at Function.Module._load (module.js:462:3)\n    at Module.require (module.js:517:17)\n    at require (internal/module.js:11:18)\n    at modulePath.reduce (/home/hanna/My/Gallery/FotoGallery/src/main/webapp/frontend/node_modules/js-to-styles-var-loader/index.js:42:104)\n    at Array.reduce (<anonymous>)\n    at Object.getVarData (/home/hanna/My/Gallery/FotoGallery/src/main/webapp/frontend/node_modules/js-to-styles-var-loader/index.js:39:27)\n    at Object.mergeVarsToContent (/home/hanna/My/Gallery/FotoGallery/src/main/webapp/frontend/node_modules/js-to-styles-var-loader/index.js:80:34)\n    at Object.loader (/home/hanna/My/Gallery/FotoGallery/src/main/webapp/frontend/node_modules/js-to-styles-var-loader/index.js:115:29)");

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/hanna/My/Gallery/FotoGallery/src/main/webapp/frontend/components/picture/styles.js'\n    at Object.fs.openSync (fs.js:652:18)\n    at Object.fs.readFileSync (fs.js:553:33)\n    at Object.Module._extensions..js (module.js:583:20)\n    at Module.load (module.js:507:32)\n    at tryModuleLoad (module.js:470:12)\n    at Function.Module._load (module.js:462:3)\n    at Module.require (module.js:517:17)\n    at require (internal/module.js:11:18)\n    at modulePath.reduce (/home/hanna/My/Gallery/FotoGallery/src/main/webapp/frontend/node_modules/js-to-styles-var-loader/index.js:42:104)\n    at Array.reduce (<anonymous>)\n    at Object.getVarData (/home/hanna/My/Gallery/FotoGallery/src/main/webapp/frontend/node_modules/js-to-styles-var-loader/index.js:39:27)\n    at Object.mergeVarsToContent (/home/hanna/My/Gallery/FotoGallery/src/main/webapp/frontend/node_modules/js-to-styles-var-loader/index.js:80:34)\n    at Object.loader (/home/hanna/My/Gallery/FotoGallery/src/main/webapp/frontend/node_modules/js-to-styles-var-loader/index.js:115:29)");

/***/ })

})
//# sourceMappingURL=0.416fa8d402a47f63dc93.hot-update.js.map