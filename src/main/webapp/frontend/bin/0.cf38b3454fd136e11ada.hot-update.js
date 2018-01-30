webpackHotUpdate(0,{

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "@-webkit-keyframes fade_in_base {\n  from {\n    visibility: hidden;\n    color: rgba(255, 255, 255, 0);\n  }\n  to {\n    visibility: visible;\n    color: rgba(255, 255, 255, 0.7);\n  }\n}\n@keyframes fade_in_base {\n  from {\n    visibility: hidden;\n    color: rgba(255, 255, 255, 0);\n  }\n  to {\n    visibility: visible;\n    color: rgba(255, 255, 255, 0.7);\n  }\n}\n@-webkit-keyframes fade_in_top {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n}\n@keyframes fade_in_top {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n}\n@-webkit-keyframes fade_in_bottom {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n}\n@keyframes fade_in_bottom {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n}\n@-webkit-keyframes fade_in_icon {\n  from {\n    fill: rgba(255, 255, 255, 0);\n  }\n  to {\n    fill: rgba(255, 255, 255, 0.7);\n  }\n}\n@keyframes fade_in_icon {\n  from {\n    fill: rgba(255, 255, 255, 0);\n  }\n  to {\n    fill: rgba(255, 255, 255, 0.7);\n  }\n}\n@-webkit-keyframes fade_out_base {\n  from {\n    visibility: visible;\n    color: rgba(255, 255, 255, 0.7);\n  }\n  to {\n    visibility: hidden;\n    color: rgba(255, 255, 255, 0);\n  }\n}\n@keyframes fade_out_base {\n  from {\n    visibility: visible;\n    color: rgba(255, 255, 255, 0.7);\n  }\n  to {\n    visibility: hidden;\n    color: rgba(255, 255, 255, 0);\n  }\n}\n@-webkit-keyframes fade_out_top {\n  from {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0);\n  }\n}\n@keyframes fade_out_top {\n  from {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0);\n  }\n}\n@-webkit-keyframes fade_out_bottom {\n  from {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0);\n  }\n}\n@keyframes fade_out_bottom {\n  from {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0);\n  }\n}\n@-webkit-keyframes fade_out_icon {\n  from {\n    fill: rgba(255, 255, 255, 0.7);\n  }\n  to {\n    fill: rgba(255, 255, 255, 0);\n  }\n}\n@keyframes fade_out_icon {\n  from {\n    fill: rgba(255, 255, 255, 0.7);\n  }\n  to {\n    fill: rgba(255, 255, 255, 0);\n  }\n}\n@-webkit-keyframes move_to_right {\n  from {\n    right: 100%;\n  }\n  to {\n    right: 0;\n  }\n}\n@keyframes move_to_right {\n  from {\n    right: 100%;\n  }\n  to {\n    right: 0;\n  }\n}\n@-webkit-keyframes move_to_left {\n  from {\n    left: 100%;\n  }\n  to {\n    left: 0;\n  }\n}\n@keyframes move_to_left {\n  from {\n    left: 100%;\n  }\n  to {\n    left: 0;\n  }\n}\n@-webkit-keyframes move_to_top {\n  from {\n    top: 100%;\n  }\n  to {\n    top: 0;\n  }\n}\n@keyframes move_to_top {\n  from {\n    top: 100%;\n  }\n  to {\n    top: 0;\n  }\n}\n@-webkit-keyframes move_to_bottom {\n  from {\n    bottom: 100%;\n    top: -100%;\n  }\n  to {\n    bottom: 0;\n    top: 0;\n  }\n}\n@keyframes move_to_bottom {\n  from {\n    bottom: 100%;\n    top: -100%;\n  }\n  to {\n    bottom: 0;\n    top: 0;\n  }\n}\n@-webkit-keyframes move_from_right {\n  from {\n    right: 0;\n    visibility: visible;\n  }\n  to {\n    right: 100%;\n    visibility: hidden;\n  }\n}\n@keyframes move_from_right {\n  from {\n    right: 0;\n    visibility: visible;\n  }\n  to {\n    right: 100%;\n    visibility: hidden;\n  }\n}\n@-webkit-keyframes move_from_left {\n  from {\n    left: 0;\n    visibility: visible;\n  }\n  to {\n    left: 100%;\n    visibility: hidden;\n  }\n}\n@keyframes move_from_left {\n  from {\n    left: 0;\n    visibility: visible;\n  }\n  to {\n    left: 100%;\n    visibility: hidden;\n  }\n}\n@-webkit-keyframes move_from_top {\n  from {\n    top: 0;\n    visibility: visible;\n  }\n  to {\n    top: 100%;\n    visibility: hidden;\n  }\n}\n@keyframes move_from_top {\n  from {\n    top: 0;\n    visibility: visible;\n  }\n  to {\n    top: 100%;\n    visibility: hidden;\n  }\n}\n@-webkit-keyframes move_from_bottom {\n  from {\n    bottom: 0;\n    top: 0;\n    visibility: visible;\n  }\n  to {\n    bottom: 100%;\n    top: -100%;\n    visibility: hidden;\n  }\n}\n@keyframes move_from_bottom {\n  from {\n    bottom: 0;\n    top: 0;\n    visibility: visible;\n  }\n  to {\n    bottom: 100%;\n    top: -100%;\n    visibility: hidden;\n  }\n}\n.image_wrapper {\n  position: relative;\n  overflow: hidden;\n  color: rgba(255, 255, 255, 0.7);\n  box-shadow: 0.5rem 0.5rem 0.3rem 0.1rem rgba(0, 0, 0, 0.5);\n  border-radius: 0.3rem;\n}\n.image_wrapper:hover .overlay {\n  visibility: visible;\n}\n.image_wrapper .image {\n  margin: 0 auto;\n  height: 30rem;\n}\n.image_wrapper .overlay {\n  position: absolute;\n  top: 0;\n  z-index: 99;\n  width: 100%;\n  height: 100%;\n  visibility: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.image_wrapper .overlay .overlay_top {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.image_wrapper .overlay .overlay_bottom {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.image_wrapper .overlay .overlay_bottom_text {\n  font-weight: 400;\n  font-size: 2rem;\n  font-style: italic;\n  margin: 20px;\n}\n.image_wrapper.fade_in .overlay {\n  -webkit-animation-name: fade_in_base;\n          animation-name: fade_in_base;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_in .overlay .overlay_top {\n  -webkit-animation-name: fade_in_top;\n          animation-name: fade_in_top;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_in .overlay .overlay_top svg {\n  -webkit-animation-name: fade_in_icon;\n          animation-name: fade_in_icon;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_in .overlay .overlay_bottom {\n  -webkit-animation-name: fade_in_bottom;\n          animation-name: fade_in_bottom;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_out .overlay {\n  -webkit-animation-name: fade_out_base;\n          animation-name: fade_out_base;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_out .overlay .overlay_top {\n  -webkit-animation-name: fade_out_top;\n          animation-name: fade_out_top;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_out .overlay .overlay_top svg {\n  -webkit-animation-name: fade_out_icon;\n          animation-name: fade_out_icon;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_out .overlay .overlay_bottom {\n  -webkit-animation-name: fade_out_bottom;\n          animation-name: fade_out_bottom;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.move_to_right .overlay {\n  -webkit-animation-name: move_to_right;\n          animation-name: move_to_right;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.move_to_left .overlay {\n  -webkit-animation-name: move_to_left;\n          animation-name: move_to_left;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.move_to_top .overlay {\n  -webkit-animation-name: move_to_top;\n          animation-name: move_to_top;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.move_to_bottom .overlay {\n  -webkit-animation-name: move_to_bottom;\n          animation-name: move_to_bottom;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.move_from_right .overlay {\n  -webkit-animation-name: move_from_right;\n          animation-name: move_from_right;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.move_from_left .overlay {\n  -webkit-animation-name: move_from_left;\n          animation-name: move_from_left;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.move_from_top .overlay {\n  -webkit-animation-name: move_from_top;\n          animation-name: move_from_top;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.move_from_bottom .overlay {\n  -webkit-animation-name: move_from_bottom;\n          animation-name: move_from_bottom;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper .magnify_modal {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 112;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.image_wrapper .magnify_modal_img_frame {\n  border-radius: 0.3rem;\n  background-color: #000000;\n}\n.image_wrapper .magnify_modal_img_frame .image_preview {\n  margin: 0.7rem;\n  height: 70%;\n}\n.image_wrapper .magnify_modal_img_frame_bottom {\n  height: 20%;\n  color: #ffffff;\n  padding: 0 2rem;\n}\n.image_wrapper .magnify_modal_img_frame_bottom_caption {\n  font-size: 2.5rem;\n}\n.image_wrapper .magnify_modal_img_frame_bottom_text {\n  font-style: italic;\n  font-size: 1.5rem;\n  color: rgba(255, 255, 255, 0.7);\n}\n.image_wrapper .magnify_modal_img_frame_bottom_text::after {\n  border: 1px solid white;\n}\n", ""]);

// exports


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icons__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picture_less__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picture_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__picture_less__);




let Picture = class Picture extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  // animation: fade, move


  constructor(props) {
    super(props);

    this.state = {
      magnify: ''
    };
  }

  click(e) {
    const clientRect = e.target.getClientRects()[0];

    this.setState({
      magnify: 'magnify',
      animation: ''
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

  render() {
    const { src } = this.props;
    const { animation, magnify } = this.state;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
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
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icons__["b" /* MagnifierIcon */], null)
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
      ),
      magnify && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "magnify_modal" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "magnify_modal_img_frame" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: src, className: "image_preview" }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "magnify_modal_img_frame_bottom" },
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
      )
    );
  }
};


/* harmony default export */ __webpack_exports__["a"] = (Picture);

/***/ })

})
//# sourceMappingURL=0.cf38b3454fd136e11ada.hot-update.js.map