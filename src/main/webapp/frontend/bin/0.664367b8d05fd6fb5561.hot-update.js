webpackHotUpdate(0,{

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picture_less__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picture_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__picture_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Preview__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_index__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_loaders__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_loaders___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_loaders__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_styles__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__constants_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_loaders_css_src_animations_ball_scale_multiple_scss__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_loaders_css_src_animations_ball_scale_multiple_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_loaders_css_src_animations_ball_scale_multiple_scss__);









let Picture = class Picture extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
    // animation: fade, move

    constructor(props) {
        super(props);
        this.imageLoadStarted = false;

        this.state = {
            magnify: '',
            valid: true,
            loading: true
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
        this.imageLoadStarted = true;
        this.setState({
            loading: false,
            valid: false
        });
    }

    onLoad() {
        this.imageLoadStarted = true;
        this.setState({ loading: false });
    }

    loadImage(url) {
        let image = new Image();
        image.onload = this.onLoad.bind(this);
        image.onerror = this.handleBrokenImg.bind(this);
        image.src = url;
    }

    render() {
        const { album } = this.props;
        const main = album.images[0];
        const { animation, magnify, loading } = this.state;
        if (!this.imageLoadStarted) this.loadImage(main.src);
        //if (loading) return <Loader type="ball-scale-multiple"/>;

        return this.state.valid && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "image_main_wrapper" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                {
                    className: `image_wrapper ${animation} ${magnify}`,
                    onMouseLeave: e => this.mouseLeave(e),
                    onMouseEnter: e => this.mouseEnter(e),
                    onClick: e => this.click(e)
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_loaders___default.a, { type: "ball-scale-multiple" }),
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
                            album.name
                        )
                    )
                )
            ),
            magnify && [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { key: "preview_overlay", className: "preview_overlay" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Preview__["a" /* default */], { main: main,
                key: "preview",
                close: () => this.closePreview(),
                editRoute: `/edit/${album._id}`,
                images: album.images })]
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (Picture);

// {loading
//     ? <Loader type="ball-scale-multiple"/>
//     : isVideo(main.src)
//         ? <video height={styles.picture_height}
//                  width={styles.picture_width}
//                  className="video">
//             <source src={main.src}/>
//         </video>
//         : <img className='image'
//                src={main.src}
//                alt="something wrong happens"/>}

/***/ })

})
//# sourceMappingURL=0.664367b8d05fd6fb5561.hot-update.js.map