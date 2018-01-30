webpackHotUpdate(0,{

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newAlbum_AddNewAlbum__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AlbumContainer__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editAlbum_EditAlbum__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_custom_scrollbars__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_custom_scrollbars___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_custom_scrollbars__);








let FotoSlider = class FotoSlider extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(props) {
        super(props);
        this.state = {
            addAlbumModal: false,
            width: 0,
            height: 0
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

    componentDidMount() {
        setTimeout(() => this.scrollbars.forceUpdate(), 100);
    }

    render() {

        const Content = () => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "app_container" },
            this.state.addAlbumModal && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__newAlbum_AddNewAlbum__["a" /* default */], { closeModal: () => this.closeModal() }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "app_page" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], { createAlbum: () => this.createAlbum() }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["d" /* Switch */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["c" /* Route */], { exact: true, path: "/", component: __WEBPACK_IMPORTED_MODULE_3__AlbumContainer__["a" /* default */] }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["c" /* Route */], { path: "/edit/:id", component: __WEBPACK_IMPORTED_MODULE_5__editAlbum_EditAlbum__["a" /* default */] })
                )
            )
        );

        return this.state.addAlbumModal ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Content, null) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_react_custom_scrollbars__["Scrollbars"],
            {
                className: "scroll_bar",
                hideTracksWhenNotNeeded: true,
                ref: scrollbars => this.scrollbars = scrollbars },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Content, null)
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (FotoSlider);

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux_es_connect_connect__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_albumActions__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom_es_withRouter__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(20);
var _dec, _class;







let Header = (_dec = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux_es_connect_connect__["a" /* default */])(store => ({}), {
    fetchAlbumsBySearch: __WEBPACK_IMPORTED_MODULE_2__actions_albumActions__["e" /* fetchAlbumsBySearch */],
    fetchAlbums: __WEBPACK_IMPORTED_MODULE_2__actions_albumActions__["d" /* fetchAlbums */]
}), Object(__WEBPACK_IMPORTED_MODULE_3_react_router_dom_es_withRouter__["a" /* default */])(_class = _dec(_class = class Header extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    onEnter(e) {
        if (e.key == "Enter") {
            if (e.target.value) this.props.fetchAlbumsBySearch(e.target.value);else this.props.fetchAlbums();
            this.props.history.push('/');
        }
    }

    render() {
        return [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { key: "header_menu", className: "header_menu" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "menu_item", onClick: this.props.createAlbum },
                "new album"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "menu_item" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["b" /* NavLink */],
                    { to: "/" },
                    "album's list"
                )
            )
        ), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "search_menu", key: "search" },
            "Search: ",
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { className: "search_input", defaultValue: "",
                onKeyPress: e => this.onEnter(e) })
        )];
    }
}) || _class) || _class);


/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fileInput_FileInput__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addNewAlbum_less__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addNewAlbum_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__addNewAlbum_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux_es_connect_connect__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_index__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_custom_scrollbars__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_custom_scrollbars___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_custom_scrollbars__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__HttpService__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions_albumActions__ = __webpack_require__(23);
var _dec, _class;









const routesModule = __webpack_require__(25);



const Label = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].span`
  width: 100%;
  margin-bottom: 0.25rem;
`;

let AddNewAlbum = (_dec = Object(__WEBPACK_IMPORTED_MODULE_5_react_redux_es_connect_connect__["a" /* default */])(store => ({}), {
    createAlbum: __WEBPACK_IMPORTED_MODULE_9__actions_albumActions__["a" /* createAlbum */]
}), _dec(_class = class AddNewAlbum extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
    constructor(props) {
        super(props);
        this.modal = null;
        this.state = {
            height: '100%',
            name: '',
            description: '',
            src: null
        };
    }

    componentDidMount() {
        setTimeout(() => this.scrollbars.forceUpdate(), 100);

        // window.addEventListener('resize', () => this.calculateModalHeight())
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

    uploadFile(file) {
        __WEBPACK_IMPORTED_MODULE_8__HttpService__["a" /* default */].sendFile(routesModule.routes.UPLOAD_FOTO, file).then(id => {
            this.setState({ src: id.src });
        });
    }

    createAlbum() {
        const { name, description, src } = this.state;
        if (name && description && src) {
            this.props.createAlbum({
                name, description, src
            });
            this.props.closeModal();
        }
    }

    render() {
        const { name, description, src, height } = this.state;

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'add_album' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_react_custom_scrollbars__["Scrollbars"],
                {
                    hideTracksWhenNotNeeded: true,
                    className: 'scroll_bar'
                    // renderTrackVertical={({ style, ...props }) =>
                    //     <div {...props} style={{ ...style, backgroundColor: 'blue' }}/>}
                    // renderTrackVertical={props => <div {...props} className="track-vertical"/>}
                    // renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}
                    , ref: scrollbars => this.scrollbars = scrollbars
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'add_album_modal', ref: r => this.modal = r },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons__["a" /* CrossIcon */], { className: 'cross_icon', onClick: this.props.closeModal }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        Label,
                        null,
                        'Name'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { value: name, onChange: e => this.setState({ name: e.target.value }) }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        Label,
                        null,
                        'Title image:'
                    ),
                    src ? Object(__WEBPACK_IMPORTED_MODULE_6__utils_index__["a" /* isVideo */])(src) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'video',
                        {

                            controls: 'controls' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { src: src })
                    ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: src }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__fileInput_FileInput__["a" /* default */], { label: 'Choose main foto',
                        uploadFile: file => this.uploadFile(file) }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        Label,
                        null,
                        'Description'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { value: description, onChange: e => this.setState({ description: e.target.value }) }),
                    src && !Object(__WEBPACK_IMPORTED_MODULE_6__utils_index__["a" /* isVideo */])(src) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'warning' },
                        'You will be able to rotate your foto in the edit mode after album creation.'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'button',
                        { className: 'ok_button', onClick: () => this.createAlbum() },
                        'ok'
                    )
                )
            )
        );
    }
}) || _class);


/* harmony default export */ __webpack_exports__["a"] = (AddNewAlbum);

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picture_less__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picture_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__picture_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Preview__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_index__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_styles__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__constants_styles__);







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
        const { album } = this.props;
        const main = album.images[0];
        const { animation, magnify } = this.state;
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
                Object(__WEBPACK_IMPORTED_MODULE_4__utils_index__["a" /* isVideo */])(main.src) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "video",
                    { height: __WEBPACK_IMPORTED_MODULE_5__constants_styles__["picture_height"],
                        width: __WEBPACK_IMPORTED_MODULE_5__constants_styles__["picture_width"],
                        controls: "controls",
                        className: "video" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("source", { src: main.src })
                ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { className: "image",
                    onError: e => this.handleBrokenImg(e),
                    src: main.src,
                    alt: "something wrong happens" }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: 'overlay' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: `overlay_top` },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icons__["c" /* MagnifierIcon */], null)
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

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preview_less__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preview_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__preview_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PreviewImageFrame__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PreviewImageFrame___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__PreviewImageFrame__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_styles__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__constants_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scroll_Scroll__ = __webpack_require__(198);


//import { Scrollbars } from 'react-custom-scrollbars';





const BottomSection = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
   width: ${props => props.imageWidth};
`;

const increase = props => __WEBPACK_IMPORTED_MODULE_1_styled_components__["c" /* keyframes */]`
   0% {
      height: 0;
      width: 0;
      background-color: transparent;
  }
  50% {
      height: 90%;
      width: ${props.imageWidth};
      background-color: transparent;  
  }
  100% {
      background-color: ${__WEBPACK_IMPORTED_MODULE_4__constants_styles___default.a.preview_frame_color};
  }
`;

const decrease = props => __WEBPACK_IMPORTED_MODULE_1_styled_components__["c" /* keyframes */]`
   0% {
      background-color: ${__WEBPACK_IMPORTED_MODULE_4__constants_styles___default.a.preview_frame_color};
   }
   50% {
      height: 90%;
      width: ${props.imageWidth};
      background-color: transparent;
  }
  100% {
      height: 0;
      width: 0;
      background-color: transparent;
  }
`;

const Modal = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
&.increase {
  .magnify_modal_img_frame {
    animation: ${increase} ${props => props.animationTime}s ease;
  }
}

&.decrease {
  .magnify_modal_img_frame {
    animation: ${decrease} ${props => props.animationTime}s ease;
  }
}
`;

let Preview = class Preview extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(props) {
        super(props);

        this.animationTime = parseInt(__WEBPACK_IMPORTED_MODULE_4__constants_styles___default.a['preview_animation_duration']);

        this.state = {
            imageWidth: 0,
            animate: '',
            currentSlide: props.main
        };
    }

    setImageWidth(width) {
        this.setState({
            imageWidth: width
        });
    }

    clearAnimate(slide) {
        this.setState({
            animate: '',
            currentSlide: slide
        });
    }

    close() {
        this.props.close();
    }

    clearAnimation(slide) {
        this.setState({
            animate: ''
        });
    }

    calculateTextWidth(imgWidth) {
        const bottomSection = document.getElementsByClassName('magnify_modal_img_frame_bottom')[0];
        if (bottomSection) {
            const style = bottomSection.currentStyle || window.getComputedStyle(bottomSection);
            const paddings = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
            return parseFloat(imgWidth) - paddings;
        }
        return 0;
    }

    calculateTextHeight() {
        const bottomSection = document.getElementsByClassName('magnify_modal_img_frame_bottom')[0];

        if (bottomSection && this.caption) {
            const bottomSectionStyle = bottomSection.currentStyle || window.getComputedStyle(bottomSection);
            const paddings = parseFloat(bottomSectionStyle.paddingTop) + parseFloat(bottomSectionStyle.paddingBottom);

            const captionStyle = this.caption.currentStyle || window.getComputedStyle(this.caption);
            return parseFloat(bottomSectionStyle.height) - paddings - parseFloat(captionStyle.height);
        }
        return 0;
    }

    render() {
        const { animate, imageWidth } = this.state;
        const { images, main } = this.props;

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Modal,
            { className: `magnify_modal`,
                imageWidth: imageWidth,
                animationTime: this.animationTime },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: `magnify_modal_img_frame` },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__PreviewImageFrame__["default"], { main: main,
                    images: images,
                    editRoute: this.props.editRoute,
                    setImageWidth: width => {
                        this.setImageWidth(width);
                    },
                    close: () => this.close(),
                    clearAnimate: s => this.clearAnimate(s)
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    BottomSection,
                    { className: 'magnify_modal_img_frame_bottom',
                        imageWidth: imageWidth },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'magnify_modal_img_frame_bottom_caption', ref: r => this.caption = r },
                        this.state.currentSlide.name
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_5__scroll_Scroll__["a" /* default */],
                        { height: this.calculateTextHeight(),
                            width: this.calculateTextWidth(imageWidth),
                            className: 'magnify_modal_img_frame_bottom_text',
                            progress: true },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            null,
                            this.state.currentSlide.text
                        )
                    )
                )
            )
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (Preview);

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: Unexpected token (74:4)\n\n\u001b[0m \u001b[90m 72 | \u001b[39m      width  \u001b[33m=\u001b[39m screen\u001b[33m.\u001b[39mwidth \u001b[33m-\u001b[39m parseFloat(constants\u001b[33m.\u001b[39mpreview_border_width) \u001b[33m*\u001b[39m \u001b[35m2\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 73 | \u001b[39m      \u001b[36mconst\u001b[39m height \u001b[33m=\u001b[39m \n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 74 | \u001b[39m    }\n \u001b[90m    | \u001b[39m    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 75 | \u001b[39m  }\n \u001b[90m 76 | \u001b[39m\n \u001b[90m 77 | \u001b[39m  onCrossClick() {\u001b[0m\n");

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__ = __webpack_require__(102);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HashRouter__ = __webpack_require__(104);
/* unused harmony reexport HashRouter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Link__ = __webpack_require__(58);
/* unused harmony reexport Link */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MemoryRouter__ = __webpack_require__(106);
/* unused harmony reexport MemoryRouter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NavLink__ = __webpack_require__(109);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__NavLink__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Prompt__ = __webpack_require__(112);
/* unused harmony reexport Prompt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Redirect__ = __webpack_require__(114);
/* unused harmony reexport Redirect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Route__ = __webpack_require__(59);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__Route__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Router__ = __webpack_require__(30);
/* unused harmony reexport Router */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__StaticRouter__ = __webpack_require__(120);
/* unused harmony reexport StaticRouter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Switch__ = __webpack_require__(122);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_10__Switch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__matchPath__ = __webpack_require__(124);
/* unused harmony reexport matchPath */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__withRouter__ = __webpack_require__(62);
/* unused harmony reexport withRouter */



























/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editAlbum_less__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editAlbum_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editAlbum_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fileInput_FileInput__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Card__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__HttpService__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_es_connect_connect__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dialog_Dialog__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__EditCanvas__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_index__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_styles__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__constants_styles__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class;













const routesModule = __webpack_require__(25);

let EditAlbum = (_dec = Object(__WEBPACK_IMPORTED_MODULE_6_react_redux_es_connect_connect__["a" /* default */])(store => ({}), {
    deleteFotoFromAlbum: __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__["c" /* deleteFotoFromAlbum */],
    saveFotoDescription: __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__["g" /* saveFotoDescription */],
    saveAlbumDescription: __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__["f" /* saveAlbumDescription */],
    deleteAlbum: __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__["b" /* deleteAlbum */],
    saveItemsOrder: __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__["h" /* saveItemsOrder */]
}), _dec(_class = class EditAlbum extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(props) {
        super(props);
        this.state = {
            dragStarted: false,
            dragFrom: null,
            dragFromEl: null,
            dragObj: null,
            openPicture: null,
            openedAlbum: false,
            album: null,
            openedDialog: false,
            imageDownloaded: false
        };
    }

    componentDidMount() {
        this.loadAlbum();
    }

    loadAlbum() {
        __WEBPACK_IMPORTED_MODULE_5__HttpService__["a" /* default */].doGet(routesModule.routes.GET_ALBUM(this.props.match.params.id)).then(result => {
            result.images.sort((x, y) => x.order - y.order);
            result.images.forEach(image => image.src = image.src + '?forceUpdate=' + new Date().toISOString());
            this.setState({ album: result });
        });
    }

    openDetails(picture) {
        this.setState({ openPicture: picture });
    }

    openAlbumDetails() {
        this.setState({ openedAlbum: true });
    }

    onCrossClick() {
        this.setState({ openPicture: null, openedAlbum: false });
    }

    deleteItem(picture) {
        if (this.state.album.images.length == 1) {
            this.setState({ openedDialog: true });
            return;
        }

        this.props.deleteFotoFromAlbum(picture._id);
        const newPictures = this.state.album.images.filter(p => p._id != picture._id);
        const newAlbum = Object.assign({}, _extends({}, this.state.album, {
            images: newPictures
        }));
        this.setState({ album: newAlbum });
    }

    removeAlbum() {
        this.props.deleteAlbum(this.state.album._id);
        this.props.history.push('/');
    }

    changeState(obj) {
        this.setState(obj);
    }

    saveFotoDescription(picture) {
        const newPictures = [...this.state.album.images];
        const editedPicture = this.state.album.images.find(p => p._id == picture._id);
        if (this.pinput.value) editedPicture.name = this.pinput.value;
        if (this.ptextarea.value) editedPicture.text = this.ptextarea.value;

        this.props.saveFotoDescription(this.state.album._id, editedPicture);

        const newAlbum = Object.assign({}, _extends({}, this.state.album, {
            images: newPictures
        }));
        this.setState({ album: newAlbum, openPicture: null });
    }

    saveAlbumDescription() {
        const editedAlbum = Object.assign({}, _extends({}, this.state.album));
        if (this.ainput.value) editedAlbum.name = this.ainput.value;
        if (this.atextarea.value) editedAlbum.description = this.atextarea.value;

        this.props.saveAlbumDescription(editedAlbum);

        this.setState({ album: editedAlbum, openedAlbum: false });
    }

    uploadFile(file) {
        __WEBPACK_IMPORTED_MODULE_5__HttpService__["a" /* default */].sendFile(routesModule.routes.UPLOAD_FOTO, file).then(downloadedFoto => {
            if (Object(__WEBPACK_IMPORTED_MODULE_10__utils_index__["a" /* isVideo */])(downloadedFoto.src)) {
                __WEBPACK_IMPORTED_MODULE_5__HttpService__["a" /* default */].doPost(routesModule.routes.FOTO_ROUTE, {
                    src: downloadedFoto.src,
                    album: this.state.album._id
                }).then(result => {
                    const newPictures = [...this.state.album.images];
                    newPictures.push(result);
                    const newAlbum = Object.assign({}, _extends({}, this.state.album, {
                        images: newPictures
                    }));

                    this.setState({
                        //imageDownloaded: null,
                        album: newAlbum
                    });
                });
            } else {
                this.setState({
                    imageDownloaded: downloadedFoto.src
                });
            }
        });
    }

    renderEditAlbumCard() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'edit_album_card', key: 'edit_album_card' },
            Object(__WEBPACK_IMPORTED_MODULE_10__utils_index__["a" /* isVideo */])(this.state.album.images[0].src) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'video',
                { className: 'album_image',
                    height: __WEBPACK_IMPORTED_MODULE_11__constants_styles__["picture_edit_height"],
                    width: __WEBPACK_IMPORTED_MODULE_11__constants_styles__["picture_edit_width"],
                    controls: 'controls' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { src: this.state.album.images[0].src })
            ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'album_image', src: this.state.album.images[0].src }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'album_name', onClick: () => this.openAlbumDetails() },
                this.state.album.name
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["a" /* CrossIcon */], { className: 'cross_icon', onClick: () => this.setState({ openedDialog: true }) })
        );
    }

    renderImages() {
        return this.state.album.images.sort((x, y) => x.order - y.order).map(p => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Card__["a" /* default */], {
            key: p._id,
            picture: p,
            pictures: this.state.album.images,
            openDetails: p => this.openDetails(p),
            deleteItem: p => this.deleteItem(p),
            replaceImage: target => this.replaceImage(target),
            openPicture: this.state.openPicture,
            changeDragState: obj => this.changeState(obj),
            dragState: this.state,
            updateOrder: album => this.props.saveItemsOrder(album),
            loadAlbum: () => this.loadAlbum()
        }));
    }

    renderFileInput() {
        return !this.state.imageDownloaded && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__fileInput_FileInput__["a" /* default */], { className: 'edit_file_input',
            disabled: this.state.openPicture,
            label: 'Choose new foto',
            uploadFile: file => this.uploadFile(file)
        });
    }

    renderEditCanvas() {
        return this.state.imageDownloaded && !Object(__WEBPACK_IMPORTED_MODULE_10__utils_index__["a" /* isVideo */])(this.state.imageDownloaded) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__EditCanvas__["a" /* default */], {
            image: this.state.imageDownloaded,
            cleanImage: obj => this.changeState(obj),
            album: this.state.album
        });
    }

    renderChangeFotoTextInfoDialog() {
        return this.state.openPicture && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'new_text_overlay' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'new_text' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'new_text_caption' },
                    'Enter foto name and description:'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["e" /* SaveIcon */], { className: 'save_icon', onClick: () => this.saveFotoDescription(this.state.openPicture) }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["a" /* CrossIcon */], { className: 'cross_icon', onClick: () => this.onCrossClick() }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { defaultValue: this.state.openPicture.name, ref: i => this.pinput = i }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { defaultValue: this.state.openPicture.text, ref: t => this.ptextarea = t })
            )
        );
    }

    renderChangeAlbumTextInfoDialog() {
        return this.state.openedAlbum && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'new_text_overlay' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'new_text' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'new_text_caption' },
                    'Enter album name and description:'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["e" /* SaveIcon */], { className: 'save_icon', onClick: () => this.saveAlbumDescription() }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["a" /* CrossIcon */], { className: 'cross_icon', onClick: () => this.onCrossClick() }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { defaultValue: this.state.album.name, ref: i => this.ainput = i }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { defaultValue: this.state.album.description, ref: t => this.atextarea = t })
            )
        );
    }

    renderDeleteDialog() {
        return this.state.openedDialog && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__dialog_Dialog__["a" /* default */], { onClick: () => this.removeAlbum(),
            onClose: () => this.setState({ openedDialog: false }),
            text: 'Do you really want to delete the album?' });
    }

    render() {
        const { album } = this.state;
        if (!album) {
            return null;
        }
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment,
            null,
            this.renderEditAlbumCard(),
            this.renderImages(),
            this.renderFileInput(),
            this.renderEditCanvas(),
            this.renderChangeFotoTextInfoDialog(),
            this.renderChangeAlbumTextInfoDialog(),
            this.renderDeleteDialog()
        );
    }
}) || _class);


/* harmony default export */ __webpack_exports__["a"] = (EditAlbum);

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editAlbum_less__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editAlbum_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editAlbum_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_index__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_styles__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__constants_styles__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







let Card = class Card extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(props) {
        super(props);
        this.replaceEvent = 'replace';
    }

    componentWillReceiveProps() {
        if (this.dragContainer && !this.replaceAttached) {
            this.replaceAttached = true;
            this.dragContainer.addEventListener(this.replaceEvent, e => this.replaceImage(e.target));
            document.body.addEventListener('mouseup', e => this.onUpBody(e));
        }
    }

    onUpBody(e) {
        const elementAtPoint = document.elementFromPoint(e.clientX + window.scrollX, e.clientY + window.scrollY).parentElement;
        if (!elementAtPoint.classList.contains('drag_container')) {
            this.props.changeDragState({ dragStarted: false, dragFrom: null, dragObj: null, dragFromEl: null });
        }
    }

    replaceImage(target) {
        const attr = target.getAttribute('imgid');
        const picture = this.props.pictures.find(p => p._id == attr);

        this.changePictureAndClear(picture);
    }

    onMouseDown(e, picture) {
        e.preventDefault();

        const target = e.target.parentElement;

        const x = e.clientX + window.scrollX;
        const y = e.clientY + window.scrollY;

        const style = target.currentStyle || window.getComputedStyle(target);

        const elStartLeft = parseInt(style.left, 10);
        const elStartTop = parseInt(style.top, 10);
        const dragObj = {
            x, y, elStartLeft, elStartTop
        };
        target.style.zIndex = 10;
        this.props.changeDragState({ dragStarted: true, dragFrom: picture, dragObj, dragFromEl: target });
        target.style.zIndex = 10;
    }

    onMouseMove(e, picture) {
        e.preventDefault();
        const { dragFrom, dragStarted, dragObj } = this.props.dragState;
        const target = e.target.parentElement;
        if (dragStarted && dragFrom == picture) {
            const x = e.clientX + window.scrollX;
            const y = e.clientY + window.scrollY;
            target.style.top = dragObj.elStartTop + y - dragObj.y + 'px';
            target.style.left = dragObj.elStartLeft + x - dragObj.x + 'px';
        }
    }

    onMouseUp(e, picture) {
        e.preventDefault();

        const { dragFrom, dragFromEl } = this.props.dragState;
        const target = e.target.parentElement;

        if (!dragFromEl) {
            return;
        }

        dragFromEl.style.top = '0px';
        dragFromEl.style.left = '0px';

        target.style.top = '0px';
        target.style.left = '0px';

        dragFromEl.style.zIndex = 0;

        if (picture == dragFrom) {
            const event = new Event(this.replaceEvent);
            const elementAtPoint = document.elementFromPoint(e.clientX + window.scrollX, e.clientY + window.scrollY).parentElement;
            if (elementAtPoint.classList.contains('drag_container')) {
                elementAtPoint.dispatchEvent(event);
            } else {
                this.props.changeDragState({ dragStarted: false, dragFrom: null, dragObj: null, dragFromEl: null });
            }

            return;
        }

        this.changePictureAndClear(picture);
    }

    changePictureAndClear(picture) {
        const { dragFrom, album } = this.props.dragState;

        const newPictures = [...album.images];

        const dragToPicture = album.images.find(p => p._id == picture._id);
        // editedPicture.order = prevOrder;
        const dragFromPicture = album.images.find(p => p._id == dragFrom._id);

        const prevOrder = dragFromPicture.order;
        dragFromPicture.order = dragToPicture.order;
        dragToPicture.order = prevOrder;

        newPictures.sort((x, y) => x.order - y.order);

        const newAlbum = Object.assign({}, _extends({}, album, {
            images: newPictures
        }));

        this.props.updateOrder(newAlbum);
        this.props.changeDragState({ dragStarted: false, dragFrom: null, dragObj: null, dragFromEl: null, album: newAlbum });
    }

    render() {
        const { picture, openPicture } = this.props;
        return openPicture ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'drag_container',
                imgid: picture._id },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'drag_image',
                src: picture.src,
                draggable: false })
        ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'drag_container',
                ref: r => this.dragContainer = r,
                imgid: picture._id,
                draggable: true,
                onMouseDown: e => this.onMouseDown(e, picture),
                onMouseUp: e => this.onMouseUp(e, picture),
                onMouseMove: e => this.onMouseMove(e, picture) },
            Object(__WEBPACK_IMPORTED_MODULE_3__utils_index__["a" /* isVideo */])(picture.src) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'video',
                { height: __WEBPACK_IMPORTED_MODULE_4__constants_styles__["picture_edit_height"],
                    controls: 'controls',
                    className: 'drag_image' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { src: picture.src })
            ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'drag_image', src: picture.src }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons__["a" /* CrossIcon */], { className: 'cross_icon', onClick: () => this.props.deleteItem(picture) }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons__["b" /* EditIcon */], { className: 'edit_icon', onClick: () => this.props.openDetails(picture) }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'text_description', onClick: () => this.props.openDetails(picture) },
                picture.name
            )
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_less__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__dialog_less__);




let Dialog = class Dialog extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'Dialog' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icons__["a" /* CrossIcon */], { className: 'cross', onClick: this.props.onClose }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'Dialog_text' },
                this.props.text
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'button',
                { className: 'Dialog_ok_button', onClick: this.props.onClick },
                'ok'
            )
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (Dialog);

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editCanvas_less__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editCanvas_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editCanvas_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ImageRotater__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_styles__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__constants_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__HttpService__ = __webpack_require__(24);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






const routesModule = __webpack_require__(25);


let EditCanvas = class EditCanvas extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(props) {
        super(props);
        this.state = {
            angle: 0,
            width: parseInt(__WEBPACK_IMPORTED_MODULE_4__constants_styles__["picture_edit_width"]),
            height: parseInt(__WEBPACK_IMPORTED_MODULE_4__constants_styles__["picture_edit_height"])
        };
    }

    getEditedImage() {
        const { album, image } = this.props;
        this.avatar.getImage().toBlob(img => {
            let name = image.split('/');
            name = name[name.length - 1];
            const file = new File([img], name);

            __WEBPACK_IMPORTED_MODULE_5__HttpService__["a" /* default */].sendFile(routesModule.routes.UPLOAD_FOTO, file).then(downloadedFoto => {
                __WEBPACK_IMPORTED_MODULE_5__HttpService__["a" /* default */].doPost(routesModule.routes.FOTO_ROUTE, {
                    src: downloadedFoto.src,
                    album: album._id
                }).then(result => {
                    const newPictures = [...album.images];
                    newPictures.push(result);
                    const newAlbum = Object.assign({}, _extends({}, album, {
                        images: newPictures
                    }));

                    this.props.cleanImage({
                        imageDownloaded: null,
                        album: newAlbum
                    });
                });
            });
        });
    }

    rotateImage() {
        const newAngle = this.state.angle + 90;
        this.calculateParameters(newAngle);
    }

    calculateParameters(newAngle) {
        const newState = {
            height: parseInt(__WEBPACK_IMPORTED_MODULE_4__constants_styles__["picture_edit_height"]),
            angle: newAngle
        };
        newState.width = newAngle % 180 == 0 ? parseInt(this.naturalWidth * this.state.height / this.naturalHeight) : parseInt(this.naturalHeight * this.state.height / this.naturalWidth);
        this.setState(newState);
    }

    onLoad(imgInfo) {
        this.naturalWidth = imgInfo.naturalWidth;
        this.naturalHeight = imgInfo.naturalHeight;

        this.calculateParameters(this.state.angle);
    }

    closeImage() {
        this.props.cleanImage({ imageDownloaded: false });
    }

    render() {
        const { image } = this.props;
        const { angle, width, height } = this.state;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'Edit_canvas' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ImageRotater__["a" /* default */], {
                ref: ae => this.avatar = ae,
                image: image,
                rotate: angle,
                width: width,
                height: height,
                onLoadSuccess: imgInfo => this.onLoad(imgInfo)
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons__["d" /* RotateIcon */], { className: 'rotate_icon', onClick: () => this.rotateImage() }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons__["e" /* SaveIcon */], { className: 'save_icon', onClick: () => this.getEditedImage() }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons__["a" /* CrossIcon */], { className: 'cross_icon', onClick: () => this.closeImage() })
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (EditCanvas);

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "@-webkit-keyframes fade_in_preview_bottom {\n  0% {\n    background-color: transparent;\n    border-bottom: 1rem solid transparent;\n    overflow: hidden;\n  }\n  50% {\n    background-color: transparent;\n    border-bottom: 1rem solid transparent;\n    overflow: visible;\n  }\n  100% {\n    background-color: black;\n    border-bottom: 1rem solid black;\n    overflow: visible;\n  }\n}\n@keyframes fade_in_preview_bottom {\n  0% {\n    background-color: transparent;\n    border-bottom: 1rem solid transparent;\n    overflow: hidden;\n  }\n  50% {\n    background-color: transparent;\n    border-bottom: 1rem solid transparent;\n    overflow: visible;\n  }\n  100% {\n    background-color: black;\n    border-bottom: 1rem solid black;\n    overflow: visible;\n  }\n}\n@-webkit-keyframes fade_in_text_caption {\n  0% {\n    color: transparent;\n  }\n  50% {\n    color: transparent;\n  }\n  100% {\n    color: #ffffff;\n  }\n}\n@keyframes fade_in_text_caption {\n  0% {\n    color: transparent;\n  }\n  50% {\n    color: transparent;\n  }\n  100% {\n    color: #ffffff;\n  }\n}\n@-webkit-keyframes fade_in_text {\n  0% {\n    color: transparent;\n  }\n  50% {\n    color: transparent;\n  }\n  100% {\n    color: rgba(255, 255, 255, 0.7);\n  }\n}\n@keyframes fade_in_text {\n  0% {\n    color: transparent;\n  }\n  50% {\n    color: transparent;\n  }\n  100% {\n    color: rgba(255, 255, 255, 0.7);\n  }\n}\n@-webkit-keyframes fade_in_cross {\n  0% {\n    fill: transparent;\n  }\n  50% {\n    fill: transparent;\n  }\n  100% {\n    fill: rgba(0, 0, 0, 0.5);\n  }\n}\n@keyframes fade_in_cross {\n  0% {\n    fill: transparent;\n  }\n  50% {\n    fill: transparent;\n  }\n  100% {\n    fill: rgba(0, 0, 0, 0.5);\n  }\n}\n@-webkit-keyframes fade_in_arrow_container {\n  0% {\n    background-color: transparent;\n  }\n  50% {\n    background-color: transparent;\n  }\n  100% {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n}\n@keyframes fade_in_arrow_container {\n  0% {\n    background-color: transparent;\n  }\n  50% {\n    background-color: transparent;\n  }\n  100% {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n}\n@-webkit-keyframes fade_in_arrow {\n  0% {\n    fill: transparent;\n  }\n  50% {\n    fill: transparent;\n  }\n  100% {\n    fill: rgba(255, 255, 255, 0.2);\n  }\n}\n@keyframes fade_in_arrow {\n  0% {\n    fill: transparent;\n  }\n  50% {\n    fill: transparent;\n  }\n  100% {\n    fill: rgba(255, 255, 255, 0.2);\n  }\n}\n@-webkit-keyframes fade_in_counter {\n  0% {\n    background-color: transparent;\n    color: transparent;\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem transparent;\n  }\n  50% {\n    background-color: transparent;\n    color: transparent;\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem transparent;\n  }\n  100% {\n    background-color: rgba(0, 0, 0, 0.5);\n    color: rgba(255, 255, 255, 0.7);\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem rgba(0, 0, 0, 0.7);\n  }\n}\n@keyframes fade_in_counter {\n  0% {\n    background-color: transparent;\n    color: transparent;\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem transparent;\n  }\n  50% {\n    background-color: transparent;\n    color: transparent;\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem transparent;\n  }\n  100% {\n    background-color: rgba(0, 0, 0, 0.5);\n    color: rgba(255, 255, 255, 0.7);\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem rgba(0, 0, 0, 0.7);\n  }\n}\n@-webkit-keyframes fade_in_overlay {\n  0% {\n    background-color: transparent;\n  }\n  50% {\n    background-color: transparent;\n  }\n  100% {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n}\n@keyframes fade_in_overlay {\n  0% {\n    background-color: transparent;\n  }\n  50% {\n    background-color: transparent;\n  }\n  100% {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n}\n@-webkit-keyframes fade_in_scroll_track {\n  0% {\n    background-color: transparent;\n  }\n  50% {\n    background-color: transparent;\n  }\n  100% {\n    background-color: black;\n  }\n}\n@keyframes fade_in_scroll_track {\n  0% {\n    background-color: transparent;\n  }\n  50% {\n    background-color: transparent;\n  }\n  100% {\n    background-color: black;\n  }\n}\n@-webkit-keyframes fade_in_scroll {\n  0% {\n    background: transparent;\n  }\n  50% {\n    background: transparent;\n  }\n  100% {\n    background: linear-gradient(0deg, black, white);\n  }\n}\n@keyframes fade_in_scroll {\n  0% {\n    background: transparent;\n  }\n  50% {\n    background: transparent;\n  }\n  100% {\n    background: linear-gradient(0deg, black, white);\n  }\n}\n@-webkit-keyframes fade_out_preview_bottom {\n  0% {\n    background-color: black;\n    border-bottom: 1rem solid black;\n    overflow: visible;\n  }\n  50% {\n    background-color: transparent;\n    border-bottom: 1rem solid transparent;\n    overflow: hidden;\n  }\n  100% {\n    background-color: transparent;\n    border-bottom: 1rem solid transparent;\n    overflow: hidden;\n  }\n}\n@keyframes fade_out_preview_bottom {\n  0% {\n    background-color: black;\n    border-bottom: 1rem solid black;\n    overflow: visible;\n  }\n  50% {\n    background-color: transparent;\n    border-bottom: 1rem solid transparent;\n    overflow: hidden;\n  }\n  100% {\n    background-color: transparent;\n    border-bottom: 1rem solid transparent;\n    overflow: hidden;\n  }\n}\n@-webkit-keyframes fade_out_text_caption {\n  0% {\n    color: #ffffff;\n  }\n  50% {\n    color: transparent;\n  }\n  100% {\n    color: transparent;\n  }\n}\n@keyframes fade_out_text_caption {\n  0% {\n    color: #ffffff;\n  }\n  50% {\n    color: transparent;\n  }\n  100% {\n    color: transparent;\n  }\n}\n@-webkit-keyframes fade_out_text_desc {\n  0% {\n    color: rgba(255, 255, 255, 0.7);\n  }\n  50% {\n    color: transparent;\n  }\n  100% {\n    color: transparent;\n  }\n}\n@keyframes fade_out_text_desc {\n  0% {\n    color: rgba(255, 255, 255, 0.7);\n  }\n  50% {\n    color: transparent;\n  }\n  100% {\n    color: transparent;\n  }\n}\n@-webkit-keyframes fade_out_cross {\n  0% {\n    fill: rgba(0, 0, 0, 0.5);\n  }\n  50% {\n    fill: transparent;\n  }\n  100% {\n    fill: transparent;\n  }\n}\n@keyframes fade_out_cross {\n  0% {\n    fill: rgba(0, 0, 0, 0.5);\n  }\n  50% {\n    fill: transparent;\n  }\n  100% {\n    fill: transparent;\n  }\n}\n@-webkit-keyframes fade_out_arrow_container {\n  0% {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n  50% {\n    background-color: transparent;\n  }\n  100% {\n    background-color: transparent;\n  }\n}\n@keyframes fade_out_arrow_container {\n  0% {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n  50% {\n    background-color: transparent;\n  }\n  100% {\n    background-color: transparent;\n  }\n}\n@-webkit-keyframes fade_out_arrow {\n  0% {\n    fill: rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    fill: transparent;\n  }\n  100% {\n    fill: transparent;\n  }\n}\n@keyframes fade_out_arrow {\n  0% {\n    fill: rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    fill: transparent;\n  }\n  100% {\n    fill: transparent;\n  }\n}\n@-webkit-keyframes fade_out_counter {\n  0% {\n    background-color: rgba(0, 0, 0, 0.5);\n    color: rgba(255, 255, 255, 0.7);\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem rgba(0, 0, 0, 0.7);\n  }\n  50% {\n    background-color: transparent;\n    color: transparent;\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem transparent;\n  }\n  100% {\n    background-color: transparent;\n    color: transparent;\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem transparent;\n  }\n}\n@keyframes fade_out_counter {\n  0% {\n    background-color: rgba(0, 0, 0, 0.5);\n    color: rgba(255, 255, 255, 0.7);\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem rgba(0, 0, 0, 0.7);\n  }\n  50% {\n    background-color: transparent;\n    color: transparent;\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem transparent;\n  }\n  100% {\n    background-color: transparent;\n    color: transparent;\n    box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem transparent;\n  }\n}\n@-webkit-keyframes fade_out_overlay {\n  0% {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n  50% {\n    background-color: transparent;\n  }\n  100% {\n    background-color: transparent;\n  }\n}\n@keyframes fade_out_overlay {\n  0% {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n  50% {\n    background-color: transparent;\n  }\n  100% {\n    background-color: transparent;\n  }\n}\n@-webkit-keyframes fade_out_scroll_track {\n  0% {\n    background-color: black;\n  }\n  50% {\n    background-color: transparent;\n  }\n  100% {\n    background-color: transparent;\n  }\n}\n@keyframes fade_out_scroll_track {\n  0% {\n    background-color: black;\n  }\n  50% {\n    background-color: transparent;\n  }\n  100% {\n    background-color: transparent;\n  }\n}\n@-webkit-keyframes fade_out_scroll {\n  0% {\n    background: linear-gradient(0deg, black, white);\n  }\n  50% {\n    background: transparent;\n  }\n  100% {\n    background: transparent;\n  }\n}\n@keyframes fade_out_scroll {\n  0% {\n    background: linear-gradient(0deg, black, white);\n  }\n  50% {\n    background: transparent;\n  }\n  100% {\n    background: transparent;\n  }\n}\n@-webkit-keyframes preview_overlay_remove {\n  0% {\n    background-color: #000000;\n  }\n  100% {\n    z-index: 50;\n    background-color: rgba(0, 0, 0, 0);\n  }\n}\n@keyframes preview_overlay_remove {\n  0% {\n    background-color: #000000;\n  }\n  100% {\n    z-index: 50;\n    background-color: rgba(0, 0, 0, 0);\n  }\n}\n.preview_overlay {\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 200;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  -webkit-animation-name: preview_overlay_remove;\n          animation-name: preview_overlay_remove;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.magnify_modal {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.magnify_modal_img_frame {\n  height: 90%;\n  border-radius: 0.3rem;\n  background-color: black;\n  border: 10px solid black;\n}\n.magnify_modal_img_frame_container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  height: 80%;\n}\n.magnify_modal_img_frame_container .counter_container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: absolute;\n  top: 1.5rem;\n  width: 100%;\n}\n@media screen and (max-height: 600px) {\n  .magnify_modal_img_frame_container .counter_container {\n    top: 0.2rem;\n  }\n}\n.magnify_modal_img_frame_container .counter_container .counter {\n  padding: 0.2rem 1rem;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 1rem;\n  box-shadow: 0.3rem 0.3rem 0.1rem 0.05rem rgba(0, 0, 0, 0.7);\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 1rem;\n}\n@media screen and (max-height: 600px) {\n  .magnify_modal_img_frame_container .counter_container .counter {\n    font-size: 0.7rem;\n    font-weight: 600;\n  }\n}\n.magnify_modal_img_frame_container .cross,\n.magnify_modal_img_frame_container .edit {\n  position: absolute;\n  top: 1rem;\n  z-index: 1;\n  width: 2rem;\n  height: 2rem;\n  fill: white;\n  background-color: rgba(0, 0, 0, 0.7);\n  padding: 3px;\n}\n@media screen and (max-height: 600px) {\n  .magnify_modal_img_frame_container .cross,\n  .magnify_modal_img_frame_container .edit {\n    width: 1rem;\n    height: 1rem;\n    fill: white;\n    top: 0.2rem;\n  }\n}\n.magnify_modal_img_frame_container .cross:hover,\n.magnify_modal_img_frame_container .edit:hover {\n  fill: #000000;\n}\n.magnify_modal_img_frame_container .cross {\n  right: 1rem;\n}\n@media screen and (max-height: 600px) {\n  .magnify_modal_img_frame_container .cross {\n    right: 0.2rem;\n  }\n}\n.magnify_modal_img_frame_container .edit {\n  right: 3.5rem;\n}\n@media screen and (max-height: 600px) {\n  .magnify_modal_img_frame_container .edit {\n    right: 1.8rem;\n  }\n}\n.magnify_modal_img_frame_container .left_arrow {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: absolute;\n  top: 50%;\n  left: 1rem;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 0.2rem;\n  height: 5rem;\n  z-index: 1;\n}\n@media screen and (max-height: 600px) {\n  .magnify_modal_img_frame_container .left_arrow {\n    height: 3rem;\n  }\n}\n.magnify_modal_img_frame_container .left_arrow:hover {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.magnify_modal_img_frame_container .left_arrow svg {\n  width: 3rem;\n  height: 3rem;\n  fill: rgba(255, 255, 255, 0.2);\n}\n@media screen and (max-height: 600px) {\n  .magnify_modal_img_frame_container .left_arrow svg {\n    width: 1rem;\n    height: 1rem;\n    fill: rgba(255, 255, 255, 0.2);\n  }\n}\n.magnify_modal_img_frame_container .left_arrow svg:hover {\n  fill: #000000;\n}\n.magnify_modal_img_frame_container .right_arrow {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: absolute;\n  top: 50%;\n  right: 1rem;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 0.2rem;\n  height: 5rem;\n  z-index: 1;\n}\n@media screen and (max-height: 600px) {\n  .magnify_modal_img_frame_container .right_arrow {\n    height: 3rem;\n  }\n}\n.magnify_modal_img_frame_container .right_arrow:hover {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.magnify_modal_img_frame_container .right_arrow svg {\n  width: 3rem;\n  height: 3rem;\n  fill: rgba(255, 255, 255, 0.2);\n}\n@media screen and (max-height: 600px) {\n  .magnify_modal_img_frame_container .right_arrow svg {\n    width: 1rem;\n    height: 1rem;\n    fill: rgba(255, 255, 255, 0.2);\n  }\n}\n.magnify_modal_img_frame_container .right_arrow svg:hover {\n  fill: #000000;\n}\n.magnify_modal_img_frame_container .image_preview {\n  height: 100%;\n  border-radius: 0.3rem;\n  display: block;\n}\n.magnify_modal_img_frame_bottom {\n  padding-left: calc(11px);\n  padding-right: 10px;\n  height: 20%;\n  box-sizing: border-box;\n  color: #ffffff;\n  padding-bottom: 1rem;\n}\n.magnify_modal_img_frame_bottom_caption {\n  font-size: 4vh;\n  padding-bottom: 1rem;\n  box-sizing: border-box;\n}\n.magnify_modal_img_frame_bottom_text {\n  font-style: italic;\n  font-size: 2vh;\n  color: rgba(255, 255, 255, 0.7);\n}\n.magnify_modal_img_frame_bottom_text.text_container .scroll_track {\n  background-color: black;\n  width: 6px;\n}\n.magnify_modal_img_frame_bottom_text.text_container .scroll_track .scroll {\n  background: linear-gradient(0deg, black, white);\n  width: 6px;\n}\n.magnify_modal.increase {\n  -webkit-animation-name: fade_in_overlay;\n          animation-name: fade_in_overlay;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.increase .magnify_modal_img_frame_bottom {\n  -webkit-animation-name: fade_in_preview_bottom;\n          animation-name: fade_in_preview_bottom;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.increase .magnify_modal_img_frame_bottom_caption {\n  -webkit-animation-name: fade_in_text_caption;\n          animation-name: fade_in_text_caption;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.increase .magnify_modal_img_frame_bottom_text {\n  -webkit-animation-name: fade_in_text;\n          animation-name: fade_in_text;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.increase .magnify_modal_img_frame_bottom_text.text_container .scroll_track {\n  -webkit-animation-name: fade_in_scroll_track;\n          animation-name: fade_in_scroll_track;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.increase .magnify_modal_img_frame_bottom_text.text_container .scroll_track .scroll {\n  -webkit-animation-name: fade_in_scroll;\n          animation-name: fade_in_scroll;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.increase .cross {\n  -webkit-animation-name: fade_in_cross;\n          animation-name: fade_in_cross;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.increase .edit {\n  -webkit-animation-name: fade_in_cross;\n          animation-name: fade_in_cross;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.increase .left_arrow,\n.magnify_modal.increase .right_arrow {\n  -webkit-animation-name: fade_in_arrow_container;\n          animation-name: fade_in_arrow_container;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.increase .left_arrow svg,\n.magnify_modal.increase .right_arrow svg {\n  -webkit-animation-name: fade_in_arrow;\n          animation-name: fade_in_arrow;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.increase .counter {\n  -webkit-animation-name: fade_in_counter;\n          animation-name: fade_in_counter;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.decrease {\n  -webkit-animation-name: fade_out_overlay;\n          animation-name: fade_out_overlay;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.decrease .cross {\n  -webkit-animation-name: fade_out_cross;\n          animation-name: fade_out_cross;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.decrease .edit {\n  -webkit-animation-name: fade_out_cross;\n          animation-name: fade_out_cross;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.decrease .left_arrow,\n.magnify_modal.decrease .right_arrow {\n  -webkit-animation-name: fade_out_arrow_container;\n          animation-name: fade_out_arrow_container;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.decrease .left_arrow svg,\n.magnify_modal.decrease .right_arrow svg {\n  -webkit-animation-name: fade_out_arrow;\n          animation-name: fade_out_arrow;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.decrease .counter {\n  -webkit-animation-name: fade_out_counter;\n          animation-name: fade_out_counter;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.decrease .magnify_modal_img_frame_bottom {\n  -webkit-animation-name: fade_out_preview_bottom;\n          animation-name: fade_out_preview_bottom;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.decrease .magnify_modal_img_frame_bottom_caption {\n  -webkit-animation-name: fade_out_text_caption;\n          animation-name: fade_out_text_caption;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.decrease .magnify_modal_img_frame_bottom_text {\n  -webkit-animation-name: fade_out_text_desc;\n          animation-name: fade_out_text_desc;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.decrease .magnify_modal_img_frame_bottom_text.text_container .scroll_track {\n  -webkit-animation-name: fade_out_scroll_track;\n          animation-name: fade_out_scroll_track;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.magnify_modal.decrease .magnify_modal_img_frame_bottom_text.text_container .scroll_track .scroll {\n  -webkit-animation-name: fade_out_scroll;\n          animation-name: fade_out_scroll;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n", ""]);

// exports


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fileInput_less__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fileInput_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__fileInput_less__);




let FileInput = class FileInput extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null
        };
    }

    onChange({ target }) {
        this.setState({
            file: target.files[0]
        });
        this.props.uploadFile(target.files[0]);
    }

    render() {
        const classNames = this.props.className ? `file_input_wrapper ${this.props.className}` : 'file_input_wrapper';
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: classNames },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'button',
                null,
                this.props.label
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'file_input_area' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icons__["c" /* MagnifierIcon */], { className: 'magnify_icon' })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'file', disabled: this.props.disabled || false,
                onChange: e => this.onChange(e) })
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (FileInput);

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_themes__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_themes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__constants_themes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_FotoSlider__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Store_js__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_less__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__main_less__);












__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_styled_components__["a" /* ThemeProvider */],
    { theme: __WEBPACK_IMPORTED_MODULE_3__constants_themes___default.a },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_6_react_redux__["a" /* Provider */],
        { store: __WEBPACK_IMPORTED_MODULE_7__Store_js__["a" /* default */] },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["a" /* BrowserRouter */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_FotoSlider__["a" /* default */], null)
        )
    )
), document.getElementById('mount'));

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__svg_left_arrow_svg__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__svg_left_arrow_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__svg_left_arrow_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__svg_right_arrow_svg__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__svg_right_arrow_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__svg_right_arrow_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__svg_magnifier_svg__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__svg_magnifier_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__svg_magnifier_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__svg_cancel_svg__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__svg_cancel_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__svg_cancel_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__svg_edit_svg__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__svg_edit_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__svg_edit_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__svg_save_file_option_svg__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__svg_save_file_option_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__svg_save_file_option_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__svg_rotate_option_svg__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__svg_rotate_option_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__svg_rotate_option_svg__);









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
/* unused harmony export LeftArrowIcon */


const RightArrowIcon = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_2__svg_right_arrow_svg___default.a)`
  ${Icon}
`;
/* unused harmony export RightArrowIcon */


const MagnifierIcon = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_3__svg_magnifier_svg___default.a)`
   width: 3rem;
   height: 3rem;
   fill: rgba(255,255,255, 0.7);
`;
/* harmony export (immutable) */ __webpack_exports__["c"] = MagnifierIcon;


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
/* harmony export (immutable) */ __webpack_exports__["e"] = SaveIcon;


const RotateIcon = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_7__svg_rotate_option_svg___default.a)`
    ${Icon}
`;
/* harmony export (immutable) */ __webpack_exports__["d"] = RotateIcon;


/***/ })

})
//# sourceMappingURL=0.acb2e37b7f710259bf10.hot-update.js.map