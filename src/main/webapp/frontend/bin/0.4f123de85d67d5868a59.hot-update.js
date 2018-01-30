webpackHotUpdate(0,{

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preview_less__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preview_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__preview_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PreviewImageFrame__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scroll_Scroll__ = __webpack_require__(61);
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
      animate: ''
    };
  }

  setImageWidth(width) {
    this.setState({
      imageWidth: width
    });
  }

  clearAnimate() {
    this.setState({
      animate: ''
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

  render() {
    const { animate, imageWidth } = this.state;
    const { images, src } = this.props;
    let bottomWidthWithoutPaddings = imageWidth;

    const bottom = document.getElementById('bottom');
    if (bottom) {
      const style = bottom.currentStyle || window.getComputedStyle(bottom);
      const padding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
      bottomWidthWithoutPaddings = imageWidth - padding;
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Modal,
      { className: `magnify_modal ${animate}`,
        imageWidth: imageWidth,
        animationTime: this.animationTime },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'magnify_modal_img_frame' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__PreviewImageFrame__["a" /* default */], { src: src,
          images: images,
          setImageWidth: width => {
            this.setImageWidth(width);
          },
          close: () => this.close(),
          clearAnimate: () => this.clearAnimate()
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          BottomSection,
          { id: 'bottom',
            className: 'magnify_modal_img_frame_bottom',
            imageWidth: imageWidth
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'magnify_modal_img_frame_bottom_caption' },
            'Caption'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5__scroll_Scroll__["a" /* default */],
            { height: '20%', width: imageWidth },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'magnify_modal_img_frame_bottom_text' },
              'Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason.'
            )
          )
        )
      )
    );
  }
};


/* harmony default export */ __webpack_exports__["a"] = (Preview);

/***/ })

})
//# sourceMappingURL=0.4f123de85d67d5868a59.hot-update.js.map