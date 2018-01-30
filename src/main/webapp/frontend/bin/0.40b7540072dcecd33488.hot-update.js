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
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_loaders___default.a, { type: "ball-scale-multiple", className: "image_loader" }),
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

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "@-webkit-keyframes fade_in_base {\n  from {\n    visibility: hidden;\n    color: transparent;\n  }\n  to {\n    visibility: visible;\n    color: rgba(255, 255, 255, 0.7);\n  }\n}\n@keyframes fade_in_base {\n  from {\n    visibility: hidden;\n    color: transparent;\n  }\n  to {\n    visibility: visible;\n    color: rgba(255, 255, 255, 0.7);\n  }\n}\n@-webkit-keyframes fade_in_top {\n  from {\n    background-color: transparent;\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n}\n@keyframes fade_in_top {\n  from {\n    background-color: transparent;\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n}\n@-webkit-keyframes fade_in_bottom {\n  from {\n    background-color: transparent;\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n}\n@keyframes fade_in_bottom {\n  from {\n    background-color: transparent;\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n}\n@-webkit-keyframes fade_in_icon {\n  from {\n    fill: transparent;\n  }\n  to {\n    fill: rgba(255, 255, 255, 0.7);\n  }\n}\n@keyframes fade_in_icon {\n  from {\n    fill: transparent;\n  }\n  to {\n    fill: rgba(255, 255, 255, 0.7);\n  }\n}\n@-webkit-keyframes fade_out_base {\n  from {\n    visibility: visible;\n    color: rgba(255, 255, 255, 0.7);\n  }\n  to {\n    visibility: hidden;\n    color: transparent;\n  }\n}\n@keyframes fade_out_base {\n  from {\n    visibility: visible;\n    color: rgba(255, 255, 255, 0.7);\n  }\n  to {\n    visibility: hidden;\n    color: transparent;\n  }\n}\n@-webkit-keyframes fade_out_top {\n  from {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n  to {\n    background-color: transparent;\n  }\n}\n@keyframes fade_out_top {\n  from {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n  to {\n    background-color: transparent;\n  }\n}\n@-webkit-keyframes fade_out_bottom {\n  from {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n  to {\n    background-color: transparent;\n  }\n}\n@keyframes fade_out_bottom {\n  from {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n  to {\n    background-color: transparent;\n  }\n}\n@-webkit-keyframes fade_out_icon {\n  from {\n    fill: rgba(255, 255, 255, 0.7);\n  }\n  to {\n    fill: transparent;\n  }\n}\n@keyframes fade_out_icon {\n  from {\n    fill: rgba(255, 255, 255, 0.7);\n  }\n  to {\n    fill: transparent;\n  }\n}\n@-webkit-keyframes move_to_right {\n  from {\n    right: 100%;\n  }\n  to {\n    right: 0;\n  }\n}\n@keyframes move_to_right {\n  from {\n    right: 100%;\n  }\n  to {\n    right: 0;\n  }\n}\n@-webkit-keyframes move_to_left {\n  from {\n    left: 100%;\n  }\n  to {\n    left: 0;\n  }\n}\n@keyframes move_to_left {\n  from {\n    left: 100%;\n  }\n  to {\n    left: 0;\n  }\n}\n@-webkit-keyframes move_to_top {\n  from {\n    top: 100%;\n  }\n  to {\n    top: 0;\n  }\n}\n@keyframes move_to_top {\n  from {\n    top: 100%;\n  }\n  to {\n    top: 0;\n  }\n}\n@-webkit-keyframes move_to_bottom {\n  from {\n    bottom: 100%;\n    top: -100%;\n  }\n  to {\n    bottom: 0;\n    top: 0;\n  }\n}\n@keyframes move_to_bottom {\n  from {\n    bottom: 100%;\n    top: -100%;\n  }\n  to {\n    bottom: 0;\n    top: 0;\n  }\n}\n@-webkit-keyframes move_from_right {\n  from {\n    right: 0;\n    visibility: visible;\n  }\n  to {\n    right: 100%;\n    visibility: hidden;\n  }\n}\n@keyframes move_from_right {\n  from {\n    right: 0;\n    visibility: visible;\n  }\n  to {\n    right: 100%;\n    visibility: hidden;\n  }\n}\n@-webkit-keyframes move_from_left {\n  from {\n    left: 0;\n    visibility: visible;\n  }\n  to {\n    left: 100%;\n    visibility: hidden;\n  }\n}\n@keyframes move_from_left {\n  from {\n    left: 0;\n    visibility: visible;\n  }\n  to {\n    left: 100%;\n    visibility: hidden;\n  }\n}\n@-webkit-keyframes move_from_top {\n  from {\n    top: 0;\n    visibility: visible;\n  }\n  to {\n    top: 100%;\n    visibility: hidden;\n  }\n}\n@keyframes move_from_top {\n  from {\n    top: 0;\n    visibility: visible;\n  }\n  to {\n    top: 100%;\n    visibility: hidden;\n  }\n}\n@-webkit-keyframes move_from_bottom {\n  from {\n    bottom: 0;\n    top: 0;\n    visibility: visible;\n  }\n  to {\n    bottom: 100%;\n    top: -100%;\n    visibility: hidden;\n  }\n}\n@keyframes move_from_bottom {\n  from {\n    bottom: 0;\n    top: 0;\n    visibility: visible;\n  }\n  to {\n    bottom: 100%;\n    top: -100%;\n    visibility: hidden;\n  }\n}\n.image_wrapper {\n  position: relative;\n  overflow: hidden;\n  color: rgba(255, 255, 255, 0.7);\n  box-shadow: 0 0 0.3rem 0.3rem;\n  border-radius: 0.3rem;\n  text-align: center;\n}\n.image_wrapper .image_loader {\n  display: inline-block;\n}\n.image_wrapper:hover .overlay {\n  visibility: visible;\n}\n.image_wrapper .image {\n  margin: 0 auto;\n  height: 200px;\n  display: block;\n}\n.image_wrapper .video {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.image_wrapper .overlay {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: absolute;\n  top: 0;\n  z-index: 50;\n  width: 100%;\n  height: 100%;\n  visibility: hidden;\n}\n.image_wrapper .overlay_top {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.image_wrapper .overlay_top svg {\n  width: 3rem;\n  height: 3rem;\n  fill: rgba(255, 255, 255, 0.7);\n}\n.image_wrapper .overlay_top svg:hover {\n  fill: rgba(255, 255, 255, 0.2);\n}\n.image_wrapper .overlay_bottom {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.image_wrapper .overlay_bottom_text {\n  font-weight: 400;\n  font-size: 2rem;\n  font-style: italic;\n  margin: 1.5rem;\n}\n.image_wrapper.fade_in .overlay {\n  -webkit-animation-name: fade_in_base;\n          animation-name: fade_in_base;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_in .overlay .overlay_top {\n  -webkit-animation-name: fade_in_top;\n          animation-name: fade_in_top;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_in .overlay .overlay_top svg {\n  -webkit-animation-name: fade_in_icon;\n          animation-name: fade_in_icon;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_in .overlay .overlay_bottom {\n  -webkit-animation-name: fade_in_bottom;\n          animation-name: fade_in_bottom;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_out .overlay {\n  -webkit-animation-name: fade_out_base;\n          animation-name: fade_out_base;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_out .overlay .overlay_top {\n  -webkit-animation-name: fade_out_top;\n          animation-name: fade_out_top;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_out .overlay .overlay_top svg {\n  -webkit-animation-name: fade_out_icon;\n          animation-name: fade_out_icon;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_out .overlay .overlay_bottom {\n  -webkit-animation-name: fade_out_bottom;\n          animation-name: fade_out_bottom;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.move_to_right .overlay {\n  -webkit-animation-name: move_to_right;\n          animation-name: move_to_right;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.move_to_left .overlay {\n  -webkit-animation-name: move_to_left;\n          animation-name: move_to_left;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.move_to_top .overlay {\n  -webkit-animation-name: move_to_top;\n          animation-name: move_to_top;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.move_to_bottom .overlay {\n  -webkit-animation-name: move_to_bottom;\n          animation-name: move_to_bottom;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.move_from_right .overlay {\n  -webkit-animation-name: move_from_right;\n          animation-name: move_from_right;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.move_from_left .overlay {\n  -webkit-animation-name: move_from_left;\n          animation-name: move_from_left;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.move_from_top .overlay {\n  -webkit-animation-name: move_from_top;\n          animation-name: move_from_top;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.move_from_bottom .overlay {\n  -webkit-animation-name: move_from_bottom;\n          animation-name: move_from_bottom;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n", ""]);

// exports


/***/ })

})
//# sourceMappingURL=0.40b7540072dcecd33488.hot-update.js.map