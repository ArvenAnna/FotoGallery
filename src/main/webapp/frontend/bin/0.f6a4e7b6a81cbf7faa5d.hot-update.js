webpackHotUpdate(0,{

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(2);



const Cont = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
.cont{

    width: 200px;
    margin: 0 auto;
    height: 100px;
    overflow: hidden;
    color: white;
    position: relative;
    padding-right: 20px;
    }
    
    .text {
        position: relative;
    
    }
    
    .track {
        position: absolute;
        width: 20px;
        height: 100px;
        top: 0;
        right: 0;
        background-color: red;
  
        .scroll {
            position: relative;
            height: 60%;
            width: 20px;
            background-color: green;
        }
    }
}
`;

let Scroll = class Scroll extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.track = null;
    this.cont = null;
    this.text = null;
    this.scroll = null;
    this.state = {
      scrollHeight: 0,
      currentScrollY: 0
    };
  }

  componentDidMount() {
    this.setState({
      scrollHeight: this.calculateScrollHeight()
    });
  }

  calculateScrollHeight() {
    const container = this.cont;
    const text = this.text;
    if (!container || !text) return 0;
    const contRect = container.getBoundingClientRect();
    const textRect = container.getBoundingClientRect();

    return contRect * contRect / textRect;
  }

  onWheel(e) {
    const textStyle = this.text.currentStyle || window.getComputedStyle(this.text);
    this.text.style.top = parseInt(textStyle.top) + (e.deltaY > 0 ? 1 : -1) + 'px';
  }

  onDrag(e) {

    const scrollStyle = this.scroll.currentStyle || window.getComputedStyle(this.scroll);

    if (parseInt(scrollStyle.top) - 1 < 0 && !this.isScrollDown(e) || parseInt(scrollStyle.bottom) + 1 < 0 && this.isScrollDown(e)) {
      return;
    }

    this.scroll.style.top = parseInt(scrollStyle.top) + (this.isScrollDown(e) ? 1 : -1) + 'px';

    this.setState({
      currentScrollY: e.clientY
    });
  }

  isScrollDown(e) {
    return e.clientY > this.state.currentScrollY;
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Cont,
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'cont', ref: node => this.cont = node },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'text',
            onWheel: e => this.onWheel(e),
            ref: node => this.text = node },
          'sadasj sakd j d sdaskd a sda k  sda sjhjhshhj tteqwtetwyet 7723 dqouweu we qweqweqyo  eqye qwe yqywueyqw yeyqw eg g fdgcs fggggggggggs jdhhhhhhhhhhhh ddddddddddd ddddddddddd dddddddddddd ddddddd dsjfhdhfsd hdjfd fsdgf d fd fgsd fgsdgf sdjf sjdfg dsfdshfgdsgkfgyru fjdgs  dsfl sdkfh lds flsa dfdklsfkjdhs f;sdk fsd f dasjdsjfuwewuiewiriewb'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'track', ref: node => this.track = node },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'scroll',
            ref: node => this.scroll = node,
            draggable: 'true',
            onDrag: e => this.onDrag(e) })
        )
      )
    );
  }
};


/* harmony default export */ __webpack_exports__["a"] = (Scroll);

/***/ })

})
//# sourceMappingURL=0.f6a4e7b6a81cbf7faa5d.hot-update.js.map