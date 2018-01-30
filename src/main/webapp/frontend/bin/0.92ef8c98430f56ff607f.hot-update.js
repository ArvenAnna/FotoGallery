webpackHotUpdate(0,{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__svg_left_arrow_svg__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__svg_left_arrow_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__svg_left_arrow_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__svg_right_arrow_svg__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__svg_right_arrow_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__svg_right_arrow_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__svg_magnifier_svg__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__svg_magnifier_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__svg_magnifier_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__svg_cancel_svg__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__svg_cancel_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__svg_cancel_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__svg_edit_svg__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__svg_edit_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__svg_edit_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__svg_save_file_option_svg__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__svg_save_file_option_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__svg_save_file_option_svg__);








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
/* harmony export (immutable) */ __webpack_exports__["c"] = LeftArrowIcon;


const RightArrowIcon = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_2__svg_right_arrow_svg___default.a)`
  ${Icon}
`;
/* harmony export (immutable) */ __webpack_exports__["e"] = RightArrowIcon;


const MagnifierIcon = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_3__svg_magnifier_svg___default.a)`
   width: 3rem;
   height: 3rem;
   fill: rgba(255,255,255, 0.7);
`;
/* harmony export (immutable) */ __webpack_exports__["d"] = MagnifierIcon;


const CrossIcon = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_4__svg_cancel_svg___default.a)`
   ${Icon}
`;
/* harmony export (immutable) */ __webpack_exports__["a"] = CrossIcon;


const EditIcon = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_5__svg_edit_svg___default.a)`
   ${Icon}
`;
/* harmony export (immutable) */ __webpack_exports__["b"] = EditIcon;


const SaveIcon = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_6__svg_save_file_option_svg___default.a)`
   ${Icon}
`;
/* unused harmony export SaveIcon */


/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newAlbum_AddNewAlbum__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AlbumContainer__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scroll_Scroll__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scroll_ProgressScroll__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_dom__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__editAlbum_EditAlbum__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__editAlbum_EditAlbum___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__editAlbum_EditAlbum__);










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
            this.state.addAlbumModal && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__newAlbum_AddNewAlbum__["a" /* default */], { closeModal: () => this.closeModal() }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                Content,
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Header__["a" /* default */], { createAlbum: () => this.createAlbum() }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7_react_router_dom__["d" /* Switch */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["c" /* Route */], { exact: true, path: '/', component: __WEBPACK_IMPORTED_MODULE_4__AlbumContainer__["a" /* default */] }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["c" /* Route */], { path: '/edit/:id', component: __WEBPACK_IMPORTED_MODULE_8__editAlbum_EditAlbum__["default"] })
                )
            )
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (FotoSlider);

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Icons__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fileInput_FileInput__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addNewAlbum_less__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addNewAlbum_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__addNewAlbum_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scroll_Scroll__ = __webpack_require__(29);







const Label = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].span`
  width: 100%;
  margin-bottom: 0.25rem;
`;

let AddNewAlbum = class AddNewAlbum extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
    constructor(props) {
        super(props);
        this.modal = null;
        this.state = {
            height: '100%'
        };
    }

    componentDidMount() {
        window.addEventListener('resize', () => this.calculateModalHeight());
        this.calculateModalHeight();
    }

    calculateModalHeight() {
        var w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            y = w.innerHeight || e.clientHeight || g.clientHeight;

        if (this.modal) {
            const modalStyle = this.modal.currentStyle || window.getComputedStyle(this.modal);
            const height = Math.min(parseInt(y), parseInt(modalStyle.height)) + 'px';
            this.setState({
                height
            });
        }
    }

    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'add_album' },
            ' ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5__scroll_Scroll__["a" /* default */],
                { width: '40%', height: this.state.height, className: 'scroll_container' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'add_album_modal', ref: r => this.modal = r },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons__["a" /* CrossIcon */], { onClick: this.props.closeModal }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        Label,
                        null,
                        'Name'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', null),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        Label,
                        null,
                        'Title image:'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__fileInput_FileInput__["a" /* default */], null),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        Label,
                        null,
                        'Description'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', null),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'button',
                        null,
                        'ok'
                    )
                )
            )
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (AddNewAlbum);

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icons__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picture_less__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picture_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__picture_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Preview__ = __webpack_require__(132);





let Picture = class Picture extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
    // animation: fade, move

    constructor(props) {
        super(props);

        this.state = {
            magnify: '',
            valid: true
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

    handleBrokenImg(e) {
        this.setState({
            valid: false
        });
    }

    render() {
        const { main } = this.props;
        const { animation, magnify } = this.state;
        return this.state.valid && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
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
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { className: "image",
                    onError: e => this.handleBrokenImg(e),
                    src: main.src,
                    alt: "something wrong happens" }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: 'overlay' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: `overlay_top` },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icons__["d" /* MagnifierIcon */], null)
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: `overlay_bottom` },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "div",
                            { className: "overlay_bottom_text" },
                            main.text
                        )
                    )
                )
            ),
            magnify && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Preview__["a" /* default */], { main: main,
                close: () => this.closePreview(),
                editRoute: this.props.editRoute,
                images: this.props.images })
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (Picture);

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icons__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preview_less__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preview_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__preview_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(20);





let PreviewImageFrame = class PreviewImageFrame extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);

    this.img = null;

    const current = props.images.find(img => img === props.src);
    const currentIndex = props.images.indexOf(current);

    this.state = {
      imageWidth: 0,
      main: props.main,
      left: currentIndex > 0,
      right: currentIndex < props.images.length - 1
    };
  }

  componentDidMount() {
    this.props.setImageWidth(this.getImageContainerWidth());
    window.addEventListener('resize', () => this.changeImageWidth());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.changeImageWidth());
  }

  getImageContainerWidth() {
    const img = this.img;
    if (!img) return 0;
    const imageRect = img.getBoundingClientRect();
    return imageRect.width;
  }

  changeImageWidth() {
    this.props.setImageWidth(this.getImageContainerWidth());
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.main != this.state.main) {
      // in order to make sure width will be recalculated
      window.setTimeout(() => this.changeImageWidth(), 100);
    }
  }

  onCrossClick() {
    this.props.close();
  }

  onArrowClick(arrow) {
    const { images } = this.props;
    //const current = images.find(img => img === this.state.main);
    const currentIndex = images.indexOf(this.state.main);
    let main;

    if (arrow === 'left' && currentIndex > 0) {
      main = images[currentIndex - 1];
      this.setState({
        main,
        left: currentIndex - 1 > 0,
        right: currentIndex - 1 < images.length - 1
      });
    }

    if (arrow === 'right' && currentIndex < images.length - 1) {
      main = images[currentIndex + 1];
      this.setState({
        main,
        left: currentIndex + 1 > 0,
        right: currentIndex + 1 < images.length - 1
      });
    }

    this.props.clearAnimate(main);
  }

  edit() {
    //const current = this.props.images.find(img => img === this.state.src);
    const currentIndex = this.props.images.indexOf(this.state.main);
    return this.props.editRoute + '/' + currentIndex;
  }

  render() {
    const { main, left, right } = this.state;
    const { images, editRoute } = this.props;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "magnify_modal_img_frame_container" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icons__["a" /* CrossIcon */], { className: "cross", onClick: () => this.onCrossClick() }),
      editRoute && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],
        { to: this.edit() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icons__["b" /* EditIcon */], { className: "edit" })
      ),
      left && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "left_arrow" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icons__["c" /* LeftArrowIcon */], { onClick: () => this.onArrowClick('left') })
      ),
      right && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "right_arrow" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icons__["e" /* RightArrowIcon */], { onClick: () => this.onArrowClick('right') })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "counter_container" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "counter" },
          `${images.indexOf(main) + 1} of ${images.length}`
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: main.src, className: "image_preview", ref: node => this.img = node })
    );
  }
};


/* harmony default export */ __webpack_exports__["a"] = (PreviewImageFrame);

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: Unexpected token (34:12)\n\n\u001b[0m \u001b[90m 32 | \u001b[39m    componentDidMount() {\n \u001b[90m 33 | \u001b[39m        http\u001b[33m.\u001b[39mdoGet(routesModule\u001b[33m.\u001b[39mroutes\u001b[33m.\u001b[39m\u001b[33mGET_ALBUM\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops\u001b[33m.\u001b[39mmatch\u001b[33m.\u001b[39mparams\u001b[33m.\u001b[39mid))\u001b[33m;\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 34 | \u001b[39m            \u001b[33m.\u001b[39mthen(result \u001b[33m=>\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msetState({pictures\u001b[33m:\u001b[39m result\u001b[33m.\u001b[39mimages}))\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m            \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 35 | \u001b[39m    }\n \u001b[90m 36 | \u001b[39m\n \u001b[90m 37 | \u001b[39m    openDetails() {\u001b[0m\n");

/***/ }),

/***/ 180:
false,

/***/ 38:
false,

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icons__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fileInput_less__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fileInput_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__fileInput_less__);




let FileInput = class FileInput extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'file_input_wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'button',
                null,
                'Choose main foto'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'file_input_area' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icons__["d" /* MagnifierIcon */], null)
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'file', disabled: this.props.disabled || false })
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (FileInput);

/***/ }),

/***/ 72:
false

})
//# sourceMappingURL=0.92ef8c98430f56ff607f.hot-update.js.map