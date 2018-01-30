webpackHotUpdate(0,{

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icons__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picture_less__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picture_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__picture_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Preview__ = __webpack_require__(79);





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
      magnify && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Preview__["a" /* default */], { src: src })
    );
  }
};


/* harmony default export */ __webpack_exports__["a"] = (Picture);

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


let Preview = class Preview extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);

    // this.state = {
    //   magnify: ''
    // };
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
      'div',
      { className: 'magnify_modal' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'magnify_modal_img_frame' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: src, className: 'image_preview' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'magnify_modal_img_frame_bottom' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'magnify_modal_img_frame_bottom_caption' },
            'Caption'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'magnify_modal_img_frame_bottom_text' },
            'Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason. Some text which was provided for some reason.'
          )
        )
      )
    );
  }
};


/* harmony default export */ __webpack_exports__["a"] = (Preview);

/***/ })

})
//# sourceMappingURL=0.59cf1948edc24285f6a1.hot-update.js.map