webpackHotUpdate(0,{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newAlbum_AddNewAlbum__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AlbumContainer__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scroll_Scroll__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scroll_ProgressScroll__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_dom__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__editAlbum_EditAlbum__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_styles__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__constants_styles__);











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
    box-shadow: 5px 5px 5px 5px ${__WEBPACK_IMPORTED_MODULE_9__constants_styles___default.a.preview_frame_color};
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
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["d" /* Route */], { path: '/edit/:id', component: __WEBPACK_IMPORTED_MODULE_8__editAlbum_EditAlbum__["a" /* default */] })
                )
            )
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (FotoSlider);

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux_es_connect_connect__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_albumActions__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom_es_withRouter__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_dom__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_styles__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__constants_styles__);
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
  text-shadow: 2px 2px ${__WEBPACK_IMPORTED_MODULE_6__constants_styles___default.a.body_color};
  
  a {
    text-decoration: none;
    color: white;
  }
  
`;

const Search = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
  padding: 1rem;
`;
let Header = (_dec = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux_es_connect_connect__["a" /* default */])(store => ({}), {
    fetchAlbumsBySearch: __WEBPACK_IMPORTED_MODULE_3__actions_albumActions__["e" /* fetchAlbumsBySearch */],
    fetchAlbums: __WEBPACK_IMPORTED_MODULE_3__actions_albumActions__["d" /* fetchAlbums */]
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

/***/ })

})
//# sourceMappingURL=0.e0fd40bb69a22d8e86b1.hot-update.js.map