webpackHotUpdate(0,{

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AddNewAlbum__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AlbumContainer__ = __webpack_require__(66);






const Page = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
    margin: 2rem 10rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const Content = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
    background-color: black;
`;

const Cont = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
    width: 200px;
    margin: 0 auto;
    height: 100px;
    overflow: hidden;
    color: white;
    position: relative;
    padding-right: 20px;
    
    .track {
        position: absolute;
        width: 20px;
        height: 100px;
        top: 0;
        right: 0;
        background-color: red;
  
        .scroll {
        
        
        
        }
    }
}
`;

let FotoSlider = class FotoSlider extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(props) {
        super(props);
        this.state = {
            addAlbumModal: false
        };
    }

    createAlbum() {
        this.setState({
            addAlbumModal: true
        });
    }

    closeModal() {
        this.setState({
            addAlbumModal: false
        });
    }

    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Cont,
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'text' },
                'sadasj sakd j d sdaskd a sda k  sda sjhjhshhj tteqwtetwyet 7723 dqouweu we qweqweqyo  eqye qwe yqywueyqw yeyqw eg g fdgcs fggggggggggs jdhhhhhhhhhhhh ddddddddddd ddddddddddd dddddddddddd ddddddd dsjfhdhfsd hdjfd fsdgf d fd fgsd fgsdgf sdjf sjdfg dsfdshfgdsgkfgyru'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'track' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'scroll' })
            )
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (FotoSlider);

/***/ })

})
//# sourceMappingURL=0.e6e66e63c028a48a794e.hot-update.js.map