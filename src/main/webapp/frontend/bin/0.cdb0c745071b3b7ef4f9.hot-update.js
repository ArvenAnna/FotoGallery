webpackHotUpdate(0,{

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icons__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picture_less__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picture_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__picture_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Preview__ = __webpack_require__(79);





let Picture = class Picture extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  // animation: fade, move

  constructor(props) {
    super(props);

    this.state = {
      magnify: ''
    };
  }

  click() {
    this.setState({
      magnify: 'magnify',
      animation: ''
    });
  }

  closePreview() {
    this.setState({
      magnify: ''
    });
  }

  mouseLeave(e) {
    !this.state.magnify && this.chooseAnimation(e, 'fade_out', 'from');
  }

  mouseEnter(e) {
    !this.state.magnify && this.chooseAnimation(e, 'fade_in', 'to');
  }

  chooseAnimation(e, fade, move) {
    switch (this.props.animation) {
      case 'fade':
        this.setState({
          animation: fade
        });
        break;
      case 'move':
        this.setState({
          animation: this.findSide(e, move)
        });
    }
  }

  findSide(e, direction) {
    const clientRect = e.target.getClientRects()[0];
    const x = e.clientX;
    const y = e.clientY;
    const diffs = [{
      side: `move_${direction}_right`,
      diff: Math.abs(x - clientRect.left)
    }, {
      side: `move_${direction}_left`,
      diff: Math.abs(x - clientRect.right)
    }, {
      side: `move_${direction}_bottom`,
      diff: Math.abs(y - clientRect.top)
    }, {
      side: `move_${direction}_top`,
      diff: Math.abs(y - clientRect.bottom)
    }];

    const minDiff = Math.min(...Array.from(diffs, el => el.diff));
    return diffs.find(el => el.diff == minDiff).side;
  }

  changeSlide(direction) {}

  render() {
    const { src } = this.props;
    const { animation, magnify } = this.state;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        {
          className: `image_wrapper ${animation} ${magnify}`,
          onMouseLeave: e => this.mouseLeave(e),
          onMouseEnter: e => this.mouseEnter(e),
          onClick: e => this.click(e)
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { className: "image", src: src }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: 'overlay' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: `overlay_top` },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icons__["c" /* MagnifierIcon */], null)
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: `overlay_bottom` },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              { className: "overlay_bottom_text" },
              "some beautiful picture"
            )
          )
        )
      ),
      magnify && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Preview__["a" /* default */], { src: src, close: () => this.closePreview(), navigate: direction => this.changeSlide(direction) })
    );
  }
};


/* harmony default export */ __webpack_exports__["a"] = (Picture);

/***/ }),

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

    this.state = {
      imageWidth: 0,
      animate: ''
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
    this.props.navigate(arrow);
  }

  render() {
    const { src } = this.props;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "magnify_modal" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Modal,
        { className: `magnify_modal_img_frame ${this.state.animate}`, imageWidth: this.state.imageWidth },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "magnify_modal_img_frame_container" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons__["a" /* CrossIcon */], { className: "cross", onClick: () => this.onCrossClick() }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "left_arrow" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons__["b" /* LeftArrowIcon */], { onClick: () => this.onArrowClick('left') })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
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
              "1 of 52"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: src, className: "image_preview", ref: "img" })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          BottomSection,
          { className: "magnify_modal_img_frame_bottom", imageWidth: this.state.imageWidth },
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
//# sourceMappingURL=0.cdb0c745071b3b7ef4f9.hot-update.js.map