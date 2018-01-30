webpackHotUpdate(0,{

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Icons__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preview_less__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preview_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__preview_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PreviewImageFrame__ = __webpack_require__(83);






const BottomSection = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
   width: ${props => props.imageWidth};
`;

const Modal = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`

@keyframes increase {
  0% {
      height: 0;
      width: 0;
  }
  50% {
      height: 90%;
      width: ${props => props.imageWidth};
  }
}

&.increase {
  
   animation: fade_in_overlay ${props => props.animationTime}s ease;

  .magnify_modal_img_frame {
    animation: increase ${props => props.animationTime}s ease;
  }
  .cross {
     animation: fade_in_cross ${props => props.animationTime}s ease;
  }
  .left_arrow, .right_arrow {
     animation: fade_in_arrow_container ${props => props.animationTime}s ease;
     
     svg {
          animation: fade_in_arrow ${props => props.animationTime}s ease;
     }
  }
  .counter {
     animation: fade_in_counter ${props => props.animationTime}s ease;
  }
  .magnify_modal_img_frame_bottom_caption {
    animation: fade_in_text_caption ${props => props.animationTime}s ease;
  }
  .magnify_modal_img_frame_bottom_text {
      animation: fade_in_text ${props => props.animationTime}s ease;
  }
   
}

@keyframes decrease {
  50% {
      height: 90%;
      width: ${props => props.imageWidth};
  }
  100% {
      height: 0;
      width: 0;
  }
}


&.decrease {

  animation: fade_out_overlay ${props => props.animationTime}s ease;

  .magnify_modal_img_frame {
    animation: decrease ${props => props.animationTime}s ease;
  }
  .cross {
     animation: fade_out_cross ${props => props.animationTime}s ease;
  }
  .left_arrow, .right_arrow {
     animation: fade_out_arrow_container ${props => props.animationTime}s ease;
     svg {
          animation: fade_out_arrow ${props => props.animationTime}s ease;
     }
  }
  .counter {
     animation: fade_out_counter ${props => props.animationTime}s ease;
  }
  .magnify_modal_img_frame_bottom_caption {
      animation: fade_out_text_caption ${props => props.animationTime}s ease;
  }
  .magnify_modal_img_frame_bottom_text {
    animation: fade_out_text_desc ${props => props.animationTime}s ease;
  }
}
`;

let Preview = class Preview extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);

    this.animationTime = 2;

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

  render() {
    const { animate, imageWidth } = this.state;
    const { images, src } = this.props;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Modal,
      { className: `magnify_modal ${animate}`, imageWidth: imageWidth, animationTime: this.animationTime },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "magnify_modal_img_frame" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__PreviewImageFrame__["a" /* default */], { src: src,
          images: images,
          setImageWidth: width => {
            this.setImageWidth(width);
          },
          close: () => this.close()
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          BottomSection,
          { className: "magnify_modal_img_frame_bottom", imageWidth: imageWidth },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "magnify_modal_img_frame_bottom_caption" },
            "Caption"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "magnify_modal_img_frame_bottom_text" },
            "Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason."
          )
        )
      )
    );
  }
};


/* harmony default export */ __webpack_exports__["a"] = (Preview);

/***/ })

})
//# sourceMappingURL=0.d4a4763133275efd5ac4.hot-update.js.map