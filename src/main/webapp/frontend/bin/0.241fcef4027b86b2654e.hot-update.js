webpackHotUpdate(0,{

/***/ 10:
/***/ (function(module, exports) {

const constants = {
    'preview_animation_duration': '2s',
    'picture_animation_duration': '1s',
    'preview_frame_color': 'black',
    'body_color': '#232326',
    'body_color_light': '#54545b',
    'shadow_color': 'rgba(238,130,238, 0.5)',
    'text_color': 'white',
    'picture_height': '200px',
    'picture_width': '300px',
    'picture_edit_height': '200px',
    'picture_edit_width': '300px',
    'border_radius': '0.3rem',
    'add_album_border': 'white 1px solid',
    'add_album_font_size': '1rem',
    'dialog_bg': 'black',
    'preview_border_width': '10px'
};

module.exports = constants;

/***/ }),

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
                loading ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_loaders___default.a, { type: "ball-scale-multiple" }) : Object(__WEBPACK_IMPORTED_MODULE_4__utils_index__["a" /* isVideo */])(main.src) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "video",
                    { height: __WEBPACK_IMPORTED_MODULE_6__constants_styles__["picture_height"],
                        width: __WEBPACK_IMPORTED_MODULE_6__constants_styles__["picture_width"],
                        className: "video" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("source", { src: main.src })
                ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { className: "image",
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

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preview_less__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preview_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__preview_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PreviewImageFrame__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_styles__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__constants_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scroll_Scroll__ = __webpack_require__(199);


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
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__PreviewImageFrame__["a" /* default */], { main: main,
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

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preview_less__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preview_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__preview_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_index__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_styles__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__constants_styles__);







let PreviewImageFrame = class PreviewImageFrame extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);

    this.img = null;

    const current = props.images.find(img => img.src === props.main.src);
    const currentIndex = props.images.indexOf(current);

    this.state = {
      imageWidth: 0,
      main: props.main,
      left: currentIndex > 0,
      right: currentIndex < props.images.length - 1,
      images: props.images,
      index: currentIndex
    };
  }

  componentDidMount() {
    this.height = this.getContainerHeight();
    window.addEventListener('resize', () => this.recalculateWidth());
  }

  getContainerHeight() {
    if (this.cont) {
      const containerStyle = this.cont.currentStyle || window.getComputedStyle(this.cont);
      return parseFloat(containerStyle.height);
    }
    return 0;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.recalculateWidth());
  }

  recalculateWidth() {
    const naturalWidth = this.state.images[this.state.index].naturalWidth;
    const naturalHeight = this.state.images[this.state.index].naturalHeight;

    if (naturalWidth && naturalHeight && this.cont) {
      this.height = this.getContainerHeight();
      let width = naturalWidth * this.height / naturalHeight;
      if (width + parseFloat(__WEBPACK_IMPORTED_MODULE_5__constants_styles___default.a.preview_border_width) * 2 > window.innerWidth) {
        width = window.innerWidth - parseFloat(__WEBPACK_IMPORTED_MODULE_5__constants_styles___default.a.preview_border_width) * 2;
        const height = naturalHeight * width / naturalWidth;
        this.cont.style.height = height;
      }
      this.cont.style.width = width;
      this.props.setImageWidth(width);
    }
  }

  onLoad(e) {
    let width = e.target.naturalWidth * this.height / e.target.naturalHeight;
    let newImages = [...this.state.images];
    newImages[this.state.index].naturalWidth = e.target.naturalWidth;
    newImages[this.state.index].naturalHeight = e.target.naturalHeight;
    if (width + parseFloat(__WEBPACK_IMPORTED_MODULE_5__constants_styles___default.a.preview_border_width) * 2 > window.innerWidth) {
      width = window.innerWidth - parseFloat(__WEBPACK_IMPORTED_MODULE_5__constants_styles___default.a.preview_border_width) * 2;
      const height = e.target.naturalHeight * width / e.target.naturalWidth;
      this.cont.style.height = height;
    }
    this.cont.style.width = width;
    this.setState({ images: newImages });
    this.props.setImageWidth(width);
  }

  onCrossClick() {
    this.props.close();
  }

  onArrowClick(arrow) {
    const { images } = this.props;
    const currentIndex = images.indexOf(this.state.main);
    let main;

    if (arrow === 'left' && currentIndex > 0) {
      main = images[currentIndex - 1];
      this.setState({
        main,
        left: currentIndex - 1 > 0,
        right: currentIndex - 1 < images.length - 1,
        index: currentIndex - 1
      }, this.recalculateWidth);
    }

    if (arrow === 'right' && currentIndex < images.length - 1) {
      main = images[currentIndex + 1];
      this.setState({
        main,
        left: currentIndex + 1 > 0,
        right: currentIndex + 1 < images.length - 1,
        index: currentIndex + 1
      }, this.recalculateWidth);
    }

    this.props.clearAnimate(main);
  }

  render() {
    const { main, left, right } = this.state;
    const { images, editRoute } = this.props;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "magnify_modal_img_frame_container", ref: cont => this.cont = cont },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icons__["a" /* CrossIcon */], { className: "cross", onClick: () => this.onCrossClick() }),
      editRoute && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],
        { to: this.props.editRoute },
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
      Object(__WEBPACK_IMPORTED_MODULE_4__utils_index__["a" /* isVideo */])(main.src) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "video",
        { controls: "controls",
          ref: node => this.img = node,
          onLoad: e => this.onLoad(e),
          className: "image_preview"
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("source", { src: main.src })
      ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { onLoad: e => this.onLoad(e),
        src: main.src, className: "image_preview",
        ref: node => this.img = node })
    );
  }
};


/* harmony default export */ __webpack_exports__["a"] = (PreviewImageFrame);

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editAlbum_less__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editAlbum_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editAlbum_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fileInput_FileInput__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Card__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__HttpService__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_es_connect_connect__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dialog_Dialog__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__EditCanvas__ = __webpack_require__(209);
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
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["g" /* SaveIcon */], { className: 'save_icon', onClick: () => this.saveFotoDescription(this.state.openPicture) }),
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
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["g" /* SaveIcon */], { className: 'save_icon', onClick: () => this.saveAlbumDescription() }),
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

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editAlbum_less__ = __webpack_require__(83);
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

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editCanvas_less__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editCanvas_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editCanvas_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ImageRotater__ = __webpack_require__(211);
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
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons__["f" /* RotateIcon */], { className: 'rotate_icon', onClick: () => this.rotateImage() }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons__["g" /* SaveIcon */], { className: 'save_icon', onClick: () => this.getEditedImage() }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons__["a" /* CrossIcon */], { className: 'cross_icon', onClick: () => this.closeImage() })
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (EditCanvas);

/***/ })

})
//# sourceMappingURL=0.241fcef4027b86b2654e.hot-update.js.map