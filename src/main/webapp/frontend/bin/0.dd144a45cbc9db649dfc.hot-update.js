webpackHotUpdate(0,{

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preview_less__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preview_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__preview_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PreviewImageFrame__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_styles__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__constants_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scroll_Scroll__ = __webpack_require__(198);


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
      background-color: ${__WEBPACK_IMPORTED_MODULE_4__constants_styles___default.a.preview_frame_color};
  }
`;

const decrease = props => __WEBPACK_IMPORTED_MODULE_1_styled_components__["c" /* keyframes */]`
   0% {
      background-color: ${__WEBPACK_IMPORTED_MODULE_4__constants_styles___default.a.preview_frame_color};
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

        this.animationTime = parseInt(__WEBPACK_IMPORTED_MODULE_4__constants_styles___default.a['preview_animation_duration']);

        this.state = {
            imageWidth: 0,
            imageHeight: 0,
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
        this.props.close();
    }

    clearAnimation(slide) {
        this.setState({
            animate: ''
        });
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
        const { animate, imageWidth, imageHeight } = this.state;
        const { images, main } = this.props;

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Modal,
            { className: `magnify_modal`,
                imageWidth: imageWidth,
                animationTime: this.animationTime },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: `magnify_modal_img_frame` },
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

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preview_less__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preview_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__preview_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_index__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_styles__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__constants_styles__);







let PreviewImageFrame = class PreviewImageFrame extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);

    this.img = null;

    const current = props.images.find(img => img.src === props.main.src);
    const currentIndex = props.images.indexOf(current);

    this.state = {
      imageWidth: 0,
      main: props.main,
      left: currentIndex > 0,
      right: currentIndex < props.images.length - 1,
      images: props.images,
      index: currentIndex
    };
  }

  componentDidMount() {
    const containerStyle = this.cont.currentStyle || window.getComputedStyle(this.cont);
    this.height = parseFloat(containerStyle.height);
    window.addEventListener('resize', () => this.recalculateWidth());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.recalculateWidth());
  }

  recalculateWidth() {
    const naturalWidth = this.state.images[this.state.index].naturalWidth;
    const naturalHeight = this.state.images[this.state.index].naturalHeight;

    if (naturalWidth && naturalHeight && this.cont) {
      const containerStyle = this.cont.currentStyle || window.getComputedStyle(this.cont);
      this.height = parseFloat(containerStyle.height);
      let width = naturalWidth * this.height / naturalHeight;
      if (width + parseFloat(__WEBPACK_IMPORTED_MODULE_5__constants_styles___default.a.preview_border_width) * 2 > window.innerWidth) {
        width = window.innerWidth - parseFloat(__WEBPACK_IMPORTED_MODULE_5__constants_styles___default.a.preview_border_width) * 2;
        //const height = e.target.naturalHeight * width / e.target.naturalWidth;
      }
      this.cont.style.width = width;
      this.props.setImageWidth(width);
    }
  }

  // getImageContainerWidth() {
  //   const img = this.img;
  //   if (!img) return 0;
  //   const imageRect = img.getBoundingClientRect();
  //   return imageRect.width;
  // }

  onLoad(e) {
    let width = e.target.naturalWidth * this.height / e.target.naturalHeight;
    let newImages = [...this.state.images];
    newImages[this.state.index].naturalWidth = e.target.naturalWidth;
    newImages[this.state.index].naturalHeight = e.target.naturalHeight;
    if (width + parseFloat(__WEBPACK_IMPORTED_MODULE_5__constants_styles___default.a.preview_border_width) * 2 > window.innerWidth) {
      width = window.innerWidth - parseFloat(__WEBPACK_IMPORTED_MODULE_5__constants_styles___default.a.preview_border_width) * 2;
      const height = e.target.naturalHeight * width / e.target.naturalWidth;
    }
    this.setState({ images: newImages });
    this.props.setImageWidth(width);
  }

  onCrossClick() {
    this.props.close();
  }

  onArrowClick(arrow) {
    const { images } = this.props;
    //const current = images.find(img => img === this.state.main);
    const currentIndex = images.indexOf(this.state.main);
    let main;

    if (arrow === 'left' && currentIndex > 0) {
      main = images[currentIndex - 1];
      this.setState({
        main,
        left: currentIndex - 1 > 0,
        right: currentIndex - 1 < images.length - 1,
        index: currentIndex - 1
      }, this.recalculateWidth);
    }

    if (arrow === 'right' && currentIndex < images.length - 1) {
      main = images[currentIndex + 1];
      this.setState({
        main,
        left: currentIndex + 1 > 0,
        right: currentIndex + 1 < images.length - 1,
        index: currentIndex + 1
      }, this.recalculateWidth);
    }

    this.props.clearAnimate(main);
  }

  render() {
    const { main, left, right } = this.state;
    const { images, editRoute } = this.props;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "magnify_modal_img_frame_container", ref: cont => this.cont = cont },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icons__["a" /* CrossIcon */], { className: "cross", onClick: () => this.onCrossClick() }),
      editRoute && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],
        { to: this.props.editRoute },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icons__["b" /* EditIcon */], { className: "edit" })
      ),
      left && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "left_arrow" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icons__["c" /* LeftArrowIcon */], { onClick: () => this.onArrowClick('left') })
      ),
      right && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "right_arrow" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icons__["e" /* RightArrowIcon */], { onClick: () => this.onArrowClick('right') })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "counter_container" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "counter" },
          `${images.indexOf(main) + 1} of ${images.length}`
        )
      ),
      Object(__WEBPACK_IMPORTED_MODULE_4__utils_index__["a" /* isVideo */])(main.src) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "video",
        { controls: "controls",
          ref: node => this.img = node,
          onLoad: e => this.onLoad(e),
          className: "image_preview"
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("source", { src: main.src })
      ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { onLoad: e => this.onLoad(e),
        src: main.src, className: "image_preview",
        ref: node => this.img = node })
    );
  }
};


/* harmony default export */ __webpack_exports__["a"] = (PreviewImageFrame);

/***/ })

})
//# sourceMappingURL=0.dd144a45cbc9db649dfc.hot-update.js.map