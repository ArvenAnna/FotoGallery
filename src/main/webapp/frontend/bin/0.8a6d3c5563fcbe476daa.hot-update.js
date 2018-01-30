webpackHotUpdate(0,{

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
    this.height = containerStyle.height;
    //this.changeImageWidth();
    window.addEventListener('resize', () => this.recalculateWidth());
    // const animationTime = parseInt(constants['preview_animation_duration']);
    // window.setTimeout(() => this.changeImageWidth(), animationTime*1000 + 50)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.recalculateWidth());
  }

  recalculateWidth() {
    const naturalWidth = this.state.images[this.state.index].naturalWidth;
    const naturalHeight = this.state.images[this.state.index].naturalHeight;

    if (this.state.images[this.state.index].naturalWidth && this.state.images[this.state.index].naturalHeight) {
      const width = this.state.images[this.state.index].naturalWidth * this.height / this.state.images[this.state.index].naturalHeight;
      let newImages = [...this.state.images];
      newImages[this.state.index].width = width;
      this.setState({ images: newImages });
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
    const width = e.target.naturalWidth * this.height / e.target.naturalHeight;
    let newImages = [...this.state.images];
    newImages[this.state.index].naturalWidth = e.target.naturalWidth;
    newImages[this.state.index].naturalHeight = e.target.naturalHeight;
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
      });
    }

    if (arrow === 'right' && currentIndex < images.length - 1) {
      main = images[currentIndex + 1];
      this.setState({
        main,
        left: currentIndex + 1 > 0,
        right: currentIndex + 1 < images.length - 1,
        index: currentIndex + 1
      });
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
//# sourceMappingURL=0.8a6d3c5563fcbe476daa.hot-update.js.map