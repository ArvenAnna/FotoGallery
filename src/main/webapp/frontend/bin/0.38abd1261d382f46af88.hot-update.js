webpackHotUpdate(0,{

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editAlbum_less__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editAlbum_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editAlbum_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fileInput_FileInput__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Card__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__HttpService__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_es_connect_connect__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dialog_Dialog__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__EditCanvas__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_index__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_styles__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__constants_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_loaders__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_loaders___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_loaders__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_loaders_css_src_animations_ball_scale_multiple_scss__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_loaders_css_src_animations_ball_scale_multiple_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_loaders_css_src_animations_ball_scale_multiple_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_loaders_css_src_animations_ball_grid_pulse_scss__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_loaders_css_src_animations_ball_grid_pulse_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_loaders_css_src_animations_ball_grid_pulse_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_react_s_alert__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_react_s_alert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_react_s_alert__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class;













const routesModule = __webpack_require__(28);





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
            imageDownloaded: false,
            imageLoading: true,
            imageLoadStarted: false,
            albumLoading: false
        };
    }

    componentDidMount() {
        this.loadAlbum();
    }

    loadAlbum() {
        this.setState({ albumLoading: true });
        __WEBPACK_IMPORTED_MODULE_5__HttpService__["a" /* default */].doGet(routesModule.routes.GET_ALBUM(this.props.match.params.id)).then(result => {
            result.images.sort((x, y) => x.order - y.order);
            result.images.forEach(image => image.src = image.src + '?forceUpdate=' + new Date().toISOString());
            this.setState({ album: result, albumLoading: false });
        }).catch(e => __WEBPACK_IMPORTED_MODULE_15_react_s_alert___default.a.error(e.response.data.error, {}));
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
                }).catch(e => __WEBPACK_IMPORTED_MODULE_15_react_s_alert___default.a.error(e.response.data.error, {}));
            } else {
                this.setState({
                    imageDownloaded: downloadedFoto.src
                });
            }
        }).catch(e => __WEBPACK_IMPORTED_MODULE_15_react_s_alert___default.a.error(e.response.data.error, {}));
    }

    onImageLoad() {
        this.setState({ imageLoading: false });
    }

    onImageError() {
        __WEBPACK_IMPORTED_MODULE_15_react_s_alert___default.a.error("Image loading failed", {});
        this.setState({ imageLoading: false });
    }

    loadImage(src) {
        this.setState({ imageLoadStarted: true });
        const imageObj = new Image();
        imageObj.onload = this.onImageLoad.bind(this);
        imageObj.onerror = this.onImageError.bind(this);
        imageObj.src = src;
    }

    renderEditAlbumCard() {
        if (!this.state.imageLoadStarted) this.loadImage(this.state.album.images[0].src);
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'edit_album_card', key: 'edit_album_card' },
            this.state.imageLoading ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_react_loaders___default.a, { type: 'ball-scale-multiple' }) : Object(__WEBPACK_IMPORTED_MODULE_10__utils_index__["a" /* isVideo */])(this.state.album.images[0].src) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'video',
                { className: 'album_image',
                    height: __WEBPACK_IMPORTED_MODULE_11__constants_styles__["picture_edit_height"],
                    width: __WEBPACK_IMPORTED_MODULE_11__constants_styles__["picture_edit_width"],
                    controls: 'controls' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { src: this.state.album.images[0].src })
            ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'album_image',
                src: this.state.album.images[0].src }),
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
        const { album, albumLoading } = this.state;
        if (albumLoading) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_react_loaders___default.a, { type: 'ball-grid-pulse', className: 'Data_loader' });
        if (!album) return null;

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

/***/ })

})
//# sourceMappingURL=0.38abd1261d382f46af88.hot-update.js.map