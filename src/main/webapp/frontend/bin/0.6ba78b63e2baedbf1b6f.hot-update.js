webpackHotUpdate(0,{

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preview_less__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preview_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__preview_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_index__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_styles__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__constants_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_loaders__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_loaders___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_loaders__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_loaders_css_src_animations_ball_scale_multiple_scss__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_loaders_css_src_animations_ball_scale_multiple_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_loaders_css_src_animations_ball_scale_multiple_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_s_alert__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_s_alert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_s_alert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__GMap__ = __webpack_require__(217);











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
      index: currentIndex,
      mode: 'main'
    };
  }

  componentDidMount() {
    this.height = this.getContainerHeight();
    window.addEventListener('resize', () => this.recalculateWidth());
  }

  getContainerHeight() {
    if (this.cont) {
      const containerStyle = this.cont.currentStyle || window.getComputedStyle(this.cont);
      return parseFloat(containerStyle.height);
    }
    return 0;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.recalculateWidth());
  }

  recalculateWidth() {
    const naturalWidth = this.state.images[this.state.index].naturalWidth;
    const naturalHeight = this.state.images[this.state.index].naturalHeight;

    if (naturalWidth && naturalHeight && this.cont) {
      this.height = this.getContainerHeight();
      let width = naturalWidth * this.height / naturalHeight;
      if (width + parseFloat(__WEBPACK_IMPORTED_MODULE_5__constants_styles___default.a.preview_border_width) * 2 > window.innerWidth) {
        width = window.innerWidth - parseFloat(__WEBPACK_IMPORTED_MODULE_5__constants_styles___default.a.preview_border_width) * 2;
        const height = naturalHeight * width / naturalWidth;
        this.cont.style.height = height;
      }
      this.cont.style.width = width;
      this.props.setImageWidth(width);
    }
  }

  onLoad(e) {
    let width = e.target.naturalWidth * this.height / e.target.naturalHeight;
    let newImages = [...this.state.images];
    newImages[this.state.index].naturalWidth = e.target.naturalWidth;
    newImages[this.state.index].naturalHeight = e.target.naturalHeight;
    newImages[this.state.index].loaded = true;
    if (width + parseFloat(__WEBPACK_IMPORTED_MODULE_5__constants_styles___default.a.preview_border_width) * 2 > window.innerWidth) {
      width = window.innerWidth - parseFloat(__WEBPACK_IMPORTED_MODULE_5__constants_styles___default.a.preview_border_width) * 2;
      const height = e.target.naturalHeight * width / e.target.naturalWidth;
      this.cont.style.height = height;
    }
    this.cont.style.width = width;
    this.setState({ images: newImages });
    this.props.setImageWidth(width);
  }

  onCrossClick() {
    this.props.close();
  }

  onArrowClick(arrow) {
    const { images } = this.props;
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

  loadImageURL(imageURL) {
    const imageObj = new Image();
    imageObj.onload = this.onLoad.bind(this);
    imageObj.onerror = this.onLoadFailure.bind(this);
    imageObj.src = imageURL;
  }

  onLoadFailure() {
    __WEBPACK_IMPORTED_MODULE_8_react_s_alert___default.a.error("Image loading failed", {});
    let newImages = [...this.state.images];
    newImages[this.state.index].loaded = true;
    this.setState({ images: newImages });
  }

  onEarthClick() {
    this.setState({ mode: 'map' });
  }

  closeMap() {
    this.setState({ mode: 'main' });
  }

  render() {
    const { main, left, right, images, index } = this.state;
    const { editRoute } = this.props;
    if (!images[index].loaded) this.loadImageURL(images[index].src);

    return this.state.mode == 'main' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "magnify_modal_img_frame_container", ref: cont => this.cont = cont },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icons__["a" /* CrossIcon */], { className: "cross", onClick: () => this.onCrossClick() }),
      editRoute && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],
        { to: this.props.editRoute },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icons__["c" /* EditIcon */], { className: "edit" })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icons__["b" /* EarthIcon */], { className: "earth", onClick: () => this.onEarthClick() }),
      left && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "left_arrow" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icons__["d" /* LeftArrowIcon */], { onClick: () => this.onArrowClick('left') })
      ),
      right && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "right_arrow" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icons__["f" /* RightArrowIcon */], { onClick: () => this.onArrowClick('right') })
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
      !images[index].loaded ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_loaders___default.a, { type: "ball-scale-multiple" }) : Object(__WEBPACK_IMPORTED_MODULE_4__utils_index__["a" /* isVideo */])(main.src) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "video",
        { controls: "controls",
          ref: node => this.img = node,
          className: "image_preview"
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("source", { src: main.src })
      ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: main.src, className: "image_preview",
        ref: node => this.img = node })
    ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__GMap__["a" /* default */], { close: () => this.closeMap(), index: index, images: images[index] });
  }
};


/* harmony default export */ __webpack_exports__["a"] = (PreviewImageFrame);

/***/ })

})
//# sourceMappingURL=0.6ba78b63e2baedbf1b6f.hot-update.js.map