webpackHotUpdate(0,{

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux_es_connect_connect__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_albumActions__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom_es_withRouter__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_dom__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_styles__ = __webpack_require__(36);
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
  text-shadow: 2px 2px ${__WEBPACK_IMPORTED_MODULE_6__constants_styles___default.a.shadow_color};
  
  &:hover {
    color: ${__WEBPACK_IMPORTED_MODULE_6__constants_styles___default.a.shadow_color};
    text-shadow: none;
    a {
        color: ${__WEBPACK_IMPORTED_MODULE_6__constants_styles___default.a.shadow_color};
    }
  }
  
  a {
    text-decoration: none;
    color: ${__WEBPACK_IMPORTED_MODULE_6__constants_styles___default.a.text_color};
  }
  
`;

const Search = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
  padding: 1rem;
  text-shadow: 2px 2px ${__WEBPACK_IMPORTED_MODULE_6__constants_styles___default.a.shadow_color};
`;

const SearchInput = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].input`
    background-color: ${__WEBPACK_IMPORTED_MODULE_6__constants_styles___default.a.body_color};
    &:focus {
        outline: none;
        background-color: lighten(${__WEBPACK_IMPORTED_MODULE_6__constants_styles___default.a.body_color}, 20%);
      }
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
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SearchInput, { defaultValue: '',
                    onKeyPress: e => this.onEnter(e) })
            )
        );
    }
}) || _class) || _class);


/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ })

})
//# sourceMappingURL=0.63d7215d3621667af6bd.hot-update.js.map