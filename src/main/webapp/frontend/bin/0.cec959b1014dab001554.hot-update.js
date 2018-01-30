webpackHotUpdate(0,{

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__svg_left_arrow_svg__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__svg_left_arrow_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__svg_left_arrow_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__svg_right_arrow_svg__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__svg_right_arrow_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__svg_right_arrow_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__svg_magnifier_svg__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__svg_magnifier_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__svg_magnifier_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__svg_cancel_svg__ = __webpack_require__(80);
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


const CrossIcon = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_4__svg_cancel_svg___default.a)`
   ${Icon}
`;
/* unused harmony export CrossIcon */


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_slick__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_slick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_slick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icons_jsx__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Icons__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__picture_Picture__ = __webpack_require__(70);







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

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icons__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picture_less__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picture_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__picture_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Preview__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Preview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Preview__);





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
        )
      ),
      magnify && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Preview__["default"], { src: src, close: () => this.closePreview(), images: this.props.images || [this.props.src] })
    );
  }
};


/* harmony default export */ __webpack_exports__["a"] = (Picture);

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: Unexpected token, expected , (191:8)\n\n\u001b[0m \u001b[90m 189 | \u001b[39m        src\u001b[33m:\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops\u001b[33m.\u001b[39mimages[currentIndex \u001b[33m-\u001b[39m \u001b[35m1\u001b[39m]\u001b[33m,\u001b[39m\n \u001b[90m 190 | \u001b[39m        left\u001b[33m:\u001b[39m currentIndex \u001b[33m-\u001b[39m \u001b[35m1\u001b[39m \u001b[33m>\u001b[39m \u001b[35m0\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 191 | \u001b[39m        right\u001b[33m:\u001b[39m\n \u001b[90m     | \u001b[39m        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 192 | \u001b[39m      })\n \u001b[90m 193 | \u001b[39m    }\n \u001b[90m 194 | \u001b[39m\u001b[0m\n");

/***/ })

})
//# sourceMappingURL=0.cec959b1014dab001554.hot-update.js.map