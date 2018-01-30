webpackHotUpdate(0,{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__svg_left_arrow_svg__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__svg_left_arrow_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__svg_left_arrow_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__svg_right_arrow_svg__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__svg_right_arrow_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__svg_right_arrow_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__svg_magnifier_svg__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__svg_magnifier_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__svg_magnifier_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__svg_cancel_svg__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__svg_cancel_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__svg_cancel_svg__);






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
/* harmony export (immutable) */ __webpack_exports__["b"] = LeftArrowIcon;


const RightArrowIcon = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_2__svg_right_arrow_svg___default.a)`
  ${Icon}
`;
/* harmony export (immutable) */ __webpack_exports__["d"] = RightArrowIcon;


const MagnifierIcon = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_3__svg_magnifier_svg___default.a)`
   width: 3rem;
   height: 3rem;
   fill: rgba(255,255,255, 0.7);
`;
/* harmony export (immutable) */ __webpack_exports__["c"] = MagnifierIcon;


const CrossIcon = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_4__svg_cancel_svg___default.a)`
   ${Icon}
`;
/* harmony export (immutable) */ __webpack_exports__["a"] = CrossIcon;


/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "@-webkit-keyframes fade_in_text_caption {\n  0% {\n    color: transparent;\n  }\n  50% {\n    color: transparent;\n  }\n  100% {\n    color: #ffffff;\n  }\n}\n@keyframes fade_in_text_caption {\n  0% {\n    color: transparent;\n  }\n  50% {\n    color: transparent;\n  }\n  100% {\n    color: #ffffff;\n  }\n}\n@-webkit-keyframes fade_in_text {\n  0% {\n    color: transparent;\n  }\n  50% {\n    color: transparent;\n  }\n  100% {\n    color: rgba(255, 255, 255, 0.7);\n  }\n}\n@keyframes fade_in_text {\n  0% {\n    color: transparent;\n  }\n  50% {\n    color: transparent;\n  }\n  100% {\n    color: rgba(255, 255, 255, 0.7);\n  }\n}\n@-webkit-keyframes fade_in_cross {\n  0% {\n    fill: transparent;\n  }\n  50% {\n    fill: transparent;\n  }\n  100% {\n    fill: rgba(0, 0, 0, 0.5);\n  }\n}\n@keyframes fade_in_cross {\n  0% {\n    fill: transparent;\n  }\n  50% {\n    fill: transparent;\n  }\n  100% {\n    fill: rgba(0, 0, 0, 0.5);\n  }\n}\n@-webkit-keyframes fade_in_arrow_container {\n  0% {\n    background-color: transparent;\n  }\n  50% {\n    background-color: transparent;\n  }\n  100% {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n}\n@keyframes fade_in_arrow_container {\n  0% {\n    background-color: transparent;\n  }\n  50% {\n    background-color: transparent;\n  }\n  100% {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n}\n@-webkit-keyframes fade_in_arrow {\n  0% {\n    fill: transparent;\n  }\n  50% {\n    fill: transparent;\n  }\n  100% {\n    fill: rgba(255, 255, 255, 0.2);\n  }\n}\n@keyframes fade_in_arrow {\n  0% {\n    fill: transparent;\n  }\n  50% {\n    fill: transparent;\n  }\n  100% {\n    fill: rgba(255, 255, 255, 0.2);\n  }\n}\n@-webkit-keyframes fade_in_counter {\n  0% {\n    background-color: transparent;\n    color: transparent;\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem transparent;\n  }\n  50% {\n    background-color: transparent;\n    color: transparent;\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem transparent;\n  }\n  100% {\n    background-color: rgba(0, 0, 0, 0.5);\n    color: rgba(255, 255, 255, 0.7);\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem rgba(0, 0, 0, 0.7);\n  }\n}\n@keyframes fade_in_counter {\n  0% {\n    background-color: transparent;\n    color: transparent;\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem transparent;\n  }\n  50% {\n    background-color: transparent;\n    color: transparent;\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem transparent;\n  }\n  100% {\n    background-color: rgba(0, 0, 0, 0.5);\n    color: rgba(255, 255, 255, 0.7);\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem rgba(0, 0, 0, 0.7);\n  }\n}\n@-webkit-keyframes fade_in_overlay {\n  0% {\n    background-color: transparent;\n  }\n  50% {\n    background-color: transparent;\n  }\n  100% {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n}\n@keyframes fade_in_overlay {\n  0% {\n    background-color: transparent;\n  }\n  50% {\n    background-color: transparent;\n  }\n  100% {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n}\n@-webkit-keyframes fade_out_text_caption {\n  0% {\n    color: #ffffff;\n  }\n  50% {\n    color: transparent;\n  }\n  100% {\n    color: transparent;\n  }\n}\n@keyframes fade_out_text_caption {\n  0% {\n    color: #ffffff;\n  }\n  50% {\n    color: transparent;\n  }\n  100% {\n    color: transparent;\n  }\n}\n@-webkit-keyframes fade_out_text_desc {\n  0% {\n    color: rgba(255, 255, 255, 0.7);\n  }\n  50% {\n    color: transparent;\n  }\n  100% {\n    color: transparent;\n  }\n}\n@keyframes fade_out_text_desc {\n  0% {\n    color: rgba(255, 255, 255, 0.7);\n  }\n  50% {\n    color: transparent;\n  }\n  100% {\n    color: transparent;\n  }\n}\n@-webkit-keyframes fade_out_cross {\n  0% {\n    fill: rgba(0, 0, 0, 0.5);\n  }\n  50% {\n    fill: transparent;\n  }\n  100% {\n    fill: transparent;\n  }\n}\n@keyframes fade_out_cross {\n  0% {\n    fill: rgba(0, 0, 0, 0.5);\n  }\n  50% {\n    fill: transparent;\n  }\n  100% {\n    fill: transparent;\n  }\n}\n@-webkit-keyframes fade_out_arrow_container {\n  0% {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n  50% {\n    background-color: transparent;\n  }\n  100% {\n    background-color: transparent;\n  }\n}\n@keyframes fade_out_arrow_container {\n  0% {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n  50% {\n    background-color: transparent;\n  }\n  100% {\n    background-color: transparent;\n  }\n}\n@-webkit-keyframes fade_out_arrow {\n  0% {\n    fill: rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    fill: transparent;\n  }\n  100% {\n    fill: transparent;\n  }\n}\n@keyframes fade_out_arrow {\n  0% {\n    fill: rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    fill: transparent;\n  }\n  100% {\n    fill: transparent;\n  }\n}\n@-webkit-keyframes fade_out_counter {\n  0% {\n    background-color: rgba(0, 0, 0, 0.5);\n    color: rgba(255, 255, 255, 0.7);\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem rgba(0, 0, 0, 0.7);\n  }\n  50% {\n    background-color: transparent;\n    color: transparent;\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem transparent;\n  }\n  100% {\n    background-color: transparent;\n    color: transparent;\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem transparent;\n  }\n}\n@keyframes fade_out_counter {\n  0% {\n    background-color: rgba(0, 0, 0, 0.5);\n    color: rgba(255, 255, 255, 0.7);\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem rgba(0, 0, 0, 0.7);\n  }\n  50% {\n    background-color: transparent;\n    color: transparent;\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem transparent;\n  }\n  100% {\n    background-color: transparent;\n    color: transparent;\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem transparent;\n  }\n}\n@-webkit-keyframes fade_out_overlay {\n  0% {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n  50% {\n    background-color: transparent;\n  }\n  100% {\n    background-color: transparent;\n  }\n}\n@keyframes fade_out_overlay {\n  0% {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n  50% {\n    background-color: transparent;\n  }\n  100% {\n    background-color: transparent;\n  }\n}\n.magnify_modal {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.magnify_modal_img_frame {\n  height: 90%;\n  border-radius: 0.3rem;\n  background-color: #000000;\n}\n.magnify_modal_img_frame_container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  height: 80%;\n}\n.magnify_modal_img_frame_container .counter_container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: absolute;\n  top: 1.5rem;\n  width: 100%;\n}\n.magnify_modal_img_frame_container .counter_container .counter {\n  padding: 0.2rem 1rem;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 1rem;\n  box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem rgba(0, 0, 0, 0.7);\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 2vh;\n}\n.magnify_modal_img_frame_container .cross {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  z-index: 1;\n  width: 2rem;\n  height: 2rem;\n  fill: rgba(0, 0, 0, 0.5);\n}\n.magnify_modal_img_frame_container .cross:hover {\n  fill: #000000;\n}\n.magnify_modal_img_frame_container .left_arrow {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: absolute;\n  top: 50%;\n  left: 1rem;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 0.2rem;\n  height: 5rem;\n}\n.magnify_modal_img_frame_container .left_arrow:hover {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.magnify_modal_img_frame_container .left_arrow svg {\n  width: 3rem;\n  height: 3rem;\n  fill: rgba(255, 255, 255, 0.2);\n}\n.magnify_modal_img_frame_container .left_arrow svg:hover {\n  fill: #000000;\n}\n.magnify_modal_img_frame_container .right_arrow {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: absolute;\n  top: 50%;\n  right: 1rem;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 0.2rem;\n  height: 5rem;\n}\n.magnify_modal_img_frame_container .right_arrow:hover {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.magnify_modal_img_frame_container .right_arrow svg {\n  width: 3rem;\n  height: 3rem;\n  fill: rgba(255, 255, 255, 0.2);\n}\n.magnify_modal_img_frame_container .right_arrow svg:hover {\n  fill: #000000;\n}\n.magnify_modal_img_frame_container .image_preview {\n  height: 100%;\n  border: 0.7rem solid #000000;\n  box-sizing: border-box;\n  border-radius: 0.3rem;\n}\n.magnify_modal_img_frame_bottom {\n  padding: 0 2rem;\n  height: 20%;\n  box-sizing: border-box;\n  color: #ffffff;\n}\n.magnify_modal_img_frame_bottom_caption {\n  font-size: 4vh;\n}\n.magnify_modal_img_frame_bottom_text {\n  font-style: italic;\n  font-size: 2vh;\n  color: rgba(255, 255, 255, 0.7);\n}\n", ""]);

// exports


/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_slick__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_slick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_slick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icons_jsx__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Icons__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__picture_Picture__ = __webpack_require__(72);







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
      nextArrow: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons_jsx__["d" /* RightArrowIcon */], null),
      prevArrow: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons_jsx__["b" /* LeftArrowIcon */], null)
    };
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__picture_Picture__["a" /* default */], { src: '/foto/download.jpg', animation: 'fade', images: ['/foto/images.jpg', '/foto/download.jpg'] })
    );
  }
};


/* harmony default export */ __webpack_exports__["a"] = (FotoSlider);

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icons__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picture_less__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picture_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__picture_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Preview__ = __webpack_require__(74);





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
    const diffs = [{
      side: `move_${direction}_right`,
      diff: Math.abs(e.clientX - clientRect.left)
    }, {
      side: `move_${direction}_left`,
      diff: Math.abs(e.clientX - clientRect.right)
    }, {
      side: `move_${direction}_bottom`,
      diff: Math.abs(e.clientY - clientRect.top)
    }, {
      side: `move_${direction}_top`,
      diff: Math.abs(e.clientY - clientRect.bottom)
    }];

    const minDiff = Math.min(...Array.from(diffs, el => el.diff));
    return diffs.find(el => el.diff == minDiff).side;
  }

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
      magnify && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Preview__["a" /* default */], { src: src, close: () => this.closePreview(), images: this.props.images || [this.props.src] })
    );
  }
};


/* harmony default export */ __webpack_exports__["a"] = (Picture);

/***/ }),

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
    const img = this.refs.img;
    if (!img) return 0;
    const imageRect = img.getClientRects()[0];
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

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(17);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(16)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(17, function() {
			var newContent = __webpack_require__(17);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

})
//# sourceMappingURL=0.296f192f48907baaa48b.hot-update.js.map