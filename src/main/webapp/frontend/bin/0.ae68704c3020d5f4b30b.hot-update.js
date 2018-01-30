webpackHotUpdate(0,{

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AddNewAlbum__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AlbumContainer__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scroll_Scroll__ = __webpack_require__(61);







const Page = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
    margin: 2rem 10rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    
   font-size:2rem;
`;

const Content = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
    background-color: black;
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
            Page,
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5__scroll_Scroll__["a" /* default */],
                { height: '100px', width: '200px' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    null,
                    'sadasj sakd j d sdaskd a sda k sda sjhjhshhj tteqwtetwyet 7723 dqouweu we qweqweqyo eqye qwe yqywueyqw yeyqw eg g fdgcs fggggggggggs jdhhhhhhhhhhhh ddddddddddd ddddddddddd dddddddddddd ddddddd dsjfhdhfsd hdjfd fsdgf d fd fgsd fgsdgf sdjf sjdfg dsfdshfgdsgkfgyru fjdgs dsfl sdkfh lds flsa dfdklsfkjdhs f;sdk fsd f dasjdsjfuwewuiewiriewb'
                )
            )
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (FotoSlider);

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scroll_less__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scroll_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scroll_less__);



let Scroll = class Scroll extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(props) {
        super(props);
        this.track = null;
        this.cont = null;
        this.text = null;
        this.scroll = null;

        this.speed = this.props.speed || 4;
        this.state = {
            currentScrollY: 0,
            dragStarted: false
        };
    }

    componentDidMount() {
        this.cont.style.height = this.props.height;
        this.cont.style.width = this.props.width;
        this.track.style.height = this.props.height;

        this.scroll.style.height = this.calculateScrollHeight();
    }

    calculateScrollHeight() {
        const contRect = this.cont.getBoundingClientRect();
        const textRect = this.text.getBoundingClientRect();

        return parseInt(contRect.height) * parseInt(contRect.height) / parseInt(textRect.height);
    }

    onWheel(e) {
        this.scrollTo(() => e.deltaY > 0 ? 1 : e.deltaY < 0 ? -1 : 0);
    }

    onDrag(e) {
        if (!this.state.dragStarted) {
            return;
        }

        this.scrollTo(() => this.getScrollDelta(e));
        this.setState({
            currentScrollY: e.clientY
        });
        //return false;
    }

    scrollTo(getScrollDirectionAsNumber) {
        const scrollStyle = this.scroll.currentStyle || window.getComputedStyle(this.scroll);
        const trackStyle = this.track.currentStyle || window.getComputedStyle(this.track);

        const scrollTop = parseInt(scrollStyle.top);
        const scrollGap = parseInt(trackStyle.height) - parseInt(scrollStyle.height);

        if (scrollTop <= 0 && getScrollDirectionAsNumber() < 0 || scrollTop >= scrollGap && getScrollDirectionAsNumber() > 0 || getScrollDirectionAsNumber() == 0) {
            return;
        }

        const nextScrollTop = scrollTop + getScrollDirectionAsNumber() * this.speed;

        this.scroll.style.top = nextScrollTop + 'px';

        const textStyle = this.text.currentStyle || window.getComputedStyle(this.text);
        const contStyle = this.cont.currentStyle || window.getComputedStyle(this.cont);
        const nextTextTop = -nextScrollTop * (parseInt(trackStyle.height) / parseInt(scrollStyle.height));

        const minTextScroll = -(parseInt(textStyle.height) - parseInt(contStyle.height));

        if (nextTextTop > 0) {
            this.text.style.top = 0 + 'px';
        } else if (nextTextTop < minTextScroll) {
            this.text.style.top = minTextScroll + 'px';
        } else {
            this.text.style.top = nextTextTop + 'px';
        }
    }

    getScrollDelta(e) {
        console.log(e.clientY);
        if (e.clientY > this.state.currentScrollY) {
            return 1;
        }
        if (e.clientY < this.state.currentScrollY) {
            return -1;
        }
        return 0;
    }

    onStart(e) {
        // console.log('start');
        // e.dataTransfer.setData('text/plain', 'anything');
        //e.dataTransfer.effectAllowed = 'none';
        //e.dataTransfer.setData( 'text/plain', '' );
        // var crt = e.target.cloneNode(true);
        // crt.style.backgroundColor = "red";
        // crt.style.cursor ="pointer";
        // crt.style.display = "none";
        // e.target.style.cursor = 'pointer';
        // /* or visibility: hidden, or any of the above */
        // document.body.appendChild(crt);
        // e.dataTransfer.setDragImage(crt, 0, 0);
    }

    render() {
        const FirstChild = () => {
            const childrenArray = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.toArray(this.props.children);
            return childrenArray[0] || null;
        };
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'text_container', ref: node => this.cont = node },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'text',
                    onWheel: e => this.onWheel(e),
                    ref: node => this.text = node },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FirstChild, null)
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'scroll_track',
                    onMouseLeave: () => this.setState({ dragStarted: false }),
                    ref: node => this.track = node },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'scroll'
                    //onDragStart={(e) => this.onStart(e)}
                    , ref: node => this.scroll = node,
                    onMouseDown: () => this.setState({ dragStarted: true })
                    //onMouseUp={() => this.setState({dragStarted: false})}
                    , onMouseMove: e => this.onDrag(e)
                    //draggable='true'
                    // onDrag={(e) => this.onDrag(e)}
                })
            )
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (Scroll);

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ":root {\n  --scroll-track-width: 20px;\n  --scroll-width: 10px;\n}\n.text_container {\n  overflow: hidden;\n  position: relative;\n  padding-right: var(--scroll-track-width);\n}\n.text_container .text {\n  position: relative;\n}\n.text_container .scroll_track {\n  position: absolute;\n  width: var(--scroll-track-width);\n  top: 0;\n  right: 0;\n  background-color: red;\n}\n.text_container .scroll_track .scroll {\n  --delta-width: calc(var(--scroll-track-width) - var(--scroll-width));\n  position: relative;\n  width: var(--scroll-width);\n  left: calc(var(--delta-width) / 2);\n  background-color: green;\n  cursor: auto;\n  border-radius: 3px;\n}\n", ""]);

// exports


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(63);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(10)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(63, function() {
			var newContent = __webpack_require__(63);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

})
//# sourceMappingURL=0.ae68704c3020d5f4b30b.hot-update.js.map