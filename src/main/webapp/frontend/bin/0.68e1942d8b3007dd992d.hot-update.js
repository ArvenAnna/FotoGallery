webpackHotUpdate(0,{

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(6);



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
    this.state = {
      scrollHeight: 0
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

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Cont,
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'cont', ref: node => this.cont = node },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'text', ref: node => this.text = node },
          'sadasj sakd j d sdaskd a sda k  sda sjhjhshhj tteqwtetwyet 7723 dqouweu we qweqweqyo  eqye qwe yqywueyqw yeyqw eg g fdgcs fggggggggggs jdhhhhhhhhhhhh ddddddddddd ddddddddddd dddddddddddd ddddddd dsjfhdhfsd hdjfd fsdgf d fd fgsd fgsdgf sdjf sjdfg dsfdshfgdsgkfgyru fjdgs  dsfl sdkfh lds flsa dfdklsfkjdhs f;sdk fsd f dasjdsjfuwewuiewiriewb'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'track', ref: node => this.track = node },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'scroll' })
        )
      )
    );
  }
};


/* harmony default export */ __webpack_exports__["a"] = (Scroll);

/***/ })

})
//# sourceMappingURL=0.68e1942d8b3007dd992d.hot-update.js.map