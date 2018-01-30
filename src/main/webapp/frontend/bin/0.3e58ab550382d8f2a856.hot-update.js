webpackHotUpdate(0,{

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
      animation: '',
      magnify: ''
    };
  }

  click(e) {
    const clientRect = e.target.getClientRects()[0];
    let r = this.magnified;

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
            "span",
            { className: "overlay_bottom_text" },
            "some beautiful picture"
          )
        )
      ),
      magnify && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "magnify_modal", ref: m => {
            this.magnified = m;
          } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: src })
      )
    );
  }
};


/* harmony default export */ __webpack_exports__["a"] = (Picture);

/***/ })

})
//# sourceMappingURL=0.3e58ab550382d8f2a856.hot-update.js.map