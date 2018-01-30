webpackHotUpdate(0,{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_withRouter__ = __webpack_require__(117);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_withRouter__["a" /* default */]);

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux_es_connect_connect__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_albumActions__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom_es_withRouter__ = __webpack_require__(116);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_es_connect_connect__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__HttpService__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_albumActions__ = __webpack_require__(157);
var _dec, _class;








const routesModule = __webpack_require__(177);



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

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picture_Picture__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_es_connect_connect__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_albumActions__ = __webpack_require__(157);
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
    fetchAlbums: __WEBPACK_IMPORTED_MODULE_4__actions_albumActions__["d" /* fetchAlbums */]
}), _dec(_class = class AlbumContainer extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
    constructor(props) {
        super(props);
        this.props.fetchAlbums();
    }

    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Container,
            null,
            this.props.albums.map(album => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__picture_Picture__["a" /* default */], { main: album.images[0],
                key: album.id,
                animation: 'fade',
                editRoute: `/edit/${album.id}`,
                images: album.images }))
        );
    }
}) || _class);


/* harmony default export */ __webpack_exports__["a"] = (AlbumContainer);

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export albumsRequest */
/* unused harmony export setAlbums */
/* harmony export (immutable) */ __webpack_exports__["d"] = fetchAlbums;
/* harmony export (immutable) */ __webpack_exports__["e"] = fetchAlbumsBySearch;
/* harmony export (immutable) */ __webpack_exports__["c"] = deleteFotoFromAlbum;
/* harmony export (immutable) */ __webpack_exports__["b"] = deleteAlbum;
/* harmony export (immutable) */ __webpack_exports__["g"] = saveFotoDescription;
/* harmony export (immutable) */ __webpack_exports__["f"] = saveAlbumDescription;
/* harmony export (immutable) */ __webpack_exports__["a"] = createAlbum;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HttpService__ = __webpack_require__(158);


const routesModule = __webpack_require__(177);

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

function deleteFotoFromAlbum(id, album) {
    return dispatch => {
        //dispatch(albumsRequest());
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doDelete(routesModule.routes.DELETE_FOTO(id, album)).then(result => dispatch(fetchAlbums()));
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
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doPut(routesModule.routes.UPDATE_FOTO(album), image).then(result => dispatch(fetchAlbums()));
    };
}

function saveAlbumDescription(album) {
    return dispatch => {
        //dispatch(albumsRequest());
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doPut(routesModule.routes.ALBUM_ROUTE, album).then(result => dispatch(fetchAlbums()));
    };
}

function createAlbum(album) {
    return dispatch => {
        //dispatch(albumsRequest());
        return __WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* default */].doPost(routesModule.routes.ALBUM_ROUTE, album).then(result => dispatch(fetchAlbums()));
    };
}

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

const apiPrefix = '/api/';

const routes = {
    GET_ALBUMS: `${apiPrefix}albums`,
    GET_ALBUMS_SEARCH: search => `${apiPrefix}albums?search=${search}`,

    ALBUM_ROUTE: `${apiPrefix}album`,
    GET_ALBUM: id => `${apiPrefix}album?id=${id}`,
    DELETE_ALBUM: id => `${apiPrefix}album?id=${id}`,

    FOTO_ROUTE: `${apiPrefix}foto`,
    DELETE_FOTO: (id, album) => `${apiPrefix}foto?album=${album}&id=${id}`,
    UPDATE_FOTO: album => `${apiPrefix}foto?album=${album}`,

    UPLOAD_FOTO: `${apiPrefix}upload`

    // GET_RECEPTS: (departId) => `/recept_list.req?departId=${departId}`,
    // GET_RECEPT: (receptId) => `/recept.req?receptId=${receptId}`,
    // GET_INGRIDIENTS: '/ing_list.req',
    // GET_TAGS: '/tags.req',
    //
    // POST_INGRIDIENTS: '/ingridient.req',
    // POST_CREATE_RECEPT: '/recept.req',
    //
    // UPLOAD_FILE: '/file.req',
    //
    // IMAGE_CATALOG: '/foto/'
};

exports.routes = routes;

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editAlbum_less__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editAlbum_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editAlbum_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fileInput_FileInput__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icons__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Card__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__HttpService__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_es_connect_connect__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__ = __webpack_require__(157);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class;









const routesModule = __webpack_require__(177);

let EditAlbum = (_dec = Object(__WEBPACK_IMPORTED_MODULE_6_react_redux_es_connect_connect__["a" /* default */])(store => ({}), {
    deleteFotoFromAlbum: __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__["c" /* deleteFotoFromAlbum */],
    saveFotoDescription: __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__["g" /* saveFotoDescription */],
    saveAlbumDescription: __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__["f" /* saveAlbumDescription */],
    deleteAlbum: __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__["b" /* deleteAlbum */],
    fetchAlbums: __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__["d" /* fetchAlbums */]
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
            album: null
        };
    }

    componentDidMount() {
        __WEBPACK_IMPORTED_MODULE_5__HttpService__["a" /* default */].doGet(routesModule.routes.GET_ALBUM(this.props.match.params.id)).then(result => this.setState({ album: result }));
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
        this.props.deleteFotoFromAlbum(picture.id, this.state.album.id);
        const newPictures = this.state.album.images.filter(p => p.id != picture.id);
        const newAlbum = Object.assign({}, _extends({}, this.state.album, {
            images: newPictures
        }));
        this.setState({ album: newAlbum });
    }

    removeAlbum() {
        this.props.deleteAlbum(this.state.album.id);
        this.props.history.push('/');
    }

    changeDragState(obj) {
        this.setState(obj);
    }

    saveFotoDescription(picture) {
        const newPictures = [...this.state.album.images];
        const editedPicture = this.state.album.images.find(p => p.id == picture.id);
        if (this.pinput.value) editedPicture.name = this.pinput.value;
        if (this.ptextarea.value) editedPicture.text = this.ptextarea.value;

        this.props.saveFotoDescription(this.state.album.id, editedPicture);

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
        __WEBPACK_IMPORTED_MODULE_5__HttpService__["a" /* default */].sendFile(routesModule.routes.UPLOAD_FOTO, file).then(id => {
            __WEBPACK_IMPORTED_MODULE_5__HttpService__["a" /* default */].doPost(routesModule.routes.FOTO_ROUTE, id).then(result => {
                const newPictures = [...this.state.album.images];
                newPictures.push(result);
                const newAlbum = Object.assign({}, _extends({}, this.state.album, {
                    images: newPictures
                }));
                this.setState({ album: newAlbum });
                this.props.fetchAlbums();
            });
        });
    }

    render() {
        const { openPicture, album, openedAlbum } = this.state;
        return album && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'edit_container' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'edit_album_card' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'album_image', src: album.images[0].src }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'album_name', onClick: () => this.openAlbumDetails() },
                    album.name
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["a" /* CrossIcon */], { className: 'cross_icon', onClick: () => this.removeAlbum() })
            ),
            album.images.sort((x, y) => x.order - y.order).map(p => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Card__["a" /* default */], {
                key: p.id,
                picture: p,
                pictures: album.images,
                openDetails: p => this.openDetails(p),
                deleteItem: p => this.deleteItem(p),
                replaceImage: target => this.replaceImage(target),
                openPicture: openPicture,
                changeDragState: obj => this.changeDragState(obj),
                dragState: this.state
            })),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__fileInput_FileInput__["a" /* default */], { className: 'new_image',
                disabled: openPicture,
                label: 'Choose new foto',
                uploadFile: file => this.uploadFile(file)
            }),
            openPicture && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'new_text' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { defaultValue: openPicture.name, ref: i => this.pinput = i }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { defaultValue: openPicture.text, ref: t => this.ptextarea = t }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["f" /* SaveIcon */], { className: 'save_icon', onClick: () => this.saveFotoDescription(openPicture) }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["a" /* CrossIcon */], { className: 'cross_icon', onClick: () => this.onCrossClick() })
            ),
            openedAlbum && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'new_text' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { defaultValue: album.name, ref: i => this.ainput = i }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { defaultValue: album.description, ref: t => this.atextarea = t }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["f" /* SaveIcon */], { className: 'save_icon', onClick: () => this.saveAlbumDescription() }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["a" /* CrossIcon */], { className: 'cross_icon', onClick: () => this.onCrossClick() })
            )
        );
    }
}) || _class);


/* harmony default export */ __webpack_exports__["a"] = (EditAlbum);

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__ = __webpack_require__(93);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HashRouter__ = __webpack_require__(95);
/* unused harmony reexport HashRouter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Link__ = __webpack_require__(49);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__Link__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MemoryRouter__ = __webpack_require__(97);
/* unused harmony reexport MemoryRouter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NavLink__ = __webpack_require__(100);
/* unused harmony reexport NavLink */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Prompt__ = __webpack_require__(103);
/* unused harmony reexport Prompt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Redirect__ = __webpack_require__(105);
/* unused harmony reexport Redirect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Route__ = __webpack_require__(50);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__Route__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Router__ = __webpack_require__(23);
/* unused harmony reexport Router */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__StaticRouter__ = __webpack_require__(111);
/* unused harmony reexport StaticRouter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Switch__ = __webpack_require__(113);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_10__Switch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__matchPath__ = __webpack_require__(115);
/* unused harmony reexport matchPath */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__withRouter__ = __webpack_require__(116);
/* unused harmony reexport withRouter */



























/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".add_album {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.add_album .scroll_container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.add_album .scroll_container .scroll_track {\n  background-color: red;\n}\n.add_album_modal {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: white;\n}\n.add_album_modal > svg {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 2rem;\n  height: 2rem;\n  fill: white;\n}\n.add_album_modal > button {\n  width: 10rem;\n  height: 2rem;\n  color: white;\n  background-color: #232326;\n  font-size: 1rem;\n  border-width: 3px;\n  border-radius: 0.3rem;\n}\n.add_album_modal input,\n.add_album_modal textarea {\n  background-color: #232326;\n  width: 100%;\n  margin-bottom: 1rem;\n  border-radius: 0.3rem;\n  font-size: 1.5rem;\n  color: white;\n  padding: 0.5rem;\n  line-height: 2rem;\n  border: white solid 1px;\n  resize: none;\n}\n.add_album_modal input:focus,\n.add_album_modal textarea:focus {\n  outline: none;\n  background-color: #54545b;\n}\n.add_album_modal textarea {\n  overflow-x: hidden;\n  height: 10.1rem;\n}\n.add_album_modal img {\n  width: 100%;\n  height: 20rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: white solid 1px;\n  box-sizing: border-box;\n}\n", ""]);

// exports


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icons__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fileInput_less__ = __webpack_require__(127);
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

/***/ })

})
//# sourceMappingURL=0.8625df4b082c62373467.hot-update.js.map