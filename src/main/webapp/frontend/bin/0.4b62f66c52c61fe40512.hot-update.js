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

    this.animationTime = 4;

    this.img = null;

    const current = props.images.find(img => img === props.src);
    const currentIndex = props.images.indexOf(current);

    this.state = {
      imageWidth: 0,
      animate: '',
      src: props.src,
      left: currentIndex > 0,
      right: currentIndex < props.images.length - 1
    };
  }

  componentDidMount() {
    this.setState({
      imageWidth: this.getImageContainerWidth(),
      animate: 'increase'
    });
    window.addEventListener('resize', () => this.resize());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.resize());
  }

  getImageContainerWidth() {
    const img = this.img;
    if (!img) return 0;
    const imageRect = img.getBoundingClientRect();
    const style = img.currentStyle || window.getComputedStyle(img);
    //const margin = parseFloat(style.borderLeft) + parseFloat(style.borderRight);
    return imageRect.width;
  }

  componentWillReceiveProps(props) {
    const dd = props;
    console.log(props);
  }

  componentDidUpdate(pvevProps, prevState) {
    if (prevState.src != this.state.src) {
      this.setState({
        imageWidth: this.getImageContainerWidth(),
        animate: ''
      });
    }
  }

  onCrossClick() {
    if (!(this.state.animate === 'decrease')) {
      this.setState({
        imageWidth: this.getImageContainerWidth(),
        animate: 'decrease'
      });
      window.setTimeout(this.props.close, this.animationTime * 1000);
    }
  }

  onArrowClick(arrow) {
    const { images } = this.props;
    const current = images.find(img => img === this.state.src);
    const currentIndex = images.indexOf(current);

    if (current && arrow === 'left' && currentIndex > 0) {
      this.setState({
        src: images[currentIndex - 1],
        left: currentIndex - 1 > 0,
        right: currentIndex - 1 < images.length - 1
      });
    }

    if (current && arrow === 'right' && currentIndex < images.length - 1) {
      this.setState({
        src: images[currentIndex + 1],
        left: currentIndex + 1 > 0,
        right: currentIndex + 1 < images.length - 1
      });
    }
  }

  resize(e) {
    this.setState({
      imageWidth: this.getImageContainerWidth()
    });
  }

  render() {
    const { src, left, right, animate, imageWidth } = this.state;
    const { images } = this.props;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Modal,
      { className: `magnify_modal ${animate}`, imageWidth: imageWidth, animationTime: this.animationTime },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "magnify_modal_img_frame" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "magnify_modal_img_frame_container" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons__["a" /* CrossIcon */], { className: "cross", onClick: () => this.onCrossClick() }),
          left && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "left_arrow" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons__["b" /* LeftArrowIcon */], { onClick: () => this.onArrowClick('left') })
          ),
          right && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "right_arrow" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons__["d" /* RightArrowIcon */], { onClick: () => this.onArrowClick('right') })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "counter_container" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              { className: "counter" },
              `${images.indexOf(src) + 1} of ${images.length}`
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: src, className: "image_preview", ref: node => this.img = node })
        ),
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
//# sourceMappingURL=0.4b62f66c52c61fe40512.hot-update.js.map