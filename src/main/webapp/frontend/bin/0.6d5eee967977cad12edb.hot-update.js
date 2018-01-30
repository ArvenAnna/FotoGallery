webpackHotUpdate(0,{

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__svg_left_arrow_svg__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__svg_left_arrow_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__svg_left_arrow_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__svg_right_arrow_svg__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__svg_right_arrow_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__svg_right_arrow_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__svg_magnifier_svg__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__svg_magnifier_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__svg_magnifier_svg__);





const Icon = `
        width: 1rem;
        height: 1rem;
        fill: ${props => props.theme.text};
        
        &:hover {
            cursor: pointer;
            fill: ${props => props.theme.content};
        }
`;

const LeftArrowIcon = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_1__svg_left_arrow_svg___default.a)`
  ${Icon}
`;
/* harmony export (immutable) */ __webpack_exports__["a"] = LeftArrowIcon;


const RightArrowIcon = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_2__svg_right_arrow_svg___default.a)`
  ${Icon}
`;
/* harmony export (immutable) */ __webpack_exports__["c"] = RightArrowIcon;


const MagnifierIcon = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_3__svg_magnifier_svg___default.a)`
   width: 3rem;
   height: 3rem;
   fill: rgba(255,255,255, 0.7);
`;
/* harmony export (immutable) */ __webpack_exports__["b"] = MagnifierIcon;


/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_slick__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_slick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_slick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icons_jsx__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Icons__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__picture_Picture__ = __webpack_require__(68);







let FotoSlider = class FotoSlider extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {

    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: false,
      centerMode: true,
      fade: true,
      nextArrow: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons_jsx__["c" /* RightArrowIcon */], null),
      prevArrow: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons_jsx__["a" /* LeftArrowIcon */], null)
    };
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__picture_Picture__["a" /* default */], { src: '/foto/download.jpg', animation: 'move' })
    );
  }
};


/* harmony default export */ __webpack_exports__["a"] = (FotoSlider);

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icons__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picture_less__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picture_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__picture_less__);




let Picture = class Picture extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  // animation: fade, move

  constructor(props) {
    super(props);

    this.state = {
      animation: '',
      magnify: ''
    };
  }

  click(e) {
    this.setState({
      magnify: 'magnify'
    });
  }

  mouseLeave(e) {
    this.chooseAnimation(e, 'fade_out', 'from');
  }

  mouseEnter(e) {
    this.chooseAnimation(e, 'fade_in', 'to');
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
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: src }),
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
            "span",
            { className: "overlay_bottom_text" },
            "some beautiful picture"
          )
        )
      ),
      magnify && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "magnify_modal" },
        "fdshfajdhsfl"
      )
    );
  }
};


/* harmony default export */ __webpack_exports__["a"] = (Picture);

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "@-webkit-keyframes fade_in_base {\n  from {\n    visibility: hidden;\n    color: rgba(255, 255, 255, 0);\n  }\n  to {\n    visibility: visible;\n    color: rgba(255, 255, 255, 0.7);\n  }\n}\n@keyframes fade_in_base {\n  from {\n    visibility: hidden;\n    color: rgba(255, 255, 255, 0);\n  }\n  to {\n    visibility: visible;\n    color: rgba(255, 255, 255, 0.7);\n  }\n}\n@-webkit-keyframes fade_in_top {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n}\n@keyframes fade_in_top {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n}\n@-webkit-keyframes fade_in_bottom {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n}\n@keyframes fade_in_bottom {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n}\n@-webkit-keyframes fade_in_icon {\n  from {\n    fill: rgba(255, 255, 255, 0);\n  }\n  to {\n    fill: rgba(255, 255, 255, 0.7);\n  }\n}\n@keyframes fade_in_icon {\n  from {\n    fill: rgba(255, 255, 255, 0);\n  }\n  to {\n    fill: rgba(255, 255, 255, 0.7);\n  }\n}\n@-webkit-keyframes fade_out_base {\n  from {\n    visibility: visible;\n    color: rgba(255, 255, 255, 0.7);\n  }\n  to {\n    visibility: hidden;\n    color: rgba(255, 255, 255, 0);\n  }\n}\n@keyframes fade_out_base {\n  from {\n    visibility: visible;\n    color: rgba(255, 255, 255, 0.7);\n  }\n  to {\n    visibility: hidden;\n    color: rgba(255, 255, 255, 0);\n  }\n}\n@-webkit-keyframes fade_out_top {\n  from {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0);\n  }\n}\n@keyframes fade_out_top {\n  from {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0);\n  }\n}\n@-webkit-keyframes fade_out_bottom {\n  from {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0);\n  }\n}\n@keyframes fade_out_bottom {\n  from {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0);\n  }\n}\n@-webkit-keyframes fade_out_icon {\n  from {\n    fill: rgba(255, 255, 255, 0.7);\n  }\n  to {\n    fill: rgba(255, 255, 255, 0);\n  }\n}\n@keyframes fade_out_icon {\n  from {\n    fill: rgba(255, 255, 255, 0.7);\n  }\n  to {\n    fill: rgba(255, 255, 255, 0);\n  }\n}\n@-webkit-keyframes move_to_right {\n  from {\n    right: 100%;\n  }\n  to {\n    right: 0;\n  }\n}\n@keyframes move_to_right {\n  from {\n    right: 100%;\n  }\n  to {\n    right: 0;\n  }\n}\n@-webkit-keyframes move_to_left {\n  from {\n    left: 100%;\n  }\n  to {\n    left: 0;\n  }\n}\n@keyframes move_to_left {\n  from {\n    left: 100%;\n  }\n  to {\n    left: 0;\n  }\n}\n@-webkit-keyframes move_to_top {\n  from {\n    top: 100%;\n  }\n  to {\n    top: 0;\n  }\n}\n@keyframes move_to_top {\n  from {\n    top: 100%;\n  }\n  to {\n    top: 0;\n  }\n}\n@-webkit-keyframes move_to_bottom {\n  from {\n    bottom: 100%;\n    top: -100%;\n  }\n  to {\n    bottom: 0;\n    top: 0;\n  }\n}\n@keyframes move_to_bottom {\n  from {\n    bottom: 100%;\n    top: -100%;\n  }\n  to {\n    bottom: 0;\n    top: 0;\n  }\n}\n@-webkit-keyframes move_from_right {\n  from {\n    right: 0;\n    visibility: visible;\n  }\n  to {\n    right: 100%;\n    visibility: hidden;\n  }\n}\n@keyframes move_from_right {\n  from {\n    right: 0;\n    visibility: visible;\n  }\n  to {\n    right: 100%;\n    visibility: hidden;\n  }\n}\n@-webkit-keyframes move_from_left {\n  from {\n    left: 0;\n    visibility: visible;\n  }\n  to {\n    left: 100%;\n    visibility: hidden;\n  }\n}\n@keyframes move_from_left {\n  from {\n    left: 0;\n    visibility: visible;\n  }\n  to {\n    left: 100%;\n    visibility: hidden;\n  }\n}\n@-webkit-keyframes move_from_top {\n  from {\n    top: 0;\n    visibility: visible;\n  }\n  to {\n    top: 100%;\n    visibility: hidden;\n  }\n}\n@keyframes move_from_top {\n  from {\n    top: 0;\n    visibility: visible;\n  }\n  to {\n    top: 100%;\n    visibility: hidden;\n  }\n}\n@-webkit-keyframes move_from_bottom {\n  from {\n    bottom: 0;\n    top: 0;\n    visibility: visible;\n  }\n  to {\n    bottom: 100%;\n    top: -100%;\n    visibility: hidden;\n  }\n}\n@keyframes move_from_bottom {\n  from {\n    bottom: 0;\n    top: 0;\n    visibility: visible;\n  }\n  to {\n    bottom: 100%;\n    top: -100%;\n    visibility: hidden;\n  }\n}\n.image_wrapper {\n  position: relative;\n  overflow: hidden;\n  color: rgba(255, 255, 255, 0.7);\n  box-shadow: 0.5rem 0.5rem 0.3rem 0.1rem rgba(0, 0, 0, 0.5);\n  border-radius: 0.3rem;\n}\n.image_wrapper:hover .overlay {\n  visibility: visible;\n}\n.image_wrapper img {\n  margin: 0 auto;\n  height: 30rem;\n}\n.image_wrapper .overlay {\n  position: absolute;\n  top: 0;\n  z-index: 99;\n  width: 100%;\n  height: 100%;\n  visibility: hidden;\n}\n.image_wrapper .overlay .overlay_top {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 80%;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.image_wrapper .overlay .overlay_bottom {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 20%;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.image_wrapper .overlay .overlay_bottom_text {\n  font-weight: 400;\n  font-size: 2rem;\n  font-style: italic;\n  margin: 0 20px;\n}\n.image_wrapper.fade_in .overlay {\n  -webkit-animation-name: fade_in_base;\n          animation-name: fade_in_base;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_in .overlay .overlay_top {\n  -webkit-animation-name: fade_in_top;\n          animation-name: fade_in_top;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_in .overlay .overlay_top svg {\n  -webkit-animation-name: fade_in_icon;\n          animation-name: fade_in_icon;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_in .overlay .overlay_bottom {\n  -webkit-animation-name: fade_in_bottom;\n          animation-name: fade_in_bottom;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_out .overlay {\n  -webkit-animation-name: fade_out_base;\n          animation-name: fade_out_base;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_out .overlay .overlay_top {\n  -webkit-animation-name: fade_out_top;\n          animation-name: fade_out_top;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_out .overlay .overlay_top svg {\n  -webkit-animation-name: fade_out_icon;\n          animation-name: fade_out_icon;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_out .overlay .overlay_bottom {\n  -webkit-animation-name: fade_out_bottom;\n          animation-name: fade_out_bottom;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.move_to_right .overlay {\n  -webkit-animation-name: move_to_right;\n          animation-name: move_to_right;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.move_to_left .overlay {\n  -webkit-animation-name: move_to_left;\n          animation-name: move_to_left;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.move_to_top .overlay {\n  -webkit-animation-name: move_to_top;\n          animation-name: move_to_top;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.move_to_bottom .overlay {\n  -webkit-animation-name: move_to_bottom;\n          animation-name: move_to_bottom;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.move_from_right .overlay {\n  -webkit-animation-name: move_from_right;\n          animation-name: move_from_right;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.move_from_left .overlay {\n  -webkit-animation-name: move_from_left;\n          animation-name: move_from_left;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.move_from_top .overlay {\n  -webkit-animation-name: move_from_top;\n          animation-name: move_from_top;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.move_from_bottom .overlay {\n  -webkit-animation-name: move_from_bottom;\n          animation-name: move_from_bottom;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n", ""]);

// exports


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(77);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(76)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(77, function() {
			var newContent = __webpack_require__(77);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

})
//# sourceMappingURL=0.6d5eee967977cad12edb.hot-update.js.map