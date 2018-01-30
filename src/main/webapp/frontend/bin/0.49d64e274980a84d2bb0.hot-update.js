webpackHotUpdate(0,{

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
/* harmony export (immutable) */ __webpack_exports__["b"] = fetchAlbums;
/* harmony export (immutable) */ __webpack_exports__["a"] = deleteFotoFromAlbum;
/* harmony export (immutable) */ __webpack_exports__["d"] = saveFotoDescription;
/* harmony export (immutable) */ __webpack_exports__["c"] = saveAlbumDescription;
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
    deleteFotoFromAlbum: __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__["a" /* deleteFotoFromAlbum */],
    saveFotoDescription: __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__["d" /* saveFotoDescription */],
    saveAlbumDescription: __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__["c" /* saveAlbumDescription */]
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

        this.props.saveAlbumDescription(this.state.album);

        this.setState({ album: editedAlbum, openedAlbum: false });
    }

    render() {
        const { openPicture, album, openedAlbum } = this.state;
        if (album) {
            console.dir(album.images);
        }
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
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["a" /* CrossIcon */], { className: 'cross_icon', onClick: () => this.onCrossClick() })
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
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__fileInput_FileInput__["a" /* default */], { className: 'new_image', disabled: openPicture, label: 'Choose new foto' }),
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

/***/ })

})
//# sourceMappingURL=0.49d64e274980a84d2bb0.hot-update.js.map