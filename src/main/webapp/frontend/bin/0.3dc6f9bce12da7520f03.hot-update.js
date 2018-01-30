webpackHotUpdate(0,{

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Icons__ = __webpack_require__(14);




const BottomSection = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
    width: ${props => props.imageWidth}
    
`;

const Modal = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`

@keyframes fade_in_base {
  from {
      height: 0;
  }
  to {
      height: 85%;
  }
}


`;

let Preview = class Preview extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);

    this.state = {
      imageWidth: 0
    };
  }

  componentDidMount() {
    const imageRect = this.refs.img.getClientRects()[0];
    this.setState({
      imageWidth: imageRect.width
    });
    //const clientRect = el.getClientRects()[0];
  }

  // click(e) {
  //   const clientRect = e.target.getClientRects()[0];
  //
  //   this.setState({
  //     magnify: 'magnify',
  //     animation: ''
  //   });
  // };

  // mouseLeave(e)  {
  //   !this.state.magnify && this.chooseAnimation(e, 'fade_out', 'from');
  // };
  //
  // mouseEnter(e)  {
  //   !this.state.magnify && this.chooseAnimation(e, 'fade_in', 'to');
  // };

  render() {
    const { src } = this.props;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "magnify_modal" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Modal,
        { className: "magnify_modal_img_frame" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "magnify_modal_img_frame_container" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons__["a" /* CrossIcon */], { className: "cross" }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "left_arrow" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons__["b" /* LeftArrowIcon */], null)
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "right_arrow" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons__["d" /* RightArrowIcon */], null)
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
//# sourceMappingURL=0.3dc6f9bce12da7520f03.hot-update.js.map