webpackHotUpdate(0,{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__svg_left_arrow_svg__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__svg_left_arrow_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__svg_left_arrow_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__svg_right_arrow_svg__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__svg_right_arrow_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__svg_right_arrow_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__svg_magnifier_svg__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__svg_magnifier_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__svg_magnifier_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__svg_cancel_svg__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__svg_cancel_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__svg_cancel_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__svg_edit_svg__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__svg_edit_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__svg_edit_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__svg_save_file_option_svg__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__svg_save_file_option_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__svg_save_file_option_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__svg_rotate_option_svg__ = __webpack_require__(171);
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


const RotateIcon = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_7__svg_rotate_option_svg___default.a)`
    ${Icon}
`;
/* unused harmony export RotateIcon */


/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newAlbum_AddNewAlbum__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AlbumContainer__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scroll_Scroll__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scroll_ProgressScroll__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_dom__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__editAlbum_EditAlbum__ = __webpack_require__(181);
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
    width: 100%;
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
                    __WEBPACK_IMPORTED_MODULE_7_react_router_dom__["e" /* Switch */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["d" /* Route */], { exact: true, path: '/', component: __WEBPACK_IMPORTED_MODULE_4__AlbumContainer__["a" /* default */] }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["d" /* Route */], { path: '/edit/:id', component: __WEBPACK_IMPORTED_MODULE_8__editAlbum_EditAlbum__["default"] })
                )
            )
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (FotoSlider);

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux_es_connect_connect__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_albumActions__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom_es_withRouter__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_dom__ = __webpack_require__(18);
var _dec, _class;








const HeaderContainer = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
  display: flex;
  flex-direction: row;
  color: white;
  font-size: 1.2rem;
`;

const HeaderMenu = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;

`;

const MenuItem = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
  padding: 1rem;
  cursor: pointer;
  
  a {
    text-decoration: none;
    color: white;
  }
  
`;

const Search = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
  padding: 1rem;
`;
let Header = (_dec = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux_es_connect_connect__["a" /* default */])(store => ({}), {
    fetchAlbumsBySearch: __WEBPACK_IMPORTED_MODULE_3__actions_albumActions__["c" /* fetchAlbumsBySearch */],
    fetchAlbums: __WEBPACK_IMPORTED_MODULE_3__actions_albumActions__["b" /* fetchAlbums */]
}), Object(__WEBPACK_IMPORTED_MODULE_4_react_router_dom_es_withRouter__["a" /* default */])(_class = _dec(_class = class Header extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    onEnter(e) {
        if (e.key == "Enter") {
            if (e.target.value) this.props.fetchAlbumsBySearch(e.target.value);else this.props.fetchAlbums();
            this.props.history.push('/');
        }
    }

    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            HeaderContainer,
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                HeaderMenu,
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    MenuItem,
                    { onClick: this.props.createAlbum },
                    'new album'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    MenuItem,
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_5_react_router_dom__["c" /* NavLink */],
                        { to: '/' },
                        'album\'s list'
                    )
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                Search,
                null,
                'Search: ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { defaultValue: '',
                    onKeyPress: e => this.onEnter(e) })
            )
        );
    }
}) || _class) || _class);


/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Icons__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fileInput_FileInput__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addNewAlbum_less__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addNewAlbum_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__addNewAlbum_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scroll_Scroll__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_es_connect_connect__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__HttpService__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_albumActions__ = __webpack_require__(20);
var _dec, _class;








const routesModule = __webpack_require__(22);



const Label = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].span`
  width: 100%;
  margin-bottom: 0.25rem;
`;

let AddNewAlbum = (_dec = Object(__WEBPACK_IMPORTED_MODULE_6_react_redux_es_connect_connect__["a" /* default */])(store => ({}), {
    createAlbum: __WEBPACK_IMPORTED_MODULE_8__actions_albumActions__["a" /* createAlbum */]
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

    uploadFile(file) {
        __WEBPACK_IMPORTED_MODULE_7__HttpService__["a" /* default */].sendFile(routesModule.routes.UPLOAD_FOTO, file).then(id => {
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
                'div',
                { className: 'add_album_modal', ref: r => this.modal = r },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons__["a" /* CrossIcon */], { onClick: this.props.closeModal }),
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
                src ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: src }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__fileInput_FileInput__["a" /* default */], { label: 'Choose main foto',
                    uploadFile: file => this.uploadFile(file) }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    Label,
                    null,
                    'Description'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { value: description, onChange: e => this.setState({ description: e.target.value }) }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'button',
                    { onClick: () => this.createAlbum() },
                    'ok'
                )
            )
        );
    }
}) || _class);


/* harmony default export */ __webpack_exports__["a"] = (AddNewAlbum);

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picture_Picture__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_es_connect_connect__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_albumActions__ = __webpack_require__(20);
var _dec, _class;







// overrides picture styles
const Container = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem;

  &>div {
     padding: 1rem;
        
     .image {
        height: 15rem;
        width: 20rem;
        object-fit: cover;
      }

      .image_wrapper .overlay .overlay_bottom_text {
         font-size: 1rem;
      }
  }
`;
let AlbumContainer = (_dec = Object(__WEBPACK_IMPORTED_MODULE_3_react_redux_es_connect_connect__["a" /* default */])(store => ({
    albums: store.albums
}), {
    fetchAlbums: __WEBPACK_IMPORTED_MODULE_4__actions_albumActions__["b" /* fetchAlbums */]
}), _dec(_class = class AlbumContainer extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
    constructor(props) {
        super(props);
        this.props.fetchAlbums();
    }

    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Container,
            null,
            this.props.albums.map(album => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__picture_Picture__["a" /* default */], { key: album._id,
                animation: 'fade',
                album: album
            }))
        );
    }
}) || _class);


/* harmony default export */ __webpack_exports__["a"] = (AlbumContainer);

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icons__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picture_less__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picture_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__picture_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Preview__ = __webpack_require__(177);





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
                            album.name
                        )
                    )
                )
            ),
            magnify && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Preview__["a" /* default */], { main: main,
                close: () => this.closePreview(),
                editRoute: `/edit/${album._id}`,
                images: album.images })
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (Picture);

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icons__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preview_less__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preview_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__preview_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(18);





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

  render() {
    const { main, left, right } = this.state;
    const { images, editRoute } = this.props;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "magnify_modal_img_frame_container" },
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
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: main.src, className: "image_preview", ref: node => this.img = node })
    );
  }
};


/* harmony default export */ __webpack_exports__["a"] = (PreviewImageFrame);

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: Unexpected token (161:44)\n\n\u001b[0m \u001b[90m 159 | \u001b[39m                                   uploadFile\u001b[33m=\u001b[39m{(file) \u001b[33m=>\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39muploadFile(file)}\n \u001b[90m 160 | \u001b[39m                        \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 161 | \u001b[39m                        {imageDownloaded \u001b[33m&&\u001b[39m }\n \u001b[90m     | \u001b[39m                                            \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 162 | \u001b[39m                        {openPicture \u001b[33m&&\u001b[39m\n \u001b[90m 163 | \u001b[39m                        \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m'new_text'\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 164 | \u001b[39m                            \u001b[33m<\u001b[39m\u001b[33minput\u001b[39m defaultValue\u001b[33m=\u001b[39m{openPicture\u001b[33m.\u001b[39mname} ref\u001b[33m=\u001b[39m{i \u001b[33m=>\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mpinput \u001b[33m=\u001b[39m i}\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n");

/***/ }),

/***/ 182:
false,

/***/ 183:
false,

/***/ 184:
false,

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export albumsRequest */
/* unused harmony export setAlbums */
/* harmony export (immutable) */ __webpack_exports__["b"] = fetchAlbums;
/* harmony export (immutable) */ __webpack_exports__["c"] = fetchAlbumsBySearch;
/* unused harmony export deleteFotoFromAlbum */
/* unused harmony export deleteAlbum */
/* unused harmony export saveFotoDescription */
/* unused harmony export saveAlbumDescription */
/* unused harmony export saveItemsOrder */
/* harmony export (immutable) */ __webpack_exports__["a"] = createAlbum;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HttpService__ = __webpack_require__(21);


const routesModule = __webpack_require__(22);

function albumsRequest() {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["a" /* REQ_ALBUMS */]
    };
}

function setAlbums(albums) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["b" /* SET_ALBUMS */],
        albums
    };
}

function fetchAlbums() {
    return dispatch => {
        dispatch(albumsRequest());
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doGet(routesModule.routes.GET_ALBUMS).then(result => dispatch(setAlbums(result)));
    };
}

function fetchAlbumsBySearch(search) {
    return dispatch => {
        dispatch(albumsRequest());
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doGet(routesModule.routes.GET_ALBUMS_SEARCH(search)).then(result => dispatch(setAlbums(result)));
    };
}

// export function deleteFotoRequest() {
//     return {
//         type: types.REQ_ALBUMS
//     };
// }

function deleteFotoFromAlbum(id) {
    return dispatch => {
        //dispatch(albumsRequest());
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doDelete(routesModule.routes.DELETE_FOTO(id));
        //.then(result => dispatch(fetchAlbums()));
    };
}

function deleteAlbum(id) {
    return dispatch => {
        //dispatch(albumsRequest());
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doDelete(routesModule.routes.DELETE_ALBUM(id)).then(result => dispatch(fetchAlbums()));
    };
}

function saveFotoDescription(album, image) {
    return dispatch => {
        //dispatch(albumsRequest());
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doPut(routesModule.routes.UPDATE_FOTO(album), image);
        //.then(result => dispatch(fetchAlbums()));
    };
}

function saveAlbumDescription(album) {
    return dispatch => {
        //dispatch(albumsRequest());
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doPut(routesModule.routes.ALBUM_ROUTE, album);
        //.then(result => dispatch(fetchAlbums()));
    };
}

function saveItemsOrder(album) {
    return dispatch => {
        //dispatch(albumsRequest());
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doPut(routesModule.routes.UPDATE_ITEMS_ORDER, album);
        //.then(result => dispatch(fetchAlbums()));
    };
}

function createAlbum(album) {
    return dispatch => {
        //dispatch(albumsRequest());
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doPost(routesModule.routes.ALBUM_ROUTE, album).then(result => dispatch(fetchAlbums()));
    };
}

/***/ }),

/***/ 42:
false,

/***/ 43:
false,

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icons__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fileInput_less__ = __webpack_require__(172);
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
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'file_input_wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'button',
                null,
                this.props.label
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'file_input_area' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icons__["d" /* MagnifierIcon */], null)
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'file', disabled: this.props.disabled || false,
                onChange: e => this.onChange(e) })
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (FileInput);

/***/ }),

/***/ 77:
false

})
//# sourceMappingURL=0.1bf45629472d0b3f9537.hot-update.js.map