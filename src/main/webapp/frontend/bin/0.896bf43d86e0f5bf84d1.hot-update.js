webpackHotUpdate(0,{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icons__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preview_less__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preview_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__preview_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux_es_connect_connect__ = __webpack_require__(57);
var _dec, _class;







let PreviewImageFrame = (_dec = Object(__WEBPACK_IMPORTED_MODULE_4_react_redux_es_connect_connect__["a" /* default */])(store => ({
  albums: store.albums
}), {
  fetchAlbums
}), _dec(_class = class PreviewImageFrame extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);

    this.img = null;

    const current = props.images.find(img => img === props.src);
    const currentIndex = props.images.indexOf(current);

    this.state = {
      imageWidth: 0,
      main: props.main,
      left: currentIndex > 0,
      right: currentIndex < props.images.length - 1
    };
  }

  componentDidMount() {
    this.props.setImageWidth(this.getImageContainerWidth());
    window.addEventListener('resize', () => this.changeImageWidth());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.changeImageWidth());
  }

  getImageContainerWidth() {
    const img = this.img;
    if (!img) return 0;
    const imageRect = img.getBoundingClientRect();
    return imageRect.width;
  }

  changeImageWidth() {
    this.props.setImageWidth(this.getImageContainerWidth());
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.main != this.state.main) {
      // in order to make sure width will be recalculated
      window.setTimeout(() => this.changeImageWidth(), 100);
    }
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
        right: currentIndex - 1 < images.length - 1
      });
    }

    if (arrow === 'right' && currentIndex < images.length - 1) {
      main = images[currentIndex + 1];
      this.setState({
        main,
        left: currentIndex + 1 > 0,
        right: currentIndex + 1 < images.length - 1
      });
    }

    this.props.clearAnimate(main);
  }

  render() {
    const { main, left, right } = this.state;
    const { images, editRoute } = this.props;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "magnify_modal_img_frame_container" },
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
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: main.src, className: "image_preview", ref: node => this.img = node })
    );
  }
}) || _class);


/* harmony default export */ __webpack_exports__["a"] = (PreviewImageFrame);

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

const apiPrefix = '/api/';

const routes = {
    GET_ALBUMS: `${apiPrefix}albums`,
    GET_ALBUMS_SEARCH: search => `${apiPrefix}albums?search=${search}`,

    ALBUM_ROUTE: `${apiPrefix}album`,
    GET_ALBUM: id => `${apiPrefix}album?id=${id}`,
    DELETE_ALBUM: id => `${apiPrefix}album?id=${id}`,
    UPDATE_ITEMS_ORDER: `${apiPrefix}album/items`,

    FOTO_ROUTE: `${apiPrefix}foto`,
    DELETE_FOTO: (id, album) => `${apiPrefix}foto?album=${album}&id=${id}`,
    UPDATE_FOTO: album => `${apiPrefix}foto?album=${album}`,

    UPLOAD_FOTO: `${apiPrefix}upload`

};

exports.routes = routes;

/***/ })

})
//# sourceMappingURL=0.896bf43d86e0f5bf84d1.hot-update.js.map