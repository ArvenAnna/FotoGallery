webpackHotUpdate(0,{

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Icons__ = __webpack_require__(14);




const BottomSection = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
   width: ${props => props.imageWidth};
`;

const Modal = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`

@keyframes fade_text_caption {
  0% {
      color: rgba(255, 255, 255, 0);
  }
  50% {
      color: rgba(255, 255, 255, 0);
  }
  
  100% {
    color: rgba(255, 255, 255, 1);
  }
}


@keyframes fade_text_desc {
  0% {
      color: rgba(255, 255, 255, 0);
  }
  50% {
      color: rgba(255, 255, 255, 0);
  }
  
  100% {
    color: rgba(255, 255, 255, 0.7);
  }
}

@keyframes increase {
  from {
      height: 0;
      width: 0;
  }
  to {
      height: 85%;
      width: ${props => props.imageWidth};
  }
}

&.increase {

  animation-name: increase;
  animation-duration: 4s;
  animation-timing-function: ease;
  
  .magnify_modal_img_frame_bottom_caption {
  
    animation-name: fade_text_caption;
    animation-duration: 8s;
    animation-timing-function: ease;
  
  }
 
  .magnify_modal_img_frame_bottom_text {
  
    animation-name: fade_text_desc;
    animation-duration: 8s;
    animation-timing-function: ease;
  }
   
}

@keyframes fade_out_text_caption {
  0% {
      color: rgba(255, 255, 255, 1);
  }
  50% {
      color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 0);
  }
}


@keyframes fade_out_text_desc {
  0% {
      color: rgba(255, 255, 255, 0.7);
  }
  50% {
      color: rgba(255, 255, 255, 0);
  }
  
  100% {
    color: rgba(255, 255, 255, 0);
  }
}

@keyframes decrease {
  0% {
      height: 85%;
      width: ${props => props.imageWidth};
  }
  50% {
      height: 85%;
      width: ${props => props.imageWidth};
  }
  100% {
      height: 0;
      width: 0;
  }
}


&.decrease {

  animation-name: decrease;
  animation-duration: 8s;
  animation-timing-function: ease;
  
  .magnify_modal_img_frame_bottom_caption {
  
    animation-name: fade_out_text_caption;
    animation-duration: 8s;
    animation-timing-function: ease;
  
  }
 
  .magnify_modal_img_frame_bottom_text {
  
    animation-name: fade_out_text_desc;
    animation-duration: 8s;
    animation-timing-function: ease;
  }
   
}


`;

let Preview = class Preview extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);

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
  }

  getImageContainerWidth() {
    const img = this.refs.img;
    const imageRect = img.getClientRects()[0];
    const style = img.currentStyle || window.getComputedStyle(img);
    const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    return imageRect.width + margin;
  }

  onCrossClick() {
    if (!(this.state.animate === 'decrease')) {
      this.setState({
        imageWidth: this.getImageContainerWidth(),
        animate: 'decrease'
      });
      window.setTimeout(this.props.close, 8000);
    }
  }

  onArrowClick(arrow) {
    const current = this.props.images.find(img => img === this.state.src);
    const currentIndex = this.props.images.indexOf(current);

    if (current && arrow === 'left' && currentIndex > 0) {
      this.setState({
        src: this.props.images[currentIndex - 1],
        left: currentIndex - 1 > 0,
        right: currentIndex - 1 < props.images.length - 1
      });
    }

    if (current && arrow === 'right' && currentIndex < this.props.images.length - 1) {
      this.setState({
        src: this.props.images[currentIndex + 1],
        left: currentIndex + 1 > 0,
        right: currentIndex + 1 < props.images.length - 1
      });
    }
  }

  render() {
    const { src, left, right, animate, imageWidth } = this.state;
    const { images } = this.props;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "magnify_modal" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Modal,
        { className: `magnify_modal_img_frame ${animate}`, imageWidth: imageWidth },
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
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: src, className: "image_preview", ref: "img" })
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
//# sourceMappingURL=0.c79a9f80fa5579df6ac5.hot-update.js.map